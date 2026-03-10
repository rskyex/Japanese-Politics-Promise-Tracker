'use client'

import { ALL_ISSUE_AREAS, ALIGNMENT_BANDS, type AlignmentBand } from '@/lib/filtering'
import type { Party } from '@/types'
import type { IssueArea } from '@/types'

interface FilterBarProps {
  parties: Party[]
  selectedParty: string
  selectedChamber: string
  selectedIssueArea: string
  selectedAlignmentBand: string
  searchQuery: string
  onPartyChange: (v: string) => void
  onChamberChange: (v: string) => void
  onIssueAreaChange: (v: string) => void
  onAlignmentBandChange: (v: string) => void
  onSearchChange: (v: string) => void
  onReset: () => void
}

export default function FilterBar({
  parties,
  selectedParty,
  selectedChamber,
  selectedIssueArea,
  selectedAlignmentBand,
  searchQuery,
  onPartyChange,
  onChamberChange,
  onIssueAreaChange,
  onAlignmentBandChange,
  onSearchChange,
  onReset,
}: FilterBarProps) {
  const hasFilters =
    selectedParty || selectedChamber || selectedIssueArea || selectedAlignmentBand || searchQuery

  return (
    <div className="card p-4 space-y-4">
      {/* Search */}
      <div>
        <label htmlFor="search" className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">
          Search by name
        </label>
        <div className="relative">
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            placeholder="e.g. Kishida, 岸田..."
            className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 bg-white"
          />
          <svg className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Filter row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Party */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">Party</label>
          <select
            value={selectedParty}
            onChange={e => onPartyChange(e.target.value)}
            className="w-full py-2 px-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 bg-white"
          >
            <option value="">All parties</option>
            {parties.map(p => (
              <option key={p.id} value={p.id}>{p.abbreviation} — {p.name}</option>
            ))}
          </select>
        </div>

        {/* Chamber */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">Chamber</label>
          <select
            value={selectedChamber}
            onChange={e => onChamberChange(e.target.value)}
            className="w-full py-2 px-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 bg-white"
          >
            <option value="">Both chambers</option>
            <option value="House of Representatives">House of Representatives</option>
            <option value="House of Councillors">House of Councillors</option>
          </select>
        </div>

        {/* Issue area */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">Issue area</label>
          <select
            value={selectedIssueArea}
            onChange={e => onIssueAreaChange(e.target.value)}
            className="w-full py-2 px-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 bg-white"
          >
            <option value="">All issue areas</option>
            {ALL_ISSUE_AREAS.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>

        {/* Alignment band */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">Alignment</label>
          <select
            value={selectedAlignmentBand}
            onChange={e => onAlignmentBandChange(e.target.value)}
            className="w-full py-2 px-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 bg-white"
          >
            <option value="">All scores</option>
            {ALIGNMENT_BANDS.map(band => (
              <option key={band} value={band}>{band}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Reset */}
      {hasFilters && (
        <button
          onClick={onReset}
          className="text-sm text-brand-600 hover:text-brand-800 hover:underline font-medium"
        >
          Clear all filters
        </button>
      )}
    </div>
  )
}
