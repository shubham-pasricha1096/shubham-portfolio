"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FolderGit2, Github, ExternalLink, BookOpen, X, Sparkles, Cpu, ShieldAlert, Database, Speech, BarChart3, Target, ArrowRight, ArrowDown } from "lucide-react";

interface ProjectCaseStudy {
    title: string;
    tech: string[];
    date: string;
    description: string;
    problem: string;
    whyItMattered: string;
    solution: string;
    results: string[];
    lessonsLearned: string;
    architectureNodes: string[];
    businessImpact: string;
    metrics: string;
    github?: string;
    demo?: string;
    imageGradient: string;
    icon: React.ReactNode;
}

function ArchitectureDiagram({ nodes }: { nodes: string[] }) {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Embedded styles for dash flow animation */}
            <style>{`
                @keyframes flowHorizontal {
                    to {
                        stroke-dashoffset: -12;
                    }
                }
                @keyframes flowVertical {
                    to {
                        stroke-dashoffset: -12;
                    }
                }
                .flow-line-hz {
                    stroke-dasharray: 6 6;
                    animation: flowHorizontal 1.2s linear infinite;
                }
                .flow-line-vt {
                    stroke-dasharray: 6 6;
                    animation: flowVertical 1.2s linear infinite;
                }
            `}</style>

            <div className="w-full overflow-x-auto py-2 scrollbar-thin">
                <div className="flex flex-col md:flex-row items-center justify-start md:justify-center gap-4 md:gap-0 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-850/80 backdrop-blur-sm min-w-full md:min-w-max">
                    {nodes.map((node, i) => (
                        <div key={i} className="flex flex-col md:flex-row items-center shrink-0">
                            {/* Node Card */}
                            <div className="px-4 py-3 rounded-xl bg-zinc-950/90 border border-zinc-800 backdrop-blur-md shadow-lg text-center min-w-[130px] hover:border-blue-500/40 transition-colors z-10 mx-2">
                                <span className="text-[11px] font-mono font-bold tracking-wider text-zinc-200">
                                    {node}
                                </span>
                            </div>

                            {/* Connector Arrow */}
                            {i < nodes.length - 1 && (
                                <div className="flex items-center justify-center py-2 md:py-0 w-auto">
                                    {/* Desktop Horizontal Flow Line */}
                                    <svg className="hidden md:block w-12 h-6 text-zinc-700" viewBox="0 0 100 20" fill="none">
                                        <path d="M0 10h100" stroke="currentColor" strokeWidth="2.5" className="text-zinc-800" />
                                        <path d="M0 10h90" stroke="#3b82f6" strokeWidth="2.5" className="flow-line-hz" />
                                        <path d="M88 5l8 5-8 5" stroke="#3b82f6" strokeWidth="2" fill="none" />
                                    </svg>

                                    {/* Mobile Vertical Flow Line */}
                                    <svg className="block md:hidden w-6 h-12 text-zinc-700" viewBox="0 0 20 100" fill="none">
                                        <path d="M10 0v100" stroke="currentColor" strokeWidth="2.5" className="text-zinc-800" />
                                        <path d="M10 0v90" stroke="#3b82f6" strokeWidth="2.5" className="flow-line-vt" />
                                        <path d="M5 88l5 8 5-8" stroke="#3b82f6" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const targetRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [xTranslation, setXTranslation] = useState(0);
    const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectCaseStudy | null>(null);

    const projectsData: ProjectCaseStudy[] = [
        {
            title: "Intelligent Incident Postmortem & RCA Agent",
            tech: ["FastAPI", "LangChain", "React", "Pydantic", "Python"],
            date: "June 2026",
            description: "Automated outage postmortem generation, reducing manual SRE write-up tasks from hours to seconds.",
            problem: "On-call SRE and Operations teams spend hours manually parsing logs and tracing alert sequences to compile root cause analysis (RCA) reports, introducing human delays and slowing recovery loops.",
            whyItMattered: "Delayed RCA reports directly increase recurring incident MTTR and risk client SLA breaches, resulting in potential service credit penalties and decreased platform trust.",
            solution: "Designed an autonomous agentic pipeline that ingests alert streams, classifies severity, coordinates diagnostic prompts, and writes formatted incident postmortems complete with timeline trace data.",
            results: [
                "Reduced average postmortem preparation time from 3 hours to under 30 seconds.",
                "Automated 70% of incident postmortem drafts with zero manual editing required.",
                "Ingested and analyzed over 10,000 logs/sec during peak system outage test simulations."
            ],
            lessonsLearned: "Enforcing strictly typed schemas via Pydantic model validators is crucial for generating stable, machine-readable incident timelines from fuzzy LLM nodes.",
            architectureNodes: ["Alert Stream", "FastAPI Router", "LangChain Agent", "Pydantic Validator", "Postgres Storage", "React UI"],
            businessImpact: "Eliminated manual log aggregation cycles, enabling engineering teams to focus immediately on service remediation rather than paperwork.",
            metrics: "70% Time Saved",
            imageGradient: "from-blue-600 to-indigo-900",
            icon: <ShieldAlert className="w-6 h-6 text-blue-400" />,
            github: "https://github.com/shubham-pasricha1096",
            demo: "#"
        },
        {
            title: "SRE AI Agent",
            tech: ["Grafana", "Prometheus", "OpenRouter", "Python", "MCP"],
            date: "May 2026",
            description: "Automated routine microservice alert diagnostics and triage, preventing engineer pager fatigue.",
            problem: "Static system alerts trigger paging alerts for non-critical CPU spikes or transient memory warnings, causing alert fatigue and leading to missed critical alerts.",
            whyItMattered: "On-call alert fatigue directly causes critical platform warning indicators to be ignored, risking system downtime and client transaction losses.",
            solution: "Constructed an autonomous agent utilizing Model Context Protocol (MCP) to directly query Grafana/Prometheus endpoints, parse logs, and run runbook diagnostic checks.",
            results: [
                "Resolved 80% of routine microservice alerts automatically without human pager triggers.",
                "Reduced mean-time-to-remediate (TTR) routine memory leaks from 15 minutes to 45 seconds.",
                "Decreased false-alarm pager triggers by 55% across three active test clusters."
            ],
            lessonsLearned: "Runbook automation require strict tool-use boundaries and dry-run safety modes to prevent negative feedback loops in auto-remediation.",
            architectureNodes: ["Prometheus Logs", "MCP Tool Server", "GPT-4o Engine", "Runbook Executor", "Alert Resolved"],
            businessImpact: "Minimized developer distraction by auto-triaging routine alerts, ensuring engineer attention is directed to high-value infrastructure scaling tasks.",
            metrics: "80% Routine Resolution",
            imageGradient: "from-purple-600 to-pink-900",
            icon: <Cpu className="w-6 h-6 text-purple-400" />,
            github: "https://github.com/shubham-pasricha1096",
            demo: "#"
        },
        {
            title: "Context-Aware Couples Therapy Chatbot",
            tech: ["Node.js", "MongoDB", "Redis", "Telegram Bot API", "LLMs"],
            date: "February 2026",
            description: "Delivered multi-turn CBT counseling workflows over Telegram, achieving high dialog retention.",
            problem: "Traditional counseling chatbots struggle with context drift and lose connection memory during relationship dialogue sessions, rendering exercises ineffective.",
            whyItMattered: "Mental health support relies heavily on continuity; session-to-session memory drops break user trust and result in 90% user churn within the first week.",
            solution: "Built a Telegram bot powered by CBT (Cognitive Behavioral Therapy) prompts, backed by a sub-second Redis session state cache and MongoDB log archiving for deep multi-turn retention.",
            results: [
                "Achieved 85% conversational relevancy rate over multi-turn user dialogues.",
                "Supported 500+ active beta sessions with persistent user context tracking.",
                "Zero session memory loss across 10+ turn conversations cached via Redis."
            ],
            lessonsLearned: "A hybrid memory architecture (fast Redis cache + persistent MongoDB archiving) is essential for keeping chatbot response latencies below 800ms.",
            architectureNodes: ["Telegram Client", "Node.js Server", "Redis Cache", "MongoDB History", "OpenRouter LLM", "Empathy Response"],
            businessImpact: "Created an accessible, secure mock counseling environment, driving high user practice engagement rates.",
            metrics: "85% Context Relevance",
            imageGradient: "from-emerald-600 to-teal-900",
            icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
            github: "https://github.com/shubham-pasricha1096",
            demo: "#"
        },
        {
            title: "AI Analytical Assistant (RAG & Vector DB)",
            tech: ["LlamaIndex", "PostgreSQL", "pgvector", "Ollama", "Python"],
            date: "December 2025",
            description: "Reduced analytics query cycles by enabling product leads to query database schemas in plain English.",
            problem: "Product managers and business analysts wait days for custom database queries and SQL scripts due to technical database administrator queues.",
            whyItMattered: "Delayed access to product usage telemetry delays data-driven experiments, causing features to launch without initial validation.",
            solution: "Created a natural-language-to-SQL converter leveraging a metadata vector index in PostgreSQL (via pgvector) to retrieve accurate schema contexts, execute queries, and return structured analysis.",
            results: [
                "Reduced typical analytical query cycles by 60%, bypassing DBA waitlists.",
                "Empowered 10+ active product leads to run self-service analytical queries.",
                "Mapped and indexed 50+ relational schemas for semantic lookup."
            ],
            lessonsLearned: "Schema vectors must contain explicit table relationship meta-tags to prevent the model from generating SQL join syntax errors.",
            architectureNodes: ["Natural Query", "FastAPI Server", "pgvector Search", "LlamaIndex Router", "SQL Execution", "Formatted Insights"],
            businessImpact: "Democratized database access for product teams, accelerating data analysis and lowering business intelligence response backlogs.",
            metrics: "60% Query Cycle Reduction",
            imageGradient: "from-amber-600 to-orange-950",
            icon: <Database className="w-6 h-6 text-amber-400" />,
            github: "https://github.com/shubham-pasricha1096",
            demo: "#"
        },
        {
            title: "Intelligent Interview Preparation Platform",
            tech: ["Node.js", "React", "MongoDB", "AI APIs", "Computer Vision"],
            date: "August 2025",
            description: "Provided applicants with custom mock interview preparation tracking, driving practice engagement.",
            problem: "Job seekers lack interactive, contextual interview prep pipelines that evaluate both technical feedback and behavioral performance cues.",
            whyItMattered: "Candidates face high rejection rates due to a lack of custom mock feedback on speech pacing, technical clarity, and engagement metrics.",
            solution: "Designed a React/Node web application parsing CV upload metadata to customize mock questions, tracking candidate responses with Speech-to-Text, and monitoring engagement with client-side computer vision face tracking.",
            results: [
                "Supported 200+ mock interview preparation runs on our beta instance.",
                "Delivered detailed response pacing and technical competence metrics in real time.",
                "Boosted candidate practice completion rates by 45% using camera feedback."
            ],
            lessonsLearned: "Processing computer vision matrices client-side in the browser secures candidate privacy and avoids server-side video streaming costs.",
            architectureNodes: ["User Webcam/Mic", "React Web App", "CV Metadata Parser", "Node API Gateway", "AI Speech API", "Feedback Dashboard"],
            businessImpact: "Provided applicants with a low-stress environment to gauge interview readiness, boosting user confidence metrics.",
            metrics: "200+ Active Preps",
            imageGradient: "from-cyan-600 to-blue-950",
            icon: <Speech className="w-6 h-6 text-cyan-400" />,
            github: "https://github.com/shubham-pasricha1096",
            demo: "#"
        },
        {
            title: "Airtel Subscriber Churn Prediction",
            tech: ["Python", "SQL", "Machine Learning", "Tableau"],
            date: "May 2025",
            description: "Identified high-risk customer cancellations, enabling active retention campaigns.",
            problem: "Customer retention teams require early alerts to spot declining telemetry metrics in subscriber usage before customer cancellation occurs.",
            whyItMattered: "Acquiring a new subscriber is 5x more expensive than retaining an existing user; subscriber churn directly degrades monthly revenue additions.",
            solution: "Constructed an end-to-end analytical prediction modeling pipeline extracting SQL subscriber patterns, engineering behaviors with Python, and outputting churn risk flags directly to Tableau panels.",
            results: [
                "Predicted customer churn with 94% accuracy on live subscriber datasets.",
                "Saved customer success teams 12+ hours per week in manual risk listing.",
                "Contributed to reducing subscriber churn rate by 8.5% in high-risk pilot zones."
            ],
            lessonsLearned: "Weekly usage deltas (e.g. rate of drop-off in streaming usage) are much stronger churn indicators than absolute subscriber lifetime metrics.",
            architectureNodes: ["Subscriber Logs", "SQL Preprocessing", "Python Pandas Clean", "XGBoost Classifier", "Tableau Visuals"],
            businessImpact: "Empowered the marketing team to deploy retention coupons to high-risk cohorts, preserving annual subscriber revenue lines.",
            metrics: "94% Prediction Accuracy",
            imageGradient: "from-red-600 to-rose-950",
            icon: <BarChart3 className="w-6 h-6 text-rose-400" />,
            github: "https://github.com/shubham-pasricha1096",
            demo: "#"
        }
    ];

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    useEffect(() => {
        const updateTranslation = () => {
            if (targetRef.current && containerRef.current) {
                const containerWidth = containerRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;
                if (containerWidth > viewportWidth) {
                    setXTranslation(-(containerWidth - viewportWidth));
                } else {
                    setXTranslation(0);
                }
            }
        };

        updateTranslation();
        window.addEventListener("resize", updateTranslation);
        const timer = setTimeout(updateTranslation, 200);

        return () => {
            window.removeEventListener("resize", updateTranslation);
            clearTimeout(timer);
        };
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], [0, xTranslation]);

    return (
        <section ref={targetRef} id="projects" className="relative h-[300vh] bg-black text-white">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                {/* Header */}
                <div className="w-full pl-[20vw] mb-8 shrink-0">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 flex items-center gap-3">
                        <FolderGit2 className="w-8 h-8 text-blue-500" /> Case Studies & Projects
                    </h2>
                    <p className="text-sm text-zinc-500 mt-2 font-mono">
                        // Scroll down to navigate project records &rarr;
                    </p>
                </div>

                {/* Horizontal Scroll Area */}
                <div className="relative w-full overflow-hidden flex-1 flex items-center">
                    <motion.div 
                        ref={containerRef}
                        style={{ x }} 
                        className="flex gap-8"
                    >
                        {/* Left spacer */}
                        <div className="w-[20vw] shrink-0" />

                        {projectsData.map((project, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -6 }}
                                className="min-w-[320px] sm:min-w-[380px] md:min-w-[440px] w-[320px] sm:w-[380px] md:w-[440px] bg-zinc-900/30 backdrop-blur-md rounded-2xl border border-zinc-850 p-6 flex flex-col justify-between shrink-0 h-[520px] relative overflow-hidden group shadow-2xl"
                            >
                                {/* Background Image/Gradient Panel */}
                                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${project.imageGradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
                                <div className="absolute top-0 left-0 right-0 h-32 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] -z-10" />

                                <div>
                                    {/* Date & Icon */}
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="p-2.5 bg-zinc-950/80 border border-zinc-800 rounded-xl">
                                            {project.icon}
                                        </div>
                                        <span className="text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1 rounded-full">
                                            {project.date}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold leading-snug mb-3 text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[10px] font-mono px-2 py-0.5 bg-zinc-900 border border-zinc-850 text-zinc-400 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Key Highlight Metric Badge */}
                                    <div className="mb-6 p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center gap-2">
                                        <Target className="w-4 h-4 text-blue-400 shrink-0" />
                                        <span className="text-xs text-blue-300 font-semibold tracking-wide font-mono uppercase">
                                            KPI: {project.metrics}
                                        </span>
                                    </div>

                                    {/* Short description list */}
                                    <p className="text-sm text-zinc-400 font-light line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Actions footer */}
                                <div className="pt-4 flex items-center justify-between border-t border-zinc-850 mt-auto">
                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                                                title="View Code"
                                            >
                                                <Github size={16} />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                                                title="Live Demo"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => setActiveCaseStudy(project)}
                                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors cursor-pointer"
                                    >
                                        <BookOpen size={14} /> View Case Study
                                    </button>
                                </div>
                            </motion.div>
                        ))}

                        <div className="w-[10vw] shrink-0" />
                    </motion.div>
                </div>
            </div>

            {/* Case Study Deep Dive Modal Overlay */}
            <AnimatePresence>
                {activeCaseStudy && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="bg-zinc-950 border border-zinc-850 rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-white relative"
                        >
                            {/* Close */}
                            <button
                                onClick={() => setActiveCaseStudy(null)}
                                className="absolute top-4 right-4 p-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                            >
                                <X size={18} />
                            </button>

                            {/* Modal Heading & Gradient backdrop */}
                            <div className="relative pb-6 mb-8 border-b border-zinc-900">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl">
                                        {activeCaseStudy.icon}
                                    </div>
                                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{activeCaseStudy.date}</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                                    {activeCaseStudy.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {activeCaseStudy.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-mono px-3 py-1 bg-zinc-900 border border-zinc-850 text-zinc-400 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Case Study Grid */}
                            <div className="grid md:grid-cols-12 gap-8">
                                {/* Left Side Details */}
                                <div className="md:col-span-8 space-y-6">
                                    {/* Problem Statement */}
                                    <div>
                                        <h4 className="text-sm font-bold text-zinc-400 font-mono mb-2 uppercase tracking-wider">// The Business Problem</h4>
                                        <p className="text-zinc-300 leading-relaxed font-light">{activeCaseStudy.problem}</p>
                                    </div>

                                    {/* Why it Mattered */}
                                    <div>
                                        <h4 className="text-sm font-bold text-zinc-400 font-mono mb-2 uppercase tracking-wider">// Why it Mattered</h4>
                                        <p className="text-zinc-300 leading-relaxed font-light">{activeCaseStudy.whyItMattered}</p>
                                    </div>

                                    {/* Proposed Solution */}
                                    <div>
                                        <h4 className="text-sm font-bold text-zinc-400 font-mono mb-2 uppercase tracking-wider">// The Solution</h4>
                                        <p className="text-zinc-300 leading-relaxed font-light">{activeCaseStudy.solution}</p>
                                    </div>

                                    {/* Architecture Map */}
                                    <div>
                                        <h4 className="text-sm font-bold text-zinc-400 font-mono mb-2 uppercase tracking-wider">// The Architecture Flow</h4>
                                        <ArchitectureDiagram nodes={activeCaseStudy.architectureNodes} />
                                    </div>
                                </div>

                                {/* Right Side Metrics & Impact */}
                                <div className="md:col-span-4 space-y-6">
                                    {/* KPI Card */}
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 to-zinc-950 border border-blue-900/20 shadow-inner">
                                        <h5 className="text-xs font-bold text-blue-400 font-mono uppercase tracking-wider mb-2">Key Metric Result</h5>
                                        <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight leading-none mb-1">
                                            {activeCaseStudy.metrics.split(" ")[0]}
                                        </div>
                                        <div className="text-xs text-zinc-400 font-light leading-relaxed">
                                            {activeCaseStudy.metrics.split(" ").slice(1).join(" ")}
                                        </div>
                                    </div>

                                    {/* Measurable Results */}
                                    <div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-850">
                                        <h5 className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider mb-3">// Measurable Results</h5>
                                        <ul className="space-y-2 text-xs text-zinc-400 leading-relaxed font-light">
                                            {activeCaseStudy.results.map((res, rIdx) => (
                                                <li key={rIdx} className="flex items-start gap-2">
                                                    <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                                                    <span>{res}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Lessons Learned */}
                                    <div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-850">
                                        <h5 className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider mb-2">// Lessons Learned</h5>
                                        <p className="text-xs text-zinc-400 leading-relaxed font-light">
                                            {activeCaseStudy.lessonsLearned}
                                        </p>
                                    </div>

                                    {/* Project actions */}
                                    <div className="flex gap-4 w-full">
                                        {activeCaseStudy.github && (
                                            <a
                                                href={activeCaseStudy.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 text-sm font-semibold transition-colors"
                                            >
                                                <Github size={16} /> Repository
                                            </a>
                                        )}
                                        {activeCaseStudy.demo && (
                                            <a
                                                href={activeCaseStudy.demo}
                                                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-sm font-semibold transition-colors"
                                            >
                                                <ExternalLink size={16} /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
