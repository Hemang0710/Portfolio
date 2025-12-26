import type { Metadata } from 'next'
import ResumeContent from './ResumeContent'

export const metadata: Metadata = {
  title: 'Resume | Data & Software Developer',
  description: 'Download my resume or view online. ATS-friendly resume showcasing data engineering, machine learning, and backend development skills.',
}

export default function Resume() {
  return <ResumeContent />
}
