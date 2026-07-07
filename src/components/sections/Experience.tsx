"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Target, Cpu, TrendingUp, Award } from "lucide-react";
import { useRef } from "react";

interface ExperienceItem {
    role: string;
    company: string;
    duration: string;
    achievements: string[];
    metrics: string;
    tech: string[];
    businessOutcome: string;
    logo: React.ReactNode;
}

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001
    });

    const experiences: ExperienceItem[] = [
        {
            role: "Product and AI Intern",
            company: "Bharti Airtel",
            duration: "January 2026 - July 2026",
            achievements: [
                "Built a production RAG-based sales enablement chatbot using GPT-4o mini, LangChain, and PgVector deployed on Azure Bot Service and GCP.",
                "Implemented asynchronous document ingestion pipeline using Celery, NATS, and Redis with MongoDB for metadata storage.",
                "Integrated backend services built on Django with Airtel's internal knowledge base for real-time query resolution."
            ],
            metrics: "70% Postmortem Automation",
            tech: ["Django", "GPT-4o mini", "LangChain", "PgVector", "Celery", "Redis", "MongoDB", "NATS"],
            businessOutcome: "Accelerated technical query loops and slashed incident RCA preparation overhead.",
            logo: (
                <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center font-bold text-red-500 text-lg shadow-lg shadow-red-500/5 select-none shrink-0">
                    A
                </div>
            )
        },
        {
            role: "Product Analyst",
            company: "Bharti Airtel",
            duration: "May 2025 - July 2025",
            achievements: [
                "Designed and developed an AI-powered chatbot system for telecom workflows enabling real-time user interaction and session management.",
                "Built production-grade RAG architectures integrating MongoDB for persistent message storage and Redis for active session memory.",
                "Implemented natural language processing pipelines to handle complex telecom queries."
            ],
            metrics: "40% Latency Reduction",
            tech: ["Node.js", "MongoDB", "Redis", "NLP pipelines", "OpenRouter", "Express"],
            businessOutcome: "Delivered sub-second chatbot response latencies and reduced active session memory drift.",
            logo: (
                <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center font-bold text-red-500 text-lg shadow-lg shadow-red-500/5 select-none shrink-0">
                    A
                </div>
            )
        },
        {
            role: "ML Intern",
            company: "Bharat Intern (now Orbitor)",
            duration: "May 2024 - July 2024",
            achievements: [
                "Developed machine learning models for house price prediction utilizing real-world datasets and advanced statistical techniques.",
                "Collaborated with cross-functional teams to design scalable ML solutions for business challenges, improving decision-making accuracy by 20%.",
                "Contributed to system maintenance, debugging, and enhancement of AI model components to ensure optimal performance."
            ],
            metrics: "20% Accuracy Boost",
            tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "Git"],
            businessOutcome: "Provided product and engineering teams with predictive metrics to optimize user onboarding pipelines.",
            logo: (
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-bold text-blue-400 text-lg shadow-lg shadow-blue-500/5 select-none shrink-0">
                    O
                </div>
            )
        }
    ];

    return (
        <section id="experience" className="py-24 bg-black text-white scroll-mt-20 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 max-w-4xl mx-auto md:text-center flex flex-col items-start md:items-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 flex items-center gap-3">
                        <Briefcase className="w-8 h-8 text-blue-500" /> Career Experience
                    </h2>
                    <div className="h-1 w-12 bg-blue-500 mt-4 rounded" />
                </motion.div>

                {/* Timeline Grid Wrapper */}
                <div ref={containerRef} className="relative max-w-4xl mx-auto py-10">
                    
                    {/* Background Axis Line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-zinc-900" />
                    
                    {/* Dynamic Scroll Progress Timeline Line */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"
                    />

                    {/* Milestones Map */}
                    <div className="space-y-16">
                        {experiences.map((exp, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                                    {/* Timeline Node Point indicator */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-[7.5px] w-4 h-4 rounded-full border border-black bg-zinc-950 flex items-center justify-center z-10">
                                        <motion.div
                                            initial={{ scale: 0.5 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            className="w-2 h-2 rounded-full bg-blue-500"
                                        />
                                    </div>

                                    {/* Left Content Card spacer */}
                                    <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12 md:text-right flex justify-end" : "md:pl-12 order-last md:order-none"}`}>
                                        {isEven && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
                                                className="w-full pl-12 md:pl-0"
                                            >
                                                <div className="bg-zinc-900/30 backdrop-blur-md p-6 rounded-2xl border border-zinc-850 hover:border-zinc-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/[0.01]">
                                                    {/* Header Block */}
                                                    <div className="flex items-start gap-4 mb-4 justify-start md:justify-end text-left md:text-right">
                                                        <div className="order-first md:order-last shrink-0">
                                                            {exp.logo}
                                                        </div>
                                                        <div>
                                                            <span className="text-xs font-mono text-zinc-500 block mb-1">{exp.duration}</span>
                                                            <h3 className="text-lg font-bold text-white leading-snug">{exp.role}</h3>
                                                            <p className="text-sm text-zinc-400 font-semibold mt-0.5">{exp.company}</p>
                                                        </div>
                                                    </div>

                                                    {/* Achievements List */}
                                                    <div className="mb-6 text-left">
                                                        <h4 className="text-xs font-bold text-zinc-500 font-mono uppercase tracking-wider mb-3">// Key Achievements</h4>
                                                        <ul className="space-y-2.5 text-sm text-zinc-300 font-light">
                                                            {exp.achievements.map((bullet, bIdx) => (
                                                                <li key={bIdx} className="flex items-start gap-2.5">
                                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                                                    {bullet}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Technologies Row */}
                                                    <div className="mb-6 text-left">
                                                        <div className="flex flex-wrap gap-1.5 justify-start md:justify-end">
                                                            {exp.tech.map((tech) => (
                                                                <span key={tech} className="text-[10px] font-mono px-2 py-0.5 bg-zinc-950 border border-zinc-850 text-zinc-400 rounded">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Metrics & Outcome Grid */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-900 text-left">
                                                        <div className="p-3.5 rounded-xl bg-blue-500/5 border border-blue-500/10">
                                                            <h5 className="text-[10px] font-bold text-blue-400 font-mono uppercase mb-1 flex items-center gap-1.5"><Award size={12} /> Impact Metric</h5>
                                                            <span className="text-sm font-semibold text-white tracking-wide">{exp.metrics}</span>
                                                        </div>
                                                        <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-850">
                                                            <h5 className="text-[10px] font-bold text-zinc-400 font-mono uppercase mb-1 flex items-center gap-1.5"><Target size={12} /> Business Outcome</h5>
                                                            <p className="text-[11px] text-zinc-400 font-light leading-relaxed">{exp.businessOutcome}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Right Content Card spacer */}
                                    <div className={`w-full md:w-1/2 ${!isEven ? "md:pl-12" : "md:pr-12"}`}>
                                        {!isEven && (
                                            <motion.div
                                                initial={{ opacity: 0, x: 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
                                                className="w-full pl-12 md:pl-0"
                                            >
                                                <div className="bg-zinc-900/30 backdrop-blur-md p-6 rounded-2xl border border-zinc-850 hover:border-zinc-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/[0.01]">
                                                    {/* Header Block */}
                                                    <div className="flex items-start gap-4 mb-4 text-left">
                                                        <div className="shrink-0">
                                                            {exp.logo}
                                                        </div>
                                                        <div>
                                                            <span className="text-xs font-mono text-zinc-500 block mb-1">{exp.duration}</span>
                                                            <h3 className="text-lg font-bold text-white leading-snug">{exp.role}</h3>
                                                            <p className="text-sm text-zinc-400 font-semibold mt-0.5">{exp.company}</p>
                                                        </div>
                                                    </div>

                                                    {/* Achievements List */}
                                                    <div className="mb-6 text-left">
                                                        <h4 className="text-xs font-bold text-zinc-500 font-mono uppercase tracking-wider mb-3">// Key Achievements</h4>
                                                        <ul className="space-y-2.5 text-sm text-zinc-300 font-light">
                                                            {exp.achievements.map((bullet, bIdx) => (
                                                                <li key={bIdx} className="flex items-start gap-2.5">
                                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                                                                    {bullet}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Technologies Row */}
                                                    <div className="mb-6 text-left">
                                                        <div className="flex flex-wrap gap-1.5">
                                                            {exp.tech.map((tech) => (
                                                                <span key={tech} className="text-[10px] font-mono px-2 py-0.5 bg-zinc-950 border border-zinc-850 text-zinc-400 rounded">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Metrics & Outcome Grid */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-900 text-left">
                                                        <div className="p-3.5 rounded-xl bg-purple-500/5 border border-purple-500/10">
                                                            <h5 className="text-[10px] font-bold text-purple-400 font-mono uppercase mb-1 flex items-center gap-1.5"><Award size={12} /> Impact Metric</h5>
                                                            <span className="text-sm font-semibold text-white tracking-wide">{exp.metrics}</span>
                                                        </div>
                                                        <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-850">
                                                            <h5 className="text-[10px] font-bold text-zinc-400 font-mono uppercase mb-1 flex items-center gap-1.5"><Target size={12} /> Business Outcome</h5>
                                                            <p className="text-[11px] text-zinc-400 font-light leading-relaxed">{exp.businessOutcome}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                    
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
