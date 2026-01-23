'use client'

import { motion } from 'framer-motion'
import { Github, GitBranch, Code2, Star } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export default function GitHubStats() {
  const username = siteConfig.githubUsername
  // In a real implementation, you would fetch this from GitHub API
  // For now, we'll show a placeholder that demonstrates the component structure
  
  const stats = [
    {
      icon: Code2,
      label: 'Repositories',
      value: '24+',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: GitBranch,
      label: 'Contributions',
      value: '500+',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Star,
      label: 'Stars Earned',
      value: '150+',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Github,
      label: 'Languages',
      value: '8+',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Github className="w-6 h-6 text-gray-900 dark:text-white" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            GitHub Activity
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 mb-3`}>
                  <Icon className={`w-6 h-6 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-medium"
          >
            <Github className="w-4 h-4" />
            View my GitHub profile
            <span className="text-gray-400">→</span>
          </a>
        </div>
      </motion.div>
    </div>
  )
}
