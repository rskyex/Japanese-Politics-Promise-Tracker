import Link from 'next/link'
import clsx from 'clsx'
import type { Politician, Party } from '@/types'
import type { PoliticianScorecard } from '@/types'
import { AlignmentBadge, ScoreCircle } from './ScoreBadge'

interface PoliticianCardProps {
  politician: Politician
  scorecard: PoliticianScorecard
  party: Party | undefined
}

export default function PoliticianCard({ politician, scorecard, party }: PoliticianCardProps) {
  const chamberShort = politician.chamber === 'House of Representatives' ? 'Lower House' : 'Upper House'

  return (
    <Link href={`/politicians/${politician.id}`} className="block group">
      <div className="card p-5 h-full hover:shadow-md hover:border-brand-300 transition-all duration-200 group-hover:-translate-y-0.5">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            {/* Avatar placeholder */}
            <div
              className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: party?.colorToken ?? '#64748b' }}
            >
              {politician.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-base group-hover:text-brand-700 transition-colors">
                {politician.name}
              </h3>
              <p className="text-slate-500 text-sm">{politician.nameJa}</p>
            </div>
          </div>
          <ScoreCircle score={scorecard.overallScore} size="sm" />
        </div>

        {/* Party / chamber */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span
            className="badge text-white text-xs"
            style={{ backgroundColor: party?.colorToken ?? '#64748b', borderColor: 'transparent' }}
          >
            {party?.abbreviation ?? politician.party}
          </span>
          <span className="badge bg-slate-100 text-slate-600 border-slate-200 text-xs">
            {chamberShort}
          </span>
        </div>

        {/* District */}
        <p className="text-xs text-slate-500 mb-3">{politician.district}</p>

        {/* Issue tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {politician.issueTags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-brand-50 text-brand-700 rounded-full border border-brand-100">
              {tag}
            </span>
          ))}
          {politician.issueTags.length > 3 && (
            <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full">
              +{politician.issueTags.length - 3}
            </span>
          )}
        </div>

        {/* Alignment label */}
        <AlignmentBadge label={scorecard.alignmentLabel} size="sm" />

        {/* Stats */}
        <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="text-sm font-semibold text-slate-700">{scorecard.promiseCount}</div>
            <div className="text-xs text-slate-400">Promises</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-700">{scorecard.actionCount}</div>
            <div className="text-xs text-slate-400">Actions</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-700">{scorecard.evidenceCount}</div>
            <div className="text-xs text-slate-400">Evidence</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
