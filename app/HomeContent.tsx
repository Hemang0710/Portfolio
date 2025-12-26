'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Code, Database, TrendingUp, Sparkles, Zap } from 'lucide-react'

export default function HomeContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const skills = [
    { icon: Database, label: 'Data Engineering', color: 'from-blue-500 to-cyan-500' },
    { icon: Code, label: 'Backend Development', color: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, label: 'Machine Learning', color: 'from-green-500 to-emerald-500' },
    { icon: Sparkles, label: 'Analytics', color: 'from-orange-500 to-red-500' },
  ]

  const capabilities = [
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Design and implement robust ETL pipelines, data warehouses, and real-time processing systems using modern cloud technologies. Experience with Apache Airflow, dbt, and cloud data platforms.',
      highlight: 'Scalable Infrastructure',
    },
    {
      icon: TrendingUp,
      title: 'Machine Learning',
      description: 'Build production-ready predictive models and recommendation systems. From feature engineering to model deployment, ensuring reliability and performance at scale.',
      highlight: 'Production ML',
    },
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Develop scalable REST APIs and microservices using Python, Node.js, and cloud platforms. Focus on performance, reliability, and maintainable code architecture.',
      highlight: 'High Performance',
    },
    {
      icon: Zap,
      title: 'Analytics & Insights',
      description: 'Create interactive dashboards and data visualizations that transform raw data into actionable business intelligence. Turn complex datasets into clear narratives.',
      highlight: 'Data-Driven Decisions',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent_50%)]"></div>
        
        <div className="container-custom relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for opportunities in Canada
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="heading-1 mb-6"
            >
              <span className="gradient-text">Data & Software Developer</span>
              <br />
              <span className="text-gray-600 dark:text-gray-400 font-normal text-3xl md:text-4xl lg:text-5xl">
                Building scalable, data-driven systems
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-body max-w-2xl mx-auto mb-10"
            >
              Transforming complex data into actionable insights through modern engineering practices, 
              machine learning, and robust backend systems. Based in <span className="font-semibold text-gray-900 dark:text-gray-100">Ontario, Canada</span>, 
              focused on delivering production-ready solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                href="/projects" 
                className="btn-primary inline-flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="section-padding-sm bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Core Expertise</h2>
            <p className="text-body-sm max-w-2xl mx-auto">
              Specialized in building end-to-end data solutions from ingestion to deployment, 
              with a focus on scalability and maintainability
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-10 mb-4`}>
                    <skill.icon className={`w-6 h-6 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent`} />
                  </div>
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">{skill.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="heading-2 mb-4">What I Bring</h2>
              <p className="text-body-sm max-w-2xl mx-auto">
                A combination of technical depth and practical experience in building 
                production-ready data systems
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="card-hover p-8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="heading-3 text-lg">{item.title}</h3>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                          {item.highlight}
                        </span>
                      </div>
                      <p className="text-body-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative p-12 rounded-2xl bg-gradient-to-br from-accent via-accent-light to-accent-dark overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
              <div className="relative text-center">
                <h2 className="heading-2 mb-4 text-white">Ready to Build Something Great?</h2>
                <p className="text-lg mb-8 text-blue-100 max-w-xl mx-auto">
                  Let&apos;s connect and discuss how data-driven solutions can transform your business. 
                  Open to full-time opportunities, contract work, and meaningful collaborations.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-accent rounded-lg font-medium hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
