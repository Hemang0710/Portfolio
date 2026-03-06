import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About | Hemang Patel — AI & Backend Engineer',
  description:
    'AI & Backend Engineer based in the Greater Toronto Area, Canada. Python, FastAPI, LLMs, RAG pipelines, and data engineering.',
}

export default function About() {
  return <AboutContent />
}
