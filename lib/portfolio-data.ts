/**
 * portfolio-data.ts — single source of truth for the page content.
 *
 * The scroll page (HomeContent), the full-screen section panels (SectionPanel),
 * and the chatbot (AskHemang) all read from here, so content never drifts.
 * Icons are referenced by string key and mapped to components in the UI layer
 * (keeps this file plain data, no JSX).
 */

export type IconKey =
  | 'genai'
  | 'frontend'
  | 'backend'
  | 'cloud'
  | 'ai'
  | 'fullstack'
  | 'interactive'
  | 'systems'

export const aboutParagraphs: string[] = [
  "I'm a full-stack developer with 3+ years of experience building scalable backend systems, APIs, and AI-powered products. I started out as a Computer Engineer in India, spent two and a half years at Techmicra shipping enterprise web apps, then moved to Canada to deepen my craft — and these days a lot of that craft lives in the AI layer: RAG pipelines, LLM observability, and OpenAI APIs wired into real products.",
  "Most recently I was a full-stack co-op at PopIn here in Ontario, and I finished an Ontario Graduate Certificate in IT Solutions at Humber College with a 3.9 GPA. I care about systems that hold up in production — clean APIs, fast queries, and tooling that makes failures easy to find. This site is part of that: the 3D desk and the terminal below are things I actually built, not screenshots.",
]

export const stats: { value: string; label: string }[] = [
  { value: '3+', label: 'Years of experience' },
  { value: '30+', label: 'Production APIs shipped' },
  { value: '130+', label: 'Production issues resolved' },
]

/* Quantified, résumé-backed impact — concrete numbers beat adjectives. */
export const achievements: string[] = [
  'Delivered 8+ enterprise-grade applications used by thousands of users.',
  'Cut AI failure investigation time by ~40% with custom LLM observability tooling.',
  'Improved API response times by 30% through schema and query optimization.',
  'Built AI-powered products on OpenAI and modern LLM technologies.',
]

export type SkillGroup = { key: IconKey; title: string; accent: string; items: { name: string; level: number }[] }
export const skillGroups: SkillGroup[] = [
  {
    key: 'genai',
    title: 'GenAI & ML',
    accent: 'text-violet-600 dark:text-violet-400',
    items: [
      { name: 'OpenAI APIs', level: 90 },
      { name: 'RAG / Vector Search', level: 85 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'LSTM / PyTorch', level: 70 },
      { name: 'LLM Observability', level: 80 },
    ],
  },
  {
    key: 'frontend',
    title: 'Frontend',
    accent: 'text-indigo-600 dark:text-indigo-400',
    items: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'React Native (Expo)', level: 78 },
      { name: 'Tailwind / shadcn/ui', level: 90 },
    ],
  },
  {
    key: 'backend',
    title: 'Backend',
    accent: 'text-emerald-600 dark:text-emerald-400',
    items: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'FastAPI / Python', level: 85 },
      { name: 'REST API design', level: 90 },
      { name: 'Java / Spring Boot', level: 70 },
    ],
  },
  {
    key: 'cloud',
    title: 'Data & Cloud',
    accent: 'text-amber-600 dark:text-amber-400',
    items: [
      { name: 'PostgreSQL / MongoDB', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'GCP / Azure', level: 72 },
      { name: 'CI/CD · GitHub Actions', level: 80 },
    ],
  },
]

