import type { Party } from '@/types'

// Demo party data based on actual Japanese political parties.
// Color tokens use hex values suitable for chart rendering.
// NOTE: Ideology labels are simplified for demo purposes.
export const parties: Party[] = [
  {
    id: 'ldp',
    name: 'Liberal Democratic Party',
    abbreviation: 'LDP',
    ideologyLabel: 'Centre-right / Conservative',
    colorToken: '#c0392b',
  },
  {
    id: 'cdp',
    name: 'Constitutional Democratic Party',
    abbreviation: 'CDP',
    ideologyLabel: 'Centre-left / Social liberal',
    colorToken: '#2980b9',
  },
  {
    id: 'komeito',
    name: 'Komeito',
    abbreviation: 'KMT',
    ideologyLabel: 'Centre / Buddhist democratic',
    colorToken: '#27ae60',
  },
  {
    id: 'nippon-ishin',
    name: 'Nippon Ishin no Kai',
    abbreviation: 'Ishin',
    ideologyLabel: 'Centre / Liberal reform',
    colorToken: '#e67e22',
  },
  {
    id: 'dpfp',
    name: 'Democratic Party for the People',
    abbreviation: 'DPFP',
    ideologyLabel: 'Centre / Populist reform',
    colorToken: '#f39c12',
  },
  {
    id: 'jcp',
    name: 'Japanese Communist Party',
    abbreviation: 'JCP',
    ideologyLabel: 'Left / Democratic socialist',
    colorToken: '#8e44ad',
  },
  {
    id: 'reiwa',
    name: 'Reiwa Shinsengumi',
    abbreviation: 'Reiwa',
    ideologyLabel: 'Left / Progressive populist',
    colorToken: '#16a085',
  },
]
