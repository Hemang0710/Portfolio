import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Me | Full-Stack Developer',
  description: 'Learn about my background, education at Humber College, industry experience, and technical skills in full-stack web development with React, Node.js, and modern databases.',
}

export default function About() {
  return <AboutContent />
}

