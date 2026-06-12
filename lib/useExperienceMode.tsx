'use client'

/**
 * useExperienceMode — decides whether the portfolio shows in the lightweight
 * "Simple" 2D layout or the interactive "Immersive" 3D workstation, and lets
 * the visitor toggle between them.
 *
 * Auto-selection rules (only used until the visitor picks a mode themselves):
 *   - Immersive needs real capability: WebGL, a non-tiny screen, and no
 *     `prefers-reduced-motion`.
 *   - Even when capable, a SLOW or data-saver connection defaults to Simple so
 *     visitors on poor networks aren't forced to download the Three.js bundle.
 *   - Capable + fast  → Immersive (3D) by default.
 *
 * Once the visitor flips the toggle, their choice is remembered in
 * localStorage and auto-detection no longer overrides it.
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export type ExperienceMode = 'simple' | 'immersive'

type ExperienceModeValue = {
  /** The active mode. `null` until detection runs (first client paint). */
  mode: ExperienceMode | null
  /** Whether the device can actually render the 3D scene. */
  canRender3D: boolean
  /** Whether the connection looks slow / data-saving. */
  slowNetwork: boolean
  /** True once auto-detection has completed on the client. */
  ready: boolean
  /** Switch mode and remember the choice. */
  setMode: (mode: ExperienceMode) => void
  toggleMode: () => void
}

const STORAGE_KEY = 'portfolio-experience-mode'

const ExperienceModeContext = createContext<ExperienceModeValue | null>(null)

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}

function detectSlowNetwork(): boolean {
  // navigator.connection is non-standard but widely supported on Chromium.
  const conn = (navigator as any).connection
  if (!conn) return false
  if (conn.saveData) return true
  const slowTypes = ['slow-2g', '2g', '3g']
  if (typeof conn.effectiveType === 'string' && slowTypes.includes(conn.effectiveType)) {
    return true
  }
  // downlink is in Mbps; under ~1.5 is too slow for a comfortable 3D download.
  if (typeof conn.downlink === 'number' && conn.downlink > 0 && conn.downlink < 1.5) {
    return true
  }
  return false
}

export function ExperienceModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ExperienceMode | null>(null)
  const [canRender3D, setCanRender3D] = useState(false)
  const [slowNetwork, setSlowNetwork] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const smallScreen = window.matchMedia('(max-width: 768px)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasWebGL = detectWebGL()
    const capable = hasWebGL && !smallScreen && !reducedMotion
    const slow = detectSlowNetwork()

    setCanRender3D(capable)
    setSlowNetwork(slow)

    // A remembered choice always wins — but never strand a visitor in 3D on a
    // device that can't render it.
    let stored: ExperienceMode | null = null
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw === 'simple' || raw === 'immersive') stored = raw
    } catch {
      stored = null
    }

    let initial: ExperienceMode
    if (stored === 'immersive') {
      initial = capable ? 'immersive' : 'simple'
    } else if (stored === 'simple') {
      initial = 'simple'
    } else {
      // No stored choice → auto: 3D only when capable AND on a fast network.
      initial = capable && !slow ? 'immersive' : 'simple'
    }

    setModeState(initial)
    setReady(true)
  }, [])

  const setMode = useCallback((next: ExperienceMode) => {
    setModeState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore storage failures (private mode, etc.) */
    }
  }, [])

  const toggleMode = useCallback(() => {
    setModeState((prev) => {
      const next: ExperienceMode = prev === 'immersive' ? 'simple' : 'immersive'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  const value = useMemo<ExperienceModeValue>(
    () => ({ mode, canRender3D, slowNetwork, ready, setMode, toggleMode }),
    [mode, canRender3D, slowNetwork, ready, setMode, toggleMode],
  )

  return <ExperienceModeContext.Provider value={value}>{children}</ExperienceModeContext.Provider>
}

export function useExperienceMode(): ExperienceModeValue {
  const ctx = useContext(ExperienceModeContext)
  if (!ctx) {
    throw new Error('useExperienceMode must be used within an ExperienceModeProvider')
  }
  return ctx
}
