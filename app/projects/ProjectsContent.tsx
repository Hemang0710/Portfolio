'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { siteConfig } from '@/lib/site-config'

const gh = siteConfig.links.github + '/'

const projects = [
  {
    title: 'FitFeast – Health & Nutrition Web Application',
    description: 'A comprehensive health and nutrition web application that provides BMI tracking, meal history management, and real-time nutritional insights through third-party API integrations.',
    problem: 'Users need a centralized platform to track their health metrics, meal history, and nutritional intake. Existing solutions lack integration with reliable nutritional data sources and don&apos;t provide scalable data models for user information.',
    solution: 'Built backend services and APIs to support a BMI and nutrition tracking platform using Next.js, MongoDB, and Node-based services. Designed scalable data models for users, meal history, and health metrics. Integrated third-party APIs (USDA FoodData Central, Edamam) to deliver real-time nutritional insights.',
    techStack: ['Next.js', 'MongoDB', 'Node.js', 'REST APIs', 'USDA FoodData Central API', 'Edamam API'],
    metrics: [
      { label: 'Data Models', value: '3 Core' },
      { label: 'API Integrations', value: '2' },
      { label: 'Focus', value: 'Scalability' },
    ],
    githubUrl: gh + 'fitfeast',
    architecture: `┌─────────────┐
│  Next.js UI  │
└──────┬───────┘
       │
┌──────▼───────┐
│  Node.js API │
└──────┬───────┘
       │
┌──────▼───────┐     ┌──────────────┐
│   MongoDB    │◄────┤ Third-party  │
│  Database    │     │   APIs       │
└──────────────┘     └──────────────┘`,
  },
  {
    title: 'Real Estate Listing Platform | MERN Stack',
    description: 'A full-stack real estate platform that aggregates and analyzes large housing datasets, providing analytics results through APIs and visualization tools.',
    problem: 'Real estate platforms need efficient ways to process large housing datasets, perform analytics, and serve results to visualization tools. Existing solutions lack optimized backend architecture and ETL workflows.',
    solution: 'Developed backend logic for aggregating and analyzing large housing datasets. Designed ETL workflows and APIs to serve analytics results to visualization tools. Focused on performance optimization and clean backend architecture using the MERN stack.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'ETL Workflows', 'REST APIs'],
    metrics: [
      { label: 'Stack', value: 'MERN' },
      { label: 'Focus', value: 'Performance' },
      { label: 'Architecture', value: 'Clean' },
    ],
    githubUrl: gh + 'real-estate-platform',
    architecture: `Housing Datasets
         │
    ┌────▼────┐
    │  ETL    │
    │Workflows│
    └────┬────┘
         │
    ┌────▼────┐
    │Backend  │
    │  Logic  │
    └────┬────┘
         │
    ┌────▼────┐     ┌──────────────┐
    │   APIs  │────►│Visualization│
    │         │     │    Tools    │
    └─────────┘     └──────────────┘`,
  },
]

export default function ProjectsContent() {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="heading-1 mb-6">Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Full-stack web applications built with modern technologies
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

