"use client";
import React, { useEffect, useRef, useState } from "react";

const ParallaxBackground = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const animationFrameRef = useRef(null);
    const currentPosRef = useRef({ x: 0, y: 0 });
    const targetPosRef = useRef({ x: 0, y: 0 });

    // Smoke layer configurations with different depths and properties
    const smokeLayers = [
        {
            id: 1,
            depth: 0.15,
            size: 700,
            opacity: 0.25,
            blur: 100,
            initialX: 15,
            initialY: 5,
            color: "rgba(34, 197, 94, 0.6)" // green-500
        },
        {
            id: 2,
            depth: 0.25,
            size: 600,
            opacity: 0.3,
            blur: 90,
            initialX: 55,
            initialY: 25,
            color: "rgba(22, 163, 74, 0.65)" // green-600
        },
        {
            id: 3,
            depth: 0.35,
            size: 550,
            opacity: 0.28,
            blur: 80,
            initialX: 75,
            initialY: 45,
            color: "rgba(21, 128, 61, 0.7)" // green-700
        },
        {
            id: 4,
            depth: 0.45,
            size: 500,
            opacity: 0.32,
            blur: 70,
            initialX: 35,
            initialY: 65,
            color: "rgba(34, 197, 94, 0.55)" // green-500
        }
    ];

    // Check for reduced motion preference
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Throttled mouse move handler
    useEffect(() => {
        if (prefersReducedMotion) return;

        let lastTime = 0;
        const throttleDelay = 16; // ~60fps

        const handleMouseMove = (e) => {
            const now = Date.now();
            if (now - lastTime < throttleDelay) return;
            lastTime = now;

            const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
            const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1

            targetPosRef.current = { x, y };
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [prefersReducedMotion]);

    // Passive scroll handler
    useEffect(() => {
        if (prefersReducedMotion) return;

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prefersReducedMotion]);

    // Animation loop with lerp (linear interpolation)
    useEffect(() => {
        if (prefersReducedMotion) return;

        const lerp = (start, end, factor) => start + (end - start) * factor;
        const lerpFactor = 0.1; // Smoothness factor (lower = smoother but slower)

        const animate = () => {
            // Smoothly interpolate current position towards target
            currentPosRef.current.x = lerp(
                currentPosRef.current.x,
                targetPosRef.current.x,
                lerpFactor
            );
            currentPosRef.current.y = lerp(
                currentPosRef.current.y,
                targetPosRef.current.y,
                lerpFactor
            );

            setMousePos({ ...currentPosRef.current });
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [prefersReducedMotion]);

    return (
        <div
            className="fixed inset-0 overflow-hidden pointer-events-none"
            style={{
                zIndex: 0,
                background: `
                    radial-gradient(ellipse at top, #1a1a1a 0%, #0a0a0a 50%, #000000 100%),
                    url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")
                `,
                backgroundBlendMode: "overlay"
            }}
        >
            {/* Green smoke layers */}
            {smokeLayers.map((layer) => {
                const parallaxX = prefersReducedMotion ? 0 : mousePos.x * layer.depth * 50;
                const parallaxY = prefersReducedMotion ? 0 : mousePos.y * layer.depth * 50;
                const scrollOffset = prefersReducedMotion ? 0 : scrollY * layer.depth * 0.3;

                return (
                    <div
                        key={layer.id}
                        className="absolute rounded-full"
                        style={{
                            width: `${layer.size}px`,
                            height: `${layer.size}px`,
                            left: `${layer.initialX}%`,
                            top: `${layer.initialY}%`,
                            background: `radial-gradient(circle, ${layer.color} 0%, transparent 70%)`,
                            filter: `blur(${layer.blur}px)`,
                            opacity: layer.opacity,
                            transform: `translate3d(${parallaxX}px, ${parallaxY + scrollOffset}px, 0)`,
                            willChange: prefersReducedMotion ? "auto" : "transform",
                            transition: prefersReducedMotion ? "none" : "opacity 0.3s ease"
                        }}
                    />
                );
            })}

            {/* Additional ambient glow */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse at 50% 50%, rgba(34, 197, 94, 0.03) 0%, transparent 50%)",
                    pointerEvents: "none"
                }}
            />
        </div>
    );
};

export default ParallaxBackground;
