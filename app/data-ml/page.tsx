import type { Metadata } from 'next'
import DataMLContent from './DataMLContent'

export const metadata: Metadata = {
  title: 'Data & ML Showcase | Interactive Dashboards',
  description: 'Explore interactive data visualizations, machine learning pipeline demonstrations, and data processing examples.',
}

export default function DataMLShowcase() {
  return <DataMLContent />
}
