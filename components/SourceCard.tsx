interface SourceCardProps {
  label: string
  url: string
  category?: string
  note?: string
}

export default function SourceCard({ label, url, category, note }: SourceCardProps) {
  const isReal = url && url !== '#demo'

  return (
    <div className="card p-4 flex items-start gap-3">
      <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 text-slate-500 mt-0.5">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        {category && (
          <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-0.5">{category}</p>
        )}
        {isReal ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-700 hover:text-brand-900 hover:underline truncate block"
          >
            {label}
          </a>
        ) : (
          <span className="text-sm font-medium text-slate-700">{label}</span>
        )}
        {!isReal && (
          <span className="text-xs text-amber-600 italic">[demo data — not a real link]</span>
        )}
        {note && <p className="text-xs text-slate-500 mt-1">{note}</p>}
      </div>
    </div>
  )
}
