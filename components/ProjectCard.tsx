'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowRight, Code2, TrendingUp } from 'lucide-react'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  problem: string
  solution: string
  techStack: string[]
  metrics?: {
    label: string
    value: string
  }[]
  githubUrl?: string
  demoUrl?: string
  architecture?: string
}

export default function ProjectCard({
  title,
  description,
  problem,
  solution,
  techStack,
  metrics,
  githubUrl,
  demoUrl,
  architecture,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group card-hover overflow-hidden"
    >
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                <Code2 className="w-5 h-5 text-accent" />
              </div>
              <h3 className="heading-3 text-xl text-gray-900 dark:text-white">{title}</h3>
            </div>
          </div>
          <div className="flex gap-2 ml-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-200 hover:scale-110 active:scale-95 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                aria-label="View on GitHub"
              >
                <Github className="w-4.5 h-4.5 text-gray-600 dark:text-gray-400" />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-200 hover:scale-110 active:scale-95 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                aria-label="View live demo"
              >
                <ExternalLink className="w-4.5 h-4.5 text-gray-600 dark:text-gray-400" />
              </a>
            )}
          </div>
        </div>

        <p className="text-body-sm mb-8 leading-relaxed">{description}</p>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Challenge</h4>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{problem}</p>
          </div>

          <div className="p-5 rounded-xl bg-green-50/50 dark:bg-green-950/20 border border-green-100 dark:border-green-900/30">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Approach</h4>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{solution}</p>
          </div>
        </div>

        {/* Architecture */}
        {architecture && (
          <div className="mb-8 p-5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Architecture</h4>
            </div>
            <pre className="text-xs text-gray-600 dark:text-gray-400 whitespace-pre-wrap font-mono leading-relaxed">
              {architecture}
            </pre>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-4">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-3.5 py-1.5 bg-gradient-to-br from-accent/10 to-accent/5 text-accent rounded-lg text-xs font-medium border border-accent/20 hover:border-accent/40 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="p-6 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
            <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-5 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              Impact & Results
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl font-bold text-accent mb-1">{metric.value}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
