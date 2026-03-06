'use client'

import { motion } from 'framer-motion'
import { Download, Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export default function ResumeContent() {
  const { links, name, title, location } = siteConfig

  const hasPdf = links.resumePdf.startsWith('http') || links.resumePdf.startsWith('/')

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="heading-1">Resume</h1>
              {hasPdf ? (
                <a
                  href={links.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </a>
              ) : (
                <button onClick={() => window.print()} className="btn-primary inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Print / Save PDF
                </button>
              )}
            </div>

            {/* Resume Content */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 print:shadow-none">
              {/* Header */}
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {name}
                </h2>
                <p className="text-lg text-accent font-medium mb-2">
                  {title}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{location}</span>
                  </div>
                  <a href={`mailto:${links.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>{links.email}</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{links.phone}</span>
                  </div>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Objective */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Objective
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  AI & Backend Engineer with hands-on experience building Python‑powered backend systems, LLM‑driven applications,
                  and data pipelines. Recent graduate in Information Technology Solutions with project and internship experience
                  in REST API development, database design, and AI integration. Passionate about building scalable, cloud‑native
                  backend systems with clean architecture, comprehensive testing, and production‑grade observability.
                </p>
              </section>

              {/* Technical Skills */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Python, FastAPI, REST APIs, Node.js, Express.js, Flask
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI / ML</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      LLMs (GPT-4, Claude), RAG, LangChain, LangGraph, Prompt Engineering
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      PostgreSQL, MySQL, MongoDB, Pandas, ETL Pipelines, Data Modeling
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      React, React Native, Next.js, TypeScript, Tailwind CSS
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tools & Infra</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Cursor, GitHub Copilot, Docker, Git, CI/CD, AWS, Redis, Linux
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Concepts</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      API‑first design, RBAC, Data Structures, Agile/Scrum, Testing
                    </p>
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Experience
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Full Stack Developer (Co-op)
                        </h4>
                        <p className="text-accent text-sm">PopIn</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">April 2025 – Sep 2025</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Ontario, Canada</p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                      <li>Built Python-based web scraping pipelines to collect and process event-related data for analytics</li>
                      <li>Developed the front-end using Expo (React Native) to deliver a responsive and interactive user experience</li>
                      <li>Collaborated with cross-functional teams to integrate APIs and streamline event management features</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Web Developer</h4>
                        <p className="text-accent text-sm">Techmicra IT Solutions</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2021 – Sep 2023</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Ahmedabad, India</p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                      <li>Built responsive web apps using React, JavaScript, and Bootstrap</li>
                      <li>Integrated Firebase and REST APIs for secure data transactions</li>
                      <li>Implemented AI-driven features such as recommendation engines</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Education
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Ontario Graduate Certificate – Information Technology Solutions
                        </h4>
                        <p className="text-accent text-sm">The Humber College Institute of Technology & Advanced Learning</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Jan 2024 - August 2025</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Toronto, Ontario</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Relevant Courses: Web Programming & Frameworks, Database Systems, Machine Learning, Big Data, Cloud Computing
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Bachelor&apos;s in Engineering – Computer Engineering
                        </h4>
                        <p className="text-accent text-sm">Gujarat Technological University</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Aug 2018 – July 2021</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Gujarat, India</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Relevant Courses: Advanced Java, Python, MySQL, Data Structure and Design Patterns, Data Algorithms
                    </p>
                  </div>
                </div>
              </section>

              {/* Volunteer Experience */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Volunteer Experience
                </h3>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Web Developer Volunteer
                      </h4>
                      <p className="text-accent text-sm">Rise UP (Yogi Divine Society Canada)</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Apr 2024 - Present</span>
                  </div>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                    <li>Developed web applications to support community initiatives</li>
                    <li>Enhanced UI/UX and backend systems using JavaScript and PHP</li>
                  </ul>
                </div>
              </section>

              {/* Projects */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Projects
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      RAG‑Powered Career Assistant
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Built a retrieval‑augmented generation system with FastAPI, LangChain, and Pinecone. Ingests career
                      resources, generates vector embeddings, and answers job‑search questions with cited responses.
                      Includes JWT auth, rate limiting, and structured logging.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Job Market Analytics Data Pipeline
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Python ETL pipeline that ingests job postings, normalizes data, loads into a star‑schema warehouse,
                      and exposes a versioned REST API for trend analytics. Features monitoring, backfill support, and
                      Pydantic validation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      AI‑Assisted CRM / Helpdesk Backend
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Ticket‑management API with RBAC, cursor‑based pagination, and LLM‑powered ticket summarization
                      and reply suggestions. Implements circuit‑breaker patterns and token budgets for AI service reliability.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

