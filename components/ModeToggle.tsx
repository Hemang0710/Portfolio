'use client'

/**
 * ModeToggle — a floating pill that switches between the Simple (2D) layout and
 * the Immersive (3D) workstation. Visible in both modes.
 *
 * It reflects the auto-decision too: if the network is slow or the device can't
 * render 3D, the 3D option is annotated so the visitor understands why Simple
 * was chosen for them — but they can still opt in.
 */

import { useExperienceMode } from '@/lib/useExperienceMode'
import { Box, LayoutGrid, Info } from 'lucide-react'
import { useState } from 'react'

export default function ModeToggle() {
  const { mode, setMode, canRender3D, slowNetwork, ready } = useExperienceMode()
  const [showHint, setShowHint] = useState(false)

  // Don't render until detection is done to avoid a flash of the wrong state.
  if (!ready || !mode) return null

  const reason = !canRender3D
    ? 'Your device or browser may not support 3D smoothly.'
    : slowNetwork
      ? 'We detected a slow connection, so Simple is the default.'
      : null

  return (
    <div className="fixed bottom-5 left-1/2 z-[90] -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/90 p-1 shadow-lg backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/90">
        <button
          onClick={() => setMode('simple')}
          aria-pressed={mode === 'simple'}
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
            mode === 'simple'
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
          }`}
        >
          <LayoutGrid className="h-4 w-4" />
          Simple
        </button>

        <button
          onClick={() => setMode('immersive')}
          aria-pressed={mode === 'immersive'}
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
            mode === 'immersive'
              ? 'bg-gradient-to-r from-indigo-600 to-emerald-500 text-white'
              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
          }`}
        >
          <Box className="h-4 w-4" />
          3D
        </button>

        {reason && (
          <div
            className="relative"
            onMouseEnter={() => setShowHint(true)}
            onMouseLeave={() => setShowHint(false)}
          >
            <button
              aria-label="Why is Simple recommended?"
              onClick={() => setShowHint((s) => !s)}
              className="ml-0.5 mr-1 flex h-6 w-6 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800"
            >
              <Info className="h-4 w-4" />
            </button>
            {showHint && (
              <div className="absolute bottom-9 left-1/2 w-56 -translate-x-1/2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs leading-relaxed text-slate-600 shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                {reason} You can still switch to 3D.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
