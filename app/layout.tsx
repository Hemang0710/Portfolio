import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Hemang Patel | Full-Stack Developer | Canada',
  description: 'Full-Stack Developer based in Etobicoke, Ontario, Canada. Building scalable, user-friendly web applications with React, Node.js, Express, and modern databases. Open to opportunities.',
  keywords: ['Hemang Patel', 'Full-Stack Developer', 'Web Developer', 'React', 'Node.js', 'MERN Stack', 'Canada', 'Ontario', 'Portfolio', 'JavaScript', 'TypeScript', 'Next.js'],
  authors: [{ name: 'Hemang Patel' }],
  openGraph: {
    title: 'Hemang Patel | Full-Stack Developer',
    description: 'Full-Stack Developer based in Etobicoke, Ontario, Canada. Building scalable, user-friendly web applications.',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hemang Patel | Full-Stack Developer',
    description: 'Full-Stack Developer based in Etobicoke, Ontario, Canada. Building scalable, user-friendly web applications.',
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

