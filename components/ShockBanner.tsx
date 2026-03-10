import type { Shock } from '@/types'
import { SHOCK_SEVERITY_COLORS, SHOCK_CATEGORY_ICONS, formatShockPeriod } from '@/lib/shocks'
import clsx from 'clsx'

interface ShockBannerProps {
  shocks: Shock[]
}

export default function ShockBanner({ shocks }: ShockBannerProps) {
  if (shocks.length === 0) return null

  return (
    <div className="space-y-3">
      {shocks.map(shock => (
        <div
          key={shock.id}
          className={clsx('rounded-xl border p-4', SHOCK_SEVERITY_COLORS[shock.severity])}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0" aria-hidden="true">
              {SHOCK_CATEGORY_ICONS[shock.category] ?? '⚠️'}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-semibold text-sm">Context: {shock.title}</span>
                <span className="text-xs opacity-75 uppercase tracking-wide font-medium">
                  {shock.category}
                </span>
                <span className="text-xs opacity-60">{formatShockPeriod(shock)}</span>
              </div>

              <p className="text-sm leading-relaxed mb-3">{shock.explanation}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div className="bg-white/50 rounded-lg p-2">
                  <div className="font-medium mb-0.5 opacity-75">Affected policy areas</div>
                  <div>{shock.affectedIssueAreas.join(', ')}</div>
                </div>
                <div className="bg-white/50 rounded-lg p-2">
                  <div className="font-medium mb-0.5 opacity-75">Severity</div>
                  <div>{shock.severity}</div>
                </div>
                <div className="bg-white/50 rounded-lg p-2">
                  <div className="font-medium mb-0.5 opacity-75">Assessment note</div>
                  <div>Context adjustment applied to scoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
