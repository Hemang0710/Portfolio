'use client'

import { motion } from 'framer-motion'
import { Database, Cpu, TrendingUp, BarChart3 } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Sample data for visualizations
const salesData = [
  { month: 'Jan', sales: 4500, revenue: 5200 },
  { month: 'Feb', sales: 5200, revenue: 6100 },
  { month: 'Mar', sales: 4800, revenue: 5500 },
  { month: 'Apr', sales: 6100, revenue: 7200 },
  { month: 'May', sales: 5500, revenue: 6800 },
  { month: 'Jun', sales: 6700, revenue: 7900 },
]

const categoryData = [
  { name: 'Data Engineering', value: 35, color: '#3B82F6' },
  { name: 'Machine Learning', value: 28, color: '#10B981' },
  { name: 'Backend Development', value: 22, color: '#F59E0B' },
  { name: 'Analytics', value: 15, color: '#EF4444' },
]

const modelPerformance = [
  { model: 'XGBoost', accuracy: 0.89, precision: 0.87, recall: 0.91 },
  { model: 'Random Forest', accuracy: 0.85, precision: 0.83, recall: 0.86 },
  { model: 'Neural Network', accuracy: 0.92, precision: 0.90, recall: 0.93 },
  { model: 'SVM', accuracy: 0.82, precision: 0.80, recall: 0.84 },
]

const pipelineSteps = [
  {
    step: 'Data Ingestion',
    description: 'Collecting data from multiple sources including databases, APIs, and file systems. Implementing data validation and quality checks.',
    icon: Database,
  },
  {
    step: 'Data Cleaning',
    description: 'Handling missing values, outliers, and inconsistencies. Standardizing formats and ensuring data integrity.',
    icon: Database,
  },
  {
    step: 'Feature Engineering',
    description: 'Creating meaningful features, handling categorical variables, scaling, and selecting relevant features for modeling.',
    icon: Cpu,
  },
  {
    step: 'Model Training',
    description: 'Training multiple algorithms, hyperparameter tuning, cross-validation, and model selection based on performance metrics.',
    icon: TrendingUp,
  },
  {
    step: 'Evaluation',
    description: 'Assessing model performance using metrics like accuracy, precision, recall, F1-score, and ROC-AUC. Validating on test sets.',
    icon: BarChart3,
  },
  {
    step: 'Deployment',
    description: 'Deploying models as APIs, setting up monitoring, and implementing CI/CD pipelines for model updates.',
    icon: Database,
  },
]

export default function DataMLContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-1 mb-6">Data & ML Showcase</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Interactive dashboards and machine learning pipeline demonstrations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Dashboards */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="heading-2 mb-12 text-center">Interactive Dashboards</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Sales Trend Chart */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Sales Trend Analysis
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      name="Sales"
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#10B981"
                      strokeWidth={2}
                      name="Revenue"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Category Distribution */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Project Distribution
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Model Performance Comparison */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Model Performance Comparison
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={modelPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="model" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" domain={[0, 1]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="accuracy" fill="#3B82F6" name="Accuracy" />
                  <Bar dataKey="precision" fill="#10B981" name="Precision" />
                  <Bar dataKey="recall" fill="#F59E0B" name="Recall" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ML Pipeline Explanation */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="heading-2 mb-12 text-center">Machine Learning Pipeline</h2>

            <div className="space-y-6">
              {pipelineSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                          Step {index + 1}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {item.step}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dataset Simulation */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-2 mb-8 text-center">Data Processing Example</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                In real-world scenarios, I work with datasets containing thousands to millions of records. 
                Here&apos;s an example of how data flows through a typical pipeline:
              </p>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre className="text-gray-700 dark:text-gray-300">
{`Data Pipeline Flow:

1. Raw Data (CSV/JSON/DB)
   └─> 100,000+ records
   
2. Data Validation
   └─> Remove duplicates: 2,340 records
   └─> Handle missing values: 1,200 records
   
3. Feature Engineering
   └─> Create 15 new features
   └─> Normalize numerical features
   
4. Model Training
   └─> Train/Test Split: 80/20
   └─> Cross-validation: 5-fold
   
5. Model Evaluation
   └─> Accuracy: 89.2%
   └─> Precision: 87.5%
   └─> Recall: 91.0%
   
6. Production Deployment
   └─> API Endpoint: /predict
   └─> Response Time: <200ms`}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

