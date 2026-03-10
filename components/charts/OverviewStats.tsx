'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'

interface OverviewStatsChartProps {
  stats: {
    politicians: number
    promises: number
    actions: number
    evidence: number
  }
}

export default function OverviewStatsChart({ stats }: OverviewStatsChartProps) {
  const data = [
    { name: 'Politicians', value: stats.politicians, color: '#3d50e3' },
    { name: 'Promises',    value: stats.promises,    color: '#0d9488' },
    { name: 'Actions',     value: stats.actions,     color: '#d97706' },
    { name: 'Evidence',    value: stats.evidence,    color: '#7c3aed' },
  ]

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
        <XAxis
          dataKey="name"
          tick={{ fontSize: 12, fill: '#475569' }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis hide />
        <Tooltip
          formatter={(value: number) => [value, '']}
          contentStyle={{
            fontSize: '12px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
          }}
        />
        <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={64}>
          {data.map((entry, i) => (
            <Cell key={`cell-${i}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
