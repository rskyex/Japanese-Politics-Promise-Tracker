import type { AlignmentLabel, Confidence, Salience, ActionType, Stance } from '@/types'

// ── Alignment label helpers ───────────────────────────────────────────────────

export const ALIGNMENT_COLORS: Record<AlignmentLabel, string> = {
  'Strongly aligned':      'bg-emerald-100 text-emerald-800 border-emerald-200',
  'Mostly aligned':        'bg-teal-100 text-teal-800 border-teal-200',
  'Mixed evidence':        'bg-amber-100 text-amber-800 border-amber-200',
  'Weakly aligned':        'bg-orange-100 text-orange-800 border-orange-200',
  'Contradictory evidence':'bg-red-100 text-red-800 border-red-200',
  'Insufficient evidence': 'bg-slate-100 text-slate-600 border-slate-200',
}

export const ALIGNMENT_SCORE_MAP: Record<AlignmentLabel, number> = {
  'Strongly aligned':       95,
  'Mostly aligned':         75,
  'Mixed evidence':         50,
  'Weakly aligned':         30,
  'Contradictory evidence': 10,
  'Insufficient evidence':  25,
}

export function alignmentLabelFromScore(score: number): AlignmentLabel {
  if (score >= 85) return 'Strongly aligned'
  if (score >= 65) return 'Mostly aligned'
  if (score >= 45) return 'Mixed evidence'
  if (score >= 25) return 'Weakly aligned'
  if (score >= 10) return 'Contradictory evidence'
  return 'Insufficient evidence'
}

// ── Confidence helpers ────────────────────────────────────────────────────────

export const CONFIDENCE_COLORS: Record<Confidence, string> = {
  High:   'bg-blue-100 text-blue-800 border-blue-200',
  Medium: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  Low:    'bg-slate-100 text-slate-600 border-slate-200',
}

// ── Salience helpers ──────────────────────────────────────────────────────────

export const SALIENCE_COLORS: Record<Salience, string> = {
  High:   'text-rose-700 font-semibold',
  Medium: 'text-amber-700 font-medium',
  Low:    'text-slate-500',
}

export const SALIENCE_WEIGHTS: Record<Salience, number> = {
  High:   1.0,
  Medium: 0.7,
  Low:    0.4,
}

// ── Action type labels ────────────────────────────────────────────────────────

export const ACTION_TYPE_SHORT: Record<ActionType, string> = {
  'Plenary speech':    'Plenary',
  'Committee speech':  'Committee',
  'Written question':  'Written Q',
  'Bill submission':   'Bill',
  'Vote':              'Vote',
  'Press statement':   'Statement',
  'Committee question':'Committee Q',
}

// ── Stance labels ─────────────────────────────────────────────────────────────

export const STANCE_COLORS: Record<Stance, string> = {
  'Supportive':            'text-emerald-700',
  'Opposing':              'text-rose-700',
  'Neutral / Procedural':  'text-slate-600',
  'Mixed':                 'text-amber-700',
}

// ── Score band helpers ────────────────────────────────────────────────────────

export type ScoreBand = 'strong' | 'good' | 'mixed' | 'weak' | 'poor'

export function scoreToBand(score: number): ScoreBand {
  if (score >= 80) return 'strong'
  if (score >= 60) return 'good'
  if (score >= 40) return 'mixed'
  if (score >= 20) return 'weak'
  return 'poor'
}

export const SCORE_BAND_COLORS: Record<ScoreBand, string> = {
  strong: 'text-emerald-700',
  good:   'text-teal-700',
  mixed:  'text-amber-700',
  weak:   'text-orange-700',
  poor:   'text-red-700',
}

export const SCORE_BAND_BG: Record<ScoreBand, string> = {
  strong: 'bg-emerald-50 border-emerald-200',
  good:   'bg-teal-50 border-teal-200',
  mixed:  'bg-amber-50 border-amber-200',
  weak:   'bg-orange-50 border-orange-200',
  poor:   'bg-red-50 border-red-200',
}
