'use client'

/**
 * LiveTerminal — an interactive, in-page terminal.
 *
 * This is "show, don't tell": instead of a static bullet list of skills, the
 * visitor types real commands (`skills`, `projects`, `ai`, `contact`, `help`)
 * and the page responds. It's fully client-side and deterministic — no backend
 * — so it loads instantly and can't fail. It demonstrates DOM/state handling,
 * keyboard UX, and attention to detail.
 */

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/lib/site-config'

type Line = { type: 'input' | 'output' | 'system'; text: string }

const PROMPT = 'hemang@portfolio:~$'

/* Command outputs. Each returns an array of lines. */
const COMMANDS: Record<string, () => string[]> = {
  help: () => [
    'Available commands:',
    '  whoami    – who I am',
    '  skills    – my technical stack',
    '  ai        – GenAI / ML focus areas',
    '  projects  – featured work',
    '  education – degrees & GPA',
    '  contact   – how to reach me',
    '  clear     – clear the screen',
  ],
  whoami: () => [
    'Hemang Patel — AI Full-Stack & GenAI Engineer',
    '3+ yrs building production web apps + LLM-powered systems.',
    'Toronto, ON · open to AI / Full-Stack / ML roles.',
  ],
  education: () => [
    'M.Cert · IT Solutions  → Humber College, Toronto (GPA 3.9)',
    'B.Eng  · Computer Eng. → Gujarat Technological Univ. (GPA 3.8)',
  ],
  skills: () => [
    'frontend  → React, Next.js, React Native, TypeScript, Tailwind, shadcn/ui',
    'backend   → Node.js, Express, FastAPI, Python, Java, Spring Boot',
    'data      → PostgreSQL, MongoDB, MySQL, Supabase, Firebase',
    'cloud     → GCP, Azure, Docker, GitHub Actions, Vercel (CI/CD)',
    'genai     → OpenAI APIs, RAG, vector search, prompt engineering, LSTM',
  ],
  ai: () => [
    'GenAI / ML focus:',
    '  • RAG pipelines — semantic search + vector DBs + LLM responses',
    '  • LLM observability — tracing failures, hallucination & confidence',
    '  • Time-series forecasting — LSTM networks in PyTorch',
    '  • Applied OpenAI APIs in production full-stack apps',
  ],
  projects: () => [
    'featured →',
    '  1. AI Failure Investigation System  (LLM observability)',
    '  2. Enterprise Knowledge Retrieval   (RAG Q&A platform)',
    '  3. LSTM Time-Series Forecasting     (PyTorch)',
    "type 'open' or scroll to the Projects section for links.",
  ],
  contact: () => [
    `email    → ${siteConfig.links.email}`,
    `linkedin → ${siteConfig.links.linkedin}`,
    `github   → ${siteConfig.links.github}`,
  ],
}

const BOOT: Line[] = [
  { type: 'system', text: "Type 'help' to see what I can do, or try: skills · ai · projects" },
]

export default function LiveTerminal() {
  const [lines, setLines] = useState<Line[]>(BOOT)
  const [value, setValue] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Keep the view scrolled to the newest line.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [lines])

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return

    setLines((prev) => [...prev, { type: 'input', text: raw }])

    if (cmd === 'clear') {
      setLines([])
      return
    }
    const handler = COMMANDS[cmd]
    const output = handler
      ? handler()
      : [`command not found: ${cmd}`, "type 'help' for a list of commands."]
    setLines((prev) => [...prev, ...output.map((text) => ({ type: 'output' as const, text }))])
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    run(value)
    setValue('')
  }

  const quick = ['help', 'skills', 'ai', 'projects', 'contact']

  return (
    <div
      className="code-block terminal-glow w-full text-left"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="code-block-header">
        <span className="code-block-dot bg-red-400" />
        <span className="code-block-dot bg-yellow-400" />
        <span className="code-block-dot bg-green-400" />
        <span className="ml-2 text-xs text-gray-400">bash — explore my profile</span>
      </div>

      {/* Output */}
      <div ref={scrollRef} className="h-64 overflow-y-auto px-4 py-3 leading-relaxed">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap break-words">
            {line.type === 'input' && (
              <span>
                <span className="text-emerald-light">{PROMPT}</span>{' '}
                <span className="text-gray-100">{line.text}</span>
              </span>
            )}
            {line.type === 'output' && <span className="text-gray-300">{line.text}</span>}
            {line.type === 'system' && <span className="text-gray-500 italic">{line.text}</span>}
          </div>
        ))}

        {/* Active prompt */}
        <form onSubmit={onSubmit} className="mt-1 flex items-center">
          <span className="text-emerald-light">{PROMPT}</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal command input"
            className="ml-2 flex-1 bg-transparent text-gray-100 caret-accent outline-none"
          />
        </form>
      </div>

      {/* Quick-command chips (great for mobile / non-typers) */}
      <div className="flex flex-wrap gap-2 border-t border-gray-800 px-4 py-2.5">
        {quick.map((c) => (
          <button
            key={c}
            onClick={(e) => {
              e.stopPropagation()
              run(c)
            }}
            className="rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1 text-xs text-gray-300 transition hover:border-accent/50 hover:text-accent-light"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}
