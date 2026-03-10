interface StatCardProps {
  value: number | string
  label: string
  description?: string
  icon?: React.ReactNode
}

export default function StatCard({ value, label, description, icon }: StatCardProps) {
  return (
    <div className="card p-6 flex items-start gap-4">
      {icon && (
        <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 flex-shrink-0">
          {icon}
        </div>
      )}
      <div>
        <div className="text-3xl font-bold text-brand-700 tabular-nums">{value}</div>
        <div className="font-semibold text-slate-800 mt-0.5">{label}</div>
        {description && <p className="text-sm text-slate-500 mt-1">{description}</p>}
      </div>
    </div>
  )
}
