'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const COMMANDS: Record<
  string,
  | { type: 'text'; value: string }
  | { type: 'link'; label: string; href: string; external?: boolean }
  | { type: 'navigate'; path: string }
> = {
  whoami: { type: 'text', value: siteConfig.name },
  help: {
    type: 'text',
    value: `Commands: whoami, help, ls, cat resume, linkedin, github, email, clear`,
  },
  ls: {
    type: 'text',
    value: 'about  projects  resume  contact',
  },
  'cat resume': { type: 'navigate', path: '/resume' },
  linkedin: { type: 'link', label: 'Opening LinkedIn...', href: siteConfig.links.linkedin, external: true },
  github: { type: 'link', label: 'Opening GitHub...', href: siteConfig.links.github, external: true },
  email: { type: 'link', label: `Mailto: ${siteConfig.links.email}`, href: `mailto:${siteConfig.links.email}`, external: true },
  about: { type: 'navigate', path: '/about' },
  projects: { type: 'navigate', path: '/projects' },
  contact: { type: 'navigate', path: '/contact' },
  clear: { type: 'text', value: '' },
}

const PROMPT = 'visitor@portfolio ~ %'

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<{ type: 'input' | 'output'; text: string; link?: string; external?: boolean; path?: string }[]>([
    { type: 'output', text: `Welcome! Type 'help' for commands. Try: whoami, ls, linkedin, github` },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIndex, setHistIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const run = (cmd: string) => {
    const raw = cmd.trim().toLowerCase()
    const action = COMMANDS[raw] ?? (raw === 'cat resume' ? COMMANDS['cat resume'] : null)

    setLines((prev) => [...prev, { type: 'input', text: `${PROMPT} ${cmd}` }])

    if (!action) {
      setLines((prev) => [...prev, { type: 'output', text: `Command not found: ${cmd}. Type 'help' for options.` }])
      setHistory((h) => [...h.slice(-50), cmd])
      setInput('')
      setHistIndex(-1)
      return
    }

    if (action.type === 'text') {
      if (action.value) setLines((prev) => [...prev, { type: 'output', text: action.value }])
    } else if (action.type === 'link') {
      setLines((prev) => [...prev, { type: 'output', text: action.label, link: action.href, external: action.external }])
      setTimeout(() => window.open(action.href, '_blank'), 400)
    } else if (action.type === 'navigate') {
      setLines((prev) => [...prev, { type: 'output', text: `Navigating to ${action.path}...`, path: action.path }])
      setTimeout(() => router.push(action.path!), 400)
    }

    setHistory((h) => [...h.slice(-50), cmd])
    setInput('')
    setHistIndex(-1)
  }

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight)
  }, [lines])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      run(input)
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length === 0) return
      const next = histIndex < 0 ? history.length - 1 : Math.max(0, histIndex - 1)
      setHistIndex(next)
      setInput(history[next])
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (histIndex < 0) return
      const next = histIndex + 1
      if (next >= history.length) {
        setHistIndex(-1)
        setInput('')
      } else {
        setHistIndex(next)
        setInput(history[next])
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-950 shadow-2xl"
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <Terminal className="w-4 h-4 text-gray-500 ml-2" />
        <span className="text-gray-500 text-sm ml-1">terminal — try: linkedin, github, whoami</span>
      </div>
      <div
        ref={scrollRef}
        className="h-56 overflow-y-auto p-4 font-mono text-sm text-gray-300"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, i) => (
          <div key={i} className="mb-1">
            {line.type === 'input' ? (
              <div className="text-green-400">{line.text}</div>
            ) : line.link ? (
              <a
                href={line.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                {line.text}
              </a>
            ) : line.path ? (
              <button
                type="button"
                onClick={() => router.push(line.path!)}
                className="text-cyan-400 hover:underline text-left"
              >
                {line.text}
              </button>
            ) : (
              <div className="text-gray-400">{line.text || '\u00A0'}</div>
            )}
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-green-400 shrink-0">{PROMPT}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-gray-300 focus:outline-none caret-gray-400"
            placeholder=" "
            spellCheck={false}
            autoCapitalize="off"
          />
        </div>
      </div>
    </motion.div>
  )
}
