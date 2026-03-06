'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Briefcase, GraduationCap, Code2 } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <section className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="heading-1 text-3xl md:text-4xl lg:text-5xl mb-6">
            <span className="gradient-text">About Me</span>
          </h1>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <MapPin className="w-4 h-4" />
            {siteConfig.location}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-body">
            <p>
              I&apos;m <strong>Hemang Patel</strong>, an AI &amp; Backend Engineer based in the Greater Toronto Area, Canada.
              I design and build <strong>Python‑powered backend systems</strong> and <strong>LLM‑driven applications</strong> —
              from FastAPI services and RESTful APIs to RAG pipelines and ETL workflows.
            </p>

            <p>
              I recently graduated from <strong>Humber College</strong> with a diploma in Information Technology Solutions (2025),
              following a Bachelor of Computer Applications from Gujarat University. Before moving to Canada, I worked as
              a <strong>Full‑Stack Developer at Techmicra Data Systems</strong> in India, building REST APIs, designing relational database schemas,
              and leading an AI‑driven feature experiment integrating NLP classification into a production pipeline.
            </p>

            <p>
              In Canada, I volunteered with <strong>RiseUP</strong>, collaborating with a cross‑functional team on a live product
              using Git branching, pull requests, and agile ceremonies. This experience sharpened my ability to deliver
              reliable code in a real team environment with structured code reviews and documentation practices.
            </p>

            <p>
              My current focus is on <strong>Generative AI</strong> and <strong>backend architecture</strong> — I&apos;m building
              projects that demonstrate real production thinking: RAG pipelines with vector databases, data engineering with ETL workflows,
              and AI‑assisted developer tools with proper guardrails, caching, and observability.
            </p>
          </div>

          {/* Quick highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <Briefcase className="w-6 h-6 text-accent mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend Focus</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Python, FastAPI, REST APIs, PostgreSQL, Docker. Production‑grade services with clean architecture.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <Code2 className="w-6 h-6 text-accent mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">GenAI Skills</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                LLMs, RAG, LangChain, vector databases, prompt engineering. End‑to‑end AI application development.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <GraduationCap className="w-6 h-6 text-accent mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Canada‑Based</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                GTA, Ontario. Humber College graduate. Open to full‑time, contract, and collaboration opportunities.
              </p>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <Link href="/#projects" className="btn-primary inline-flex items-center gap-2">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={siteConfig.links.resumePdf} download className="btn-secondary">
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
