'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { useState } from 'react'

export default function ContactContent() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
    window.location.href = `mailto:${siteConfig.links.email}?subject=${subject}&body=${body}`
    setTimeout(() => setFormStatus('sent'), 1000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <section className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="heading-1 text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="gradient-text">Let&apos;s Connect</span>
          </h1>
          <p className="text-body max-w-2xl mb-12">
            Looking for an AI / Backend / Data engineer who ships quality code? I&apos;m actively seeking opportunities
            in the Canadian market — let&apos;s talk.
          </p>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-sm"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-sm resize-none"
                    placeholder="Tell me about the role or project…"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  {formStatus === 'sent' ? (
                    <>Sent! <CheckCircle2 className="w-4 h-4" /></>
                  ) : (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Direct Links</h3>
                <div className="space-y-4">
                  <a href={`mailto:${siteConfig.links.email}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                    <Mail className="w-4 h-4" /> {siteConfig.links.email}
                  </a>
                  <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                    <Linkedin className="w-4 h-4" /> LinkedIn Profile
                  </a>
                  <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                    <Github className="w-4 h-4" /> GitHub — {siteConfig.githubUsername}
                  </a>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" /> {siteConfig.location}
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-accent/5 to-emerald/5 border border-accent/10">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold text-accent">Currently open</span> to full‑time Engineering and Developer
                  opportunities across Canada. Also happy to discuss contract work or open‑source collaboration.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
