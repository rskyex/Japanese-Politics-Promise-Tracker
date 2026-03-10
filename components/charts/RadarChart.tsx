'use client'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import type { RadarDataPoint } from '@/types'

interface PoliticianRadarChartProps {
  data: RadarDataPoint[]
}

export default function PoliticianRadarChart({ data }: PoliticianRadarChartProps) {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-slate-400 text-sm">
        No issue area data available.
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
        <PolarGrid stroke="#e2e8f0" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fontSize: 11, fill: '#475569' }}
          tickLine={false}
        />
        <Radar
          name="Alignment Score"
          dataKey="score"
          stroke="#3d50e3"
          fill="#3d50e3"
          fillOpacity={0.15}
          strokeWidth={2}
        />
        <Tooltip
          formatter={(value: number) => [`${value}/100`, 'Alignment score']}
          contentStyle={{
            fontSize: '12px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
