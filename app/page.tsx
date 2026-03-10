import Link from 'next/link'
import StatCard from '@/components/StatCard'
import OverviewStatsChart from '@/components/charts/OverviewStats'
import AlignmentBarChart from '@/components/charts/AlignmentBarChart'
import { politicians, promises, actions, matches, parties } from '@/data'
import { computePoliticianScorecard, computeSummaryStats } from '@/lib/scoring'
import { shocks } from '@/data/shocks'

// Feature cards
const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Promise Mapping',
    desc: 'Campaign promises are coded by issue area, salience, and source. Each promise is linked to verifiable primary sources.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: 'Diet Speech Evidence',
    desc: 'Speeches, committee questions, written questions, and votes from National Diet proceedings are matched to related promises.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Crisis Adjustment',
    desc: 'When major external shocks — pandemic, war, economic crisis — affect an issue area, context adjustments are applied transparently.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Transparent Scoring',
    desc: 'Three-dimensional scoring across Mandate Fidelity, Institutional Feasibility, and Adaptive Justification. Formula is fully documented.',
  },
]

export default function HomePage() {
  // Compute scorecards for all politicians
  const scorecards = politicians.map(p =>
    computePoliticianScorecard(p, promises, actions, matches, shocks)
  )

  const stats = computeSummaryStats(politicians, promises, actions, matches)

  // Bar chart data: all politicians by score
  const barData = politicians.map(p => {
    const sc = scorecards.find(s => s.politicianId === p.id)!
    const party = parties.find(pt => pt.id === p.party)
    return {
      name: p.name.split(' ').pop()!, // last name for brevity
      score: sc.overallScore,
      color: party?.colorToken,
    }
  })

  return (
    <div className="bg-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-700/60 text-brand-200 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-brand-600">
              <span className="w-1.5 h-1.5 bg-brand-300 rounded-full inline-block"></span>
              Demo — Research &amp; Portfolio Prototype
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Track how campaign promises translate into parliamentary action in Japan.
            </h1>
            <p className="text-brand-200 text-lg leading-relaxed mb-8 max-w-2xl">
              An evidence-based transparency tool connecting what was <strong className="text-white">promised</strong>,
              what was <strong className="text-white">said or submitted in the Diet</strong>,
              and how closely these appear to <strong className="text-white">align</strong> —
              while accounting for major external shocks.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/politicians"
                className="bg-white text-brand-800 font-semibold px-6 py-3 rounded-lg hover:bg-brand-50 transition-colors shadow-sm"
              >
                Explore Politicians
              </Link>
              <Link
                href="/methodology"
                className="border border-brand-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors"
              >
                See Methodology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Disclaimer banner ────────────────────────────── */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-sm text-amber-800 text-center">
            <strong>Demo notice:</strong> This demonstration site uses curated political data
            and simplified classifications for transparency and research prototyping.
            It should not be treated as a definitive factual judgment.
          </p>
        </div>
      </div>

      {/* ── Stats overview ───────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Demo dataset overview</h2>
            <p className="text-slate-500">Covering Japan's 2021–2024 parliamentary period</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <StatCard
              value={stats.politicianCount}
              label="Politicians tracked"
              description="Across both chambers"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
            <StatCard
              value={stats.promiseCount}
              label="Campaign promises"
              description="Coded by issue area & salience"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              }
            />
            <StatCard
              value={stats.actionCount}
              label="Diet actions linked"
              description="Speeches, bills, questions, votes"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              }
            />
            <StatCard
              value={stats.evidenceCount}
              label="Evidence matches"
              description="Promise-to-action links assessed"
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
            />
          </div>

          {/* Charts side-by-side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="font-semibold text-slate-800 mb-4">Dataset composition</h3>
              <OverviewStatsChart stats={{
                politicians: stats.politicianCount,
                promises: stats.promiseCount,
                actions: stats.actionCount,
                evidence: stats.evidenceCount,
              }} />
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-slate-800 mb-1">Overall alignment scores by politician</h3>
              <p className="text-xs text-slate-400 mb-4">Demo scores — not authoritative assessments</p>
              <AlignmentBarChart data={barData} height={220} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature cards ────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">How it works</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Promise Tracker connects five analytical layers, from campaign commitments to parliamentary evidence, with transparent scoring at each step.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(f => (
              <div key={f.title} className="card p-6">
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Framing / About ──────────────────────────────── */}
      <section className="py-16 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-brand-400 text-sm font-semibold uppercase tracking-wide mb-3">About this tool</div>
              <h2 className="text-3xl font-bold mb-6">
                Not a judgment — an evidence map.
              </h2>
              <p className="text-brand-200 leading-relaxed mb-6">
                This tool does not claim to deliver final moral verdicts on individual politicians.
                It is designed to provide a structured, evidence-visible summary of the relationship
                between campaign commitments and parliamentary behaviour.
              </p>
              <p className="text-brand-200 leading-relaxed mb-6">
                Where evidence is limited or mixed, uncertainty is marked explicitly.
                Where major shocks — pandemic, war, economic crisis — may legitimately
                justify policy shifts, context adjustment is applied transparently.
              </p>
              <Link
                href="/methodology"
                className="inline-flex items-center gap-2 text-brand-300 hover:text-white font-medium transition-colors"
              >
                Read the full methodology
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Used', text: '"Aligned" / "Partially aligned" / "Mixed evidence" / "Contradictory evidence"' },
                { label: 'Avoided', text: '"Lied" / "Betrayed" / "Proved dishonest"' },
                { label: 'Shown', text: 'What was promised, what was said in the Diet, how they appear to relate' },
                { label: 'Noted', text: 'Whether major external shocks may justify policy shifts' },
              ].map(item => (
                <div key={item.label} className="bg-brand-800/50 rounded-xl p-4 border border-brand-700">
                  <div className="text-xs text-brand-400 uppercase tracking-wide font-semibold mb-1">{item.label}</div>
                  <div className="text-sm text-brand-100">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Demo notice ──────────────────────────────────── */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-slate-800 mb-3">This is a demo using Japanese political data, shown in English.</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
            The site demonstrates how a civic-tech transparency tool can be built using publicly available
            Japanese parliamentary records, party manifestos, and official government statements.
            All source excerpts in Japanese are marked as demo summaries or paraphrases.
            Real-data ingestion from the National Diet Library API, official member directories,
            and party policy pages can be connected via the <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">/data</code> module.
          </p>
        </div>
      </section>
    </div>
  )
}
