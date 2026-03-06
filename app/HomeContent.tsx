'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Server,
  Brain,
  Database,
  Code2,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Send,
  Cpu,
  Layers,
  GitBranch,
  FileSearch,
  Shield,
  BookOpen,
  MessageSquare,
  BarChart3,
  Terminal,
  Workflow,
} from 'lucide-react'
import TypingAnimation from '@/components/TypingAnimation'
import ParticleBackground from '@/components/ParticleBackground'
import HeroAnimation from '@/components/HeroAnimation'
import { siteConfig } from '@/lib/site-config'
import { useState } from 'react'

/* ─── animation variants ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

/* ─── data ─── */
const skillCategories = [
  {
    icon: Server,
    title: 'Backend',
    color: 'from-indigo-500 to-blue-600',
    tagClass: 'tag-backend',
    description: 'Production‑ready API development with thorough error handling and observability.',
    skills: ['Python', 'FastAPI', 'REST APIs', 'SQL / PostgreSQL', 'Docker', 'Redis'],
  },
  {
    icon: Brain,
    title: 'AI / ML',
    color: 'from-purple-500 to-pink-500',
    tagClass: 'tag-ai',
    description: 'End‑to‑end GenAI pipelines — from prompt engineering to embedding search.',
    skills: ['LLMs (GPT-4 / Claude)', 'RAG Pipelines', 'LangChain', 'LangGraph', 'Vector Databases', 'Prompt Engineering'],
  },
  {
    icon: Database,
    title: 'Data',
    color: 'from-emerald-500 to-teal-500',
    tagClass: 'tag-data',
    description: 'Clean ingestion‑to‑insight pipelines with a focus on data quality.',
    skills: ['ETL Pipelines', 'Data Modeling', 'Pandas / NumPy', 'Analytics', 'Data Warehousing', 'Airflow Basics'],
  },
  {
    icon: Code2,
    title: 'Frontend & Tools',
    color: 'from-orange-500 to-amber-500',
    tagClass: 'tag-tool',
    description: 'Enough front‑end to build dashboards, internal tools, and dev utilities.',
    skills: ['Cursor', 'GitHub Copilot', 'React / Next.js', 'TypeScript', 'Tailwind CSS', 'Git / CI/CD', 'Linux'],
  },
]

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
    stack: ['Python', 'Typer CLI', 'OpenAI', 'FastAPI', 'Redis', ' SQLite'],
    tagClass: 'tag-tool',
    icon: Terminal,
    proves: [
      'Builds developer‑productivity tools with thoughtful UX and sensible defaults',
      'Designs for reliability: token budgets, caching, rate limiting, and content filtering',
      'Understands the trade‑offs of AI‑assisted workflows and how to keep humans in the loop',
    ],
  },
]

const experiences = [
  {
    type: 'work',
    icon: Briefcase,
    title: 'Web Development Volunteer',
    org: 'RiseUP — Greater Toronto Area, Canada',
    period: '2024',
    bullets: [
      'Collaborated with a cross‑functional team on a live product, using Git branching, pull requests, and code reviews',
      'Delivered front‑end features in React and supported API integrations for a community‑facing application',
      'Practiced agile ceremonies, documentation, and pair debugging in a real team environment',
    ],
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Full‑Stack Developer',
    org: 'Techmicra Data Systems — India',
    period: '2021 – 2023',
    bullets: [
      'Built and maintained REST APIs and database schemas using Node.js, Express, and MySQL / PostgreSQL',
      'Developed internal tools with React for data visualization and admin workflows',
      'Led an AI‑driven feature experiment integrating NLP classification into the product pipeline',
    ],
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Information Technology Solutions',
    org: 'Humber College — Toronto, Canada',
    period: '2023 – 2025',
    bullets: [
      'Coursework: Data structures, relational databases, networking, cloud computing, agile methodologies',
      'Capstone project: LLM‑powered knowledge assistant built with Python, FastAPI, and RAG',
    ],
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Bachelor of Computer Applications',
    org: 'Gujarat University — India',
    period: '2018 – 2021',
    bullets: [
      'Foundations in algorithms, OOP, database management, and software engineering',
      'Graduated with strong academic standing; focus on application development',
    ],
  },
]

const values = [
  { icon: FileSearch, title: 'API‑first design', description: 'I start with the contract — OpenAPI spec, request/response shapes, error codes — before writing implementation code.' },
  { icon: Layers, title: 'Systems thinking', description: 'I think in data flows and failure modes, not just happy‑path features. Every service needs monitoring, retries, and graceful degradation.' },
  { icon: GitBranch, title: 'Clean, tested code', description: 'Readable code with clear naming, sensible abstractions, and automated tests. If it\'s not tested, it\'s not done.' },
  { icon: BookOpen, title: 'Document decisions', description: 'ADRs, inline comments on "why" not "what", and clear READMEs. Future‑me (and teammates) will thank present‑me.' },
  { icon: Workflow, title: 'Collaborate through PRs', description: 'Meaningful commit messages, focused pull requests, and constructive code reviews. The best code is code the whole team understands.' },
  { icon: Cpu, title: 'Ship and iterate', description: 'Build the smallest useful thing, deploy it, observe it, and improve. Perfect is the enemy of shipped.' },
]

