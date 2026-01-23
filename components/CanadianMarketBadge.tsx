'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Briefcase, CheckCircle } from 'lucide-react'

export default function CanadianMarketBadge() {
  const badges = [
    {
      icon: MapPin,
      label: 'Based in Ontario',
      description: 'Toronto, Canada',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Briefcase,
      label: 'Work Authorization',
      description: 'Open Work Permit',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Clock,
      label: 'Timezone',
      description: 'EST (UTC-5)',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: CheckCircle,
      label: 'Available',
      description: 'Open to opportunities',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => {
        const Icon = badge.icon
        return (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-accent/30 transition-all duration-300 group"
          >
            <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${badge.color} bg-opacity-10 mb-3`}>
              <Icon className={`w-5 h-5 bg-gradient-to-br ${badge.color} bg-clip-text text-transparent`} />
            </div>
            <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
              {badge.label}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {badge.description}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}
