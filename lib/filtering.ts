import type { Politician, Promise as PromiseType, IssueArea } from '@/types'
import type { AlignmentLabel } from '@/types'
import type { PoliticianScorecard } from '@/types'

// ── Politician filtering ──────────────────────────────────────────────────────

export interface PoliticianFilters {
  party?: string
  chamber?: string
  issueArea?: IssueArea
  alignmentBand?: AlignmentBand
  searchQuery?: string
}

export type AlignmentBand =
  | 'Strong (80+)'
  | 'Good (60–79)'
  | 'Mixed (40–59)'
  | 'Weak (20–39)'
  | 'Poor (<20)'

export const ALIGNMENT_BANDS: AlignmentBand[] = [
  'Strong (80+)',
  'Good (60–79)',
  'Mixed (40–59)',
  'Weak (20–39)',
  'Poor (<20)',
]

export function scoreInBand(score: number, band: AlignmentBand): boolean {
  switch (band) {
    case 'Strong (80+)':  return score >= 80
    case 'Good (60–79)':  return score >= 60 && score < 80
    case 'Mixed (40–59)': return score >= 40 && score < 60
    case 'Weak (20–39)':  return score >= 20 && score < 40
    case 'Poor (<20)':    return score < 20
  }
}

export function filterPoliticians(
  politicians: Politician[],
  scorecards: PoliticianScorecard[],
  filters: PoliticianFilters,
): Politician[] {
  return politicians.filter(pol => {
    const scorecard = scorecards.find(s => s.politicianId === pol.id)

    if (filters.party && pol.party !== filters.party) return false
    if (filters.chamber && pol.chamber !== filters.chamber) return false
    if (filters.issueArea && !pol.issueTags.includes(filters.issueArea)) return false
    if (filters.alignmentBand && scorecard) {
      if (!scoreInBand(scorecard.overallScore, filters.alignmentBand)) return false
    }
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase()
      if (!pol.name.toLowerCase().includes(q) && !pol.nameJa.includes(q)) return false
    }
    return true
  })
}

// ── Promise filtering ─────────────────────────────────────────────────────────

export function filterPromises(
  promises: PromiseType[],
  politicianId?: string,
  issueArea?: IssueArea,
): PromiseType[] {
  return promises.filter(p => {
    if (politicianId && p.politicianId !== politicianId) return false
    if (issueArea && p.issueArea !== issueArea) return false
    return true
  })
}

// ── Issue area normalisation ──────────────────────────────────────────────────

export const ALL_ISSUE_AREAS: IssueArea[] = [
  'Economy',
  'Tax',
  'Social Welfare',
  'Childcare / Family',
  'Energy',
  'Foreign Policy',
  'Defense / Security',
  'Constitutional Reform',
  'Political Reform',
  'Regional Revitalization',
  'Environment',
  'Healthcare',
  'Education',
  'Digital / Tech Policy',
]

export function normaliseIssueArea(raw: string): IssueArea | null {
  // Simple normalisation for future API ingestion
  // TODO: Expand with NLP-based classification when connecting to real Diet data
  const cleaned = raw.trim()
  if (ALL_ISSUE_AREAS.includes(cleaned as IssueArea)) {
    return cleaned as IssueArea
  }
  return null
}
