import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Me | Data & Software Developer',
  description: 'Learn about my background, education at Humber College, industry experience, and technical skills in data engineering and machine learning.',
}

export default function About() {
  return <AboutContent />
}

