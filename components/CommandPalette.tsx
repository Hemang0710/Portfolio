'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  User,
  FolderGit2,
  BarChart3,
  FileText,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

type Action = {
  id: string
  label: string
  icon: LucideIcon
  href?: string
  external?: boolean
  keywords: string[]
}

const actions: Action[] = [
  { id: 'home', label: 'Home', icon: Home, href: '/', keywords: ['home', 'hi'] },
  { id: 'about', label: 'About', icon: User, href: '/about', keywords: ['about', 'me', 'bio'] },
  { id: 'projects', label: 'Projects', icon: FolderGit2, href: '/projects', keywords: ['projects', 'work', 'portfolio'] },
  { id: 'resume', label: 'Resume', icon: FileText, href: '/resume', keywords: ['resume', 'cv'] },
  { id: 'contact', label: 'Contact', icon: Mail, href: '/contact', keywords: ['contact', 'hire', 'email'] },
  {
    id: 'github',
    label: 'Open GitHub',
    icon: Github,
    href: siteConfig.links.github,
    external: true,
    keywords: ['github', 'code', 'repo'],
  },
  {
    id: 'linkedin',
    label: 'Open LinkedIn',
    icon: Linkedin,
    href: siteConfig.links.linkedin,
    external: true,
    keywords: ['linkedin', 'profile', 'connect'],
  },
]

function matchQuery(action: Action, q: string): boolean {
  if (!q.trim()) return true
  const lower = q.toLowerCase()
  if (action.label.toLowerCase().includes(lower)) return true
  return action.keywords.some((k) => k.includes(lower) || lower.includes(k))
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const router = useRouter()

  const filtered = actions.filter((a) => matchQuery(a, query))
  const current = filtered[selected]

  const run = useCallback(
    (action: Action) => {
      if (!action.href) return
      setOpen(false)
      setQuery('')
      setSelected(0)
      if (action.external) {
        window.open(action.href, '_blank')
      } else {
        router.push(action.href)
      }
    },
    [router]
  )

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
        return
      }
      if (!open) return
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelected((s) => (s + 1) % filtered.length)
        return
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelected((s) => (s - 1 + filtered.length) % filtered.length)
        return
      }
      if (e.key === 'Enter' && current) {
        e.preventDefault()
        run(current)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, filtered.length, current, run])

  useEffect(() => {
    setSelected(0)
  }, [query])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-sm hover:border-accent/50 hover:text-accent transition-colors"
        aria-label="Open command palette"
      >
        <kbd className="font-mono text-xs">⌘K</kbd>
        <span>Search...</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ type: 'spring', duration: 0.25 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 z-[101] overflow-hidden"
              role="dialog"
              aria-label="Command palette"
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                <span className="text-gray-400 dark:text-gray-500">⌘K</span>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Navigate, search, or open links..."
                  className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
                  autoFocus
                />
              </div>
              <div className="max-h-80 overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400 text-sm">
                    No results
                  </div>
                ) : (
                  filtered.map((action, i) => {
                    const Icon = action.icon
                    const isSelected = i === selected
                    return (
                      <button
                        key={action.id}
                        type="button"
                        onClick={() => run(action)}
                        onMouseEnter={() => setSelected(i)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                          isSelected
                            ? 'bg-accent/10 text-accent'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                        }`}
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                        <span className="font-medium">{action.label}</span>
                        {action.external && (
                          <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
                        )}
                      </button>
                    )
                  })
                )}
              </div>
              <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
