"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { resumeData } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Mail, Activity, Target, MessageSquare, Layout, Sparkles, Cpu, Bot, Workflow } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;
        x.set(mouseX / width);
        y.set(mouseY / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const stats = [
        { value: "200+", label: "Users Impacted", icon: <Activity className="w-5 h-5 text-blue-500" /> },
        { value: "94%", label: "Answer Accuracy", icon: <Target className="w-5 h-5 text-emerald-500" /> },
        { value: "600+", label: "Daily Queries", icon: <MessageSquare className="w-5 h-5 text-purple-500" /> },
        { value: "10+", label: "Dashboards", icon: <Layout className="w-5 h-5 text-amber-500" /> }
    ];

    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-black text-white">
            {/* Background Grid & Ambient Glow */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-70" />

            {/* Floating Tech Icons in Background */}
            <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[8%] text-blue-500/10"
                >
                    <Cpu size={32} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[65%] left-[12%] text-purple-500/10"
                >
                    <Workflow size={28} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] right-[10%] text-emerald-500/10"
                >
                    <Bot size={30} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 18, 0], rotate: [0, -8, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[75%] right-[15%] text-amber-500/10"
                >
                    <Sparkles size={26} />
                </motion.div>
            </div>

            <motion.div
                animate={{
                    x: [0, 40, 0],
                    y: [0, -30, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none z-0"
            />
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, 30, 0]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none z-0"
            />

            <div className="container mx-auto px-6 z-10 relative flex-1 flex flex-col justify-center">
                <div className="grid lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto w-full">
                    {/* Left: Content */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono tracking-wider text-zinc-400 mb-6"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                            Product Analyst • AI Engineer • Automation Builder
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-150 to-zinc-450"
                        >
                            Building AI Systems that automate business workflows.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-xl font-light"
                        >
                            I build AI products, automation systems, dashboards, and intelligent workflows that solve real business problems.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start w-full"
                        >
                            <Link
                                href="#projects"
                                className="group flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-6 py-3.5 rounded-full font-medium transition-all shadow-lg hover:shadow-white/10 active:scale-95"
                            >
                                View Projects
                                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <a
                                href="/resume.pdf"
                                download
                                className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 px-6 py-3.5 rounded-full font-medium transition-all active:scale-95"
                            >
                                <Download size={16} /> Download Resume
                            </a>
                            <Link
                                href="#contact"
                                className="flex items-center gap-2 bg-transparent hover:bg-zinc-900/50 text-zinc-300 border border-zinc-850 px-6 py-3.5 rounded-full font-medium transition-all active:scale-95"
                            >
                                <Mail size={16} /> Contact Me
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Circular 3D Card */}
                    <div className="lg:col-span-5 flex justify-center w-full">
                        <motion.div
                            ref={cardRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                            className="relative group cursor-pointer"
                        >
                            {/* Ambient backglow */}
                            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 rounded-full blur-[30px] opacity-30 group-hover:opacity-50 transition duration-700 pointer-events-none" />

                            {/* Inner Floating Frame */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-80 md:h-80 rounded-full p-[3px] bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 overflow-hidden shadow-2xl flex items-center justify-center"
                            >
                                {/* Rotating animated border */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-20 group-hover:opacity-40 animate-spin-slow pointer-events-none" />

                                <div className="relative w-full h-full rounded-full bg-zinc-950 border border-zinc-900 z-10 overflow-hidden">
                                    <Image
                                        src="/profile.png"
                                        alt={resumeData.name}
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 256px, 320px"
                                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Ambient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto w-full mt-24 pt-8 border-t border-zinc-900/80 bg-gradient-to-b from-transparent to-zinc-950/20"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center md:items-start p-4 rounded-xl hover:bg-zinc-900/20 border border-transparent hover:border-zinc-900/40 transition-all duration-300">
                            <div className="mb-2 p-1.5 rounded-lg bg-zinc-900/50 border border-zinc-850">
                                {stat.icon}
                            </div>
                            <span className="text-3xl font-extrabold text-white font-mono tracking-tight">{stat.value}</span>
                            <span className="text-xs text-zinc-500 font-medium tracking-wide mt-1 uppercase">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
