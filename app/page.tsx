import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: 'Hemang Patel | Full-Stack Developer | Building Scalable Web Applications',
  description: 'Full-Stack Developer based in Etobicoke, Ontario, Canada. Building scalable, user-friendly web applications with React, Node.js, Express, and modern databases. Open to opportunities in the Canadian tech market.',
}

export default function Home() {
  return <HomeContent />
}
