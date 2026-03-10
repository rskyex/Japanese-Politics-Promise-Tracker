// ============================================================
// Core domain types for Japan Promise Tracker
// ============================================================

export type Chamber = 'House of Representatives' | 'House of Councillors'

export type IssueArea =
  | 'Economy'
  | 'Tax'
  | 'Social Welfare'
  | 'Childcare / Family'
  | 'Energy'
  | 'Foreign Policy'
  | 'Defense / Security'
  | 'Constitutional Reform'
  | 'Political Reform'
  | 'Regional Revitalization'
  | 'Environment'
  | 'Healthcare'
  | 'Education'
  | 'Digital / Tech Policy'

export type Salience = 'High' | 'Medium' | 'Low'

export type PromiseType =
  | 'Manifesto pledge'
  | 'Campaign speech'
  | 'Party platform'
  | 'Election debate'

export type ActionType =
  | 'Plenary speech'
  | 'Committee speech'
  | 'Written question'
  | 'Bill submission'
  | 'Vote'
  | 'Press statement'
  | 'Committee question'

export type Stance =
  | 'Supportive'
  | 'Opposing'
  | 'Neutral / Procedural'
  | 'Mixed'

export type AlignmentLabel =
  | 'Strongly aligned'
  | 'Mostly aligned'
  | 'Mixed evidence'
  | 'Weakly aligned'
  | 'Contradictory evidence'
  | 'Insufficient evidence'

export type Confidence = 'High' | 'Medium' | 'Low'

export type ShockCategory =
  | 'War / Security crisis'
  | 'Financial crisis'
  | 'Inflation surge'
  | 'Pandemic'
  | 'Natural disaster'
  | 'Energy shock'
  | 'Political crisis'

export type ShiftType = 'Temporary' | 'Structural' | 'Unclear'

// ============================================================
// Entity types
// ============================================================

export interface Party {
  id: string
  name: string
  abbreviation: string
  ideologyLabel: string
  colorToken: string   // Tailwind color class or hex
}

export interface Politician {
  id: string
  name: string
  nameJa: string
  party: string        // Party id
  chamber: Chamber
  district: string
  house: string        // Abbreviation (HoR / HoC)
  profileImage: string // Path under /public or placeholder
  bio: string
  issueTags: IssueArea[]
}

export interface Promise {
  id: string
  politicianId: string
  electionYear: number
  title: string
  rawTextJa: string   // Original Japanese text (or placeholder marked)
  summaryEn: string   // English summary
  issueArea: IssueArea
  salience: Salience
  promiseType: PromiseType
  sourceLabel: string
  sourceUrl: string
}

export interface Action {
  id: string
  politicianId: string
  date: string          // ISO date string
  actionType: ActionType
  title: string
  excerptJa: string     // Japanese excerpt (or demo placeholder)
  summaryEn: string     // English summary
  issueArea: IssueArea
  stance: Stance
  sourceLabel: string
  sourceUrl: string
}

export interface Match {
  id: string
  promiseId: string
  actionId: string
  relation: AlignmentLabel
  confidence: Confidence
  rationaleEn: string
  scoreWeight: number   // 0–1 weighting factor for scoring
}

export interface Shock {
  id: string
  title: string
  category: ShockCategory
  startDate: string
  endDate: string | null
  affectedIssueAreas: IssueArea[]
  severity: 'High' | 'Medium' | 'Low'
  explanation: string
}

// ============================================================
// Computed / derived types for display
// ============================================================

export interface PromiseScore {
  mandateFidelity: number       // 0–100
  institutionalFeasibility: number  // 0–100
  adaptiveJustification: number | null // 0–100, null if no shock
  overallScore: number          // 0–100 weighted composite
  alignmentLabel: AlignmentLabel
  confidence: Confidence
}

export interface PoliticianScorecard {
  politicianId: string
  mandateFidelity: number
  institutionalFeasibility: number
  adaptiveJustification: number
  overallScore: number
  alignmentLabel: AlignmentLabel
  issueBreakdown: { issueArea: IssueArea; score: number }[]
  promiseCount: number
  actionCount: number
  evidenceCount: number
}

export interface RadarDataPoint {
  subject: string
  score: number
  fullMark: number
}
