'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Shield, Database, Brain, Users, Lock, BarChart3 } from 'lucide-react'

export default function AICRMHelpdeskPage() {
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
                        <span className="tag-backend">FastAPI</span>
                        <span className="tag-backend">RBAC</span>
                        <span className="tag-ai">OpenAI</span>
                        <span className="tag-backend">PostgreSQL</span>
                    </div>
                    <h1 className="heading-1 text-3xl md:text-4xl lg:text-5xl mb-4">
                        AI‑Assisted CRM / Helpdesk
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">CRUD + LLM Intelligence</p>
                    <p className="text-body max-w-3xl mb-8">
                        A production‑grade ticket‑management backend with full CRUD, role‑based access control, cursor‑based pagination,
                        and advanced filtering — enhanced by an LLM service that automatically summarizes tickets and suggests agent replies
                        with circuit‑breaker patterns, timeouts, and graceful degradation.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="btn-primary inline-flex items-center gap-2"><Github className="w-4 h-4" /> View Code</a>
                        <a href="#" className="btn-secondary inline-flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Live Demo</a>
                    </div>
                </motion.div>
            </section>

            {/* Database Schema */}
            <section className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="container-custom section-padding-sm">
                    <h2 className="heading-3 mb-8">Database Design</h2>

                    <div className="code-block max-w-4xl mb-8">
                        <div className="code-block-header">
                            <span className="code-block-dot bg-red-500"></span>
                            <span className="code-block-dot bg-yellow-500"></span>
                            <span className="code-block-dot bg-green-500"></span>
                            <span className="ml-3 text-xs text-gray-400">schema.sql — Core tables</span>
                        </div>
                        <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                            {`-- Core entities
users          (id, email, name, role, org_id, created_at)
organizations  (id, name, plan, settings_json)
tickets        (id, org_id, requester_id, assignee_id, status, priority,
                subject, body, ai_summary, created_at, updated_at)
ticket_replies (id, ticket_id, author_id, body, ai_suggested, created_at)
tags           (id, name, org_id)
ticket_tags    (ticket_id, tag_id)

-- RBAC
roles          (id, name, permissions_json)  -- admin, agent, viewer
user_roles     (user_id, role_id, org_id)

-- Indexes: (org_id, status), (assignee_id, status), (created_at DESC)
-- Full-text search index on tickets.subject + tickets.body`}
                        </pre>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
                        <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-2 mb-3">
                                <Lock className="w-4 h-4 text-accent" />
                                <h3 className="font-semibold text-sm text-gray-900 dark:text-white">RBAC</h3>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                Permission‑based access via JWT claims. Admins manage agents/viewers, agents handle tickets, viewers read only.
                                Every endpoint checks permissions via a reusable FastAPI dependency.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-2 mb-3">
                                <BarChart3 className="w-4 h-4 text-accent" />
                                <h3 className="font-semibold text-sm text-gray-900 dark:text-white">Pagination</h3>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                Cursor‑based pagination for efficient traversal of large ticket lists. Supports sorting by created_at,
                                priority, or status with composite cursor keys for stable ordering.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-2 mb-3">
                                <Database className="w-4 h-4 text-accent" />
                                <h3 className="font-semibold text-sm text-gray-900 dark:text-white">Multi‑Tenancy</h3>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                Organization‑scoped data isolation. Every query automatically filtered by org_id from the authenticated
                                user&apos;s JWT token, preventing cross‑tenant data leaks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* LLM Integration */}
            <section className="container-custom section-padding-sm">
                <h2 className="heading-3 mb-8">LLM Integration</h2>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mb-8">
                    <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                        <div className="flex items-center gap-2 mb-3">
                            <Brain className="w-5 h-5 text-purple-500" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">Auto‑Summarization</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            When a ticket has 3+ replies, the system generates a concise summary highlighting the issue,
                            steps taken, and current status. Summaries are cached and only regenerated when the conversation updates.
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                            Prompt: structured template with role, context window, and output format constraints.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                        <div className="flex items-center gap-2 mb-3">
                            <Users className="w-5 h-5 text-purple-500" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">Reply Suggestions</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Agents see an AI‑suggested reply draft based on the ticket history and org‑specific knowledge base.
                            Suggestions are clearly marked as AI‑generated. Agents can edit, accept, or dismiss.
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                            Grounded in org data — avoids generic responses by including relevant knowledge‑base articles.
                        </p>
                    </div>
                </div>

                {/* Reliability patterns */}
                <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 max-w-4xl">
                    <h3 className="font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                        <Shield className="w-5 h-5 text-accent" /> Reliability Patterns
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">Circuit Breaker</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Opens after 3 consecutive failures. Half‑open after 60s. Prevents cascading failures to the LLM provider.</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">Timeout + Fallback</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">5s timeout on LLM calls. On timeout, ticket is still saved — AI summary is generated asynchronously and backfilled.</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">Token Budgets</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Per‑org daily token limits tracked in Redis. Alerts at 80% and hard stops at 100% to prevent surprise costs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What this proves */}
            <section className="bg-gradient-to-br from-accent/5 to-emerald/5 border-t border-gray-200 dark:border-gray-800">
                <div className="container-custom section-padding-sm">
                    <h2 className="heading-3 mb-6">What This Proves About Me</h2>
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
                        {[
                            'Implements RBAC, multi‑tenancy, and complex query patterns in a real‑world schema',
                            'Integrates external AI services with circuit‑breaker, retry, and graceful degradation patterns',
                            'Designs cursor‑based pagination that scales to large datasets without offset inefficiency',
                            'Thinks about cost control (token budgets) and reliability (timeouts, fallbacks) for LLM features',
                            'Writes comprehensive tests — unit, integration, and API contract tests with Pytest',
                            'Builds APIs that a front‑end team can actually ship against — clean contracts, clear error responses',
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
