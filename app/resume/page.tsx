import type { Metadata } from 'next'
import ResumeContent from './ResumeContent'

export const metadata: Metadata = {
  title: 'Resume | Full-Stack Developer',
  description: 'Download my resume or view online. ATS-friendly resume showcasing full-stack development skills with React, Node.js, Express, and modern databases.',
}

export default function Resume() {
  return <ResumeContent />
}
