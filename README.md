# Japan Promise Tracker

A civic-tech political transparency prototype that maps Japanese politicians' campaign promises to their National Diet activity, and shows how closely each politician's parliamentary behaviour aligns with their stated commitments.

**Created by Risa Koyanagi. All rights reserved unless otherwise specified.**

---

## Purpose

This project demonstrates how a structured, evidence-based transparency tool can be built using publicly available Japanese parliamentary data. It is designed for:

- Demo and portfolio presentation
- Research prototyping in political science and computational social science
- Civic-tech education and methodology illustration

**Important framing:** This tool does not deliver moral verdicts on politicians. It presents an evidence map — what was promised, what was said or submitted in the Diet, and how closely these appear to align — with transparent scoring methodology and explicit uncertainty markers.

---

## Technology stack

| Layer             | Technology                         |
|-------------------|------------------------------------|
| Framework         | Next.js 14 (App Router)            |
| Language          | TypeScript                         |
| Styling           | Tailwind CSS                       |
| Charts            | Recharts                           |
| Data storage      | Local JSON/TypeScript (demo)       |
| Deployment target | Static export (Vercel / Netlify)   |

---

## Project structure

```
/
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Homepage
│   ├── politicians/
│   │   ├── page.tsx          # Politicians index (filterable)
│   │   └── [id]/page.tsx     # Politician detail
│   ├── promises/
│   │   └── [id]/page.tsx     # Promise detail
│   ├── methodology/page.tsx  # Scoring methodology documentation
│   └── sources/page.tsx      # Data sources and transparency
│
├── components/               # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ScoreBadge.tsx        # AlignmentBadge, ConfidenceBadge, ScoreCircle
│   ├── PoliticianCard.tsx
│   ├── EvidenceCard.tsx
│   ├── ShockBanner.tsx
│   ├── Timeline.tsx
│   ├── FilterBar.tsx
│   ├── SourceCard.tsx
│   ├── StatCard.tsx
│   └── charts/
│       ├── RadarChart.tsx
│       ├── AlignmentBarChart.tsx
│       └── OverviewStats.tsx
│
├── data/                     # Local demo data (replace with real API calls)
│   ├── politicians.ts
│   ├── promises.ts
│   ├── actions.ts
│   ├── matches.ts
│   ├── shocks.ts
│   ├── parties.ts
│   └── index.ts
│
├── lib/                      # Business logic utilities
│   ├── scoring.ts            # All scoring computations
│   ├── labels.ts             # Display labels, colours, mappings
│   ├── filtering.ts          # Filter logic and normalisation
│   └── shocks.ts             # Shock relevance and display helpers
│
└── types/
    └── index.ts              # All TypeScript type definitions
```

---

## How to run

### Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

---

## How to replace demo data with real sources

The local data files in `/data` are designed as drop-in replacements. Each file contains a `TODO` comment marking where real data ingestion should connect.

### 1. Diet actions (`data/actions.ts`)

Replace with calls to the **National Diet Library Kokkai API**:
- API base: `https://kokkai.ndl.go.jp/api/`
- Filter by issue (委員会名), date range, and speaker name
- Map `gijiroku` records to the `Action` type in `types/index.ts`

### 2. Politicians (`data/politicians.ts`)

Replace with structured data from:
- House of Representatives member directory: `https://www.shugiin.go.jp/`
- House of Councillors member directory: `https://www.sangiin.go.jp/`
- Combine with committee assignment data for Institutional Feasibility scoring

### 3. Campaign promises (`data/promises.ts`)

Replace with structured extraction from:
- Official party manifesto PDFs (LDP J-File, CDP manifesto, etc.)
- Use `lib/filtering.ts → normaliseIssueArea()` for NLP-assisted issue area tagging

### 4. Matches (`data/matches.ts`)

For real data:
- Expert-coded: Have trained coders classify promise-action alignment using the methodology documented at `/methodology`
- Or: LLM-assisted preliminary coding reviewed by human analysts
- Store results as `Match` records and import here

### 5. Shocks (`data/shocks.ts`)

Maintain as an editorially curated JSON file reviewed periodically. Shock events are not appropriate for automated extraction.

---

## Scoring methodology

See the in-app Methodology page (`/methodology`) for full documentation.

Summary:
- **A. Mandate Fidelity (0–100):** Weighted average of promise-action alignment scores
- **B. Institutional Feasibility (0–100):** Governing vs. opposition capacity modifier
- **C. Adaptive Justification (0–100):** Crisis-context explanation quality
- **Overall = 0.50×A + 0.30×B + 0.20×C** (when shocks apply)
- **Overall = 0.60×A + 0.40×B** (when no shocks apply)

---

## Disclaimer

This demonstration site uses curated political data and simplified classifications for transparency and research prototyping. It should not be treated as a definitive factual judgment of any individual politician.

Japanese text excerpts marked `[DEMO SUMMARY]` or `[デモ要約]` are paraphrases, not verbatim quotations.

---

## License

Copyright © Risa Koyanagi. All rights reserved unless otherwise specified.
