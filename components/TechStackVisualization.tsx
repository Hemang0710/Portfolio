'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud,
  GitBranch,
  Zap
} from 'lucide-react'

const techStack = {
  frontend: {
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    technologies: ['React', 'React Native', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
  },
  backend: {
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    technologies: ['Node.js', 'Express.js', 'Spring Boot', 'Flask', 'FastAPI', 'REST APIs'],
  },
  database: {
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    technologies: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
  },
  mobile: {
    icon: Smartphone,
    color: 'from-orange-500 to-red-500',
    technologies: ['React Native', 'Expo', 'Mobile UI/UX'],
  },
  tools: {
    icon: GitBranch,
    color: 'from-indigo-500 to-purple-500',
    technologies: ['Git/GitHub', 'AWS', 'Agile/Scrum'],
  },
  languages: {
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    technologies: ['JavaScript', 'Java', 'Python', 'PHP', '.NET'],
  },
}

export default function TechStackVisualization() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(techStack).map(([key, stack], index) => {
        const Icon = stack.icon
        return (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stack.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            
            <div className="relative">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stack.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-6 h-6 bg-gradient-to-br ${stack.color} bg-clip-text text-transparent`} />
              </div>
              
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-accent/30 hover:bg-accent/5 transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
