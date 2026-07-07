"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { Sun, Moon, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    const [hidden, setHidden] = useState(false);

    const { scrollY, scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Handle scroll background changes
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Intersection Observer to track active section
    useEffect(() => {
        const sections = navLinks.map(link => link.href.substring(1));
        const observers = sections.map(sectionId => {
            const el = document.getElementById(sectionId);
            if (!el) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${sectionId}`);
                    }
                },
                { threshold: 0.2, rootMargin: "-25% 0px -55% 0px" }
            );

            observer.observe(el);
            return { observer, el };
        });

        return () => {
            observers.forEach(obs => {
                if (obs) obs.observer.unobserve(obs.el);
            });
        };
    }, []);

    // Dark Mode initializer
    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark");
        setDarkMode(isDark);
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        if (newDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color] duration-300 border-b",
                isScrolled
                    ? "bg-white/70 dark:bg-black/75 backdrop-blur-md py-3 border-gray-200/40 dark:border-zinc-900/50 shadow-sm"
                    : "bg-transparent py-5 border-transparent"
            )}
        >
            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 origin-left z-50"
                style={{ scaleX }}
            />

            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight">
                    SP.
                </Link>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex items-center gap-1.5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "relative text-sm font-medium px-4 py-2 transition-colors duration-350 rounded-full",
                                activeSection === link.href
                                    ? "text-black dark:text-white"
                                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                            )}
                        >
                            {/* Animated Active Indicator Pill */}
                            {activeSection === link.href && (
                                <motion.span
                                    layoutId="activeNavIndicator"
                                    className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 -z-10 rounded-full"
                                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                                />
                            )}
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right actions (desktop) */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Theme switch */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/30 dark:bg-zinc-950/30 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all active:scale-95 cursor-pointer"
                        aria-label="Toggle Theme"
                    >
                        {darkMode ? <Sun size={17} /> : <Moon size={17} />}
                    </button>

                    {/* Resume Download CTA */}
                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-semibold bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
                    >
                        <Download size={13} /> Resume
                    </a>
                </div>

                {/* Mobile hamburger menu button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] z-50 focus:outline-none cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-5 h-[1.8px] bg-black dark:bg-white rounded"
                    />
                    <motion.span
                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.1 }}
                        className="w-5 h-[1.8px] bg-black dark:bg-white rounded"
                    />
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-5 h-[1.8px] bg-black dark:bg-white rounded"
                    />
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="md:hidden fixed top-[56px] left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-850 p-6 flex flex-col gap-6 shadow-xl"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-lg font-medium transition-colors py-1",
                                        activeSection === link.href
                                            ? "text-black dark:text-white font-semibold"
                                            : "text-zinc-500 dark:text-zinc-400"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-4 pt-4 border-t border-zinc-150 dark:border-zinc-900">
                            {/* Dark Mode Switch */}
                            <button
                                onClick={toggleDarkMode}
                                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900"
                            >
                                {darkMode ? <Sun size={15} /> : <Moon size={15} />}
                                Theme
                            </button>

                            {/* Resume Switch */}
                            <a
                                href="/resume.pdf"
                                download
                                className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Download size={15} /> Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
