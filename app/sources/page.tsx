import Link from 'next/link'
import SourceCard from '@/components/SourceCard'

const PRIMARY_SOURCES = [
  {
    category: 'National Diet proceedings',
    sources: [
      {
        label: 'National Diet Library — Kokkai Search (国会会議録検索システム)',
        url: 'https://kokkai.ndl.go.jp/',
        note: 'Primary source for all plenary and committee speeches, written questions, and vote records. Provides a public API for programmatic access.',
      },
      {
        label: 'House of Representatives official proceedings',
        url: 'https://www.shugiin.go.jp/internet/itdb_kaigiroku.nsf/html/kaigiroku/menu.htm',
        note: 'Official Lower House session records and committee minutes.',
      },
      {
        label: 'House of Councillors official proceedings',
        url: 'https://www.sangiin.go.jp/japanese/annai/chousa/rippou_chousa/backnumber/',
        note: 'Official Upper House session records.',
      },
    ],
  },
  {
    category: 'Member directories',
    sources: [
      {
        label: 'House of Representatives member directory (衆議院議員)',
        url: 'https://www.shugiin.go.jp/internet/itdb_iinkai.nsf/html/iinkai/iin_j0010.htm',
        note: 'Official directory of Lower House members including party, district, and committee information.',
      },
      {
        label: 'House of Councillors member directory (参議院議員)',
        url: 'https://www.sangiin.go.jp/japanese/joho1/kousei/giin/giin.htm',
        note: 'Official directory of Upper House members.',
      },
    ],
  },
  {
    category: 'Party manifestos and policy documents',
    sources: [
      {
        label: 'Liberal Democratic Party — J-File (自民党政策集)',
        url: 'https://www.jimin.jp/election/',
        note: 'LDP official election manifesto and policy documents.',
      },
      {
        label: 'Constitutional Democratic Party — Election manifesto',
        url: 'https://cdp-japan.jp/election2021/',
        note: 'CDP official 2021 Lower House election manifesto.',
      },
      {
        label: 'Nippon Ishin no Kai — Policy platform',
        url: 'https://o-ishin.jp/policy/',
        note: 'Nippon Ishin official policy platform.',
      },
      {
        label: 'Reiwa Shinsengumi — Party platform',
        url: 'https://reiwa-shinsengumi.com/',
        note: 'Reiwa Shinsengumi official party platform.',
      },
      {
        label: 'Democratic Party for the People — Election manifesto',
        url: 'https://new-kokumin.jp/',
        note: 'DPFP official policy platform.',
      },
    ],
  },
  {
    category: 'Government and Cabinet Office',
    sources: [
      {
        label: 'Cabinet Secretariat — National Security Strategy documents',
        url: 'https://www.cas.go.jp/jp/siryou/221216anzenhoshou.html',
        note: '2022 National Security Strategy, National Defense Strategy, and Defense Buildup Plan.',
      },
      {
        label: 'Ministry of Economy, Trade and Industry (METI)',
        url: 'https://www.meti.go.jp/',
        note: 'GX strategy documents, energy policy statements, and METI press releases.',
      },
      {
        label: 'Ministry of Foreign Affairs (MOFA)',
        url: 'https://www.mofa.go.jp/',
        note: 'Official diplomatic statements, G7 coordination documents, and ODA policy.',
      },
    ],
  },
]

