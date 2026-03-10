import type {
  Politician,
  Promise as PromiseType,
  Action,
  Match,
  Shock,
  PoliticianScorecard,
  AlignmentLabel,
  IssueArea,
} from '@/types'
import { ALIGNMENT_SCORE_MAP, alignmentLabelFromScore, SALIENCE_WEIGHTS } from './labels'

// ============================================================
// Scoring system for Japan Promise Tracker
//
// Formula (transparent, documented for Methodology page):
//
// A. Mandate Fidelity (0–100)
//    = weighted average of promise-level alignment scores,
//      weighted by salience and scoreWeight
//
// B. Institutional Feasibility (0–100)
//    = modifier based on governing vs. opposition status,
//      action type availability, and leadership role
//
// C. Adaptive Justification (0–100)
//    = applied when a shock affects the promise's issue area;
//      based on explanation quality, shift type, and continuity
//
// Overall = 0.50 × A + 0.30 × B + 0.20 × C
//           (C substituted only when shocks apply; else 0.60A + 0.40B)
//
// ============================================================

// ── Mandate Fidelity ──────────────────────────────────────────────────────────

function computeMandateFidelity(
  promises: PromiseType[],
  matches: Match[],
): number {
  if (promises.length === 0) return 50 // default if no data

  let weightedSum = 0
  let totalWeight = 0

  for (const promise of promises) {
    const promiseMatches = matches.filter(m => m.promiseId === promise.id)
    const salienceWeight = SALIENCE_WEIGHTS[promise.salience]

    if (promiseMatches.length === 0) {
      // No evidence: counts as Insufficient Evidence, lowest score
      weightedSum += 25 * salienceWeight
      totalWeight += salienceWeight
      continue
    }

    // Average the alignment scores across all matches for this promise
    const matchScores = promiseMatches.map(m =>
      ALIGNMENT_SCORE_MAP[m.relation] * m.scoreWeight
    )
    const avgMatchScore = matchScores.reduce((a, b) => a + b, 0) / matchScores.length

    weightedSum += avgMatchScore * salienceWeight
    totalWeight += salienceWeight
  }

  return totalWeight > 0 ? Math.round(weightedSum / totalWeight) : 50
}

// ── Institutional Feasibility ─────────────────────────────────────────────────

type PartyRole = 'governing' | 'opposition' | 'junior-coalition'

function getPartyRole(partyId: string): PartyRole {
  // Based on post-2021 coalition: LDP + Komeito govern; others oppose
  const governingParties = ['ldp', 'komeito']
  const juniorCoalition: string[] = []
  if (governingParties.includes(partyId)) return 'governing'
  if (juniorCoalition.includes(partyId)) return 'junior-coalition'
  return 'opposition'
}

function computeInstitutionalFeasibility(
  politician: Politician,
  actions: Action[],
): number {
  const role = getPartyRole(politician.party)

  // Base score by governing role
  let base = role === 'governing' ? 80 : role === 'junior-coalition' ? 65 : 45

  // Adjust for action types used (reflects available institutional capacity)
  const actionTypes = new Set(actions.map(a => a.actionType))
  if (actionTypes.has('Bill submission')) base = Math.min(base + 5, 100)
  if (actionTypes.has('Vote')) base = Math.min(base + 3, 100)
  if (actionTypes.has('Plenary speech')) base = Math.min(base + 2, 100)

  // Penalise low action volume
  if (actions.length < 2) base = Math.max(base - 10, 20)

  return Math.round(base)
}

// ── Adaptive Justification ────────────────────────────────────────────────────

function isPromiseAffectedByShock(
  promise: PromiseType,
  actions: Action[],
  shocks: Shock[],
): Shock[] {
  return shocks.filter(shock =>
    shock.affectedIssueAreas.includes(promise.issueArea) &&
    actions.some(a => {
      const actionDate = new Date(a.date)
      const shockStart = new Date(shock.startDate)
      const shockEnd = shock.endDate ? new Date(shock.endDate) : new Date('2099-01-01')
      return actionDate >= shockStart && actionDate <= shockEnd
    })
  )
}

