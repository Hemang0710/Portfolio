import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact | Hemang Patel — AI & Backend Engineer',
  description:
    'Get in touch to discuss AI, backend, or data engineering opportunities. Based in the Greater Toronto Area, Canada.',
}

export default function Contact() {
  return <ContactContent />
}
