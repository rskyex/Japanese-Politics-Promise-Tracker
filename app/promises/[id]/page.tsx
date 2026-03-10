import { notFound } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { promises, politicians, actions, matches, parties } from '@/data'
import { shocks } from '@/data/shocks'
import { computePromiseAlignmentLabel } from '@/lib/scoring'
import { AlignmentBadge, ConfidenceBadge } from '@/components/ScoreBadge'
import EvidenceCard from '@/components/EvidenceCard'
import ShockBanner from '@/components/ShockBanner'
import SourceCard from '@/components/SourceCard'
import { SALIENCE_COLORS } from '@/lib/labels'
import { getShocksForPromise } from '@/lib/shocks'

interface Props {
  params: { id: string }
}

export async function generateStaticParams() {
  return promises.map(p => ({ id: p.id }))
}

export default function PromiseDetailPage({ params }: Props) {
  const promise = promises.find(p => p.id === params.id)
  if (!promise) notFound()

  const politician = politicians.find(p => p.id === promise.politicianId)
  const party = parties.find(p => p.id === politician?.party)
  const politicianActions = actions.filter(a => a.politicianId === promise.politicianId)
  const promiseMatches = matches.filter(m => m.promiseId === promise.id)
  const relatedActions = promiseMatches.map(m => actions.find(a => a.id === m.actionId)).filter(Boolean)
  const alignmentLabel = computePromiseAlignmentLabel(promise.id, matches)
  const relevantShocks = getShocksForPromise(promise, politicianActions, shocks)

  // Overall confidence: take the highest confidence from matches
  const overallConfidence = promiseMatches.some(m => m.confidence === 'High')
    ? 'High'
    : promiseMatches.some(m => m.confidence === 'Medium')
    ? 'Medium'
    : 'Low'

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* ── Breadcrumb ─────────────────────────────────── */}
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6 flex-wrap">
        <Link href="/" className="hover:text-brand-600">Home</Link>
        <span>/</span>
        <Link href="/politicians" className="hover:text-brand-600">Politicians</Link>
        <span>/</span>
        {politician && (
          <>
            <Link href={`/politicians/${politician.id}`} className="hover:text-brand-600">
              {politician.name}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-slate-700 line-clamp-1 max-w-xs">{promise.title}</span>
      </nav>

      {/* ── Promise header ─────────────────────────────── */}
      <div className="card p-6 mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge bg-slate-100 text-slate-600 border-slate-200 text-xs">{promise.promiseType}</span>
          <span className="badge bg-brand-50 text-brand-700 border-brand-100 text-xs">{promise.issueArea}</span>
          <span className="badge bg-slate-100 text-slate-500 border-slate-200 text-xs">{promise.electionYear} election</span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-4">{promise.title}</h1>

        {/* Politician link */}
        {politician && (
          <Link
            href={`/politicians/${politician.id}`}
            className="inline-flex items-center gap-2 mb-4 group"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
              style={{ backgroundColor: party?.colorToken ?? '#64748b' }}
            >
              {politician.name.charAt(0)}
            </div>
            <span className="text-sm font-medium text-slate-700 group-hover:text-brand-700 transition-colors">
              {politician.name} — {party?.abbreviation ?? politician.party}
            </span>
            <svg className="w-4 h-4 text-slate-400 group-hover:text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}

        {/* Summary */}
        <div className="bg-brand-50 rounded-xl p-5 border border-brand-100 mb-5">
          <p className="text-sm font-medium text-brand-700 mb-1 uppercase tracking-wide">English summary</p>
          <p className="text-slate-800 leading-relaxed">{promise.summaryEn}</p>
        </div>

        {/* Japanese original */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-5">
          <p className="text-xs text-slate-400 mb-2 uppercase tracking-wide font-medium">Source text (Japanese) — demo summary / paraphrase</p>
          <p className="text-slate-700 leading-relaxed text-sm">{promise.rawTextJa}</p>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Salience</div>
            <span className={clsx('text-sm font-semibold', SALIENCE_COLORS[promise.salience])}>
              {promise.salience}
            </span>
          </div>
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Alignment</div>
            <AlignmentBadge label={alignmentLabel} size="sm" />
          </div>
          {promiseMatches.length > 0 && (
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Confidence</div>
              <ConfidenceBadge label={overallConfidence} />
            </div>
          )}
        </div>
      </div>

      {/* ── Alignment explanation ──────────────────────── */}
      <div className="card p-6 mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-3">Why this classification?</h2>
        {promiseMatches.length > 0 ? (
          <div className="space-y-3">
            {promiseMatches.map(m => (
              <div key={m.id} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlignmentBadge label={m.relation} size="sm" />
                  <ConfidenceBadge label={m.confidence} />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{m.rationaleEn}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-500 italic">
            No matched evidence in the demo dataset. Classification: Insufficient evidence.
          </p>
        )}
      </div>

      {/* ── Shock context ──────────────────────────────── */}
      {relevantShocks.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-3">External shock context</h2>
          <ShockBanner shocks={relevantShocks} />
        </div>
      )}

      {/* ── Linked evidence ────────────────────────────── */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-900 mb-4">
          Linked Diet actions ({promiseMatches.length})
        </h2>
        {promiseMatches.length > 0 ? (
          <div className="space-y-4">
            {promiseMatches.map(m => {
              const action = actions.find(a => a.id === m.actionId)
              return <EvidenceCard key={m.id} match={m} action={action} />
            })}
          </div>
        ) : (
          <div className="card p-8 text-center bg-slate-50">
            <p className="text-slate-400 text-sm italic">
              No linked Diet actions found for this promise in the demo dataset.
            </p>
          </div>
        )}
      </div>

      {/* ── Sources ────────────────────────────────────── */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4">Sources</h2>
        <div className="space-y-3">
          <SourceCard
            label={promise.sourceLabel}
            url={promise.sourceUrl}
            category="Campaign promise source"
          />
          {relatedActions.map(a => a && (
            <SourceCard
              key={a.id}
              label={a.sourceLabel}
              url={a.sourceUrl}
              category={a.actionType}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
