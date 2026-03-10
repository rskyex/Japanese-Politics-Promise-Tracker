'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from 'recharts'

interface BarDataPoint {
  name: string
  score: number
  party?: string
  color?: string
}

interface AlignmentBarChartProps {
  data: BarDataPoint[]
  height?: number
  showLegend?: boolean
}

function scoreColor(score: number): string {
  if (score >= 80) return '#059669'
  if (score >= 60) return '#0d9488'
  if (score >= 40) return '#d97706'
  if (score >= 20) return '#ea580c'
  return '#dc2626'
}

export default function AlignmentBarChart({
  data,
  height = 300,
  showLegend = false,
}: AlignmentBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 11, fill: '#475569' }}
          interval={0}
          angle={-35}
          textAnchor="end"
        />
        <YAxis
          domain={[0, 100]}
          tick={{ fontSize: 11, fill: '#94a3b8' }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          formatter={(value: number) => [`${value}/100`, 'Alignment score']}
          contentStyle={{
            fontSize: '12px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
          }}
        />
        {showLegend && <Legend />}
        <Bar dataKey="score" radius={[4, 4, 0, 0]} maxBarSize={48}>
          {data.map((entry, i) => (
            <Cell
              key={`cell-${i}`}
              fill={entry.color ?? scoreColor(entry.score)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
