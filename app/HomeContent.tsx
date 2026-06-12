'use client'

/**
 * HomeContent — single-page portfolio for Hemang Patel.
 *
 * Design goals:
 *  - Clean, spacious, professional layout (no game-y "WORLD" labels).
 *  - The page itself demonstrates skill: an explorable 3D hero and a live,
 *    interactive terminal — not just lists of technologies.
 *  - Positioned for AI Full-Stack / GenAI / ML roles.
 *
 * Section ids (hero, about, skills, projects, experience, contact) match the
 * clickable objects in the 3D hero so "travelling" the desk scrolls here.
 */

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Brain,
  Code2,
  Cloud,
  Sparkles,
  GraduationCap,
  Briefcase,
  Cpu,
  Layers,
  Gamepad2,
  Box,
  MousePointerClick,
  Terminal as TerminalIcon,
} from 'lucide-react'
import LiveTerminal from '@/components/LiveTerminal'
import ModeToggle from '@/components/ModeToggle'
import ImmersiveExperience from '@/components/ImmersiveExperience'
import { ExperienceModeProvider, useExperienceMode } from '@/lib/useExperienceMode'
import { siteConfig } from '@/lib/site-config'
import {
  aboutParagraphs,
  stats,
  achievements,
  skillGroups,
  projectCategories,
  experience,
  education,
  type IconKey,
} from '@/lib/portfolio-data'

/* Map the plain string icon keys from portfolio-data to lucide components. */
const ICONS: Record<IconKey, React.ReactNode> = {
  genai: <Brain className="h-5 w-5" />,
  frontend: <Code2 className="h-5 w-5" />,
  backend: <Cpu className="h-5 w-5" />,
  cloud: <Cloud className="h-5 w-5" />,
  ai: <Brain className="h-5 w-5" />,
  fullstack: <Layers className="h-5 w-5" />,
  interactive: <Gamepad2 className="h-5 w-5" />,
  systems: <TerminalIcon className="h-5 w-5" />,
}

/* ── shared motion helpers ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

/* ── small presentational helpers ── */
function SectionHeading({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="mb-12 max-w-2xl"
    >
      <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-accent">
        <span className="h-px w-6 bg-accent" />
        {kicker}
      </div>
      <h2 className="heading-2 gradient-text-subtle">{title}</h2>
      {subtitle && <p className="text-body mt-4">{subtitle}</p>}
    </motion.div>
  )
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-xs text-gray-400">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-emerald"
        />
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════════ */
/**
 * HomeContent — top-level switch between the two portfolio experiences.
 * The Simple (2D) page and the Immersive (3D) workstation share the same data;
 * `useExperienceMode` decides the default (3D when fast & capable) and the
 * floating ModeToggle lets the visitor flip between them.
 */
export default function HomeContent() {
  return (
    <ExperienceModeProvider>
      <ExperienceRouter />
      <ModeToggle />
    </ExperienceModeProvider>
  )
}

function ExperienceRouter() {
  const { mode, ready } = useExperienceMode()
  // Before detection completes (and on the server) render the Simple page so
  // there's no blank flash and no hydration mismatch.
  if (!ready || mode !== 'immersive') return <SimplePortfolio />
  return <ImmersiveExperience />
}

/* ── A light-weight hero visual for Simple mode (no Three.js download). ── */
function SimpleHero() {
  const { setMode, canRender3D } = useExperienceMode()
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-xl dark:border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.25),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(16,185,129,0.18),transparent_55%)]" />
      <div className="relative flex aspect-[16/8] flex-col items-center justify-center gap-5 px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-200">
          <Sparkles className="h-3.5 w-3.5" /> Building LLM-powered systems &amp; full-stack apps
        </div>
        <h2 className="max-w-xl text-2xl font-bold text-white sm:text-3xl">
          Explore my work the way you like
        </h2>
        <p className="max-w-md text-sm text-slate-400">
          You&apos;re viewing the fast, lightweight version. Prefer something interactive?
          Step into the 3D workstation and click around the desk.
        </p>
        <button
          onClick={() => setMode('immersive')}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          <Box className="h-4 w-4" /> Enter 3D experience
          <MousePointerClick className="h-4 w-4 opacity-80" />
        </button>
        {!canRender3D && (
          <p className="text-xs text-slate-500">
            (3D works best on a desktop browser with hardware acceleration.)
          </p>
        )}
      </div>
    </div>
  )
}

