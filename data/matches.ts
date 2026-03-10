import type { Match } from '@/types'

// Match data linking promises to Diet actions.
// Alignment classifications are assessments for demo/research purposes only.
// Rationales are simplified explanations; real deployment would require expert coding.
export const matches: Match[] = [
  // ── Kishida: New Capitalism ──────────────────────────────
  {
    id: 'mch-1',
    promiseId: 'prm-kishida-1',
    actionId: 'act-kishida-1',
    relation: 'Mostly aligned',
    confidence: 'Medium',
    rationaleEn:
      'The PM\'s policy speech announced structural elements of the New Capitalism framework (wage-raising incentives, startup fund). However, concrete income redistribution mechanisms were less prominent than promised, and the initial wage growth outcomes were modest relative to stated ambitions.',
    scoreWeight: 0.8,
  },
  // ── Kishida: Defense ─────────────────────────────────────
  {
    id: 'mch-2',
    promiseId: 'prm-kishida-2',
    actionId: 'act-kishida-2',
    relation: 'Strongly aligned',
    confidence: 'High',
    rationaleEn:
      'The December 2022 National Security Strategy revision directly fulfilled and exceeded the promise: defense spending was committed to reach 2% of GDP, and counterstrike capability was adopted. The action closely tracks the stated campaign commitment to fundamentally strengthen defense.',
    scoreWeight: 1.0,
  },
  // ── Kishida: Capital gains tax (shelved) ─────────────────
  {
    id: 'mch-3',
    promiseId: 'prm-kishida-3',
    actionId: 'act-kishida-3',
    relation: 'Contradictory evidence',
    confidence: 'Medium',
    rationaleEn:
      'Kishida\'s campaign remarks suggested capital gains tax reform was under consideration, but the inaugural policy speech conspicuously omitted any reference to it following market backlash. The apparent abandonment of this policy idea contradicts the stated consideration.',
    scoreWeight: 0.9,
  },
  // ── Kishida: Energy (nuclear) ────────────────────────────
  {
    id: 'mch-4',
    promiseId: 'prm-kishida-4',
    actionId: 'act-kishida-4',
    relation: 'Strongly aligned',
    confidence: 'High',
    rationaleEn:
      'The GX Promotion Bill enabling extended nuclear operations directly delivers on the promised safety-first restart pathway — and goes further by enabling operations beyond 60 years. The action is substantially consistent with the campaign promise.',
    scoreWeight: 1.0,
  },
  // ── Izumi: Income wall ──────────────────────────────────
  {
    id: 'mch-5',
    promiseId: 'prm-izumi-1',
    actionId: 'act-izumi-1',
    relation: 'Mostly aligned',
    confidence: 'Medium',
    rationaleEn:
      'Izumi\'s Budget Committee challenge on income wall reform is directionally consistent with his campaign promise. As opposition leader, his available tools are limited to questioning and bill submission. Persistent advocacy aligns with stated intent, though legislative outcome is limited by opposition status.',
    scoreWeight: 0.7,
  },
  // ── Izumi: Defense opposition ────────────────────────────
  {
    id: 'mch-6',
    promiseId: 'prm-izumi-2',
    actionId: 'act-izumi-2',
    relation: 'Strongly aligned',
    confidence: 'High',
    rationaleEn:
      'The plenary speech directly mirrors the campaign promise: opposing defense spending expansion without adequate Diet deliberation. The procedural critique — that the 2022 NSS revision was pushed through cabinet without parliamentary debate — is precisely what was promised.',
    scoreWeight: 1.0,
  },
  // ── Izumi: Childcare bill ────────────────────────────────
  {
    id: 'mch-7',
    promiseId: 'prm-izumi-3',
    actionId: 'act-izumi-3',
    relation: 'Mostly aligned',
    confidence: 'High',
    rationaleEn:
      'Co-submitting a childcare enhancement bill directly advances the promise to eliminate nursery waitlists and expand support. As opposition, bill passage is unlikely, but the legislative effort demonstrates substantive follow-through.',
    scoreWeight: 0.85,
  },
  // ── Izumi: Tax progressivity ─────────────────────────────
  {
    id: 'mch-8',
    promiseId: 'prm-izumi-4',
    actionId: 'act-izumi-4',
    relation: 'Mostly aligned',
    confidence: 'Medium',
    rationaleEn:
      'Committee questioning on progressive income taxation is consistent with the manifesto promise to strengthen progressivity. The scope of the committee action is narrower than the broader redistribution promise, limiting confidence.',
    scoreWeight: 0.75,
  },
  // ── Nishimura: GX energy ─────────────────────────────────
  {
    id: 'mch-9',
    promiseId: 'prm-nishimura-1',
    actionId: 'act-nishimura-1',
    relation: 'Mostly aligned',
    confidence: 'High',
    rationaleEn:
      'Accelerating nuclear restarts is consistent with the GX platform\'s energy supply security component. The Ukraine shock context provides additional justification. However, critics noted the GX pathway extended nuclear beyond original safe-restart framing.',
    scoreWeight: 0.8,
  },
  {
    id: 'mch-10',
    promiseId: 'prm-nishimura-1',
    actionId: 'act-nishimura-2',
    relation: 'Strongly aligned',
    confidence: 'High',
    rationaleEn:
      'The GX Decarbonization Power Bill is the most direct legislative expression of the GX promise, establishing the institutional framework for both nuclear and renewables as promised.',
    scoreWeight: 1.0,
  },
  // ── Nishimura: Economy ───────────────────────────────────
  {
    id: 'mch-11',
    promiseId: 'prm-nishimura-3',
    actionId: 'act-nishimura-3',
    relation: 'Mostly aligned',
    confidence: 'Medium',
    rationaleEn:
      'Economic security measures announced as METI Minister broadly support competitiveness goals from the SME/economy platform, though the focus shifted toward semiconductor and supply chain security rather than SME wage subsidies specifically.',
    scoreWeight: 0.65,
  },
  // ── Tamaki: 103-man wall ─────────────────────────────────
  {
    id: 'mch-12',
    promiseId: 'prm-tamaki-1',
    actionId: 'act-tamaki-1',
    relation: 'Strongly aligned',
    confidence: 'High',
    rationaleEn:
      'The plenary speech directly advances the exact income wall reform promised in the 2021 manifesto, using similar framing and arguments. Consistent advocacy over multiple Diet sessions strengthens confidence.',
    scoreWeight: 1.0,
  },
  {
    id: 'mch-13',
    promiseId: 'prm-tamaki-1',
    actionId: 'act-tamaki-2',
    relation: 'Strongly aligned',
    confidence: 'High',
    rationaleEn:
      'Post-election coalition negotiations actively pursuing a ¥1.78M threshold reform represent the most concrete progress toward the promised ¥1.03M wall elimination.',
    scoreWeight: 1.0,
  },
  // ── Tamaki: Basic deduction ──────────────────────────────
  {
    id: 'mch-14',
    promiseId: 'prm-tamaki-2',
    actionId: 'act-tamaki-1',
    relation: 'Mostly aligned',
    confidence: 'Medium',
    rationaleEn:
      'The same plenary speech also addressed the basic deduction as part of the income threshold reform package. Distinction between the two overlapping tax reforms limits precise attribution.',
    scoreWeight: 0.75,
  },
  // ── Tamaki: Education ────────────────────────────────────
  {
    id: 'mch-15',
    promiseId: 'prm-tamaki-3',
    actionId: 'act-tamaki-3',
    relation: 'Mostly aligned',
    confidence: 'Medium',
    rationaleEn:
      'The written question on education costs advances the tuition-free education promise, though a written question is a limited instrument compared to bill submission. Evidence is consistent but not conclusive.',
    scoreWeight: 0.65,
  },
  // ── Yamamoto: Consumption tax ────────────────────────────
  {
    id: 'mch-16',
    promiseId: 'prm-yamamoto-1',
    actionId: 'act-yamamoto-1',
    relation: 'Strongly aligned',
    confidence: 'High',
    rationaleEn:
      'The plenary speech directly and forcefully advocates for consumption tax abolition — the core Reiwa platform promise — in exactly the crisis context the manifesto anticipated.',
    scoreWeight: 1.0,
  },
  // ── Yamamoto: Universal income ───────────────────────────
  {
    id: 'mch-17',
    promiseId: 'prm-yamamoto-2',
    actionId: 'act-yamamoto-2',
    relation: 'Mostly aligned',
    confidence: 'High',
    rationaleEn:
      'The Basic Income Bill submission represents the strongest available legislative action for an Upper House opposition member to advance the universal income promise.',
    scoreWeight: 0.9,
  },
  // ── Yamamoto: Disability rights ──────────────────────────
  {
    id: 'mch-18',
    promiseId: 'prm-yamamoto-3',
    actionId: 'act-yamamoto-3',
    relation: 'Strongly aligned',
    confidence: 'High',
    rationaleEn:
      'Committee questioning on disability accessibility in the Diet directly delivers on the promise to remove barriers to participation for people with disabilities, and Reiwa\'s founding commitment to disability-inclusive politics.',
    scoreWeight: 1.0,
  },
  // ── Renho: Administrative accountability ─────────────────
  {
    id: 'mch-19',
    promiseId: 'prm-renho-1',
    actionId: 'act-renho-1',
    relation: 'Strongly aligned',
    confidence: 'High',
    rationaleEn:
      'The committee challenge on COVID-era spending reviews directly advances the administrative accountability promise. The specific focus on transparency is a consistent application of Renho\'s longstanding policy position.',
    scoreWeight: 1.0,
  },
  {
    id: 'mch-20',
    promiseId: 'prm-renho-1',
    actionId: 'act-renho-3',
    relation: 'Mostly aligned',
    confidence: 'High',
    rationaleEn:
      'The written question on DX project cost transparency also falls within the administrative accountability promise, applying it to a specific current policy area.',
    scoreWeight: 0.85,
  },
  // ── Renho: Gender equality ───────────────────────────────
  {
    id: 'mch-21',
    promiseId: 'prm-renho-2',
    actionId: 'act-renho-2',
    relation: 'Strongly aligned',
    confidence: 'High',
    rationaleEn:
      'The plenary challenge on gender pay gap and political representation directly advances the gender equality promise, using language that distinguishes substantive from surface-level reform — consistent with the manifesto framing.',
    scoreWeight: 1.0,
  },
  // ── Edano: Nuclear phaseout ──────────────────────────────
  {
    id: 'mch-22',
    promiseId: 'prm-edano-1',
    actionId: 'act-edano-1',
    relation: 'Mostly aligned',
    confidence: 'High',
    rationaleEn:
      'Committee questioning on nuclear safety and restart process directly opposes nuclear continuation, consistent with the phaseout promise. As an opposition member post-CDP leadership, available tools are limited.',
    scoreWeight: 0.85,
  },
  {
    id: 'mch-23',
    promiseId: 'prm-edano-1',
    actionId: 'act-edano-3',
    relation: 'Strongly aligned',
    confidence: 'High',
    rationaleEn:
      'Co-submitting a Renewable Energy Priority Bill is the strongest available legislative action for an opposition member on nuclear phaseout, directly advancing the stated promise.',
    scoreWeight: 1.0,
  },
  {
    id: 'mch-24',
    promiseId: 'prm-edano-1',
    actionId: 'act-edano-4',
    relation: 'Strongly aligned',
    confidence: 'High',
    rationaleEn:
      'Voting against the GX Nuclear Extension Bill is entirely consistent with the nuclear phaseout promise — the vote record provides the clearest evidence of maintained position.',
    scoreWeight: 1.0,
  },
  // ── Edano: Constitutional emergency clause ───────────────
  {
    id: 'mch-25',
    promiseId: 'prm-edano-2',
    actionId: 'act-edano-2',
    relation: 'Strongly aligned',
    confidence: 'High',
    rationaleEn:
      'The plenary speech opposing constitutionalisation of emergency powers is directly aligned with the manifesto promise to oppose such an emergency clause.',
    scoreWeight: 1.0,
  },
  // ── Koike: Digital transformation ────────────────────────
  {
    id: 'mch-26',
    promiseId: 'prm-koike-1',
    actionId: 'act-koike-1',
    relation: 'Strongly aligned',
    confidence: 'High',
    rationaleEn:
      'The Tokyo DX Vision 2030 announcement fulfils the promise to advance digital transformation as a model for Japan, with concrete implementation steps announced.',
    scoreWeight: 1.0,
  },
  // ── Koike: Environment ───────────────────────────────────
  {
    id: 'mch-27',
    promiseId: 'prm-koike-2',
    actionId: 'act-koike-2',
    relation: 'Mostly aligned',
    confidence: 'High',
    rationaleEn:
      'Advocating Tokyo\'s Zero Emission Strategy in the Diet advances the environmental leadership promise. The action demonstrates consistent advocacy, though legislative impact is limited by gubernatorial vs. parliamentary role distinction.',
    scoreWeight: 0.85,
  },
]
