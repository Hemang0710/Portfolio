'use client'

import { motion } from 'framer-motion'
import { Download, Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react'

export default function ResumeContent() {
  const handleDownload = () => {
    // In a real implementation, this would download a PDF
    // For now, we'll create a print-friendly version
    window.print()
  }

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="heading-1">Resume</h1>
              <button onClick={handleDownload} className="btn-primary inline-flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>

            {/* Resume Content */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 print:shadow-none">
              {/* Header */}
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Data & Software Developer
                </h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Ontario, Canada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>your.email@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (XXX) XXX-XXXX</span>
                  </div>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Professional Summary
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Entry-Level Data & Software Developer with a strong foundation in data engineering, 
                  machine learning, and backend development. Experienced in building scalable data pipelines, 
                  developing predictive models, and creating robust APIs. Passionate about transforming 
                  complex data into actionable insights. Based in Ontario, Canada, with experience in 
                  both industry and volunteer settings.
                </p>
              </section>

              {/* Technical Skills */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Engineering</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Python, SQL, Apache Airflow, PostgreSQL, MongoDB, AWS S3, ETL Pipelines
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Machine Learning</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Scikit-learn, TensorFlow, Pandas, NumPy, XGBoost, Feature Engineering
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend Development</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Node.js, Express.js, REST APIs, GraphQL, Docker, Microservices
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Visualization</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Tableau, Power BI, D3.js, Recharts, Chart.js, Dashboard Design
                    </p>
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Experience
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Software Developer Intern
                        </h4>
                        <p className="text-accent text-sm">Tech Company</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2024</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Ontario, Canada</p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                      <li>Developed backend APIs and data processing pipelines using Python and Node.js</li>
                      <li>Built real-time analytics dashboards with React and Chart.js</li>
                      <li>Contributed to ML model deployment infrastructure and CI/CD pipelines</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Data Analyst</h4>
                        <p className="text-accent text-sm">Industry Experience</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2021 - 2022</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">India</p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                      <li>Analyzed large datasets to extract business insights and trends</li>
                      <li>Built automated reporting systems using Python and SQL</li>
                      <li>Collaborated with cross-functional teams to drive data-driven decisions</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Data Science Volunteer
                        </h4>
                        <p className="text-accent text-sm">Non-Profit Organization</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2023 - Present</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Ontario, Canada</p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                      <li>Built forecasting models for food drive demand prediction</li>
                      <li>Created data pipelines and visualization dashboards</li>
                      <li>Supported operational efficiency through data-driven insights</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Education
                </h3>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Data Analytics & Business Intelligence
                      </h4>
                      <p className="text-accent text-sm">Humber College</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2022 - 2024</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Toronto, Ontario</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Focused on data engineering, machine learning, and business intelligence. 
                    Completed projects in predictive modeling, ETL pipelines, and data visualization.
                  </p>
                </div>
              </section>

              {/* Projects */}
              <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                  Key Projects
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      FitFeast - Health & Nutrition App
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Built a recommendation engine using collaborative filtering. Implemented real-time 
                      nutritional tracking with RESTful API backend. Achieved 87% accuracy and 45% 
                      increase in user engagement.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Event Attendance Prediction
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Developed time series forecasting model using XGBoost. Achieved R² score of 0.84 
                      and 82% prediction accuracy, helping optimize resource allocation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Food Drive Demand Forecasting
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Created demand forecasting model using Prophet. Reduced waste by 35% and achieved 
                      78% forecast accuracy for non-profit organization.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

