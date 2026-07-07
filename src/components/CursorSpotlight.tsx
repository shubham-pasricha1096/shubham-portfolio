"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorSpotlight() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics configuration for smooth mouse trailing
    const springConfig = { stiffness: 120, damping: 25, mass: 0.6 };
    const trailX = useSpring(mouseX, springConfig);
    const trailY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 150); // Offset by half the width of the spotlight (300px / 2 = 150)
            mouseY.set(e.clientY - 150);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{
                x: trailX,
                y: trailY,
            }}
            className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-blue-500/[0.025] dark:bg-blue-600/[0.035] blur-[80px] pointer-events-none z-50 select-none hidden md:block"
        />
    );
}
