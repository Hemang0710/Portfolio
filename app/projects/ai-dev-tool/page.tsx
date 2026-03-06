'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Terminal, Shield, Zap, FileCode, Settings, AlertTriangle } from 'lucide-react'

export default function AIDevToolPage() {
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
                        <span className="tag-tool">CLI Tool</span>
                        <span className="tag-ai">OpenAI</span>
                        <span className="tag-backend">Python</span>
                        <span className="tag-backend">FastAPI</span>
                    </div>
                    <h1 className="heading-1 text-3xl md:text-4xl lg:text-5xl mb-4">
                        Personal AI Dev Tool
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">LLM‑Powered Code Assistant</p>
                    <p className="text-body max-w-3xl mb-8">
                        A CLI and web tool that reviews pull requests, generates data‑processing boilerplate,
                        and explains complex code — using an LLM with configurable guardrails for safety, token budgets,
                        response caching, and rate limiting. Designed to improve developer productivity while keeping humans in the loop.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="btn-primary inline-flex items-center gap-2"><Github className="w-4 h-4" /> View Code</a>
                        <a href="#" className="btn-secondary inline-flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Live Demo</a>
                    </div>
                </motion.div>
            </section>

            {/* Features */}
            <section className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="container-custom section-padding-sm">
                    <h2 className="heading-3 mb-8">Key Features</h2>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0 }}
                            className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                        >
                            <FileCode className="w-6 h-6 text-accent mb-3" />
                            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">PR Review</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Point it at a Git diff and get a structured review: potential bugs, style issues, performance concerns,
                                and security red flags. Configurable severity thresholds so you only see what matters.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                        >
                            <Terminal className="w-6 h-6 text-accent mb-3" />
                            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Code Generation</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Generate data‑processing boilerplate from natural language: &quot;Create a Pandas pipeline that reads CSV,
                                cleans nulls, normalizes columns, and outputs Parquet.&quot; Templates are customizable per project.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                        >
                            <Zap className="w-6 h-6 text-accent mb-3" />
                            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Code Explainer</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Paste a complex function and get a plain‑English breakdown of what it does, line by line.
                                Great for onboarding onto unfamiliar codebases or reviewing dense algorithmic code.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CLI Examples */}
            <section className="container-custom section-padding-sm">
                <h2 className="heading-3 mb-8">CLI Interface</h2>

                <div className="space-y-6 max-w-4xl">
                    <div className="code-block">
                        <div className="code-block-header">
                            <span className="code-block-dot bg-red-500"></span>
                            <span className="code-block-dot bg-yellow-500"></span>
                            <span className="code-block-dot bg-green-500"></span>
                            <span className="ml-3 text-xs text-gray-400">Terminal — PR Review</span>
                        </div>
                        <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                            {`$ ai-dev review --diff HEAD~1 --severity medium

🔍 Reviewing 3 files, 47 lines changed...

┌─ src/pipeline/transform.py ──────────────────────────────
│ ⚠️  MEDIUM  Line 23: Potential null reference — 'df' could
│             be empty after filter. Add .empty check.
│ 💡 STYLE   Line 41: Consider extracting magic number 0.95
│             into a named constant for readability.
└──────────────────────────────────────────────────────────

┌─ tests/test_transform.py ────────────────────────────────
│ ✅ No issues found
└──────────────────────────────────────────────────────────

Summary: 1 warning, 1 style suggestion across 3 files
Tokens used: 890 / 10,000 daily budget`}
                        </pre>
                    </div>

                    <div className="code-block">
                        <div className="code-block-header">
                            <span className="code-block-dot bg-red-500"></span>
                            <span className="code-block-dot bg-yellow-500"></span>
                            <span className="code-block-dot bg-green-500"></span>
                            <span className="ml-3 text-xs text-gray-400">Terminal — Code Generation</span>
                        </div>
                        <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                            {`$ ai-dev generate "ETL pipeline: read JSON from S3, flatten nested objects,
                    validate with pydantic, write to PostgreSQL"

📝 Generating pipeline scaffold...

Created files:
  ├── pipeline/extract.py    (S3 reader with retry logic)
  ├── pipeline/transform.py  (Flattening + Pydantic validation)
  ├── pipeline/load.py       (PostgreSQL upsert with SQLAlchemy)
  ├── pipeline/main.py       (Orchestrator with error handling)
  └── tests/test_pipeline.py (Unit tests for each stage)

⚡ All files use your project's code style from .ai-dev.toml`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* Design Decisions */}
            <section className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="container-custom section-padding-sm">
                    <h2 className="heading-3 mb-8">Design Decisions</h2>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-2 mb-3">
                                <Shield className="w-5 h-5 text-accent" />
                                <h3 className="font-semibold text-gray-900 dark:text-white">Safety Guardrails</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Content filtering prevents generating code that touches file system outside the project,
                                executes shell commands, or accesses environment variables. All generated code is sandboxed
                                by default and requires explicit --execute flag.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-2 mb-3">
                                <Settings className="w-5 h-5 text-accent" />
                                <h3 className="font-semibold text-gray-900 dark:text-white">Project‑Aware Config</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                <code className="text-xs bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">.ai-dev.toml</code> config per project defines: coding style, preferred libraries,
                                test framework, import conventions, and custom prompt templates. The tool adapts to your project,
                                not the other way around.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-2 mb-3">
                                <Zap className="w-5 h-5 text-accent" />
                                <h3 className="font-semibold text-gray-900 dark:text-white">Response Caching</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Identical prompts (same diff, same config) are cached in SQLite with a configurable TTL.
                                Saves tokens and gives instant responses for repeated reviews during iterative development.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-2 mb-3">
                                <AlertTriangle className="w-5 h-5 text-accent" />
                                <h3 className="font-semibold text-gray-900 dark:text-white">Human in the Loop</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Generated code is always presented as a suggestion, never auto‑committed. The tool explicitly
                                warns when generated code modifies existing files and asks for confirmation before overwriting.
                            </p>
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
                            'Builds developer‑productivity tools with thoughtful UX and sensible defaults',
                            'Designs for reliability: token budgets, response caching, rate limiting, and content filtering',
                            'Understands the trade‑offs of AI‑assisted workflows and how to keep humans in the loop',
                            'Creates configurable, project‑aware tools that adapt to different codebases and conventions',
                            'Implements CLI interfaces with clear output formatting, progress indicators, and error messages',
                            'Thinks about security: sandboxed execution, content filtering, and explicit user consent',
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