/* ─── component ─── */
export default function HomeContent() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    // construct mailto
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
    window.location.href = `mailto:${siteConfig.links.email}?subject=${subject}&body=${body}`
    setTimeout(() => setFormStatus('sent'), 1000)
  }

  return (
    <div className="min-h-screen">
      {/* ═══════════════════════  HERO  ═══════════════════════ */}
      <section id="about" className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.06),transparent_50%)]"></div>
        <ParticleBackground />
        <HeroAnimation />

        <div className="container-custom relative z-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl mx-auto text-center">
            {/* Availability badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald"></span>
              </span>
              <MapPin className="w-3.5 h-3.5" />
              Open to Engineering &amp; Developer Roles
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="heading-1 mb-6">
              <span className="gradient-text">AI &amp; Backend Engineer</span>
              <br />
              <span className="text-gray-600 dark:text-gray-400 font-normal text-2xl md:text-3xl lg:text-4xl">
                building{' '}
                <TypingAnimation
                  words={['RAG pipelines', 'FastAPI services', 'data pipelines', 'LLM integrations', 'cloud‑native backends']}
                  className="text-accent font-semibold"
                />
              </span>
            </motion.h1>

            {/* Summary */}
            <motion.p variants={itemVariants} className="text-body max-w-2xl mx-auto mb-8">
              I design and build <span className="font-semibold text-gray-900 dark:text-gray-100">Python ‑ powered backend systems</span> and{' '}
              <span className="font-semibold text-gray-900 dark:text-gray-100">LLM‑driven applications</span> —
              from FastAPI services and RESTful APIs to RAG pipelines and ETL workflows.
              Based in the <span className="font-semibold text-gray-900 dark:text-gray-100">GTA, Canada</span>, ready to build scalable, cloud‑native solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2 group">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={siteConfig.links.resumePdf} download className="btn-secondary inline-flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a href="#contact" className="btn-outline inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { label: 'Python & FastAPI', value: 'Backend', icon: '🐍' },
                { label: 'LLMs & RAG', value: 'GenAI', icon: '🧠' },
                { label: 'ETL & Analytics', value: 'Data', icon: '📊' },
                { label: 'Docker & Cloud', value: 'Infra', icon: '☁️' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="p-4 rounded-xl bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/40"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-sm font-semibold text-accent">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════  SKILLS  ═══════════════════════ */}
      <section id="skills" className="section-padding-sm bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="heading-2 mb-4">Skills &amp; Tech Stack</h2>
            <p className="text-body-sm max-w-2xl mx-auto">
              Focused on backend, AI/ML, and data engineering — with enough front‑end to ship full products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="card-hover p-6 md:p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-br ${cat.color} bg-opacity-10`}>
                    <cat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="heading-3 text-lg mb-1">{cat.title}</h3>
                    <p className="text-body-sm text-sm">{cat.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cat.skills.map((skill) => (
                    <span key={skill} className={cat.tagClass}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════  PROJECTS  ═══════════════════════ */}
      <section id="projects" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="heading-2 mb-4">Featured Projects</h2>
            <p className="text-body-sm max-w-2xl mx-auto">
              Deep, realistic systems — not toy CRUD apps. Each project demonstrates production thinking: error handling, observability, testing, and clean architecture.
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
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-accent/10 border border-accent/20">
                    <project.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{project.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{project.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-body-sm mb-4 flex-grow">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span key={tech} className={project.tagClass}>{tech}</span>
                  ))}
                </div>

                {/* What this proves */}
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

                {/* Links */}
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
        </div>
      </section>

      {/* ═══════════════════════  EXPERIENCE & EDUCATION  ═══════════════════════ */}
      <section id="experience" className="section-padding-sm bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="heading-2 mb-4">Experience &amp; Education</h2>
            <p className="text-body-sm max-w-2xl mx-auto">
              Real product work across continents — from volunteer collaboration in Canada to full‑stack delivery in India.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent"></div>

              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.title + exp.org}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="relative pl-12 md:pl-16"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-2.5 md:left-4 top-1 w-3.5 h-3.5 rounded-full border-2 ${exp.type === 'work' ? 'bg-accent border-accent/40' : 'bg-emerald border-emerald/40'}`}></div>

                    <div className="card p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{exp.org}</p>
                        </div>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 whitespace-nowrap">{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════  HOW I WORK  ═══════════════════════ */}
      <section className="section-padding-sm bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="heading-2 mb-4">How I Work</h2>
            <p className="text-body-sm max-w-2xl mx-auto">
              Engineering values I practice daily — written as a senior engineer would describe a strong junior they&apos;d want on their team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-accent/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <v.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{v.title}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════  CONTACT  ═══════════════════════ */}
      <section id="contact" className="section-padding bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="heading-2 mb-4">Let&apos;s Connect</h2>
            <p className="text-body-sm max-w-2xl mx-auto">
              Looking for an AI / Backend / Data engineer who ships quality code and thinks in systems? I&apos;m actively seeking opportunities in the Canadian market — let&apos;s talk.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                    <input
                      id="contact-email"
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
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
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
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
                <div className="space-y-4">
                  <a href={`mailto:${siteConfig.links.email}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                    <Mail className="w-4 h-4" />
                    {siteConfig.links.email}
                  </a>
                  <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                  </a>
                  <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                    <Github className="w-4 h-4" />
                    GitHub — {siteConfig.githubUsername}
                  </a>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    {siteConfig.location}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-accent/5 to-emerald/5 border border-accent/10">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold text-accent">Currently open</span> to full‑time Engineering and Developer roles across Canada.
                  I&apos;m also happy to discuss contract work, open‑source collaboration, or interesting side projects.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
