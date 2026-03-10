import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Japan Promise Tracker',
  description:
    'An evidence-based transparency tool mapping Japanese politicians\' campaign promises to their Diet activity.',
  keywords: ['Japan', 'politics', 'promise tracker', 'Diet', 'transparency', 'civic tech'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
