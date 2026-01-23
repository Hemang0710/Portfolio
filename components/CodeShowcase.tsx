'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Copy, Check, Code2 } from 'lucide-react'

interface CodeSnippet {
  language: string
  title: string
  code: string
  description: string
}

const codeSnippets: CodeSnippet[] = [
  {
    language: 'React',
    title: 'Component with Hooks',
    description: 'Modern React component with state management and API integration',
    code: `import { useState, useEffect } from 'react'
import axios from 'axios'

interface User {
  id: string
  name: string
  email: string
}

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/users/me')
        setUser(response.data)
      } catch (error) {
        console.error('Failed to fetch user:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  if (loading) return <div>Loading...</div>
  if (!user) return <div>User not found</div>

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  )
}`,
  },
  {
    language: 'Node.js',
    title: 'Express API Route',
    description: 'RESTful API endpoint with MongoDB integration',
    code: `const express = require('express')
const router = express.Router()
const { MongoClient } = require('mongodb')

// GET /api/users/:id
router.get('/:id', async (req, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db('app')
    const user = await db.collection('users')
      .findOne({ _id: req.params.id })
    
    if (!user) {
      return res.status(404).json({ 
        error: 'User not found' 
      })
    }
    
    res.json(user)
    client.close()
  } catch (error) {
    console.error('Database error:', error)
    res.status(500).json({ 
      error: 'Internal server error' 
    })
  }
})

// POST /api/users
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body
    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db('app')
    
    const result = await db.collection('users')
      .insertOne({ name, email, createdAt: new Date() })
    
    res.status(201).json({ 
      id: result.insertedId,
      message: 'User created successfully' 
    })
    client.close()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router`,
  },
  {
    language: 'Next.js',
    title: 'Server Component',
    description: 'Next.js 13+ server component with database query',
    code: `import { connectToDatabase } from '@/lib/mongodb'

interface Project {
  _id: string
  title: string
  description: string
  techStack: string[]
}

export default async function ProjectsPage() {
  const { db } = await connectToDatabase()
  const projects = await db
    .collection('projects')
    .find({})
    .sort({ createdAt: -1 })
    .limit(10)
    .toArray()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project: Project) => (
        <div 
          key={project._id}
          className="p-6 bg-white rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-bold mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-blue-100 
                         text-blue-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}`,
  },
]

export default function CodeShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(codeSnippets[activeIndex].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden border border-gray-800 shadow-2xl"
      >
        {/* Header */}
        <div className="bg-gray-800 dark:bg-gray-900 px-6 py-4 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-300 font-medium">
                {codeSnippets[activeIndex].title}
              </span>
            </div>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm text-gray-300"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-gray-800 dark:bg-gray-900 px-6 py-3 border-b border-gray-700 flex gap-2 overflow-x-auto">
          {codeSnippets.map((snippet, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeIndex === index
                  ? 'bg-accent text-white'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
              }`}
            >
              {snippet.language} - {snippet.title}
            </button>
          ))}
        </div>

        {/* Code Display */}
        <div className="p-6 bg-gray-950">
          <p className="text-sm text-gray-400 mb-4">
            {codeSnippets[activeIndex].description}
          </p>
          <motion.pre
            key={activeIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-gray-300 font-mono overflow-x-auto"
          >
            <code>{codeSnippets[activeIndex].code}</code>
          </motion.pre>
        </div>
      </motion.div>
    </div>
  )
}
