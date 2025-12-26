'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'FitFeast - Health & Nutrition App',
    description: 'A comprehensive health and nutrition application that provides personalized meal recommendations, tracks nutritional intake, and helps users achieve their fitness goals through data-driven insights.',
    problem: 'Users struggle to maintain balanced nutrition while tracking their fitness goals. Existing solutions lack personalization and don&apos;t leverage user data effectively to provide actionable recommendations.',
    solution: 'Built a recommendation engine using collaborative filtering and content-based filtering. Implemented real-time nutritional tracking with a RESTful API backend, and created interactive dashboards for users to visualize their progress over time.',
    techStack: ['Python', 'Flask', 'PostgreSQL', 'Scikit-learn', 'React', 'Chart.js', 'Docker', 'AWS'],
    metrics: [
      { label: 'Accuracy', value: '87%' },
      { label: 'User Engagement', value: '+45%' },
      { label: 'Response Time', value: '<200ms' },
    ],
    githubUrl: 'https://github.com/yourusername/fitfeast',
    demoUrl: 'https://fitfeast-demo.vercel.app',
    architecture: `┌─────────────┐
│   React UI   │
└──────┬───────┘
       │
┌──────▼───────┐
│  Flask API   │
└──────┬───────┘
       │
┌──────▼───────┐     ┌──────────────┐
│  PostgreSQL  │◄────┤  ML Service  │
└──────────────┘     └──────────────┘`,
  },
  {
    title: 'Event Attendance Prediction',
    description: 'Machine learning model that predicts event attendance rates to help organizers optimize planning, resource allocation, and marketing strategies based on historical data and external factors.',
    problem: 'Event organizers face challenges in predicting attendance, leading to over or under-allocation of resources, poor planning, and missed opportunities for optimization.',
    solution: 'Developed a time series forecasting model using XGBoost and feature engineering techniques. Incorporated external factors like weather, day of week, and historical patterns. Built a pipeline that processes real-time data and provides predictions with confidence intervals.',
    techStack: ['Python', 'XGBoost', 'Pandas', 'NumPy', 'Scikit-learn', 'Apache Airflow', 'FastAPI', 'Plotly'],
    metrics: [
      { label: 'MAE', value: '12.3' },
      { label: 'R² Score', value: '0.84' },
      { label: 'Prediction Accuracy', value: '82%' },
    ],
    githubUrl: 'https://github.com/yourusername/event-prediction',
    architecture: `Data Sources
    │
    ├─ Historical Events
    ├─ Weather API
    └─ External Factors
         │
    ┌────▼────┐
    │  ETL    │
    └────┬────┘
         │
    ┌────▼────┐
    │ Feature │
    │Engineering│
    └────┬────┘
         │
    ┌────▼────┐
    │  Model  │
    │ Training│
    └────┬────┘
         │
    ┌────▼────┐
    │Prediction│
    │  API    │
    └─────────┘`,
  },
  {
    title: 'Food Drive Demand Forecasting',
    description: 'Volunteer project that forecasts food drive demand to help non-profit organizations optimize inventory management, reduce waste, and better serve communities in need.',
    problem: 'Non-profit organizations running food drives struggle with inventory management, often facing shortages during high-demand periods or waste during low-demand periods due to lack of predictive insights.',
    solution: 'Created a demand forecasting model using time series analysis and seasonal decomposition. Built automated data pipelines to collect historical donation and distribution data. Developed a dashboard for volunteers to visualize predictions and adjust operations accordingly.',
    techStack: ['Python', 'Prophet', 'Pandas', 'SQL', 'Streamlit', 'PostgreSQL', 'Cron'],
    metrics: [
      { label: 'Waste Reduction', value: '-35%' },
      { label: 'Forecast Accuracy', value: '78%' },
      { label: 'Coverage Rate', value: '92%' },
    ],
    githubUrl: 'https://github.com/yourusername/food-drive-forecasting',
    architecture: `Historical Data
         │
    ┌────▼────┐
    │  Data   │
    │Cleansing│
    └────┬────┘
         │
    ┌────▼────┐
    │Prophet  │
    │  Model│
    └────┬────┘
         │
    ┌────▼────┐
    │Dashboard│
    │Streamlit│
    └─────────┘`,
  },
  {
    title: 'Real Estate Analytics Platform',
    description: 'A comprehensive analytics platform that provides insights into real estate market trends, property valuations, and investment opportunities through advanced data analysis and visualization.',
    problem: 'Real estate investors and agents need better tools to analyze market trends, compare properties, and make data-driven investment decisions. Existing solutions are fragmented and lack comprehensive analytics.',
    solution: 'Built a data pipeline that aggregates real estate data from multiple sources. Implemented property valuation models using regression techniques and created interactive dashboards for market analysis. Developed APIs for programmatic access to insights.',
    techStack: ['Python', 'Django', 'PostgreSQL', 'Scikit-learn', 'React', 'D3.js', 'Redis', 'Celery'],
    metrics: [
      { label: 'Data Points', value: '500K+' },
      { label: 'Valuation Accuracy', value: '89%' },
      { label: 'API Response', value: '<150ms' },
    ],
    githubUrl: 'https://github.com/yourusername/real-estate-analytics',
    demoUrl: 'https://real-estate-analytics.vercel.app',
    architecture: `Data Sources
    │
    ├─ MLS API
    ├─ Public Records
    └─ Market Data
         │
    ┌────▼────┐
    │  ETL    │
    │ Pipeline│
    └────┬────┘
         │
    ┌────▼────┐
    │PostgreSQL│
    │Database │
    └────┬────┘
         │
    ┌────▼────┐
    │  Django │
    │   API   │
    └────┬────┘
         │
    ┌────▼────┐
    │  React  │
    │Frontend │
    └─────────┘`,
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
              Data-driven solutions that solve real-world problems
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

