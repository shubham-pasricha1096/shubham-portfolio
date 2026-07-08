"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Mail, Linkedin, Github, FileText, ArrowUpRight, CheckCircle2, Heart } from "lucide-react";

export default function Contact() {
    const contactLinks = [
        {
            name: "Email",
            value: resumeData.email,
            href: `mailto:${resumeData.email}`,
            icon: <Mail className="w-5 h-5 text-blue-400" />,
            hoverBorder: "hover:border-blue-500/30"
        },
        {
            name: "LinkedIn",
            value: "shubhampasricha",
            href: resumeData.links.linkedin,
            icon: <Linkedin className="w-5 h-5 text-purple-400" />,
            hoverBorder: "hover:border-purple-500/30"
        },
        {
            name: "GitHub",
            value: "shubham-pasricha1096",
            href: resumeData.links.github,
            icon: <Github className="w-5 h-5 text-emerald-400" />,
            hoverBorder: "hover:border-emerald-500/30"
        },
        {
            name: "Resume",
            value: "Download PDF",
            href: "/resume.pdf",
            icon: <FileText className="w-5 h-5 text-amber-400" />,
            download: true,
            hoverBorder: "hover:border-amber-500/30"
        }
    ];

    const openRoles = [
        "AI Engineer",
        "Product Analyst",
        "Product Engineer",
        "Automation Engineer"
    ];

    return (
        <footer id="contact" className="pt-24 pb-12 bg-black text-white scroll-mt-20 relative overflow-hidden border-t border-zinc-900">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />

            <div className="container mx-auto px-6 z-10 relative">
                <div className="max-w-6xl mx-auto">
                    
                    {/* CTA Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-6"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                            Replies within 24 hours
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-150 to-zinc-450 leading-[1.1] mb-6"
                        >
                            Let&apos;s Build Something Amazing.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-zinc-400 font-light max-w-xl mx-auto leading-relaxed"
                        >
                            Whether you want to build custom GenAI systems, automate pipelines, analyze products, or just chat — feel free to drop a message!
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-start mb-20">
                        {/* Left: Contact Cards */}
                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                            {contactLinks.map((link, idx) => (
                                <motion.a
                                    key={idx}
                                    href={link.href}
                                    target={link.download ? undefined : "_blank"}
                                    rel={link.download ? undefined : "noopener noreferrer"}
                                    download={link.download}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                                    whileHover={{ y: -4 }}
                                    className={`p-5 rounded-2xl bg-zinc-900/30 border border-zinc-850 ${link.hoverBorder} transition-all duration-300 flex items-center justify-between group cursor-pointer shadow-lg hover:shadow-blue-500/[0.01]`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl shrink-0 group-hover:scale-105 transition-transform duration-300">
                                            {link.icon}
                                        </div>
                                        <div className="text-left">
                                            <span className="text-xs text-zinc-500 font-mono block uppercase tracking-wider">{link.name}</span>
                                            <span className="text-sm font-semibold text-white tracking-wide truncate max-w-[180px] block mt-0.5">{link.value}</span>
                                        </div>
                                    </div>
                                    <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Right: Availability Box */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-850 text-left relative overflow-hidden backdrop-blur-sm shadow-xl"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none select-none">
                                    <CheckCircle2 size={120} className="text-blue-500" />
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">Active Availability</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Seeking Full-Time Roles</h3>
                                <p className="text-xs text-zinc-400 leading-relaxed font-light mb-6">
                                    I am actively looking for positions at tech startups and product-focused organizations. Open to the following scopes:
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {openRoles.map((role) => (
                                        <span
                                            key={role}
                                            className="px-3.5 py-1.5 rounded-xl bg-zinc-950/80 border border-zinc-850 text-xs font-mono text-zinc-300 hover:border-zinc-700 transition-colors"
                                        >
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Footer block */}
                    <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
                        <div>
                            © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
                        </div>
                        <div className="flex items-center gap-1">
                            Built with Next.js, Tailwind & Framer Motion
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
