'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Server, Database, Brain, Shield, Zap, Layers } from 'lucide-react'

export default function RAGCareerAssistantPage() {
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
                        <span className="tag-ai">RAG Pipeline</span>
                        <span className="tag-backend">FastAPI</span>
                        <span className="tag-ai">LangChain</span>
                        <span className="tag-data">Vector DB</span>
                    </div>
                    <h1 className="heading-1 text-3xl md:text-4xl lg:text-5xl mb-4">
                        RAG‑Powered Career Assistant
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">for Canadian Job Seekers</p>
                    <p className="text-body max-w-3xl mb-8">
                        A retrieval‑augmented generation system that ingests career resources (job boards, resume guides, industry reports),
                        chunks and embeds them into a vector database, then answers job‑search questions with cited, context‑aware responses
                        via a production‑grade FastAPI backend with authentication, rate limiting, and structured logging.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="btn-primary inline-flex items-center gap-2"><Github className="w-4 h-4" /> View Code</a>
                        <a href="#" className="btn-secondary inline-flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Live Demo</a>
                    </div>
                </motion.div>
            </section>

            {/* Problem */}
            <section className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="container-custom section-padding-sm">
                    <h2 className="heading-3 mb-6">The Problem</h2>
                    <p className="text-body max-w-3xl">
                        Newcomers to the Canadian job market face information overload — hundreds of articles, government resources,
                        certification guides, and resume tips scattered across dozens of sites. Traditional search returns pages of links
                        but no synthesized, actionable answers. Job seekers need a tool that <strong>understands context</strong>,
                        <strong>cites sources</strong>, and gives <strong>concise, relevant guidance</strong> based on their specific situation.
                    </p>
                </div>
            </section>

            {/* Architecture */}
            <section className="container-custom section-padding-sm">
                <h2 className="heading-3 mb-8">System Architecture</h2>

                {/* Architecture flow */}
                <div className="grid md:grid-cols-5 gap-4 mb-12">
                    {[
                        { icon: Database, title: 'Data Ingestion', desc: 'Scrape job boards, PDFs, government sites → raw documents', color: 'bg-blue-500' },
                        { icon: Layers, title: 'Chunking', desc: 'Split documents into semantic chunks with overlap for context continuity', color: 'bg-indigo-500' },
                        { icon: Brain, title: 'Embedding', desc: 'Generate vector embeddings via OpenAI and store in Pinecone', color: 'bg-purple-500' },
                        { icon: Zap, title: 'Retrieval', desc: 'Similarity search to find top‑k relevant chunks for any query', color: 'bg-pink-500' },
                        { icon: Server, title: 'Generation', desc: 'LLM synthesizes answer from retrieved context with source citations', color: 'bg-red-500' },
                    ].map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center"
                        >
                            {i < 4 && <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 text-xl z-10">→</div>}
                            <div className={`inline-flex p-3 rounded-lg ${step.color} mb-3`}>
                                <step.icon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">{step.title}</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Key decisions */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                    <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                        <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Chunking Strategy</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Recursive character splitting with 512‑token chunks and 64‑token overlap. Experimented with semantic chunking
                            but found simpler methods performed better for the FAQ‑style queries typical of job seekers.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                        <h3 className="font-semibold mb-3 text-gray-900 dark:text-white">Retrieval Tuning</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Top‑5 retrieval with MMR (Maximal Marginal Relevance) to balance relevance and diversity.
                            Added metadata filtering by document type and recency to prioritize up‑to‑date government resources.
                        </p>
                    </div>
                </div>
            </section>

            {/* API Examples */}
            <section className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="container-custom section-padding-sm">
                    <h2 className="heading-3 mb-8">API Design</h2>

                    <div className="space-y-6 max-w-4xl">
                        {/* Endpoint 1 */}
                        <div className="code-block">
                            <div className="code-block-header">
                                <span className="code-block-dot bg-red-500"></span>
                                <span className="code-block-dot bg-yellow-500"></span>
                                <span className="code-block-dot bg-green-500"></span>
                                <span className="ml-3 text-xs text-gray-400">POST /api/v1/ask</span>
                            </div>
                            <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                                {`# Request
{
  "question": "What certifications improve my chances for data engineering roles in Ontario?",
  "filters": { "doc_type": "government", "max_age_days": 180 }
}

# Response 200
{
  "answer": "For data engineering roles in Ontario, the most impactful certifications are...",
  "sources": [
    { "title": "Ontario IEN Guide 2025", "url": "...", "chunk_id": "doc_42_chunk_7" }
  ],
  "confidence": 0.87,
  "tokens_used": 1240
}`}
                            </pre>
                        </div>

                        {/* Endpoint 2 */}
                        <div className="code-block">
                            <div className="code-block-header">
                                <span className="code-block-dot bg-red-500"></span>
                                <span className="code-block-dot bg-yellow-500"></span>
                                <span className="code-block-dot bg-green-500"></span>
                                <span className="ml-3 text-xs text-gray-400">POST /api/v1/ingest</span>
                            </div>
                            <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                                {`# Request — admin-only, JWT-protected
{
  "source_url": "https://example.ca/career-guide.pdf",
  "doc_type": "guide",
  "metadata": { "author": "Ontario Gov", "published": "2025-01" }
}

# Response 202
{
  "job_id": "ingest_abc123",
  "status": "processing",
  "estimated_chunks": 48
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges & Learnings */}
            <section className="container-custom section-padding-sm">
                <h2 className="heading-3 mb-8">Challenges &amp; Learnings</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                        <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Challenge: Hallucination Control</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            The LLM would sometimes invent certification names. Solved by adding strict system prompts that require
                            source citations, and added a post‑processing step that cross‑references generated answers against retrieved chunks.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                        <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Challenge: Latency Budget</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            End‑to‑end response time exceeded 5 seconds. Optimized by pre‑computing common query embeddings, reducing chunk size,
                            and implementing response streaming via Server‑Sent Events for a perceived‑instant UX.
                        </p>
                    </div>
                </div>
            </section>

            {/* What this proves */}
            <section className="bg-gradient-to-br from-accent/5 to-emerald/5 border-t border-gray-200 dark:border-gray-800">
                <div className="container-custom section-padding-sm">
                    <h2 className="heading-3 mb-6">What This Proves About Me</h2>
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
                        {[
                            'Can design and implement a full RAG pipeline end‑to‑end — ingestion, chunking, embedding, retrieval, generation',
                            'Understands vector‑database indexing strategies and when to use metadata filtering vs. semantic search alone',
                            'Builds production APIs with JWT authentication, rate limiting, structured logging, and API versioning',
                            'Thinks about LLM reliability — hallucination mitigation, confidence scoring, and source attribution',
                            'Can optimize for latency with caching, streaming, and pre‑computation strategies',
                            'Documents API contracts with OpenAPI specs and provides clear request/response examples',
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
