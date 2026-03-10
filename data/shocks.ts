import type { Shock } from '@/types'

// Major external shock events relevant to post-2019 Japanese politics.
// These are used for Crisis Adjustment scoring.
// NOTE: Dates and descriptions are simplified for demo purposes.
export const shocks: Shock[] = [
  {
    id: 'shock-covid',
    title: 'COVID-19 Pandemic',
    category: 'Pandemic',
    startDate: '2020-01-01',
    endDate: '2023-05-08',
    affectedIssueAreas: [
      'Economy',
      'Healthcare',
      'Childcare / Family',
      'Social Welfare',
      'Regional Revitalization',
      'Education',
    ],
    severity: 'High',
    explanation:
      'The COVID-19 pandemic forced emergency budget reallocations, curtailed Diet deliberation schedules, and required rapid policy pivots across virtually every domestic issue area. Restrictions on public gatherings also affected campaign-related activities and public consultations.',
  },
  {
    id: 'shock-ukraine',
    title: 'Russia–Ukraine War',
    category: 'War / Security crisis',
    startDate: '2022-02-24',
    endDate: null,
    affectedIssueAreas: [
      'Foreign Policy',
      'Defense / Security',
      'Energy',
      'Economy',
      'Tax',
    ],
    severity: 'High',
    explanation:
      'Russia\'s full-scale invasion of Ukraine prompted Japan to accelerate its defense budget review, join G7-coordinated sanctions, and reconsider energy supply chains (particularly LNG dependence on Russia). It also accelerated debate on Japan\'s defense posture and the Five-Year Defense Buildup Plan.',
  },
  {
    id: 'shock-inflation-2022',
    title: 'Global Inflation Surge (2022–2023)',
    category: 'Inflation surge',
    startDate: '2022-04-01',
    endDate: '2024-01-01',
    affectedIssueAreas: ['Economy', 'Tax', 'Social Welfare', 'Energy', 'Childcare / Family'],
    severity: 'Medium',
    explanation:
      'Imported inflation driven by energy prices and supply chain disruption put pressure on household budgets and forced supplementary budgets focused on cost-of-living relief rather than structural reform priorities.',
  },
  {
    id: 'shock-security-2022',
    title: 'Abe Assassination and Security Review',
    category: 'Political crisis',
    startDate: '2022-07-08',
    endDate: '2023-12-31',
    affectedIssueAreas: ['Defense / Security', 'Constitutional Reform', 'Political Reform'],
    severity: 'High',
    explanation:
      'The assassination of former Prime Minister Abe Shinzō triggered a major revision of Japan\'s National Security Strategy, adoption of a counterstrike capability policy, and a 2-GDP-percentage defense spending commitment — shifts that significantly altered the fiscal and security policy environment.',
  },
  {
    id: 'shock-noto-earthquake',
    title: 'Noto Peninsula Earthquake',
    category: 'Natural disaster',
    startDate: '2024-01-01',
    endDate: '2024-06-01',
    affectedIssueAreas: ['Regional Revitalization', 'Social Welfare', 'Economy'],
    severity: 'Medium',
    explanation:
      'The Noto Peninsula earthquake (January 2024) caused significant regional disruption and required emergency relief spending. This affected regional revitalization policy priorities and fiscal planning for affected constituencies.',
  },
]
