'use client'

/**
 * SectionPanel — renders one portfolio "part" as focused content.
 *
 * Used inside the full-screen overlay that opens when a visitor clicks an
 * object on the 3D desk. It reads from the shared portfolio-data module so it
 * always matches the scroll page.
 */

import {
  Brain,
  Code2,
  Cpu,
  Cloud,
  Layers,
  Gamepad2,
  Terminal as TerminalIcon,
  ExternalLink,
  Sparkles,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  MapPin,
} from 'lucide-react'
import {
  aboutParagraphs,
  stats,
  skillGroups,
  projectCategories,
  experience,
  education,
  type IconKey,
} from '@/lib/portfolio-data'
import { siteConfig } from '@/lib/site-config'

export type PanelId = 'about' | 'skills' | 'projects' | 'experience' | 'contact'

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

export const PANEL_TITLES: Record<PanelId, string> = {
  about: 'About Me',
  skills: 'Skills & Tech',
  projects: 'Projects',
  experience: 'Experience',
  contact: 'Contact',
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs text-slate-400">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}

export default function SectionPanel({ id }: { id: PanelId }) {
  if (id === 'about') {
    return (
      <div className="mx-auto max-w-3xl">
        <div className="space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-4 text-center dark:border-slate-800 dark:bg-slate-900">
              <div className="bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-2xl font-bold text-transparent">{s.value}</div>
              <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (id === 'skills') {
    return (
      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.title} className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className={`mb-5 flex items-center gap-2 font-semibold ${g.accent}`}>
              {ICONS[g.key]}
              {g.title}
            </div>
            <div className="space-y-4">
              {g.items.map((it) => (
                <SkillBar key={it.name} name={it.name} level={it.level} />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (id === 'projects') {
    return (
      <div className="mx-auto max-w-5xl space-y-12">
        {projectCategories.map((cat) => (
          <div key={cat.id}>
            <div className="mb-5 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
              <span className="text-indigo-500">{ICONS[cat.id]}</span>
              {cat.label}
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {cat.projects.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col rounded-xl border bg-white p-5 transition hover:-translate-y-1 hover:shadow-md dark:bg-slate-900 ${
                    p.featured ? 'border-indigo-300 dark:border-indigo-500/40' : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">{p.title}</h3>
                    <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-indigo-500" />
                  </div>
                  {p.featured && (
                    <span className="mb-2 inline-flex w-fit items-center gap-1 rounded-full bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-600 dark:text-violet-400">
                      <Sparkles className="h-3 w-3" /> Featured AI
                    </span>
                  )}
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.blurb}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (id === 'experience') {
    return (
      <div className="mx-auto max-w-3xl">
        <div className="relative space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800">
          {experience.map((job) => (
            <div key={job.company} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-slate-950" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {job.role} · <span className="text-indigo-500">{job.company}</span>
                </h3>
                <span className="text-sm text-slate-500">{job.period}</span>
              </div>
              <div className="mb-3 text-sm text-slate-500">{job.location}</div>
              <ul className="space-y-1.5">
                {job.points.map((pt, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {education.map((edu) => (
            <div key={edu.title} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="rounded-lg bg-indigo-500/10 p-3 text-indigo-500">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{edu.title}</h3>
                <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">{edu.school}</p>
                <p className="mt-0.5 text-sm text-slate-500">{edu.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // contact
  return (
    <div className="mx-auto max-w-xl text-center">
      <p className="mb-2 inline-flex items-center gap-2 text-sm text-slate-500">
        <MapPin className="h-4 w-4 text-indigo-500" /> {siteConfig.location}
      </p>
      <p className="mb-8 text-lg text-slate-700 dark:text-slate-300">
        Open to AI Full-Stack, GenAI, and ML roles. The fastest way to reach me is email — I reply quickly.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a href={`mailto:${siteConfig.links.email}`} className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
          <Mail className="h-4 w-4" /> {siteConfig.links.email}
        </a>
        <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
        <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
          <Github className="h-4 w-4" /> GitHub
        </a>
      </div>
    </div>
  )
}
