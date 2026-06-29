"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { resumeData } from "@/data/resume";
import { FolderGit2 } from "lucide-react";

export default function Projects() {
    const targetRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [xTranslation, setXTranslation] = useState(0);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    useEffect(() => {
        const updateTranslation = () => {
            if (targetRef.current && containerRef.current) {
                const containerWidth = containerRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;
                if (containerWidth > viewportWidth) {
                    // Translate by the difference between container width and viewport width
                    setXTranslation(-(containerWidth - viewportWidth));
                } else {
                    setXTranslation(0);
                }
            }
        };

        updateTranslation();
        window.addEventListener("resize", updateTranslation);
        
        // Trigger after a brief delay to ensure layout is fully calculated
        const timer = setTimeout(updateTranslation, 200);
        
        return () => {
            window.removeEventListener("resize", updateTranslation);
            clearTimeout(timer);
        };
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], [0, xTranslation]);

    return (
        <section ref={targetRef} id="projects" className="relative h-[300vh] bg-gray-50 dark:bg-zinc-900/50">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="w-full pl-[20vw] mb-8 shrink-0">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <FolderGit2 className="w-8 h-8" /> Projects
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Scroll down to view all projects &rarr;
                    </p>
                </div>

                <div className="relative w-full overflow-hidden flex-1 flex items-center">
                    <motion.div 
                        ref={containerRef}
                        style={{ x }} 
                        className="flex gap-8"
                    >
                        {/* 20% viewport width spacer on the left */}
                        <div className="w-[20vw] shrink-0" />

                        {resumeData.projects.map((project, index) => (
                            <div
                                key={index}
                                className="min-w-[290px] sm:min-w-[360px] md:min-w-[420px] w-[290px] sm:w-[360px] md:w-[420px] bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 hover:shadow-md transition-shadow flex flex-col justify-between shrink-0 h-[520px]"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold leading-snug">{project.title}</h3>
                                        <span className="text-xs font-mono bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded shrink-0 ml-3">
                                            {project.date}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs font-medium px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc pl-4 mb-6">
                                        {project.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4 flex gap-6 border-t border-gray-100 dark:border-zinc-850 mt-auto">
                                    <a
                                        href="#"
                                        onClick={(e) => e.preventDefault()}
                                        className="text-sm font-semibold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        View Code &rarr;
                                    </a>
                                    <a
                                        href="#"
                                        onClick={(e) => e.preventDefault()}
                                        className="text-sm font-semibold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        Live Demo &rarr;
                                    </a>
                                </div>
                            </div>
                        ))}

                        {/* 10% viewport width spacer on the right */}
                        <div className="w-[10vw] shrink-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
