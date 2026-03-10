import clsx from 'clsx'
import type { AlignmentLabel, Confidence } from '@/types'
import { ALIGNMENT_COLORS, CONFIDENCE_COLORS } from '@/lib/labels'

interface AlignmentBadgeProps {
  label: AlignmentLabel
  size?: 'sm' | 'md'
}

export function AlignmentBadge({ label, size = 'md' }: AlignmentBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border font-medium',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        ALIGNMENT_COLORS[label],
      )}
    >
      {label}
    </span>
  )
}

interface ConfidenceBadgeProps {
  label: Confidence
}

export function ConfidenceBadge({ label }: ConfidenceBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border',
        CONFIDENCE_COLORS[label],
      )}
    >
      {label} confidence
    </span>
  )
}

interface ScoreCircleProps {
  score: number
  size?: 'sm' | 'md' | 'lg'
  label?: string
}

export function ScoreCircle({ score, size = 'md', label }: ScoreCircleProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-16 h-16 text-base',
    lg: 'w-20 h-20 text-xl',
  }

  const colorClass =
    score >= 80 ? 'bg-emerald-50 border-emerald-300 text-emerald-700' :
    score >= 60 ? 'bg-teal-50 border-teal-300 text-teal-700' :
    score >= 40 ? 'bg-amber-50 border-amber-300 text-amber-700' :
    score >= 20 ? 'bg-orange-50 border-orange-300 text-orange-700' :
                  'bg-red-50 border-red-300 text-red-700'

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={clsx(
          'rounded-full border-2 flex items-center justify-center font-bold',
          sizeClasses[size],
          colorClass,
        )}
      >
        {score}
      </div>
      {label && <span className="text-xs text-slate-500 text-center">{label}</span>}
    </div>
  )
}
