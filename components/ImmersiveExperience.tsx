'use client'

/**
 * ImmersiveExperience — the full-screen 3D mode.
 *
 * The workstation fills the viewport; each desk object is a hotspot. Clicking
 * one flies the camera in and opens that portfolio part as a focused full-screen
 * panel (résumé opens the PDF). This is the "explore by clicking" experience —
 * the same Workstation3D + SectionPanel used by the hero, promoted to the whole
 * page.
 *
 * Three.js is loaded lazily (ssr:false). If WebGL is unavailable, a clean
 * clickable fallback grid is shown instead so the mode still works.
 */

import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, Download, Box, MousePointerClick } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import SectionPanel, { PANEL_TITLES, type PanelId } from './SectionPanel'
import { HOTSPOTS, type HotspotId } from './Workstation3D'

const Workstation3D = dynamic(() => import('./Workstation3D'), {
  ssr: false,
  loading: () => <SceneSkeleton />,
})

function SceneSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-3 text-slate-400">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-indigo-500/30 border-t-indigo-500" />
        <span className="text-sm">Booting workstation…</span>
      </div>
    </div>
  )
}

function useHasWebGL() {
  const [ok, setOk] = useState<boolean | null>(null)
  useEffect(() => {
    let has = false
    try {
      const c = document.createElement('canvas')
      has = !!(c.getContext('webgl') || c.getContext('experimental-webgl'))
    } catch {
      has = false
    }
    setOk(has)
  }, [])
  return ok
}

export default function ImmersiveExperience() {
  const hasWebGL = useHasWebGL()
  const [panel, setPanel] = useState<PanelId | null>(null)
  const [showIntro, setShowIntro] = useState(true)

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

  return (
    <div className="relative h-[calc(100vh-64px)] min-h-[520px] w-full overflow-hidden bg-slate-950">
      {hasWebGL === null ? (
        <SceneSkeleton />
      ) : hasWebGL ? (
        <Suspense fallback={<SceneSkeleton />}>
          <Workstation3D onNavigate={handleNavigate} />
        </Suspense>
      ) : (
        <WebGLFallback onOpen={(id) => handleNavigate(id)} />
      )}

      {/* One-time intro hint */}
      <AnimatePresence>
        {showIntro && hasWebGL && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="pointer-events-none absolute inset-x-0 top-6 z-10 flex justify-center px-4"
          >
            <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-slate-200 backdrop-blur-md">
              <MousePointerClick className="h-4 w-4 text-indigo-300" />
              Click an object on the desk to explore — monitor, laptop, books, briefcase, mug.
              <button
                onClick={() => setShowIntro(false)}
                className="ml-1 rounded-full px-2 py-0.5 text-xs text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                Got it
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <div className="sticky top-0 z-10 border-b border-slate-200 bg-slate-50/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
              <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
                <button
                  onClick={() => setPanel(null)}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to desk
                </button>
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">{PANEL_TITLES[panel]}</h2>
                <div className="w-[110px]" />
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

/* Clickable fallback when WebGL is unavailable but the visitor chose 3D mode. */
function WebGLFallback({ onOpen }: { onOpen: (id: HotspotId) => void }) {
  const tiles = (Object.keys(HOTSPOTS) as HotspotId[]).map((id) => HOTSPOTS[id])
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-10 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300">
        <Box className="h-3.5 w-3.5" /> Interactive explorer
      </div>
      <p className="max-w-md text-sm text-slate-400">
        3D isn&apos;t available on this browser, but you can still explore each part of the portfolio.
      </p>
      <div className="grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
        {tiles.map((t) => (
          <button
            key={t.id}
            onClick={() => onOpen(t.id)}
            className="group rounded-xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-indigo-400/40 hover:bg-indigo-500/10"
          >
            <div className="font-semibold text-white">{t.label}</div>
            <div className="mt-1 text-xs text-slate-400">{t.hint}</div>
          </button>
        ))}
      </div>
      <a
        href={siteConfig.links.resumePdf}
        download
        className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/10"
      >
        <Download className="h-4 w-4" /> Download Résumé
      </a>
    </div>
  )
}
