"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Brain, Cpu, BarChart2, Lightbulb, Compass, GraduationCap } from "lucide-react";

export default function About() {
    const storySteps = [
        {
            number: "01",
            title: "Who I Am",
            content: "I'm Shubham, a final year BCA student who's spent the last two years building production-grade AI systems at Bharti Airtel — from RAG chatbots to observability agents. My work sits at the intersection of GenAI engineering and product thinking."
        },
        {
            number: "02",
            title: "What Drives Me",
            content: "I care about systems that actually ship and products that solve real friction. I love bridging the gap between theoretical AI possibilities and practical, real-world business automation that drives immediate impact."
        },
        {
            number: "03",
            title: "What I Specialize In",
            content: "Developing advanced RAG pipelines, LLM orchestration layers, and custom automation agents. I design robust data pipelines and interactive analytical dashboards to extract actionable business insights."
        },
        {
            number: "04",
            title: "What Makes Me Different",
            content: "I don't just write code; I think in terms of product loops, user adoption, and operational metrics. I bring a strong background in tech-ops and analytics, coupled with a hands-on approach to Generative AI engineering."
        },
        {
            number: "05",
            title: "Career Goals",
            content: "I'm actively seeking full-time roles in AI Engineering, Product, or TechOps where I can orchestrate scalable intelligent systems and build workflows that drive immediate business impact."
        }
    ];

    const cards = [
        {
            title: "Product Thinking",
            desc: "Designing user-centric AI flows, optimization loops, and features that solve actual operational pain points.",
            icon: <Lightbulb className="w-6 h-6 text-amber-400" />
        },
        {
            title: "AI Engineering",
            desc: "Orchestrating LLMs, building production-grade RAG systems, vector embeddings search, and intelligent agent frameworks.",
            icon: <Brain className="w-6 h-6 text-blue-400" />
        },
        {
            title: "Automation",
            desc: "Engineering async task processing, webhook integrations, auto-remediations, and agentic workflows.",
            icon: <Cpu className="w-6 h-6 text-purple-400" />
        },
        {
            title: "Data Analytics",
            desc: "Creating interactive dashboards and building cleaning pipelines for actionable subscriber churn and telemetry insights.",
            icon: <BarChart2 className="w-6 h-6 text-emerald-400" />
        },
        {
            title: "Problem Solving",
            desc: "Navigating unstructured database diagnostics, RCA postmortems, and debugging complex integration latency.",
            icon: <Compass className="w-6 h-6 text-red-400" />
        }
    ];

    return (
        <section id="about" className="py-24 bg-black text-white scroll-mt-20 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />

            <div className="container mx-auto px-6 z-10 relative">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                            About Me
                        </h2>
                        <div className="h-1 w-12 bg-blue-500 mt-4 rounded" />
                    </motion.div>

                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        {/* Left: Narrative / Storytelling */}
                        <div className="lg:col-span-6 space-y-10">
                            {storySteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="relative pl-8 border-l border-zinc-800 hover:border-blue-500/50 transition-colors"
                                >
                                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-zinc-700 border border-black group-hover:bg-blue-500" />
                                    <div className="text-xs font-mono text-zinc-500 mb-1">{step.number} // {step.title}</div>
                                    <p className="text-zinc-300 leading-relaxed font-light">{step.content}</p>

                                    {/* Embed Education card under Who I Am */}
                                    {idx === 0 && resumeData.education && (
                                        <div className="mt-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-850 flex items-start gap-3.5 backdrop-blur-sm">
                                            <GraduationCap className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                            <div>
                                                {resumeData.education.map((edu, i) => (
                                                    <div key={i}>
                                                        <h4 className="text-sm font-semibold text-white">{edu.school}</h4>
                                                        <p className="text-xs text-zinc-400 mt-0.5">{edu.degree}</p>
                                                        <p className="text-[11px] text-zinc-500 font-mono mt-1">{edu.year} | {edu.grade}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Right: Pillars Grid */}
                        <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6 lg:sticky lg:top-28">
                            <div className="space-y-6 sm:col-span-2">
                                <h3 className="text-lg font-semibold tracking-wide text-zinc-400 font-mono uppercase">
                                    // Core Capabilities
                                </h3>
                            </div>
                            {cards.map((card, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    whileHover={{ y: -5 }}
                                    className={`p-6 rounded-2xl bg-zinc-900/30 border border-zinc-850 hover:border-zinc-800 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/[0.02] flex flex-col justify-between transition-all duration-300 ${
                                        i === 4 ? "sm:col-span-2" : ""
                                    }`}
                                >
                                    <div>
                                        <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl w-fit mb-4">
                                            {card.icon}
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                                        <p className="text-sm text-zinc-400 leading-relaxed font-light">{card.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
