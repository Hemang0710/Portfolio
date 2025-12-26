import type { Metadata } from 'next'
import ProjectsContent from './ProjectsContent'

export const metadata: Metadata = {
  title: 'Projects | Data & Software Developer Portfolio',
  description: 'Explore my data-driven projects including FitFeast, Event Attendance Prediction, Food Drive Forecasting, and Real Estate Analytics Platform.',
}

export default function Projects() {
  return <ProjectsContent />
}
