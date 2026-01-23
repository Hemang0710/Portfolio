'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, MapPin, Calendar, Heart, Coffee, Code2 } from 'lucide-react'
import SkillsVisualization from '@/components/SkillsVisualization'
import GitHubStats from '@/components/GitHubStats'

const timeline = [
  {
    type: 'education',
    title: 'The Humber College Institute of Technology & Advanced Learning',
    subtitle: 'Ontario Graduate Certificate – Information Technology Solutions',
    location: 'Toronto, Ontario',
    period: 'Jan 2024 - August 2025',
    description: 'Relevant Courses: Web Programming & Frameworks, Database Systems, Machine Learning, Big Data, Cloud Computing. Gained hands-on experience in full-stack development and modern web technologies.',
    icon: GraduationCap,
  },
  {
    type: 'experience',
    title: 'Full Stack Developer (Co-op)',
    subtitle: 'PopIn',
    location: 'Ontario, Canada',
    period: 'April 2025 – Sep 2025',
    description: 'Built Python-based web scraping pipelines to collect and process event-related data. Developed front-end using Expo (React Native) for responsive user experience. Collaborated with cross-functional teams to integrate APIs and streamline event management features.',
    icon: Briefcase,
  },
  {
    type: 'experience',
    title: 'Web Developer',
    subtitle: 'Techmicra IT Solutions',
    location: 'Ahmedabad, India',
    period: 'Jan 2021 – Sep 2023',
    description: 'Built responsive web apps using React, JavaScript, and Bootstrap. Integrated Firebase and REST APIs for secure data transactions. Implemented AI-driven features such as recommendation engines.',
    icon: Briefcase,
  },
  {
    type: 'education',
    title: 'Gujarat Technological University',
    subtitle: 'Bachelor\'s in Engineering – Computer Engineering',
    location: 'Gujarat, India',
    period: 'Aug 2018 – July 2021',
    description: 'Relevant Courses: Advanced Java, Python, MySQL, Data Structure and Design Patterns, Data Algorithms. Built strong foundation in programming and software engineering principles.',
    icon: GraduationCap,
  },
  {
    type: 'volunteer',
    title: 'Web Developer Volunteer',
    subtitle: 'Rise UP (Yogi Divine Society Canada)',
    location: 'Ontario, Canada',
    period: 'Apr 2024 - Present',
    description: 'Developed web applications to support community initiatives. Enhanced UI/UX and backend systems using JavaScript and PHP.',
    icon: Heart,
  },
]

const techCategories = [
  {
    category: 'Frontend',
    technologies: ['HTML5', 'CSS3', 'React', 'React Native', 'Bootstrap', 'JavaScript'],
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Express.js', 'Spring Boot', 'RESTful APIs', 'Flask', 'FastAPI'],
  },
  {
    category: 'Databases',
    technologies: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
  },
  {
    category: 'Programming Languages',
    technologies: ['JavaScript', 'Java', 'Python', 'PHP', '.NET'],
  },
  {
    category: 'Tools & Cloud',
    technologies: ['Git/GitHub', 'AWS (basic)', 'Agile/Scrum'],
  },
  {
    category: 'Concepts',
    technologies: ['OOP', 'Data Structures', 'REST APIs', 'Web Scraping'],
  },
]

export default function AboutContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-1 mb-6">
              <span className="gradient-text">About Me</span>
            </h1>
            <p className="text-body mb-8 max-w-2xl mx-auto">
              Hey! I&apos;m <span className="font-semibold text-gray-900 dark:text-gray-100">Hemang</span>, an entry-level Full-Stack Developer 
              passionate about building scalable, user-friendly web applications using React, Node.js, and modern web technologies.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Ontario, Canada</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                <Code2 className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Open to Opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="section-padding-sm bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-8">My Story</h2>
              <div className="space-y-6">
                <p className="text-body">
                  I&apos;m an entry-level Full-Stack Developer with hands-on experience building web applications 
                  using React, Node.js, Express, REST APIs, and SQL/NoSQL databases. My journey began with a 
                  Bachelor&apos;s in Computer Engineering from Gujarat Technological University, where I developed 
                  a strong foundation in programming languages like Java, Python, and web technologies.
                </p>
                <p className="text-body">
                  Currently based in <span className="font-semibold text-gray-900 dark:text-white">Etobicoke, Ontario, Canada</span>, 
                  I completed my Ontario Graduate Certificate in Information Technology Solutions at Humber College. 
                  My experience spans from professional work at Techmicra IT Solutions in India, where I built responsive 
                  web apps and integrated APIs, to my recent co-op position at PopIn, where I developed full-stack solutions 
                  using React Native and Python.
                </p>
                <p className="text-body">
                  When I&apos;m not coding, you&apos;ll find me exploring new web technologies, contributing to open-source 
                  projects, or working on side projects that showcase my full-stack capabilities. I believe in writing clean, 
                  maintainable code and building applications that are both powerful and user-friendly.
                </p>
                <p className="text-body">
                  I&apos;m particularly passionate about building scalable web applications, creating seamless user experiences 
                  with React, and developing robust backend systems with Node.js and Express. I&apos;m always eager to learn 
                  new technologies and contribute to meaningful projects that solve real-world problems.
                </p>
              </div>
              
              {/* Personal Interests */}
              <div className="mt-8 p-6 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl border border-accent/20">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-accent" />
                  Beyond Code
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Coffee enthusiast & problem solver</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Open source contributor</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Volunteer data scientist</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-2 mb-12 text-center">Education & Experience</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 transform md:-translate-x-0.5" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-start gap-6 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white dark:border-gray-800 transform -translate-x-2 md:-translate-x-1/2 z-10" />

                    {/* Content Card */}
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                      }`}
                    >
                      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                        <div className="flex items-start gap-4 mb-3">
                          <item.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                          <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                            <h3 className="heading-3 mb-1">{item.title}</h3>
                            <p className="text-accent font-medium mb-2">{item.subtitle}</p>
                            <div className="flex flex-col md:flex-row gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {item.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {item.period}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Visualization */}
      <section className="section-padding-sm bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4 text-center">Skills & Expertise</h2>
            <p className="text-body-sm text-center max-w-2xl mx-auto mb-12">
              A visual breakdown of my core competencies and proficiency levels
            </p>
            <SkillsVisualization />
          </motion.div>
        </div>
      </section>

      {/* GitHub Stats */}
      <section className="section-padding-sm bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <GitHubStats />
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding-sm bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="heading-2 mb-12 text-center">Technologies I Work With</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="card p-6"
                >
                  <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-lg text-sm border border-gray-200 dark:border-gray-700 hover:border-accent/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

