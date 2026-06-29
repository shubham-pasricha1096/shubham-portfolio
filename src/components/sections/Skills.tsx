"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Wrench } from "lucide-react";

export default function Skills() {
    return (
        <section id="skills" className="py-20 scroll-mt-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <Wrench className="w-8 h-8" /> Skills & Certificates
                    </h2>

                    <div className="mb-12">
                        <h3 className="text-xl font-semibold mb-8">Technical Skills</h3>
                        <div className="grid gap-8 sm:grid-cols-2">
                            {Object.entries(resumeData.skills).map(([category, skills], catIndex) => (
                                <div key={category} className="bg-gray-50/50 dark:bg-zinc-900/40 p-6 rounded-xl border border-gray-100 dark:border-zinc-800/80">
                                    <h4 className="text-base font-bold text-gray-800 dark:text-zinc-200 mb-4">{category}</h4>
                                    <div className="flex flex-wrap gap-2.5">
                                        {skills.map((skill, index) => (
                                            <motion.span
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: (catIndex * 0.05) + (index * 0.02) }}
                                                className="px-3.5 py-1.5 bg-white dark:bg-zinc-800 text-sm font-medium border border-gray-200/60 dark:border-zinc-700/50 rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-6">Certifications</h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {resumeData.certificates.map((cert, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                                >
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
