'use client'

import { motion } from 'framer-motion'
import { Code2, BrainCircuit, Database, TerminalSquare } from 'lucide-react'

export default function HeroAnimation() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Floating Card 1 - AI */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -100, y: 50 }}
                animate={{
                    opacity: [0.5, 0.8, 0.5],
                    y: [50, 20, 50],
                    x: [-100, -90, -100],
                    rotate: [-5, 5, -5],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[15%] left-[5%] md:left-[10%] lg:left-[15%] p-4 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/50 shadow-xl hidden sm:flex items-center gap-3"
            >
                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-600 dark:text-indigo-400">
                    <BrainCircuit className="w-6 h-6" />
                </div>
                <div className="text-left">
                    <div className="text-xs font-bold text-gray-900 dark:text-white">RAG System</div>
                    <div className="flex gap-1 mt-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse"></span>
                        <span className="text-[10px] text-gray-500 dark:text-gray-400 font-mono">Status: Active</span>
                    </div>
                </div>
            </motion.div>

            {/* Floating Card 2 - Backend */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 100, y: -50 }}
                animate={{
                    opacity: [0.4, 0.7, 0.4],
                    y: [-50, -80, -50],
                    x: [100, 90, 100],
                    rotate: [5, -5, 5],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-[25%] right-[5%] md:right-[10%] lg:right-[15%] p-4 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700/50 shadow-xl hidden sm:block"
            >
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                </div>
                <div className="font-mono text-[10px] text-gray-600 dark:text-gray-300">
                    <p className="text-accent">@app.post(&quot;/api/v1/predict&quot;)</p>
                    <p>async def <span className="text-blue-500">predict</span>(data: Model):</p>
                    <p className="pl-4">return pipeline.run(data)</p>
                </div>
            </motion.div>

            {/* Floating Card 3 - Data */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 150 }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    y: [150, 120, 150],
                    rotate: [-10, -5, -10],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-[60%] left-[8%] md:left-[12%] p-3 rounded-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 shadow-lg hidden lg:flex items-center justify-center"
            >
                <Database className="w-8 h-8 text-emerald-500/60" />
            </motion.div>

            {/* Floating Card 4 - Tool */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -100 }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    y: [-100, -130, -100],
                    rotate: [10, 15, 10],
                }}
                transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute top-[20%] right-[10%] md:right-[20%] p-3 rounded-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 shadow-lg hidden lg:flex items-center justify-center"
            >
                <TerminalSquare className="w-8 h-8 text-orange-500/60" />
            </motion.div>
        </div>
    )
}
