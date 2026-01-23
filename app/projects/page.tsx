import type { Metadata } from 'next'
import ProjectsContent from './ProjectsContent'

export const metadata: Metadata = {
  title: 'Projects | Full-Stack Developer Portfolio',
  description: 'Explore my full-stack web application projects including FitFeast Health & Nutrition App and Real Estate Listing Platform built with MERN stack.',
}

export default function Projects() {
  return <ProjectsContent />
}
