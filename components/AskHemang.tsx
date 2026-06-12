'use client'

/**
 * AskHemang — a small, offline chatbot that answers questions about Hemang
 * using the shared portfolio data. No backend, no API key, no cost: answers are
 * matched from the portfolio content with simple keyword scoring, so it can't
 * hallucinate or go off-topic. (Easy to upgrade later to a real LLM endpoint.)
 */

import { useEffect, useRef, useState } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'
import {
  skillGroups,
  projectCategories,
  experience,
  education,
} from '@/lib/portfolio-data'
import { siteConfig } from '@/lib/site-config'

type Msg = { from: 'bot' | 'user'; text: string }

const GREETING =
  "Hi! I'm Hemang's assistant. Ask me about his skills, projects, experience, or how to get in touch. Try a suggestion below 👇"

const SUGGESTIONS = [
  'What are your skills?',
  'Tell me about your AI projects',
  'What is your experience?',
  'How can I contact you?',
]

/* Build answers from the portfolio data so they always match the site. */
function buildAnswer(raw: string): string {
  const q = raw.toLowerCase()
  const has = (...words: string[]) => words.some((w) => q.includes(w))

  if (has('hi', 'hello', 'hey', 'yo ')) {
    return "Hey! Ask me about Hemang's skills, AI/ML projects, experience, education, or contact info."
  }

  if (has('contact', 'email', 'reach', 'hire', 'available', 'availability', 'job', 'role', 'opportunit')) {
    return `Hemang is open to AI Full-Stack, GenAI, and ML roles (${siteConfig.location}). Email: ${siteConfig.links.email} · LinkedIn: ${siteConfig.links.linkedin} · GitHub: ${siteConfig.links.github}.`
  }

  if (has('experience', 'work', 'job history', 'career', 'employ')) {
    const lines = experience.map((j) => `• ${j.role} at ${j.company} (${j.period})`).join('\n')
    return `Hemang has 3+ years of experience:\n${lines}\nHe also holds ${education.map((e) => e.title).join(' and ')}.`
  }

  if (has('education', 'study', 'studied', 'degree', 'college', 'school', 'gpa')) {
    return education.map((e) => `${e.title} — ${e.school} (${e.detail}).`).join('\n')
  }

  if (has('ai', 'ml', 'genai', 'llm', 'rag', 'machine learning')) {
    const ai = projectCategories.find((c) => c.id === 'ai')
    const list = ai ? ai.projects.map((p) => `• ${p.title} — ${p.blurb}`).join('\n') : ''
    return `Hemang focuses on GenAI/ML: RAG pipelines, LLM observability, OpenAI APIs, and PyTorch/LSTM. Featured AI projects:\n${list}`
  }

  if (has('project', 'built', 'made', 'portfolio', 'github', 'app')) {
    const list = projectCategories
      .map((c) => `${c.label}: ${c.projects.map((p) => p.title).join(', ')}`)
      .join('\n')
    return `Here's the project lineup by area:\n${list}\nAsk about any one for details, or open the Projects panel for GitHub links.`
  }

  if (has('skill', 'tech', 'stack', 'language', 'framework', 'tools', 'know')) {
    const list = skillGroups.map((g) => `${g.title}: ${g.items.map((i) => i.name).join(', ')}`).join('\n')
    return `Hemang's stack:\n${list}`
  }

  if (has('who', 'about', 'yourself', 'background', 'summary')) {
    return 'Hemang Patel is an AI Full-Stack & GenAI Engineer with 3+ years building production web apps and LLM-powered systems, based in Toronto. He works across React/Next.js, Node/FastAPI, and the AI layer (RAG, OpenAI, observability).'
  }

  // Try to match a specific project by title keyword.
  for (const cat of projectCategories) {
    for (const p of cat.projects) {
      const key = p.title.toLowerCase().split(/[^a-z]+/).filter((w) => w.length > 3)
      if (key.some((k) => q.includes(k))) {
        return `${p.title}: ${p.blurb}\nTech: ${p.tags.join(', ')}.\nRepo: ${p.href}`
      }
    }
  }

  return "I can answer questions about Hemang's skills, AI/ML projects, experience, education, and contact details. Try one of the suggestions, or ask e.g. \"What's your tech stack?\""
}

export default function AskHemang() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([{ from: 'bot', text: GREETING }])
  const [value, setValue] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  function send(text: string) {
    const q = text.trim()
    if (!q) return
    setValue('')
    setMessages((m) => [...m, { from: 'user', text: q }])
    // Tiny delay so it feels like a reply, not an echo.
    window.setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: buildAnswer(q) }])
    }, 280)
  }

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-[90] inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-700"
          aria-label="Open chat with Hemang's assistant"
        >
          <MessageCircle className="h-5 w-5" />
          Ask Hemang
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-5 right-5 z-[90] flex h-[30rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
          {/* Header */}
          <div className="flex items-center justify-between bg-indigo-600 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <Bot className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Ask Hemang</div>
                <div className="text-[11px] text-indigo-100">Answers from the portfolio</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-md p-1 hover:bg-white/15">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-3 py-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.from === 'user'
                      ? 'rounded-br-sm bg-indigo-600 text-white'
                      : 'rounded-bl-sm bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Suggestions (only before the user has asked anything) */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(value)
            }}
            className="flex items-center gap-2 border-t border-slate-200 p-3 dark:border-slate-800"
          >
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Ask about skills, projects…"
              aria-label="Message"
              className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
            <button
              type="submit"
              aria-label="Send"
              className="rounded-lg bg-indigo-600 p-2 text-white transition hover:bg-indigo-700"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
