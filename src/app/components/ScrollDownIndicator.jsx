"use client";
import React from "react";

const ScrollDownIndicator = () => {
    const scrollToContent = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <button
                onClick={scrollToContent}
                className="flex flex-col items-center gap-2 text-green-500 hover:text-green-400 transition-colors duration-300 group"
                aria-label="Scroll down to content"
            >
                {/* Scroll text */}
                <span className="text-sm font-medium tracking-wider uppercase opacity-80 group-hover:opacity-100">
                    Scroll Down
                </span>

                {/* Animated mouse icon */}
                <div className="relative w-6 h-10 border-2 border-green-500 rounded-full flex justify-center pt-2">
                    {/* Mouse wheel */}
                    <div className="w-1 h-2 bg-green-500 rounded-full animate-scroll-wheel"></div>
                </div>

                {/* Arrow icon */}
                <svg
                    className="w-6 h-6 animate-bounce-slow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </button>
        </div>
    );
};

export default ScrollDownIndicator;
