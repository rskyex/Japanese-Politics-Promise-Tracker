'use client'

import { useState, useMemo } from 'react'
import PoliticianCard from '@/components/PoliticianCard'
import FilterBar from '@/components/FilterBar'
import { politicians, promises, actions, matches, parties } from '@/data'
import { shocks } from '@/data/shocks'
import { computePoliticianScorecard } from '@/lib/scoring'
import { filterPoliticians } from '@/lib/filtering'
import type { IssueArea } from '@/types'
import type { AlignmentBand } from '@/lib/filtering'

export default function PoliticiansPage() {
  const [selectedParty, setSelectedParty] = useState('')
  const [selectedChamber, setSelectedChamber] = useState('')
  const [selectedIssueArea, setSelectedIssueArea] = useState('')
  const [selectedAlignmentBand, setSelectedAlignmentBand] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  // Compute all scorecards once
  const scorecards = useMemo(() =>
    politicians.map(p => computePoliticianScorecard(p, promises, actions, matches, shocks)),
    []
  )

  const filtered = useMemo(() =>
    filterPoliticians(politicians, scorecards, {
      party: selectedParty || undefined,
      chamber: (selectedChamber as 'House of Representatives' | 'House of Councillors') || undefined,
      issueArea: (selectedIssueArea as IssueArea) || undefined,
      alignmentBand: (selectedAlignmentBand as AlignmentBand) || undefined,
      searchQuery: searchQuery || undefined,
    }),
    [selectedParty, selectedChamber, selectedIssueArea, selectedAlignmentBand, searchQuery, scorecards]
  )

  function handleReset() {
    setSelectedParty('')
    setSelectedChamber('')
    setSelectedIssueArea('')
    setSelectedAlignmentBand('')
    setSearchQuery('')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Politicians</h1>
        <p className="text-slate-500 max-w-2xl">
          Browse the demo dataset of Japanese politicians. Each profile shows campaign promise
          commitments, Diet activity, and a multi-dimensional alignment assessment.
          All scores are demo assessments — not authoritative political judgments.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <FilterBar
          parties={parties}
          selectedParty={selectedParty}
          selectedChamber={selectedChamber}
          selectedIssueArea={selectedIssueArea}
          selectedAlignmentBand={selectedAlignmentBand}
          searchQuery={searchQuery}
          onPartyChange={setSelectedParty}
          onChamberChange={setSelectedChamber}
          onIssueAreaChange={setSelectedIssueArea}
          onAlignmentBandChange={setSelectedAlignmentBand}
          onSearchChange={setSearchQuery}
          onReset={handleReset}
        />
      </div>

      {/* Results count */}
      <div className="mb-4 text-sm text-slate-500">
        Showing <strong className="text-slate-700">{filtered.length}</strong> of {politicians.length} politicians
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(pol => {
            const scorecard = scorecards.find(s => s.politicianId === pol.id)!
            const party = parties.find(p => p.id === pol.party)
            return (
              <PoliticianCard
                key={pol.id}
                politician={pol}
                scorecard={scorecard}
                party={party}
              />
            )
          })}
        </div>
      ) : (
        <div className="card p-12 text-center">
          <p className="text-slate-400 text-lg mb-2">No politicians match your current filters.</p>
          <button
            onClick={handleReset}
            className="text-brand-600 hover:text-brand-800 font-medium text-sm"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}
