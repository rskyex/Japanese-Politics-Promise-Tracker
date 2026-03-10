import { notFound } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { politicians, promises, actions, matches, parties } from '@/data'
import { shocks } from '@/data/shocks'
import { computePoliticianScorecard, computePromiseAlignmentLabel } from '@/lib/scoring'
import { AlignmentBadge, ConfidenceBadge, ScoreCircle } from '@/components/ScoreBadge'
import EvidenceCard from '@/components/EvidenceCard'
import Timeline from '@/components/Timeline'
import ShockBanner from '@/components/ShockBanner'
import PoliticianRadarChart from '@/components/charts/RadarChart'
import type { RadarDataPoint } from '@/types'
import { SALIENCE_COLORS } from '@/lib/labels'
import { getShocksForPromise } from '@/lib/shocks'

interface Props {
  params: { id: string }
}

export async function generateStaticParams() {
  return politicians.map(p => ({ id: p.id }))
}

export default function PoliticianDetailPage({ params }: Props) {
  const politician = politicians.find(p => p.id === params.id)
  if (!politician) notFound()

  const party = parties.find(p => p.id === politician.party)
  const politicianPromises = promises.filter(p => p.politicianId === politician.id)
  const politicianActions = actions.filter(a => a.politicianId === politician.id)
  const scorecard = computePoliticianScorecard(politician, promises, actions, matches, shocks)

  // Radar chart data
  const radarData: RadarDataPoint[] = scorecard.issueBreakdown.map(ib => ({
    subject: ib.issueArea.replace(' / ', '\n/ '),
    score: ib.score,
    fullMark: 100,
  }))

  const chamberShort = politician.chamber === 'House of Representatives' ? 'Lower House (HoR)' : 'Upper House (HoC)'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* ── Breadcrumb ─────────────────────────────────── */}
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span>/</span>
        <Link href="/politicians" className="hover:text-brand-600">Politicians</Link>
        <span>/</span>
        <span className="text-slate-700">{politician.name}</span>
      </nav>

      {/* ── Profile header ─────────────────────────────── */}
      <div className="card p-6 mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          {/* Avatar */}
          <div
            className="w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center text-white text-3xl font-bold"
            style={{ backgroundColor: party?.colorToken ?? '#64748b' }}
          >
            {politician.name.charAt(0)}
          </div>

          {/* Meta */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">{politician.name}</h1>
                <p className="text-slate-400 text-lg">{politician.nameJa}</p>
              </div>
              <ScoreCircle score={scorecard.overallScore} size="lg" label="Overall score" />
            </div>

            <div className="flex flex-wrap gap-2 mt-3 mb-4">
              <span
                className="badge text-white text-sm"
                style={{ backgroundColor: party?.colorToken ?? '#64748b', borderColor: 'transparent' }}
              >
                {party?.name ?? politician.party}
              </span>
              <span className="badge bg-slate-100 text-slate-700 border-slate-200">{chamberShort}</span>
              <span className="badge bg-slate-100 text-slate-600 border-slate-200 text-xs">{politician.district}</span>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm max-w-3xl">{politician.bio}</p>

            <div className="flex flex-wrap gap-1 mt-4">
              {politician.issueTags.map(tag => (
                <span key={tag} className="text-xs px-2.5 py-1 bg-brand-50 text-brand-700 rounded-full border border-brand-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scorecard ──────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Sub-scores */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Alignment scorecard</h2>
          <div className="card p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <ScoreBreakdownItem
                title="Mandate Fidelity"
                score={scorecard.mandateFidelity}
                description="How closely post-election behaviour tracks campaign promises."
              />
              <ScoreBreakdownItem
                title="Institutional Feasibility"
                score={scorecard.institutionalFeasibility}
                description="Whether the politician had realistic institutional capacity to act."
              />
              <ScoreBreakdownItem
                title="Adaptive Justification"
                score={scorecard.adaptiveJustification}
                description="Whether deviation during crisis was explained and justified."
              />
            </div>

            <div className="border-t border-slate-100 pt-5">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Overall alignment</div>
                  <AlignmentBadge label={scorecard.alignmentLabel} />
                </div>
                <div className="text-sm text-slate-500">
                  <span className="font-medium">Formula:</span>{' '}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">
                    0.50 × Mandate + 0.30 × Feasibility + 0.20 × Adaptive
                  </code>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-4 border-t border-slate-100 pt-4">
              Demo scores — see{' '}
              <Link href="/methodology" className="text-brand-600 hover:underline">Methodology</Link>{' '}
              for full formula documentation.
            </p>
          </div>
        </div>

        {/* Radar chart */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Issue area breakdown</h2>
          <div className="card p-4">
            <PoliticianRadarChart data={radarData} />
          </div>
        </div>
      </div>

      {/* ── Promises ───────────────────────────────────── */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          Campaign promises ({politicianPromises.length})
        </h2>
        <div className="space-y-6">
          {politicianPromises.map(promise => {
            const promiseMatches = matches.filter(m => m.promiseId === promise.id)
            const alignmentLabel = computePromiseAlignmentLabel(promise.id, matches)
            const relevantShocks = getShocksForPromise(promise, politicianActions, shocks)

            return (
              <div key={promise.id} className="card overflow-hidden">
                {/* Promise header */}
                <div className="p-5 border-b border-slate-100">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="badge bg-slate-100 text-slate-600 border-slate-200 text-xs">
                        {promise.promiseType}
                      </span>
                      <span className="badge bg-slate-100 text-slate-600 border-slate-200 text-xs">
                        {promise.issueArea}
                      </span>
                      <span className="badge bg-slate-100 text-slate-500 border-slate-200 text-xs">
                        {promise.electionYear}
                      </span>
                    </div>
                    <AlignmentBadge label={alignmentLabel} size="sm" />
                  </div>

                  <Link href={`/promises/${promise.id}`} className="group">
                    <h3 className="font-semibold text-slate-900 text-base group-hover:text-brand-700 transition-colors mb-2">
                      {promise.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{promise.summaryEn}</p>

                  {/* Japanese original */}
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 mb-3">
                    <p className="text-xs text-slate-400 mb-1 uppercase tracking-wide font-medium">Source text (Japanese)</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{promise.rawTextJa}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className={clsx('text-xs font-medium', SALIENCE_COLORS[promise.salience])}>
                      Salience: {promise.salience}
                    </span>
                    {promise.sourceUrl && promise.sourceUrl !== '#demo' ? (
                      <a href={promise.sourceUrl} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-brand-600 hover:underline">
                        {promise.sourceLabel}
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400 italic">{promise.sourceLabel} [demo]</span>
                    )}
                  </div>
                </div>

                {/* Shock banners */}
                {relevantShocks.length > 0 && (
                  <div className="p-5 border-b border-slate-100">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">Context: External shocks affecting this issue area</h4>
                    <ShockBanner shocks={relevantShocks} />
                  </div>
                )}

                {/* Evidence */}
                {promiseMatches.length > 0 && (
                  <div className="p-5">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">
                      Linked Diet evidence ({promiseMatches.length})
                    </h4>
                    <div className="space-y-4">
                      {promiseMatches.map(match => {
                        const action = actions.find(a => a.id === match.actionId)
                        return <EvidenceCard key={match.id} match={match} action={action} />
                      })}
                    </div>
                    <Link
                      href={`/promises/${promise.id}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm text-brand-600 hover:text-brand-800 font-medium"
                    >
                      View full promise detail
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
                {promiseMatches.length === 0 && (
                  <div className="p-5 bg-slate-50">
                    <p className="text-sm text-slate-400 italic">
                      No matched Diet actions found for this promise in the demo dataset.
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Activity Timeline ──────────────────────────── */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          Diet activity timeline ({politicianActions.length} actions)
        </h2>
        <Timeline actions={politicianActions} />
      </div>
    </div>
  )
}

function ScoreBreakdownItem({
  title,
  score,
  description,
}: {
  title: string
  score: number
  description: string
}) {
  const colorClass =
    score >= 80 ? 'text-emerald-700' :
    score >= 60 ? 'text-teal-700' :
    score >= 40 ? 'text-amber-700' :
    score >= 20 ? 'text-orange-700' :
                  'text-red-700'

  const barColor =
    score >= 80 ? 'bg-emerald-400' :
    score >= 60 ? 'bg-teal-400' :
    score >= 40 ? 'bg-amber-400' :
    score >= 20 ? 'bg-orange-400' :
                  'bg-red-400'

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <h4 className="text-sm font-semibold text-slate-700">{title}</h4>
        <span className={clsx('text-lg font-bold tabular-nums', colorClass)}>{score}</span>
      </div>
      {/* Score bar */}
      <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
        <div
          className={clsx('h-2 rounded-full transition-all', barColor)}
          style={{ width: `${score}%` }}
        />
      </div>
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  )
}
