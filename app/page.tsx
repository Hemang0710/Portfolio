import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: 'Data & Software Developer | Building Scalable Data-Driven Systems',
  description: 'Entry-Level Data & Software Developer based in Ontario, Canada. Specialized in data engineering, machine learning, backend development, and analytics.',
}

export default function Home() {
  return <HomeContent />
}
