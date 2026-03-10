import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-brand-400 rounded-md flex items-center justify-center text-brand-950 font-bold text-sm">
                JP
              </div>
              <span className="font-bold text-white text-sm">Japan Promise Tracker</span>
            </div>
            <p className="text-sm leading-relaxed text-brand-400">
              An evidence-based transparency tool mapping campaign promises to parliamentary action.
            </p>
            <p className="text-xs mt-3 text-brand-500">
              &copy; {new Date().getFullYear()} Risa Koyanagi. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/',            label: 'Home' },
                { href: '/politicians', label: 'Politicians' },
                { href: '/methodology', label: 'Methodology' },
                { href: '/sources',     label: 'Sources & Data' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Disclaimer</h4>
            <p className="text-xs leading-relaxed text-brand-400">
              This demonstration site uses curated political data and simplified classifications
              for transparency and research prototyping. It should not be treated as a definitive
              factual judgment of any individual politician.
            </p>
            <p className="text-xs mt-3 text-brand-500">
              Primary sources: National Diet Library, House of Representatives, House of Councillors.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-10 pt-6 text-center text-xs text-brand-600">
          Demo build &mdash; For research and portfolio purposes only. Data may be simplified or curated.
        </div>
      </div>
    </footer>
  )
}