export default function SourcesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* ── Header ─────────────────────────────────────── */}
      <div className="mb-10">
        <div className="text-brand-600 text-sm font-semibold uppercase tracking-wide mb-2">Sources & Data</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Data sources and transparency</h1>
        <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
          This page documents the primary source orientation of the Japan Promise Tracker and
          the data standards applied to the demo dataset.
        </p>
      </div>

      {/* ── Key principle ──────────────────────────────── */}
      <div className="card p-6 mb-10 border-l-4 border-l-brand-400">
        <h2 className="font-bold text-slate-900 text-lg mb-3">Primary source orientation</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Japan Promise Tracker is designed around a strict primary source orientation.
          Every campaign promise is traced to an official party manifesto, policy document,
          or verified campaign speech. Every Diet action is traced to an official National Diet
          Library record, government press release, or official member statement.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Secondary media sources (newspapers, television transcripts) are used only as
          context and are clearly labelled when referenced. All evidence excerpts in the
          demo dataset marked as <em>[DEMO SUMMARY / PARAPHRASE]</em> are simplified
          summaries for demo purposes and are not verbatim quotations.
        </p>
      </div>

      {/* ── Demo disclaimer ────────────────────────────── */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <h3 className="font-semibold text-amber-900 mb-1">Demo data disclaimer</h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              This demonstration site uses curated political data and simplified classifications
              for transparency and research prototyping. It should not be treated as a
              definitive factual judgment of any individual politician.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-amber-800">
              <li>• Excerpts marked <code className="bg-amber-100 px-1 py-0.5 rounded text-xs">[DEMO SUMMARY]</code> are paraphrases, not verbatim quotations</li>
              <li>• Source URLs marked <code className="bg-amber-100 px-1 py-0.5 rounded text-xs">[demo data]</code> are illustrative placeholders</li>
              <li>• Alignment scores are demo assessments, not authoritative political analyses</li>
              <li>• Bio text is simplified for demo purposes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Source categories ──────────────────────────── */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Primary source categories</h2>
        <div className="space-y-8">
          {PRIMARY_SOURCES.map(category => (
            <div key={category.category}>
              <h3 className="text-lg font-semibold text-slate-800 mb-3 pb-2 border-b border-slate-200">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.sources.map(source => (
                  <SourceCard
                    key={source.label}
                    label={source.label}
                    url={source.url}
                    note={source.note}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Real data pathway ──────────────────────────── */}
      <div className="card p-6 mb-10">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Real data ingestion pathway</h2>
        <p className="text-slate-600 text-sm mb-5 leading-relaxed">
          The architecture is designed so each local data module can be replaced with
          real API calls or database queries. The following illustrates the intended replacement pathway:
        </p>
        <div className="space-y-4">
          {[
            {
              file: '/data/actions.ts',
              target: 'National Diet Library API (kokkai.ndl.go.jp/api/)',
              note: 'Replace with async fetch from the NDL Kokkai API. Filter by politician name/ID and issue area. Parse gijiroku records.',
            },
            {
              file: '/data/politicians.ts',
              target: 'HoR / HoC official member directories (scraped or structured)',
              note: 'Replace with scraper output or structured CSV from official member directories. Link to party affiliation and committee data.',
            },
            {
              file: '/data/promises.ts',
              target: 'Party manifesto parsing + election speech archives',
              note: 'Replace with structured extraction from official party manifesto PDFs. Use NLP for issue area classification via normaliseIssueArea() in lib/filtering.ts.',
            },
            {
              file: '/data/matches.ts',
              target: 'Automated or expert-coded alignment assessment',
              note: 'Replace with expert-coded match assessments, or with LLM-assisted preliminary coding reviewed by human analysts.',
            },
            {
              file: '/data/shocks.ts',
              target: 'Curated shock database (manually maintained)',
              note: 'Shocks are inherently expert-curated. Maintain as a structured JSON file reviewed periodically by editorial team.',
            },
          ].map(item => (
            <div key={item.file} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <code className="text-sm font-mono text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                  {item.file}
                </code>
                <span className="text-xs text-slate-500">→ {item.target}</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">{item.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Ethical note ───────────────────────────────── */}
      <div className="card p-6 bg-slate-50">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Ethical and editorial standards</h2>
        <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
          <p>
            <strong className="text-slate-800">No fabricated quotations.</strong>{' '}
            The demo dataset does not include invented quotations attributed to real politicians.
            All text is either drawn from official sources, clearly marked as a demo summary,
            or paraphrased with attribution.
          </p>
          <p>
            <strong className="text-slate-800">Uncertainty is explicit.</strong>{' '}
            Where evidence is limited, ambiguous, or absent, this is stated directly using
            labels such as "Insufficient evidence" or "Low confidence." The tool does not
            fill interpretive gaps with assumptions.
          </p>
          <p>
            <strong className="text-slate-800">No character judgments.</strong>{' '}
            Language such as "lied," "betrayed," or "proved dishonest" is not used.
            Assessment language is limited to observable evidence relationships.
          </p>
          <p>
            <strong className="text-slate-800">Institutional context is explicit.</strong>{' '}
            Opposition politicians are not penalised for failing to legislate when they
            lacked the institutional capacity to do so.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/methodology" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-800 font-medium">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Read the scoring methodology
        </Link>
      </div>
    </div>
  )
}
