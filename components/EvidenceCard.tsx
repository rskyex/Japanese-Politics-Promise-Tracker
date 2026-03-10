import type { Match, Action, Promise as PromiseType } from '@/types'
import { AlignmentBadge, ConfidenceBadge } from './ScoreBadge'
import { ACTION_TYPE_SHORT, STANCE_COLORS } from '@/lib/labels'
import clsx from 'clsx'

interface EvidenceCardProps {
  match: Match
  action: Action | undefined
}

export default function EvidenceCard({ match, action }: EvidenceCardProps) {
  if (!action) return null

  const formattedDate = new Date(action.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="card p-4 border-l-4 border-l-brand-300">
      {/* Action header */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="badge bg-brand-50 text-brand-700 border-brand-200 text-xs">
            {ACTION_TYPE_SHORT[action.actionType]}
          </span>
          <span className="text-xs text-slate-500">{formattedDate}</span>
        </div>
        <AlignmentBadge label={match.relation} size="sm" />
      </div>

      {/* Title */}
      <h4 className="font-medium text-slate-900 text-sm mb-2">{action.title}</h4>

      {/* English summary */}
      <p className="text-sm text-slate-600 mb-3 leading-relaxed">
        {action.summaryEn}
      </p>

      {/* Japanese excerpt */}
      {action.excerptJa && (
        <div className="bg-slate-50 rounded-lg p-3 mb-3 border border-slate-200">
          <p className="text-xs text-slate-400 mb-1 uppercase tracking-wide font-medium">Source excerpt (Japanese)</p>
          <p className="text-sm text-slate-700 leading-relaxed font-[system-ui]">{action.excerptJa}</p>
        </div>
      )}

      {/* Stance and confidence */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className={clsx('text-xs font-medium', STANCE_COLORS[action.stance])}>
          Stance: {action.stance}
        </span>
        <span className="text-slate-300">·</span>
        <ConfidenceBadge label={match.confidence} />
      </div>

      {/* Rationale */}
      <div className="bg-brand-50 rounded-lg p-3 border border-brand-100">
        <p className="text-xs text-brand-700 font-medium mb-1">Assessment rationale</p>
        <p className="text-xs text-slate-700 leading-relaxed">{match.rationaleEn}</p>
      </div>

      {/* Source link */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-xs text-slate-400">Source:</span>
        {action.sourceUrl && action.sourceUrl !== '#demo' ? (
          <a
            href={action.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand-600 hover:text-brand-800 hover:underline"
          >
            {action.sourceLabel}
          </a>
        ) : (
          <span className="text-xs text-slate-500 italic">{action.sourceLabel} [demo data]</span>
        )}
      </div>
    </div>
  )
}
