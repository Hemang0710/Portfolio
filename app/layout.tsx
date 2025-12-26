import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Data & Software Developer | Portfolio',
  description: 'Entry-Level Data & Software Developer building scalable, data-driven systems. Specialized in data engineering, machine learning, and backend development.',
  keywords: ['Data Engineer', 'Software Developer', 'Machine Learning', 'Data Science', 'Canada', 'Portfolio'],
  authors: [{ name: 'Data & Software Developer' }],
  openGraph: {
    title: 'Data & Software Developer | Portfolio',
    description: 'Entry-Level Data & Software Developer building scalable, data-driven systems',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data & Software Developer | Portfolio',
    description: 'Entry-Level Data & Software Developer building scalable, data-driven systems',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

