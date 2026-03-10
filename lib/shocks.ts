import type { Shock, Promise as PromiseType, Action, IssueArea } from '@/types'

// ── Shock relevance checking ──────────────────────────────────────────────────

export function getRelevantShocks(
  issueArea: IssueArea,
  date: string,
  shocks: Shock[],
): Shock[] {
  const d = new Date(date)
  return shocks.filter(shock => {
    const start = new Date(shock.startDate)
    const end = shock.endDate ? new Date(shock.endDate) : new Date('2099-01-01')
    return shock.affectedIssueAreas.includes(issueArea) && d >= start && d <= end
  })
}

export function getShocksForPromise(
  promise: PromiseType,
  actions: Action[],
  shocks: Shock[],
): Shock[] {
  // A shock is relevant to a promise if:
  // 1. The shock affects the promise's issue area, AND
  // 2. At least one related action occurred during the shock window
  const promiseActions = actions.filter(a => a.politicianId === promise.politicianId)
  const unique = new Map<string, Shock>()

  for (const shock of shocks) {
    if (!shock.affectedIssueAreas.includes(promise.issueArea)) continue
    const shockStart = new Date(shock.startDate)
    const shockEnd = shock.endDate ? new Date(shock.endDate) : new Date('2099-01-01')
    const hasActionDuringShock = promiseActions.some(a => {
      const actionDate = new Date(a.date)
      return actionDate >= shockStart && actionDate <= shockEnd
    })
    if (hasActionDuringShock) {
      unique.set(shock.id, shock)
    }
  }

  return Array.from(unique.values())
}

export function formatShockPeriod(shock: Shock): string {
  const start = new Date(shock.startDate)
  const startStr = start.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  if (!shock.endDate) return `${startStr} – ongoing`
  const end = new Date(shock.endDate)
  const endStr = end.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  return `${startStr} – ${endStr}`
}

// Severity colour tokens for shock banners
export const SHOCK_SEVERITY_COLORS = {
  High:   'bg-rose-50 border-rose-300 text-rose-900',
  Medium: 'bg-amber-50 border-amber-300 text-amber-900',
  Low:    'bg-slate-50 border-slate-300 text-slate-800',
}

export const SHOCK_CATEGORY_ICONS: Record<string, string> = {
  'War / Security crisis': '⚔️',
  'Financial crisis':      '📉',
  'Inflation surge':       '📈',
  'Pandemic':              '🦠',
  'Natural disaster':      '🌋',
  'Energy shock':          '⚡',
  'Political crisis':      '🏛️',
}
