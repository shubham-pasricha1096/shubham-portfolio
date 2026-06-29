"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-28 pb-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left: Text Content */}
                    <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-3 font-medium">
                                Hello, I&apos;m
                            </p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
                                {resumeData.name}
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="w-full"
                        >
                            <h2 className="text-xl sm:text-2xl text-black dark:text-zinc-300 font-semibold mb-6">
                                {resumeData.title}
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
                                {resumeData.about}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-4 justify-center md:justify-start"
                        >
                            <Link
                                href="#projects"
                                className="group flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium transition-transform hover:scale-105"
                            >
                                View My Work
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="#contact"
                                className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                Contact Me
                            </Link>
                            <a
                                href="/resume.pdf"
                                download
                                className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                <Download size={18} /> Download Resume
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Profile Photo */}
                    <div className="md:col-span-5 flex justify-center order-1 md:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                            className="relative group"
                        >
                            {/* Decorative background glow */}
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                                <Image
                                    src="/profile.png"
                                    alt={resumeData.name}
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
