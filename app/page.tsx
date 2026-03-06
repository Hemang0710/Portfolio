import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: 'Hemang Patel | AI & Backend Engineer — LLM Systems & Data Pipelines',
  description:
    'AI & Backend Engineer building LLM-powered systems, FastAPI services, and data pipelines. Python, RAG, LangChain, and cloud-native backend architecture. Greater Toronto Area, Canada.',
}

export default function Home() {
  return <HomeContent />
}
