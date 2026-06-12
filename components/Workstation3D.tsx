'use client'

/**
 * Workstation3D — the interactive 3D landing scene.
 *
 * A low-poly developer desk built with React Three Fiber. Each object on the
 * desk is a "hotspot": hovering highlights it, clicking flies the camera toward
 * it and then fires `onNavigate(target)` so the page can scroll to the matching
 * section (or open the resume).
 *
 * This file is imported lazily (ssr:false) by ExplorableHero, so Three.js never
 * runs on the server or blocks first paint.
 */

import { Canvas, useFrame, useThree, type ThreeEvent } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

/* Each clickable object maps to a place on the site. */
export type HotspotId = 'projects' | 'about' | 'skills' | 'experience' | 'contact' | 'resume'

export type HotspotMeta = { id: HotspotId; label: string; hint: string }

export const HOTSPOTS: Record<HotspotId, HotspotMeta> = {
  projects: { id: 'projects', label: 'Projects', hint: 'Open the monitor — see what I shipped' },
  about: { id: 'about', label: 'About', hint: 'The open laptop — who I am' },
  skills: { id: 'skills', label: 'Skills', hint: 'The book stack — my tech stack' },
  experience: { id: 'experience', label: 'Experience', hint: 'The briefcase — where I worked' },
  contact: { id: 'contact', label: 'Contact', hint: 'The coffee mug — say hi' },
  resume: { id: 'resume', label: 'Résumé', hint: 'The page — download my CV' },
}

const ACCENT = '#6366F1'
const EMERALD = '#10B981'

/* ───────────────────────── Hotspot wrapper ─────────────────────────
 * Wraps any 3D children, adds hover scaling + emissive glow, and reports
 * hover / click events up to the scene. We don't put the material here —
 * children bring their own — so we drive the "glow" via a group scale and
 * a colored point light that turns on while hovered.                      */
function Hotspot({
  id,
  position,
  hovered,
  setHovered,
  onSelect,
  children,
}: {
  id: HotspotId
  position: [number, number, number]
  hovered: HotspotId | null
  setHovered: (id: HotspotId | null) => void
  onSelect: (id: HotspotId) => void
  children: React.ReactNode
}) {
  const group = useRef<THREE.Group>(null)
  const isHot = hovered === id

  useFrame(() => {
    if (!group.current) return
    // Smoothly scale up when hovered (lerp toward target for a soft feel).
    const target = isHot ? 1.08 : 1
    group.current.scale.lerp(new THREE.Vector3(target, target, target), 0.15)
  })

  return (
    <group
      ref={group}
      position={position}
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation()
        setHovered(id)
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation()
        setHovered(null)
        document.body.style.cursor = 'auto'
      }}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation()
        onSelect(id)
      }}
    >
      {/* A soft accent light that fades in while hovered, giving the "selected" glow */}
      <pointLight color={ACCENT} intensity={isHot ? 6 : 0} distance={3} position={[0, 0.6, 0.4]} />
      {children}
    </group>
  )
}

/* ───────────────────────── Static desk props (non-interactive) ───────────────────────── */
function Desk() {
  return (
    <group>
      {/* Desk top */}
      <mesh position={[0, -0.15, 0]} receiveShadow>
        <boxGeometry args={[7, 0.3, 3.2]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Back wall glow strip for depth */}
      <mesh position={[0, 1.6, -1.7]}>
        <planeGeometry args={[9, 4]} />
        <meshStandardMaterial color="#0f172a" roughness={1} />
      </mesh>
    </group>
  )
}

