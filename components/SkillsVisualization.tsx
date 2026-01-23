'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Database, Code, TrendingUp, Sparkles, Cloud, GitBranch } from 'lucide-react'

interface Skill {
  name: string
  level: number
  icon: React.ElementType
  color: string
  description: string
}

const skills: Skill[] = [
  {
    name: 'Frontend Development',
    level: 85,
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    description: 'React, React Native, HTML5, CSS3, Bootstrap',
  },
  {
    name: 'Backend Development',
    level: 80,
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    description: 'Node.js, Express.js, Spring Boot, REST APIs',
  },
  {
    name: 'Full-Stack Solutions',
    level: 82,
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    description: 'MERN stack, end-to-end web applications',
  },
  {
    name: 'Databases',
    level: 78,
    icon: Sparkles,
    color: 'from-orange-500 to-red-500',
    description: 'MongoDB, MySQL, PostgreSQL, Firebase',
  },
  {
    name: 'Programming Languages',
    level: 85,
    icon: Cloud,
    color: 'from-indigo-500 to-purple-500',
    description: 'JavaScript, Java, Python, PHP, .NET',
  },
  {
    name: 'Tools & Version Control',
    level: 88,
    icon: GitBranch,
    color: 'from-gray-500 to-gray-700',
    description: 'Git/GitHub, AWS basics, Agile/Scrum',
  },
]

export default function SkillsVisualization() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => {
        const Icon = skill.icon
        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-accent/30 transition-all duration-300 hover:shadow-lg group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-10`}>
                <Icon className={`w-6 h-6 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent`} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
              />
              <div className="absolute inset-0 flex items-center justify-end pr-2">
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
            </div>

            {/* Hover Effect */}
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl pointer-events-none"
              />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
