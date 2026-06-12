import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: 'Hemang Patel | AI Full-Stack & GenAI Engineer',
  description:
    'AI Full-Stack & GenAI Engineer building LLM-powered systems, RAG pipelines, and production full-stack apps with React, Next.js, FastAPI, and Python. Toronto, ON, Canada.',
}

export default function Home() {
  return <HomeContent />
}