// Adaptive justification is scored per politician holistically.
// Score reflects whether shock-affected policy pivots were explained and contextualised.
function computeAdaptiveJustification(
  politician: Politician,
  promises: PromiseType[],
  actions: Action[],
  matches: Match[],
  shocks: Shock[],
): number {
  const affectedPromises = promises.filter(p => {
    const affectingShocks = isPromiseAffectedByShock(p, actions, shocks)
    return affectingShocks.length > 0
  })

  if (affectedPromises.length === 0) return 70 // neutral default when no shocks apply

  let totalScore = 0
  let count = 0

  for (const promise of affectedPromises) {
    const relatedActions = actions.filter(a => a.issueArea === promise.issueArea)
    const relatedMatches = matches.filter(m => m.promiseId === promise.id)

    // Score based on whether actions in the shock period are supportive
    // (i.e., politician adapted and explained, rather than silently reversed)
    const supportingActions = relatedActions.filter(a =>
      a.stance === 'Supportive' || a.stance === 'Mixed'
    ).length

    const contradictoryMatches = relatedMatches.filter(m =>
      m.relation === 'Contradictory evidence'
    ).length

    // Base: actions taken = partial justification demonstrated
    let score = 60
    if (supportingActions > 0) score += 15
    if (contradictoryMatches === 0) score += 10
    if (relatedMatches.some(m => m.confidence === 'High')) score += 10

    totalScore += Math.min(score, 100)
    count++
  }

  return count > 0 ? Math.round(totalScore / count) : 70
}

// ── Issue area breakdown ──────────────────────────────────────────────────────

function computeIssueBreakdown(
  promises: PromiseType[],
  matches: Match[],
): { issueArea: IssueArea; score: number }[] {
  const issueAreas = [...new Set(promises.map(p => p.issueArea))]

  return issueAreas.map(issueArea => {
    const issuePromises = promises.filter(p => p.issueArea === issueArea)
    const issueMatches = matches.filter(m =>
      issuePromises.some(p => p.id === m.promiseId)
    )

    if (issueMatches.length === 0) {
      return { issueArea, score: 25 }
    }

    const avgScore =
      issueMatches.reduce((sum, m) => sum + ALIGNMENT_SCORE_MAP[m.relation] * m.scoreWeight, 0) /
      issueMatches.length

    return { issueArea, score: Math.round(avgScore) }
  })
}

// ── Main scorecard computation ────────────────────────────────────────────────

export function computePoliticianScorecard(
  politician: Politician,
  promises: PromiseType[],
  actions: Action[],
  matches: Match[],
  shocks: Shock[],
): PoliticianScorecard {
  const politicianPromises = promises.filter(p => p.politicianId === politician.id)
  const politicianActions = actions.filter(a => a.politicianId === politician.id)
  const politicianMatches = matches.filter(m =>
    politicianPromises.some(p => p.id === m.promiseId)
  )

  const mandateFidelity = computeMandateFidelity(politicianPromises, politicianMatches)
  const institutionalFeasibility = computeInstitutionalFeasibility(politician, politicianActions)
  const adaptiveJustification = computeAdaptiveJustification(
    politician,
    politicianPromises,
    politicianActions,
    politicianMatches,
    shocks,
  )

  // Determine if any shocks apply to this politician's promises
  const hasShocks = politicianPromises.some(p =>
    isPromiseAffectedByShock(p, politicianActions, shocks).length > 0
  )

  // Overall weighted formula
  const overallScore = hasShocks
    ? Math.round(0.50 * mandateFidelity + 0.30 * institutionalFeasibility + 0.20 * adaptiveJustification)
    : Math.round(0.60 * mandateFidelity + 0.40 * institutionalFeasibility)

  const issueBreakdown = computeIssueBreakdown(politicianPromises, politicianMatches)

  return {
    politicianId: politician.id,
    mandateFidelity,
    institutionalFeasibility,
    adaptiveJustification,
    overallScore,
    alignmentLabel: alignmentLabelFromScore(overallScore),
    issueBreakdown,
    promiseCount: politicianPromises.length,
    actionCount: politicianActions.length,
    evidenceCount: politicianMatches.length,
  }
}

// ── Promise-level score ───────────────────────────────────────────────────────

export function computePromiseAlignmentLabel(
  promiseId: string,
  matches: Match[],
): AlignmentLabel {
  const promiseMatches = matches.filter(m => m.promiseId === promiseId)
  if (promiseMatches.length === 0) return 'Insufficient evidence'

  const avgScore =
    promiseMatches.reduce((sum, m) => sum + ALIGNMENT_SCORE_MAP[m.relation] * m.scoreWeight, 0) /
    promiseMatches.length

  return alignmentLabelFromScore(avgScore)
}

// ── Summary statistics (for homepage) ────────────────────────────────────────

export function computeSummaryStats(
  politicians: Politician[],
  promises: PromiseType[],
  actions: Action[],
  matches: Match[],
) {
  return {
    politicianCount: politicians.length,
    promiseCount: promises.length,
    actionCount: actions.length,
    evidenceCount: matches.length,
  }
}
