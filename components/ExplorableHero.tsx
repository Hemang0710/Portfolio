'use client'

/**
 * ExplorableHero — the 3D landing + the full-screen "open an object" experience.
 *
 *  1. First paint is instant: headline/skeleton render immediately; the heavy
 *     Three.js bundle loads lazily (next/dynamic, ssr:false).
 *  2. On phones / reduced-motion / no-WebGL it shows a clean static hero.
 *  3. Clicking a desk object flies the camera in, then opens that portfolio
 *     part FULL-SCREEN as a focused panel with a Back button (Esc also closes).
 *     The résumé object opens the PDF instead.
 */

import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Download, Sparkles } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import SectionPanel, { PANEL_TITLES, type PanelId } from './SectionPanel'
import type { HotspotId } from './Workstation3D'

const Workstation3D = dynamic(() => import('./Workstation3D'), {
  ssr: false,
  loading: () => <SceneSkeleton />,
})

function SceneSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-slate-400">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-indigo-500/30 border-t-indigo-500" />
        <span className="text-sm">Booting workstation…</span>
      </div>
    </div>
  )
}

function useCanRender3D() {
  const [ok, setOk] = useState<boolean | null>(null)
  useEffect(() => {
    const smallScreen = window.matchMedia('(max-width: 768px)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let hasWebGL = false
    try {
      const c = document.createElement('canvas')
      hasWebGL = !!(c.getContext('webgl') || c.getContext('experimental-webgl'))
    } catch {
      hasWebGL = false
    }
    setOk(hasWebGL && !smallScreen && !reducedMotion)
  }, [])
  return ok
}

export default function ExplorableHero() {
  const canRender3D = useCanRender3D()
  const [enabled, setEnabled] = useState(true)
  const [panel, setPanel] = useState<PanelId | null>(null)

  // Close the panel on Escape.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setPanel(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll while a panel is open.
  useEffect(() => {
    document.body.style.overflow = panel ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [panel])

  function handleNavigate(id: HotspotId) {
    if (id === 'resume') {
      window.open(siteConfig.links.resumePdf, '_blank')
      return
    }
    setPanel(id as PanelId)
  }

  const show3D = canRender3D && enabled

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-xl dark:border-slate-800">
      <div className="relative aspect-[16/10] w-full sm:aspect-[16/8]">
        {show3D ? (
          <Suspense fallback={<SceneSkeleton />}>
            <Workstation3D onNavigate={handleNavigate} />
          </Suspense>
        ) : (
          <StaticHero onOpen={(id) => setPanel(id)} />
        )}

        <div className="absolute right-3 top-3 z-10 flex gap-2">
          {show3D && (
            <button
              onClick={() => setEnabled(false)}
              className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs text-slate-200 backdrop-blur-md transition hover:bg-black/60"
            >
              Skip animation
            </button>
          )}
          <button
            onClick={() => setPanel('projects')}
            className="rounded-full border border-indigo-400/40 bg-indigo-500/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md transition hover:bg-indigo-500/30"
          >
            View work →
          </button>
        </div>
      </div>

      {/* ───────── Full-screen focused panel ───────── */}
      <AnimatePresence>
        {panel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-slate-50 dark:bg-slate-950"
          >
            {/* Sticky panel header with Back button */}
            <div className="sticky top-0 z-10 border-b border-slate-200 bg-slate-50/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
              <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
                <button
                  onClick={() => setPanel(null)}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">{PANEL_TITLES[panel]}</h2>
                <div className="w-[72px]" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="mx-auto max-w-5xl px-5 py-10"
            >
              <SectionPanel id={panel} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function StaticHero({ onOpen }: { onOpen: (id: PanelId) => void }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300">
        <Sparkles className="h-3.5 w-3.5" />
        AI Full-Stack &amp; GenAI Engineer
      </div>
      <h2 className="max-w-xl text-2xl font-bold text-white sm:text-3xl">
        Building LLM‑powered systems, full-stack apps &amp; data pipelines
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button onClick={() => onOpen('projects')} className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
          View Projects <ArrowRight className="h-4 w-4" />
        </button>
        <a href={siteConfig.links.resumePdf} download className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/10">
          <Download className="h-4 w-4" /> Résumé
        </a>
      </div>
    </div>
  )
}
