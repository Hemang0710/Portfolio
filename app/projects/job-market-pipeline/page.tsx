'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Database, Layers, Server, BarChart3, AlertTriangle, RefreshCw } from 'lucide-react'

export default function JobMarketPipelinePage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            {/* Back nav */}
            <div className="container-custom pt-8">
                <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-accent transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Projects
                </Link>
            </div>

            {/* Hero */}
            <section className="container-custom py-12 md:py-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="tag-data">ETL Pipeline</span>
                        <span className="tag-backend">FastAPI</span>
                        <span className="tag-data">PostgreSQL</span>
                        <span className="tag-backend">Redis</span>
                    </div>
                    <h1 className="heading-1 text-3xl md:text-4xl lg:text-5xl mb-4">
                        Job Market Analytics Pipeline
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">ETL → Warehouse → REST API</p>
                    <p className="text-body max-w-3xl mb-8">
                        A Python data pipeline that ingests job postings from multiple sources, normalizes and cleans the data,
                        loads it into a PostgreSQL warehouse with dimensional modeling, and exposes a versioned REST API for trend analytics —
                        complete with monitoring, error handling, and backfill capabilities.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="btn-primary inline-flex items-center gap-2"><Github className="w-4 h-4" /> View Code</a>
                        <a href="#" className="btn-secondary inline-flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Live Demo</a>
                    </div>
                </motion.div>
            </section>

            {/* Architecture */}
            <section className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="container-custom section-padding-sm">
                    <h2 className="heading-3 mb-8">Pipeline Architecture</h2>

                    <div className="grid md:grid-cols-4 gap-4 mb-12">
                        {[
                            { icon: Database, title: 'Ingestion', desc: 'Multi‑source scrapers with rate limiting, deduplication, and raw‑data staging', color: 'bg-emerald-500' },
                            { icon: RefreshCw, title: 'Processing', desc: 'Clean, normalize, classify by role/level/location. Validate against schema', color: 'bg-teal-500' },
                            { icon: Layers, title: 'Storage', desc: 'Star‑schema warehouse with fact_postings, dim_companies, dim_skills, dim_locations', color: 'bg-cyan-500' },
                            { icon: Server, title: 'API Layer', desc: 'FastAPI with versioned endpoints for trends, breakdowns, and time‑series queries', color: 'bg-blue-500' },
                        ].map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center"
                            >
                                {i < 3 && <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl z-10">→</div>}
                                <div className={`inline-flex p-3 rounded-lg ${step.color} mb-3`}>
                                    <step.icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">{step.title}</h3>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Processing modes */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                                <RefreshCw className="w-4 h-4 text-emerald" /> Batch Processing
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Scheduled daily runs that ingest the previous day&apos;s postings. Idempotent writes using upsert logic
                                so re‑runs or backfills don&apos;t create duplicates. Average batch: ~2,000 postings processed in under 4 minutes.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-orange-500" /> Monitoring &amp; Alerts
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Structured JSON logging for every pipeline stage. Health‑check endpoint tracks ingestion lag, row counts,
                                and error rates. Alerts fire when ingestion volume drops below a configurable threshold — indicating upstream changes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* API Examples */}
            <section className="container-custom section-padding-sm">
                <h2 className="heading-3 mb-8">API Endpoints</h2>
                <div className="space-y-6 max-w-4xl">
                    <div className="code-block">
                        <div className="code-block-header">
                            <span className="code-block-dot bg-red-500"></span>
                            <span className="code-block-dot bg-yellow-500"></span>
                            <span className="code-block-dot bg-green-500"></span>
                            <span className="ml-3 text-xs text-gray-400">GET /api/v1/trends/skills?location=ontario&period=30d</span>
                        </div>
                        <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                            {`# Response 200
{
  "period": "2025-02-01 / 2025-03-02",
  "location": "Ontario",
  "top_skills": [
    { "skill": "Python", "postings": 1842, "growth_pct": 12.3 },
    { "skill": "SQL", "postings": 1654, "growth_pct": 8.1 },
    { "skill": "AWS", "postings": 1203, "growth_pct": 15.7 },
    { "skill": "Docker", "postings": 987, "growth_pct": 22.4 }
  ],
  "total_postings_analyzed": 8420
}`}
                        </pre>
                    </div>

                    <div className="code-block">
                        <div className="code-block-header">
                            <span className="code-block-dot bg-red-500"></span>
                            <span className="code-block-dot bg-yellow-500"></span>
                            <span className="code-block-dot bg-green-500"></span>
                            <span className="ml-3 text-xs text-gray-400">GET /api/v1/analytics/salary?role=data_engineer&experience=junior</span>
                        </div>
                        <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                            {`# Response 200
{
  "role": "Data Engineer",
  "experience_level": "Junior",
  "salary_range": { "p25": 65000, "median": 75000, "p75": 88000, "currency": "CAD" },
  "sample_size": 324,
  "top_employers": ["Shopify", "RBC", "TD Bank", "Rogers"]
}`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* Data Quality */}
            <section className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="container-custom section-padding-sm">
                    <h2 className="heading-3 mb-6">Data Quality &amp; Error Handling</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
                        <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-sm mb-2 text-gray-900 dark:text-white">Schema Validation</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Every record validated with Pydantic models before insert. Invalid rows quarantined for manual review.</p>
                        </div>
                        <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-sm mb-2 text-gray-900 dark:text-white">Deduplication</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Content‑hash based dedup across sources. Handles the same posting appearing on multiple boards.</p>
                        </div>
                        <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <h3 className="font-semibold text-sm mb-2 text-gray-900 dark:text-white">Backfill Support</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Date‑partitioned processing with idempotent writes. Can re‑process any date range without side effects.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What this proves */}
            <section className="bg-gradient-to-br from-emerald/5 to-accent/5 border-t border-gray-200 dark:border-gray-800">
                <div className="container-custom section-padding-sm">
                    <h2 className="heading-3 mb-6">What This Proves About Me</h2>
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
                        {[
                            'Designs batch and near‑real‑time ingestion pipelines with idempotent processing and backfill support',
                            'Thinks about monitoring, error budgets, and data‑quality checks at every pipeline stage',
                            'Builds dimensional data models (star schema) optimized for analytical queries',
                            'Exposes clean, versioned REST APIs with pagination, filtering, and proper HTTP semantics',
                            'Implements structured logging and health‑check endpoints for pipeline observability',
                            'Handles real‑world data problems: deduplication, schema drift, and upstream source changes',
                        ].map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-3 p-3"
                            >
                                <CheckCircle2 className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{point}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-custom section-padding-sm text-center">
                <Link href="/#projects" className="btn-secondary inline-flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> View All Projects
                </Link>
            </section>
        </div>
    )
}