/* ───────────────────────── The interactive scene ───────────────────────── */
function Scene({
  hovered,
  setHovered,
  onNavigate,
}: {
  hovered: HotspotId | null
  setHovered: (id: HotspotId | null) => void
  onNavigate: (id: HotspotId) => void
}) {
  const { camera } = useThree()
  const deskGroup = useRef<THREE.Group>(null)
  // Camera animation target. When null, the camera rests at its home position.
  const flyTo = useRef<THREE.Vector3 | null>(null)
  const home = useMemo(() => new THREE.Vector3(0, 2.1, 6.2), [])
  const lookTarget = useMemo(() => new THREE.Vector3(0, 0.5, 0), [])

  // Map each hotspot to a camera "close-up" position.
  const closeUps: Record<HotspotId, THREE.Vector3> = useMemo(
    () => ({
      projects: new THREE.Vector3(0, 1.4, 3.2),
      about: new THREE.Vector3(-1.6, 1.1, 3.0),
      skills: new THREE.Vector3(1.9, 1.0, 3.0),
      experience: new THREE.Vector3(2.4, 1.0, 3.2),
      contact: new THREE.Vector3(-2.4, 1.0, 3.2),
      resume: new THREE.Vector3(1.0, 1.0, 2.8),
    }),
    [],
  )

  function handleSelect(id: HotspotId) {
    // Start a camera fly-in, then navigate once it's close.
    flyTo.current = closeUps[id]
    window.setTimeout(() => {
      onNavigate(id)
      flyTo.current = null // release camera back home after navigating
    }, 700)
  }

  useFrame((state) => {
    // Gentle parallax: the desk tilts slightly toward the mouse.
    if (deskGroup.current) {
      const mx = state.pointer.x * 0.15
      const my = state.pointer.y * 0.08
      deskGroup.current.rotation.y = THREE.MathUtils.lerp(deskGroup.current.rotation.y, mx, 0.05)
      deskGroup.current.rotation.x = THREE.MathUtils.lerp(deskGroup.current.rotation.x, -my, 0.05)
    }
    // Camera easing toward either the fly-in target or its home position.
    const dest = flyTo.current ?? home
    camera.position.lerp(dest, 0.06)
    camera.lookAt(lookTarget)
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 4]} intensity={1.1} castShadow />
      <pointLight position={[-4, 3, 2]} intensity={20} color={ACCENT} distance={14} />
      <pointLight position={[4, 2, 3]} intensity={14} color={EMERALD} distance={14} />

      <group ref={deskGroup}>
        <Desk />

        {/* MONITOR → Projects */}
        <Hotspot id="projects" position={[0, 0.4, -0.2]} hovered={hovered} setHovered={setHovered} onSelect={handleSelect}>
          <mesh position={[0, 0.55, 0]}>
            <boxGeometry args={[2.1, 1.2, 0.08]} />
            <meshStandardMaterial color="#0b1220" roughness={0.4} />
          </mesh>
          {/* Glowing screen face */}
          <mesh position={[0, 0.55, 0.05]}>
            <planeGeometry args={[1.9, 1.02]} />
            <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={hovered === 'projects' ? 1.4 : 0.8} />
          </mesh>
          {/* Stand */}
          <mesh position={[0, -0.15, 0]}>
            <cylinderGeometry args={[0.08, 0.12, 0.4, 12]} />
            <meshStandardMaterial color="#334155" metalness={0.6} roughness={0.3} />
          </mesh>
          <mesh position={[0, -0.34, 0]}>
            <boxGeometry args={[0.7, 0.05, 0.4]} />
            <meshStandardMaterial color="#334155" metalness={0.6} roughness={0.3} />
          </mesh>
        </Hotspot>

        {/* LAPTOP → About */}
        <Hotspot id="about" position={[-1.9, 0.0, 0.7]} hovered={hovered} setHovered={setHovered} onSelect={handleSelect}>
          {/* base */}
          <mesh position={[0, 0, 0]} rotation={[0, 0.4, 0]}>
            <boxGeometry args={[1.1, 0.06, 0.75]} />
            <meshStandardMaterial color="#475569" metalness={0.5} roughness={0.4} />
          </mesh>
          {/* screen */}
          <mesh position={[-0.18, 0.32, -0.28]} rotation={[-1.2, 0.4, 0]}>
            <boxGeometry args={[1.1, 0.7, 0.04]} />
            <meshStandardMaterial color="#0b1220" emissive={EMERALD} emissiveIntensity={hovered === 'about' ? 0.9 : 0.4} />
          </mesh>
        </Hotspot>

        {/* BOOK STACK → Skills */}
        <Hotspot id="skills" position={[2.0, 0.05, 0.4]} hovered={hovered} setHovered={setHovered} onSelect={handleSelect}>
          {[
            { y: 0.0, c: '#6366F1', r: 0.0 },
            { y: 0.16, c: '#10B981', r: 0.18 },
            { y: 0.32, c: '#f59e0b', r: -0.12 },
          ].map((b, i) => (
            <mesh key={i} position={[0, b.y, 0]} rotation={[0, b.r, 0]}>
              <boxGeometry args={[0.9, 0.14, 0.65]} />
              <meshStandardMaterial color={b.c} roughness={0.6} />
            </mesh>
          ))}
        </Hotspot>

        {/* BRIEFCASE → Experience */}
        <Hotspot id="experience" position={[2.7, 0.05, -0.5]} hovered={hovered} setHovered={setHovered} onSelect={handleSelect}>
          <mesh position={[0, 0.18, 0]}>
            <boxGeometry args={[0.85, 0.55, 0.28]} />
            <meshStandardMaterial color="#7c4a2d" roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.5, 0]}>
            <boxGeometry args={[0.28, 0.12, 0.06]} />
            <meshStandardMaterial color="#3a2316" />
          </mesh>
        </Hotspot>

        {/* COFFEE MUG → Contact */}
        <Hotspot id="contact" position={[-2.6, 0.05, -0.2]} hovered={hovered} setHovered={setHovered} onSelect={handleSelect}>
          <mesh position={[0, 0.22, 0]}>
            <cylinderGeometry args={[0.22, 0.18, 0.44, 20]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.3} />
          </mesh>
          <mesh position={[0.26, 0.22, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.12, 0.035, 12, 24]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.3} />
          </mesh>
          {/* coffee surface */}
          <mesh position={[0, 0.43, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.2, 20]} />
            <meshStandardMaterial color="#3b2417" />
          </mesh>
        </Hotspot>

        {/* RÉSUMÉ PAGE → Resume PDF */}
        <Hotspot id="resume" position={[1.0, -0.05, 1.0]} hovered={hovered} setHovered={setHovered} onSelect={handleSelect}>
          <mesh rotation={[-Math.PI / 2, 0, 0.25]}>
            <planeGeometry args={[0.62, 0.82]} />
            <meshStandardMaterial color="#f8fafc" side={THREE.DoubleSide} roughness={0.9} />
          </mesh>
          {/* faux text lines */}
          {[0.22, 0.12, 0.02, -0.08, -0.18].map((z, i) => (
            <mesh key={i} position={[0, 0.001, z]} rotation={[-Math.PI / 2, 0, 0.25]}>
              <planeGeometry args={[i === 0 ? 0.3 : 0.46, 0.025]} />
              <meshStandardMaterial color="#94a3b8" />
            </mesh>
          ))}
        </Hotspot>
      </group>
    </>
  )
}

export default function Workstation3D({ onNavigate }: { onNavigate: (id: HotspotId) => void }) {
  const [hovered, setHovered] = useState<HotspotId | null>(null)

  return (
    <div className="relative h-full w-full">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 2.1, 6.2], fov: 45 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#0a0f1e']} />
        <fog attach="fog" args={['#0a0f1e', 7, 16]} />
        <Scene hovered={hovered} setHovered={setHovered} onNavigate={onNavigate} />
      </Canvas>

      {/* Hover label overlay (HTML, not WebGL — crisp text + accessible) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
        <div
          className={`rounded-full border px-4 py-2 text-sm backdrop-blur-md transition-all duration-200 ${
            hovered
              ? 'border-accent/40 bg-accent/15 text-white opacity-100 translate-y-0'
              : 'border-white/10 bg-white/5 text-gray-300 opacity-80'
          }`}
        >
          {hovered ? (
            <span>
              <span className="font-semibold text-accent-light">{HOTSPOTS[hovered].label}</span> — {HOTSPOTS[hovered].hint}
            </span>
          ) : (
            <span>Hover the desk · click an object to explore</span>
          )}
        </div>
      </div>
    </div>
  )
}