function SimplePortfolio() {
  return (
    <div className="min-h-screen">
      {/* ───────── HERO ───────── */}
      <section id="hero" className="relative overflow-hidden section-padding">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(99,102,241,0.10),transparent_55%)]" />

        <div className="container-custom relative z-10">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div
              variants={fadeUp}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              <MapPin className="h-3.5 w-3.5" />
              Open to AI · Full-Stack · ML roles · {siteConfig.location}
            </motion.div>

            <motion.h1 variants={fadeUp} className="heading-1 mb-5">
              <span className="gradient-text-subtle">Hemang Patel</span>
              <br />
              <span className="gradient-text">AI Full-Stack &amp; GenAI Engineer</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-body mb-8 max-w-2xl">
              I build <span className="font-semibold text-gray-900 dark:text-gray-100">production full-stack applications</span> and{' '}
              <span className="font-semibold text-gray-900 dark:text-gray-100">LLM-powered systems</span> — from React &amp; Next.js
              frontends to FastAPI/Node backends, RAG pipelines, and AI observability. 3+ years of experience, based in Toronto.
            </motion.p>

            <motion.div variants={fadeUp} className="mb-12 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2 group">
                View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={siteConfig.links.resumePdf} download className="btn-secondary inline-flex items-center gap-2">
                <Download className="h-4 w-4" /> Download Résumé
              </a>
              <a href="#contact" className="btn-outline inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> Contact
              </a>
            </motion.div>

            {/* Light-weight hero with an invite into the 3D experience */}
            <motion.div variants={fadeUp}>
              <SimpleHero />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───────── ABOUT + LIVE TERMINAL ───────── */}
      <section id="about" className="section-padding-sm border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="About"
              title="Engineer across the full stack — with an AI core"
            />

            {/* Photo + intro: a real face keeps the page human. */}
            <div className="mb-6 flex items-start gap-5">
              <Image
                src={siteConfig.photo}
                alt="Hemang Patel"
                width={112}
                height={112}
                className="h-28 w-28 shrink-0 rounded-2xl object-cover object-top shadow-md ring-1 ring-gray-200 dark:ring-gray-700"
                priority
              />
              <div className="space-y-4 text-body">
                {aboutParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="card p-4 text-center">
                  <div className="gradient-text text-2xl font-bold">{s.value}</div>
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* The terminal: show, don't tell */}
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
              <Sparkles className="h-4 w-4 text-accent" />
              Try it — this terminal is live. Type a command.
            </div>
            <LiveTerminal />
          </div>
        </div>

        {/* Impact strip — résumé-backed numbers */}
        <div className="container-custom mt-12">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a) => (
              <motion.div
                key={a}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="flex items-start gap-2 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 dark:border-gray-800 dark:bg-gray-950/40 dark:text-gray-300"
              >
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{a}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── SKILLS ───────── */}
      <section id="skills" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container-custom">
          <SectionHeading
            kicker="Skills"
            title="The stack I build with"
            subtitle="Proficiency across the GenAI, frontend, backend, and cloud layers — the same tools that power the projects below."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {skillGroups.map((group) => (
              <motion.div key={group.title} variants={fadeUp} className="card-hover p-6">
                <div className={`mb-5 flex items-center gap-2 font-semibold ${group.accent}`}>
                  {ICONS[group.key]}
                  {group.title}
                </div>
                <div className="space-y-4">
                  {group.items.map((it) => (
                    <SkillBar key={it.name} name={it.name} level={it.level} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── PROJECTS ───────── */}
      <section id="projects" className="section-padding border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading
            kicker="Projects"
            title="Selected work"
            subtitle="Grouped by domain. AI & ML projects are highlighted — each links to its GitHub repository."
          />

          <div className="space-y-14">
            {projectCategories.map((cat) => (
              <div key={cat.id}>
                <div className="mb-6 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  <span className="text-accent">{ICONS[cat.id]}</span>
                  {cat.label}
                </div>
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {cat.projects.map((p) => (
                    <motion.a
                      key={p.title}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeUp}
                      className={`card-hover group flex flex-col p-6 ${
                        p.featured ? 'ring-1 ring-accent/30' : ''
                      }`}
                    >
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">{p.title}</h3>
                        <ExternalLink className="h-4 w-4 shrink-0 text-gray-400 transition group-hover:text-accent" />
                      </div>
                      {p.featured && (
                        <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-purple-500/10 px-2 py-0.5 text-xs font-medium text-purple-500 dark:text-purple-400">
                          <Sparkles className="h-3 w-3" /> Featured AI
                        </span>
                      )}
                      <p className="text-body-sm mb-4 flex-1">{p.blurb}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span key={t} className="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <Github className="h-4 w-4" /> See all repositories
            </a>
          </div>
        </div>
      </section>

      {/* ───────── EXPERIENCE + EDUCATION ───────── */}
      <section id="experience" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container-custom">
          <SectionHeading kicker="Experience" title="Where I've worked" />
          <div className="relative space-y-8 border-l border-gray-200 pl-6 dark:border-gray-800">
            {experience.map((job) => (
              <motion.div
                key={job.company}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="relative"
              >
                <span className="absolute -left-[31px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-accent ring-4 ring-white dark:ring-gray-900" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {job.role} · <span className="text-accent">{job.company}</span>
                  </h3>
                  <span className="text-sm text-gray-500">{job.period}</span>
                </div>
                <div className="mb-3 text-sm text-gray-500">{job.location}</div>
                <ul className="space-y-1.5">
                  {job.points.map((pt, i) => (
                    <li key={i} className="text-body-sm flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {education.map((edu) => (
              <motion.div
                key={edu.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card flex items-start gap-4 p-6"
              >
                <div className="rounded-lg bg-accent/10 p-3 text-accent">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{edu.title}</h3>
                  <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">{edu.school}</p>
                  <p className="mt-0.5 text-sm text-gray-500">{edu.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CONTACT ───────── */}
      <section id="contact" className="section-padding border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="container-custom max-w-3xl text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-accent">
              <Briefcase className="h-4 w-4" /> Let&apos;s work together
            </div>
            <h2 className="heading-2 gradient-text-subtle mb-4">Open to AI &amp; full-stack roles</h2>
            <p className="text-body mb-8">
              I&apos;m looking for AI Full-Stack, GenAI, and ML opportunities. The fastest way to reach me is email — I reply quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`mailto:${siteConfig.links.email}`} className="btn-primary inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> {siteConfig.links.email}
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
