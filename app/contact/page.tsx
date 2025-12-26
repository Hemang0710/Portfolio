import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact | Data & Software Developer',
  description: 'Get in touch to discuss opportunities, projects, or collaborations. Based in Ontario, Canada.',
}

export default function Contact() {
  return <ContactContent />
}
