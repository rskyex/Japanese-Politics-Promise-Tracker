'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'

const NAV_LINKS = [
  { href: '/',              label: 'Home' },
  { href: '/politicians',   label: 'Politicians' },
  { href: '/methodology',   label: 'Methodology' },
  { href: '/sources',       label: 'Sources' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-brand-950 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 bg-brand-400 rounded-md flex items-center justify-center text-brand-950 font-bold text-sm">
              JP
            </div>
            <div className="leading-tight">
              <div className="font-bold text-sm tracking-wide text-white">Japan Promise Tracker</div>
              <div className="text-brand-300 text-xs">Political Transparency Tool</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-brand-700 text-white'
                    : 'text-brand-200 hover:text-white hover:bg-brand-800',
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-brand-300 hover:text-white hover:bg-brand-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-900 border-t border-brand-800 px-4 pb-4">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                'block px-3 py-2 rounded-md text-sm font-medium mt-1',
                pathname === link.href
                  ? 'bg-brand-700 text-white'
                  : 'text-brand-200 hover:text-white hover:bg-brand-800',
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
