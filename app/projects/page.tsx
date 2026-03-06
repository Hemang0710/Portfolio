import type { Metadata } from 'next'
import ProjectsContent from './ProjectsContent'

export const metadata: Metadata = {
  title: 'Projects | Hemang Patel — AI & Backend Engineer',
  description:
    'Deep, realistic backend and AI projects: RAG pipelines, data engineering, AI-assisted CRM, and developer tools built with Python, FastAPI, and LLMs.',
}

export default function Projects() {
  return <ProjectsContent />
}
