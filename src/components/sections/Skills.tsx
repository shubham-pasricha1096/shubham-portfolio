"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Sparkles, Server, BarChart3, Monitor, Trophy } from "lucide-react";

export default function Skills() {
    const categoryIcons: Record<string, React.ReactNode> = {
        "AI": <Sparkles className="w-5 h-5 text-blue-400" />,
        "Backend": <Server className="w-5 h-5 text-purple-400" />,
        "Analytics": <BarChart3 className="w-5 h-5 text-emerald-400" />,
        "Frontend": <Monitor className="w-5 h-5 text-amber-400" />
    };

    return (
        <section id="skills" className="py-24 bg-black text-white scroll-mt-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none z-0" />
            <div className="absolute top-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none z-0" />

            <div className="container mx-auto px-6 z-10 relative">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                            Skills & Certifications
                        </h2>
                        <div className="h-1 w-12 bg-blue-500 mt-4 rounded" />
                    </motion.div>

                    {/* Technical Skills Cards */}
                    <div className="mb-20">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {Object.entries(resumeData.skills).map(([category, skills], catIndex) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    className="bg-zinc-900/30 backdrop-blur-md p-6 rounded-2xl border border-zinc-850 hover:border-zinc-800 hover:shadow-lg hover:shadow-blue-500/[0.01] flex flex-col justify-between transition-all duration-300"
                                >
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl w-fit">
                                                {categoryIcons[category]}
                                            </div>
                                            <h4 className="text-lg font-bold text-white tracking-wide">{category}</h4>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {skills.map((skill, index) => (
                                                <motion.span
                                                    key={skill}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: (catIndex * 0.05) + (index * 0.02) }}
                                                    className="px-3 py-1.5 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-850 hover:border-zinc-700 text-xs text-zinc-300 rounded-lg hover:text-white transition-all cursor-default"
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Trophy className="w-6 h-6 text-yellow-500" />
                            <h3 className="text-xl font-bold text-white tracking-wide">Featured Certifications</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {resumeData.certificates.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/20 border border-zinc-850/50 hover:bg-zinc-900/30 hover:border-zinc-800 transition-colors"
                                >
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                    <span className="text-sm text-zinc-300 font-light leading-relaxed">{cert}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
