import type { Action } from '@/types'
import { ACTION_TYPE_SHORT, STANCE_COLORS } from '@/lib/labels'
import clsx from 'clsx'

interface TimelineProps {
  actions: Action[]
}

export default function Timeline({ actions }: TimelineProps) {
  const sorted = [...actions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  if (sorted.length === 0) {
    return (
      <div className="text-center py-8 text-slate-400 text-sm">
        No Diet activity recorded in this period.
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" aria-hidden="true" />

      <div className="space-y-6">
        {sorted.map((action, i) => {
          const formattedDate = new Date(action.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })

          const dotColor =
            action.stance === 'Supportive' ? 'bg-emerald-500' :
            action.stance === 'Opposing'   ? 'bg-rose-500' :
            action.stance === 'Mixed'      ? 'bg-amber-500' :
                                            'bg-slate-400'

          return (
            <div key={action.id} className="relative flex items-start gap-4 pl-12">
              {/* Dot */}
              <div
                className={clsx(
                  'absolute left-2.5 w-3 h-3 rounded-full border-2 border-white ring-2 ring-offset-0',
                  dotColor,
                )}
                style={{ top: '6px' }}
              />

              {/* Content */}
              <div className="flex-1 card p-4">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="badge bg-brand-50 text-brand-700 border-brand-200 text-xs">
                      {ACTION_TYPE_SHORT[action.actionType]}
                    </span>
                    <span className="text-xs text-slate-400">{formattedDate}</span>
                  </div>
                  <span className={clsx('text-xs font-medium', STANCE_COLORS[action.stance])}>
                    {action.stance}
                  </span>
                </div>

                <h4 className="font-medium text-slate-900 text-sm mb-1">{action.title}</h4>
                <p className="text-xs text-slate-500 mb-2">{action.issueArea}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{action.summaryEn}</p>

                {action.sourceUrl && action.sourceUrl !== '#demo' ? (
                  <a
                    href={action.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs text-brand-600 hover:underline"
                  >
                    {action.sourceLabel}
                  </a>
                ) : (
                  <span className="mt-2 inline-block text-xs text-slate-400 italic">
                    {action.sourceLabel} [demo data]
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
