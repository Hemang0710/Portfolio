'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Github, ExternalLink, CheckCircle2, MessageSquare, BarChart3, Shield, Terminal } from 'lucide-react'

const projects = [
  {
    slug: 'rag-career-assistant',
    title: 'RAG‑Powered Career Assistant',
    subtitle: 'for Canadian Job Seekers',
    description:
      'A retrieval‑augmented generation system that ingests career resources, chunks and embeds them into a vector database, then answers job‑search questions with cited, context‑aware responses via a FastAPI backend.',
    stack: ['FastAPI', 'LangChain', 'Pinecone', 'OpenAI', 'PostgreSQL', 'Docker'],
    tagClass: 'tag-ai',
    icon: MessageSquare,
    proves: [
      'Can design and implement a full RAG pipeline end‑to‑end',
      'Understands vector‑database indexing, chunking strategies, and retrieval tuning',
      'Builds production APIs with authentication, logging, and structured error handling',
    ],
  },
  {
    slug: 'job-market-pipeline',
    title: 'Job Market Analytics Pipeline',
    subtitle: 'ETL → Warehouse → REST API',
    description:
      'A Python data pipeline that scrapes and ingests job postings, cleans and normalizes the data, loads it into a warehouse, and exposes a REST API for trend analytics — with monitoring, alerting, and backfill support.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Pandas', 'Redis', 'Docker'],
    tagClass: 'tag-data',
    icon: BarChart3,
    proves: [
      'Designs batch and near‑real‑time ingestion pipelines with idempotent processing',
      'Thinks about monitoring, error budgets, and data‑quality checks',
      'Exposes clean, versioned REST APIs for downstream consumers',
    ],
  },
  {
    slug: 'ai-crm-helpdesk',
    title: 'AI‑Assisted CRM / Helpdesk',
    subtitle: 'CRUD + LLM Intelligence',
    description:
      'A ticket‑management backend with full CRUD, role‑based access control, pagination, and filtering — enhanced by an LLM service that auto‑summarizes tickets and suggests agent replies with robust timeout and fallback handling.',
    stack: ['FastAPI', 'PostgreSQL', 'OpenAI', 'SQLAlchemy', 'JWT', 'Pytest'],
    tagClass: 'tag-backend',
    icon: Shield,
    proves: [
      'Implements RBAC, pagination, and complex query patterns in a real‑world schema',
      'Integrates external AI services with circuit‑breaker, retry, and graceful degradation',
      'Writes comprehensive tests and maintains high code coverage',
    ],
  },
  {
    slug: 'ai-dev-tool',
    title: 'Personal AI Dev Tool',
    subtitle: 'LLM‑Powered Code Assistant',
    description:
      'A CLI and web tool that reviews pull requests, generates data‑processing boilerplate, and explains complex code — using an LLM with configurable guardrails for safety, token budgets, and caching.',
    stack: ['Python', 'Typer CLI', 'OpenAI', 'FastAPI', 'Redis', 'SQLite'],
    tagClass: 'tag-tool',
    icon: Terminal,
    proves: [
      'Builds developer‑productivity tools with thoughtful UX and sensible defaults',
      'Designs for reliability: token budgets, caching, rate limiting, and content filtering',
      'Understands the trade‑offs of AI‑assisted workflows and how to keep humans in the loop',
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ProjectsContent() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <section className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="heading-1 text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h1>
          <p className="text-body max-w-2xl mx-auto">
            Deep, realistic systems — not toy CRUD apps. Each project demonstrates production thinking:
            error handling, observability, testing, and clean architecture.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="card-hover p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-accent/10 border border-accent/20">
                  <project.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{project.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{project.subtitle}</p>
                </div>
              </div>

              <p className="text-body-sm mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span key={tech} className={project.tagClass}>{tech}</span>
                ))}
              </div>

              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 mb-5">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">What this proves</p>
                <ul className="space-y-1.5">
                  {project.proves.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
