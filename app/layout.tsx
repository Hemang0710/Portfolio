import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Hemang Patel | AI & Backend Engineer',
  description:
    'AI & Backend Engineer building LLM-powered systems, FastAPI services, and data pipelines. Python, RAG, LangChain, vector databases, and cloud-native backend architecture. Based in the Greater Toronto Area, Canada.',
  keywords: [
    'Hemang Patel',
    'AI Engineer',
    'Backend Engineer',
    'Machine Learning',
    'Python',
    'FastAPI',
    'LLM',
    'RAG',
    'Data Pipeline',
    'LangChain',
    'Canada',
    'Toronto',
    'GenAI',
    'REST API',
    'Data Engineer',
  ],
  authors: [{ name: 'Hemang Patel' }],
  openGraph: {
    title: 'Hemang Patel | AI & Backend Engineer',
    description:
      'Building LLM-powered systems, FastAPI services, and data pipelines. Python, RAG, LangChain, and cloud-native backend architecture.',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hemang Patel | AI & Backend Engineer',
    description:
      'Building LLM-powered systems, FastAPI services, and data pipelines.',
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
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
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
