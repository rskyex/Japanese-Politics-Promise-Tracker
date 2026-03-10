import Link from 'next/link'

const DIMENSIONS = [
  {
    letter: 'A',
    title: 'Mandate Fidelity',
    range: '0–100',
    color: 'bg-brand-50 border-brand-200 text-brand-800',
    headerColor: 'bg-brand-100',
    description:
      'Mandate Fidelity measures how closely a politician\'s post-election parliamentary behaviour tracks their specific campaign promises. It is the core dimension of the scoring model.',
    components: [
      {
        name: 'Promise-action alignment',
        detail: 'Each promise is matched to relevant Diet actions. Each match receives an alignment label (Strongly aligned → Insufficient evidence) converted to a numeric score (95, 75, 50, 30, 10, 25).',
      },
      {
        name: 'Salience weighting',
        detail: 'High-salience promises (flagship campaign commitments) carry a weight of 1.0; Medium = 0.7; Low = 0.4. This prevents minor promises from distorting the score of major commitments.',
      },
      {
        name: 'Score weight',
        detail: 'Each match also carries a scoreWeight (0–1) reflecting the quality and directness of the evidence link.',
      },
      {
        name: 'No-evidence penalty',
        detail: 'Promises with no matched Diet actions receive a score of 25 (Insufficient evidence floor). This penalises silence on campaign commitments.',
      },
    ],
    formula:
      'Mandate Fidelity = Σ(alignmentScore × matchWeight × salienceWeight) / Σ(salienceWeight)',
  },
  {
    letter: 'B',
    title: 'Institutional Feasibility',
    range: '0–100',
    color: 'bg-teal-50 border-teal-200 text-teal-800',
    headerColor: 'bg-teal-100',
    description:
      'Institutional Feasibility adjusts the assessment for the realistic capacity of the politician to act on their promises, given their institutional position. A promise made by an opposition lawmaker to introduce legislation may be held to a different standard than the same promise from a cabinet minister.',
    components: [
      {
        name: 'Governing vs. opposition status',
        detail: 'Governing party members (LDP, Komeito) receive a base score of 80 (higher capacity to deliver). Opposition members start at 45 (limited tools: committee questions, written questions, bill co-submission).',
      },
      {
        name: 'Action type diversity',
        detail: 'Bill submission (+5), votes (+3), and plenary speeches (+2) are recognised as higher-capacity actions.',
      },
      {
        name: 'Action volume adjustment',
        detail: 'A politician with fewer than 2 recorded actions receives a -10 penalty, reflecting limited observable parliamentary engagement.',
      },
    ],
    formula:
      'Institutional Feasibility = Base(role) + ActionTypeBonus − VolumePenalty (capped 0–100)',
  },
  {
    letter: 'C',
    title: 'Adaptive Justification',
    range: '0–100',
    color: 'bg-amber-50 border-amber-200 text-amber-800',
    headerColor: 'bg-amber-100',
    description:
      'Adaptive Justification applies when a politician\'s promise area is affected by a major external shock. It assesses whether any policy deviation was acknowledged, explained, and contextualised — rather than simply reversed without explanation. A high score here does not excuse deviation; it recognises that transparent, explained adaptation is different from silent reversal.',
    components: [
      {
        name: 'Shock relevance',
        detail: 'A shock is considered relevant to a promise if (a) it affects the promise\'s issue area AND (b) at least one Diet action from the politician occurred during the shock period.',
      },
      {
        name: 'Continued engagement',
        detail: 'Politicians who continued to speak, submit questions, or legislate on the affected issue area during a shock receive a score boost (+15), indicating active engagement.',
      },
      {
        name: 'Absence of contradiction',
        detail: 'If there are no contradictory-evidence matches during the shock period, the score is further increased (+10).',
      },
      {
        name: 'Evidence quality',
        detail: 'If matched evidence has High confidence, an additional +10 is applied.',
      },
      {
        name: 'No applicable shocks',
        detail: 'When no shocks apply to a politician\'s promises, a neutral default of 70 is used.',
      },
    ],
    formula:
      'Adaptive Justification = 60 (base) + ContinuedEngagement + NoContradiction + HighConfidence (capped 100)',
  },
]

