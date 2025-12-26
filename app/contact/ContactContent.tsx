'use client'

import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactContent() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // In a real implementation, this would send data to an API endpoint
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="heading-1 mb-6">Get In Touch</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                I&apos;m always open to discussing new opportunities, projects, or collaborations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-accent" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Ontario, Canada
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-5 h-5 text-accent" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    </div>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-gray-600 dark:text-gray-400 text-sm hover:text-accent transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Availability
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Open to full-time opportunities, contract work, and freelance projects. 
                      Available for interviews and discussions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <p className="text-green-800 dark:text-green-200">
                        Thank you! Your message has been sent successfully.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                      <p className="text-red-800 dark:text-red-200">
                        Something went wrong. Please try again later.
                      </p>
                    </motion.div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 dark:border-gray-700 focus:ring-accent'
                        } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                        placeholder="Your name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 dark:border-gray-700 focus:ring-accent'
                        } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                        placeholder="your.email@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.subject
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 dark:border-gray-700 focus:ring-accent'
                        } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                        placeholder="What's this about?"
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                      />
                      {errors.subject && (
                        <p id="subject-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 dark:border-gray-700 focus:ring-accent'
                        } bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-colors resize-none`}
                        placeholder="Tell me about your project or opportunity..."
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

