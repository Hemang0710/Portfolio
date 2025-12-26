'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react'

const timeline = [
  {
    type: 'education',
    title: 'Humber College',
    subtitle: 'Data Analytics & Business Intelligence',
    location: 'Toronto, Ontario',
    period: '2022 - 2024',
    description: 'Focused on data engineering, machine learning, and business intelligence. Completed projects in predictive modeling, ETL pipelines, and data visualization.',
    icon: GraduationCap,
  },
  {
    type: 'experience',
    title: 'Software Developer Intern',
    subtitle: 'Tech Company',
    location: 'Ontario, Canada',
    period: '2024',
    description: 'Developed backend APIs and data processing pipelines. Worked on real-time analytics dashboards and contributed to ML model deployment infrastructure.',
    icon: Briefcase,
  },
  {
    type: 'experience',
    title: 'Data Analyst',
    subtitle: 'Industry Experience',
    location: 'India',
    period: '2021 - 2022',
    description: 'Analyzed large datasets to extract business insights. Built automated reporting systems and collaborated with cross-functional teams to drive data-driven decisions.',
    icon: Briefcase,
  },
  {
    type: 'volunteer',
    title: 'Data Science Volunteer',
    subtitle: 'Non-Profit Organization',
    location: 'Ontario, Canada',
    period: '2023 - Present',
    description: 'Volunteered to build forecasting models for food drive demand prediction. Created data pipelines and visualization dashboards to support operational efficiency.',
    icon: Briefcase,
  },
]

const techCategories = [
  {
    category: 'Data Engineering',
    technologies: ['Python', 'SQL', 'Apache Airflow', 'PostgreSQL', 'MongoDB', 'AWS S3', 'ETL Pipelines'],
  },
  {
    category: 'Machine Learning',
    technologies: ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'XGBoost', 'Feature Engineering', 'Model Deployment'],
  },
  {
    category: 'Backend Development',
    technologies: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Docker', 'Microservices', 'API Design'],
  },
  {
    category: 'Data Visualization',
    technologies: ['Tableau', 'Power BI', 'D3.js', 'Recharts', 'Chart.js', 'Dashboard Design'],
  },
  {
    category: 'Cloud & DevOps',
    technologies: ['AWS', 'Azure', 'Git', 'CI/CD', 'Kubernetes', 'Terraform'],
  },
  {
    category: 'Programming Languages',
    technologies: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'R', 'Java'],
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
              Data & Software Developer passionate about transforming complex data into actionable insights 
              through modern engineering practices and machine learning
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Ontario, Canada</span>
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
              <h2 className="heading-2 mb-8">Professional Summary</h2>
              <div className="space-y-6">
                <p className="text-body">
                  I&apos;m a Data & Software Developer with a strong foundation in data engineering, 
                  machine learning, and backend development. My journey began with a passion for solving 
                  complex problems using data-driven approaches, and I&apos;ve built expertise through 
                  hands-on experience in both industry and academic settings.
                </p>
                <p className="text-body">
                  Currently based in <span className="font-semibold text-gray-900 dark:text-white">Ontario, Canada</span>, 
                  I&apos;ve completed my education at Humber College, specializing in Data Analytics & Business Intelligence. 
                  My experience spans from industry work in India to internships and volunteer opportunities in Canada, 
                  giving me a diverse perspective on building scalable data solutions that work in real-world contexts.
                </p>
                <p className="text-body">
                  I&apos;m particularly interested in building end-to-end data pipelines, developing machine 
                  learning models for production environments, and creating robust backend systems that 
                  power data-driven products. I&apos;m always eager to learn new technologies and contribute 
                  to meaningful projects that make a tangible impact.
                </p>
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

      {/* Tech Stack */}
      <section className="section-padding-sm bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="heading-2 mb-12 text-center">Technical Skills</h2>
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

