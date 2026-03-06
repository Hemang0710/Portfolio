import type { Metadata } from 'next'
import ResumeContent from './ResumeContent'

export const metadata: Metadata = {
  title: 'Resume | Hemang Patel — AI & Backend Engineer',
  description:
    'Download or view the resume of Hemang Patel — AI & Backend Engineer specializing in Python, FastAPI, LLMs, RAG, and data pipelines.',
}

export default function Resume() {
  return <ResumeContent />
}