const ALIGNMENT_LABELS = [
  { label: 'Strongly aligned',       score: '85–100', color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    desc: 'Diet actions directly and substantially advance the campaign promise.' },
  { label: 'Mostly aligned',         score: '65–84',  color: 'bg-teal-100 text-teal-800 border-teal-200',
    desc: 'Actions are directionally consistent with the promise, with some limitations.' },
  { label: 'Mixed evidence',         score: '45–64',  color: 'bg-amber-100 text-amber-800 border-amber-200',
    desc: 'Some actions support the promise; others suggest incomplete follow-through.' },
  { label: 'Weakly aligned',         score: '25–44',  color: 'bg-orange-100 text-orange-800 border-orange-200',
    desc: 'Limited action with minimal or partial connection to the original promise.' },
  { label: 'Contradictory evidence', score: '10–24',  color: 'bg-red-100 text-red-800 border-red-200',
    desc: 'Actions directly contradict or undermine the stated promise.' },
  { label: 'Insufficient evidence',  score: '0–24',   color: 'bg-slate-100 text-slate-600 border-slate-200',
    desc: 'No clear Diet evidence found connecting to the promise.' },
]

export default function MethodologyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* ── Header ─────────────────────────────────────── */}
      <div className="mb-12">
        <div className="text-brand-600 text-sm font-semibold uppercase tracking-wide mb-2">Methodology</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Scoring and classification</h1>
        <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
          This page documents the analytical framework used to assess the relationship between
          campaign promises and parliamentary behaviour. Transparency about methodology is a
          core design principle of this tool.
        </p>
      </div>

      {/* ── Framing ────────────────────────────────────── */}
      <div className="card p-6 mb-10 border-l-4 border-l-brand-400">
        <h2 className="font-bold text-slate-900 text-lg mb-3">Analytical framing</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          This tool does not deliver moral verdicts. It presents an evidence map: what was promised,
          what was said or submitted in the Diet, and how closely these appear to align.
          The framework draws on three theoretical dimensions from comparative legislative research:
        </p>
        <ul className="space-y-2 text-slate-600 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-brand-500 font-bold mt-0.5">1.</span>
            <span><strong>Mandate representation:</strong> Do legislators act on the specific commitments on which they campaigned?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-500 font-bold mt-0.5">2.</span>
            <span><strong>Institutional constraints:</strong> What tools did the politician actually have to act? (Governing vs. opposition status, committee assignments, leadership roles)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-brand-500 font-bold mt-0.5">3.</span>
            <span><strong>Adaptive accountability:</strong> When external shocks required policy adjustment, was the adjustment explained and justified?</span>
          </li>
        </ul>
      </div>

      {/* ── Three dimensions ───────────────────────────── */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Three scoring dimensions</h2>
        <div className="space-y-8">
          {DIMENSIONS.map(dim => (
            <div key={dim.letter} className={`card overflow-hidden border ${dim.color.split(' ')[2]}`}>
              {/* Header */}
              <div className={`p-5 ${dim.headerColor} border-b`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-bold text-xl text-slate-700 shadow-sm">
                    {dim.letter}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{dim.title}</h3>
                    <span className="text-xs font-medium text-slate-500">Score range: {dim.range}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-slate-600 leading-relaxed mb-5">{dim.description}</p>

                <h4 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">Components</h4>
                <div className="space-y-3 mb-5">
                  {dim.components.map(c => (
                    <div key={c.name} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-slate-300 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-slate-800 text-sm">{c.name}: </span>
                        <span className="text-slate-600 text-sm">{c.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 rounded-lg px-4 py-3">
                  <p className="text-xs text-slate-400 mb-1 uppercase tracking-wide">Formula</p>
                  <code className="text-green-400 text-sm font-mono">{dim.formula}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Overall formula ────────────────────────────── */}
      <div className="card p-6 mb-10 bg-brand-950 text-white border-brand-900">
        <h2 className="text-xl font-bold mb-4">Overall alignment score formula</h2>
        <div className="bg-brand-800 rounded-xl p-5 mb-4">
          <p className="text-xs text-brand-400 mb-2 uppercase tracking-wide">When external shocks apply to any promise area:</p>
          <code className="text-green-300 text-base font-mono block mb-4">
            Overall = 0.50 × MandateFidelity + 0.30 × InstitutionalFeasibility + 0.20 × AdaptiveJustification
          </code>
          <p className="text-xs text-brand-400 mb-2 uppercase tracking-wide">When no shocks apply:</p>
          <code className="text-blue-300 text-base font-mono block">
            Overall = 0.60 × MandateFidelity + 0.40 × InstitutionalFeasibility
          </code>
        </div>
        <p className="text-brand-300 text-sm leading-relaxed">
          The 50/30/20 weighting prioritises promise-keeping behaviour while acknowledging
          institutional constraints and contextual adaptation. When no shocks are present,
          the adaptive dimension is removed and the remaining two are reweighted.
        </p>
      </div>

      {/* ── Alignment labels ───────────────────────────── */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Alignment classification labels</h2>
        <p className="text-slate-500 mb-6 text-sm">
          These labels are applied at both the promise level (based on matched evidence) and the
          politician level (based on overall score). Labels are carefully worded to describe
          observable evidence relationships, not character judgments.
        </p>
        <div className="space-y-3">
          {ALIGNMENT_LABELS.map(l => (
            <div key={l.label} className="flex items-start gap-4 p-4 rounded-xl border bg-white shadow-sm">
              <span className={`badge flex-shrink-0 mt-0.5 ${l.color}`}>{l.label}</span>
              <div className="flex-1">
                <span className="text-xs text-slate-400 mr-2">Score range: {l.score}</span>
                <p className="text-sm text-slate-600 mt-1">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Crisis adjustment ──────────────────────────── */}
      <div className="card p-6 mb-10">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Crisis and shock adjustment</h2>
        <p className="text-slate-600 mb-4 leading-relaxed">
          Major external shocks can legitimately require policy adaptation. The framework does not
          treat all deviation as equivalent. However, crisis context does not automatically excuse
          policy reversal — it modifies how deviation is assessed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            { title: 'War / Security crisis', ex: 'Russia–Ukraine invasion (2022)' },
            { title: 'Pandemic',               ex: 'COVID-19 (2020–2023)' },
            { title: 'Inflation surge',         ex: 'Global inflation (2022–2023)' },
            { title: 'Energy shock',            ex: 'Post-Ukraine energy crisis' },
            { title: 'Natural disaster',        ex: 'Noto Peninsula earthquake (2024)' },
            { title: 'Political crisis',        ex: 'Abe assassination and NSS review (2022)' },
          ].map(s => (
            <div key={s.title} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="font-medium text-slate-800 text-sm">{s.title}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.ex}</div>
            </div>
          ))}
        </div>

        <h3 className="font-semibold text-slate-800 mb-3">Adaptive Justification is higher when:</h3>
        <ul className="space-y-2 text-slate-600 text-sm">
          {[
            'The politician explicitly acknowledged the policy shift in Diet proceedings.',
            'The shift was framed as temporary rather than a permanent reversal of commitments.',
            'Alternative proposals were offered to maintain the spirit of the original promise.',
            'Parliamentary engagement on the affected issue area continued during the shock period.',
            'The shift was explained clearly to constituents and opposition.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Issue area coding ──────────────────────────── */}
      <div className="card p-6 mb-10">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Issue area coding</h2>
        <p className="text-slate-600 mb-4">
          Promises and Diet actions are assigned to standardised issue areas. Matching occurs
          when a promise and an action share the same issue area and the action's stance and content
          are assessed as relevant to the promise.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            'Economy', 'Tax', 'Social Welfare', 'Childcare / Family', 'Energy',
            'Foreign Policy', 'Defense / Security', 'Constitutional Reform',
            'Political Reform', 'Regional Revitalization', 'Environment',
            'Healthcare', 'Education', 'Digital / Tech Policy',
          ].map(area => (
            <div key={area} className="bg-brand-50 text-brand-700 rounded-lg px-3 py-2 text-sm border border-brand-100">
              {area}
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-4">
          TODO (real data): NLP-based issue area classification can be connected via{' '}
          <code className="bg-slate-100 px-1 py-0.5 rounded">lib/filtering.ts → normaliseIssueArea()</code>
        </p>
      </div>

      {/* ── Confidence ─────────────────────────────────── */}
      <div className="card p-6 mb-10">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Confidence labels</h2>
        <div className="space-y-3">
          {[
            { label: 'High', color: 'bg-blue-100 text-blue-800 border-blue-200',
              desc: 'Direct, clear evidence link between promise and action. Vote records, bill text, explicit ministerial statements.' },
            { label: 'Medium', color: 'bg-indigo-100 text-indigo-700 border-indigo-200',
              desc: 'Reasonably clear but requires interpretive steps. Committee remarks, press statements, indirect evidence.' },
            { label: 'Low', color: 'bg-slate-100 text-slate-600 border-slate-200',
              desc: 'Weak or circumstantial connection. Limited evidence, ambiguous scope, or high interpretive uncertainty.' },
          ].map(l => (
            <div key={l.label} className="flex items-start gap-4 p-4 rounded-xl border">
              <span className={`badge flex-shrink-0 ${l.color}`}>{l.label} confidence</span>
              <p className="text-sm text-slate-600">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Data architecture ──────────────────────────── */}
      <div className="card p-6 mb-10 bg-slate-50">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Data architecture and real-data pathway</h2>
        <p className="text-slate-600 mb-4 text-sm leading-relaxed">
          This demo uses locally stored curated data in <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-xs">/data</code>.
          The architecture is designed for easy replacement with real data sources.
        </p>
        <div className="space-y-3">
          {[
            {
              source: 'National Diet proceedings',
              url: 'https://kokkai.ndl.go.jp/',
              note: 'Primary source for speeches, committee records, votes, written questions. National Diet Library provides a public API.',
              file: 'data/actions.ts',
            },
            {
              source: 'House of Representatives member directory',
              url: 'https://www.shugiin.go.jp/',
              note: 'Official member profiles, district, party, committee assignments.',
              file: 'data/politicians.ts',
            },
            {
              source: 'House of Councillors member directory',
              url: 'https://www.sangiin.go.jp/',
              note: 'Official Upper House member profiles and records.',
              file: 'data/politicians.ts',
            },
            {
              source: 'Party manifesto / policy pages',
              url: '#demo',
              note: 'LDP J-File, CDP manifesto, Reiwa platform, etc. Used to source campaign promises.',
              file: 'data/promises.ts',
            },
          ].map(s => (
            <div key={s.source} className="bg-white rounded-lg p-4 border border-slate-200">
              <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                <span className="font-medium text-slate-800 text-sm">{s.source}</span>
                <code className="text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-500">{s.file}</code>
              </div>
              <p className="text-xs text-slate-500 mb-1">{s.note}</p>
              {s.url !== '#demo' && (
                <a href={s.url} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-brand-600 hover:underline">{s.url}</a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Back link ──────────────────────────────────── */}
      <div className="text-center">
        <Link href="/politicians" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-800 font-medium">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Browse politicians
        </Link>
      </div>
    </div>
  )
}