export type Project = { title: string; blurb: string; tags: string[]; href: string; featured?: boolean }
export type ProjectCategory = { id: IconKey; label: string; projects: Project[] }
export const projectCategories: ProjectCategory[] = [
  {
    id: 'ai',
    label: 'AI & Machine Learning',
    projects: [
      {
        title: 'AI Failure Investigation System',
        blurb:
          'An LLM observability platform that tracks, analyzes, and diagnoses AI response failures in production — monitoring prompt versions, retrieval quality, hallucination risk, and response confidence.',
        tags: ['FastAPI', 'Python', 'PostgreSQL', 'Streamlit', 'OpenAI', 'Docker'],
        href: 'https://github.com/Hemang0710/AI-Failure-Investigation-System',
        featured: true,
      },
      {
        title: 'Enterprise Knowledge Retrieval (RAG)',
        blurb:
          'A Retrieval-Augmented Generation platform for contextual Q&A across business documents using semantic search, vector databases, and LLM-powered response generation.',
        tags: ['RAG', 'Vector DB', 'Python', 'LLMs', 'Semantic Search'],
        href: 'https://github.com/Hemang0710/Enterprise-Knowledge-Retrieval-System-RAG-',
        featured: true,
      },
      {
        title: 'LSTM Time-Series Forecasting',
        blurb:
          'Time-series forecasting with LSTM neural networks implemented in PyTorch — data prep, model training, and evaluation in a reproducible notebook.',
        tags: ['PyTorch', 'LSTM', 'NumPy', 'Jupyter'],
        href: 'https://github.com/Hemang0710/lstm-time-series-forecasting',
      },
    ],
  },
  {
    id: 'fullstack',
    label: 'Full-Stack Web Apps',
    projects: [
      {
        title: 'FitFeast',
        blurb:
          'AI-powered meal planning & health tracking platform with modular backend APIs, real-time external data integration, and AI-driven personalization.',
        tags: ['Next.js', 'TypeScript', 'MongoDB', 'NextAuth', 'Tailwind'],
        href: 'https://github.com/Hemang0710/Web_Project',
      },
      {
        title: 'Real-Estate (MERN)',
        blurb: 'Full real-estate listing platform built on the MERN stack with server-rendered views.',
        tags: ['MongoDB', 'Express', 'React', 'Node.js', 'EJS'],
        href: 'https://github.com/Hemang0710/Real-Estate',
      },
      {
        title: 'Stream-AI',
        blurb: 'A Netflix-style streaming clone modeled on the real tech stack and UX patterns Netflix uses.',
        tags: ['JavaScript', 'React', 'APIs'],
        href: 'https://github.com/Hemang0710/stream-ai',
      },
    ],
  },
  {
    id: 'interactive',
    label: 'Interactive & Gaming',
    projects: [
      {
        title: 'Life-Loop: City of Work',
        blurb:
          'A browser multiplayer life-sim where players roam a shared city, work jobs, earn money, and manage household expenses — built to teach real-world money flow.',
        tags: ['JavaScript', 'Multiplayer', 'Game Loop', 'Canvas'],
        href: 'https://github.com/Hemang0710/life-loop-city-of-work',
      },
    ],
  },
  {
    id: 'systems',
    label: 'Systems & DevOps',
    projects: [
      {
        title: 'Linux System Monitoring Tool',
        blurb:
          'Real-time Linux monitoring with a REST API and dashboard tracking CPU, memory, disk, and network metrics.',
        tags: ['Python', 'Bash', 'REST API', 'Linux'],
        href: 'https://github.com/Hemang0710/linux-system-monitoring-tool',
      },
    ],
  },
]

export type Job = { role: string; company: string; location: string; period: string; points: string[] }
export const experience: Job[] = [
  {
    role: 'Full Stack Engineer (Co-op)',
    company: 'PopIn',
    location: 'Ontario, Canada',
    period: 'Apr 2025 – Aug 2025',
    points: [
      'Built scalable backend APIs and full-stack features across web and mobile with real-time data workflows.',
      'Developed RESTful APIs using Node.js and PostgreSQL for analytics dashboards and customer-facing features.',
      'Enhanced React Native components, improving UI responsiveness and user experience.',
      'Collaborated via Git workflows, code reviews, debugging, and Agile delivery.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Techmicra Data Solutions',
    location: 'Ahmedabad, India',
    period: 'Jan 2021 – Sep 2023',
    points: [
      'Designed and built scalable full-stack apps with ReactJS, Node.js, and REST API architecture.',
      'Built secure token-based authentication and authorization with backend validation workflows.',
      'Developed backend services for workflow orchestration, recommendation systems, and data processing.',
      'Diagnosed and resolved production issues across frontend, backend, and database in Agile teams.',
    ],
  },
]

export type Education = { title: string; school: string; detail: string }
export const education: Education[] = [
  {
    title: 'Ontario Graduate Certificate — Information Technology Solutions',
    school: 'Humber College Institute of Technology & Advanced Learning, Toronto',
    detail: 'GPA 3.9 / 4.0 · Jan 2024 – Sep 2025',
  },
  {
    title: 'Bachelor of Engineering — Computer Engineering',
    school: 'Gujarat Technological University, India',
    detail: 'GPA 3.8 / 4.0 · Aug 2018 – Jul 2021',
  },
]
