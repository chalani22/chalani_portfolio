"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import OpenToWorkBadge from "./OpenToWorkBadge";
import ScrollDownIndicator from "./ScrollDownIndicator";

const HeroSection = () => {
    return (
        <section className="py-8 px-4 sm:py-16 xl:px-16 relative min-h-screen flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 w-full">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-600">
                            Hello, I'm{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Chalani Nadeesha',
                                1000,
                                'AI Engineer',
                                1000,
                                'Software Engineer',
                                1000,
                                'Web Developer',
                                1000,
                                'Mobile Developer',
                                1000,
                                'UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        I'm an undergraduate Software Engineering student with a passion for AI and innovation.
                        I work across web and mobile development, UI/UX design, and aspire to grow as an AI engineer.
                        I love building smart, user-friendly solutions that make a difference.
                    </p>
                    <div>
                        {/* Hire Me button */}
                        <a
                            href="https://www.linkedin.com/in/chalani-nadeesha-b384b1249/"
                            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-900 via-green-700 to-green-800 hover:bg-slate-200 text-white inline-block text-center"
                        >
                            Hire Me
                        </a>

                        {/* Download CV button */}
                        <a
                            href="/Chalani_Nadeesha_CV.pdf"
                            download="Chalani_CV.pdf"
                            className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-green-900 via-green-700 to-green-800 hover:bg-slate-800 text-white mt-3 inline-block"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </a>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    {/* Wrapper for avatar and badge */}
                    <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
                        {/* Open to Work Badge - positioned relative to wrapper */}
                        <OpenToWorkBadge position="top-right" />

                        {/* Avatar circle with overflow hidden */}
                        <div className="rounded-full bg-[#181818] w-full h-full relative overflow-hidden">
                            <Image
                                src="/images/hero-image.png"
                                alt="hero image"
                                fill
                                style={{ objectFit: "cover", objectPosition: "top" }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <ScrollDownIndicator />
        </section>
    );
};

export default HeroSection;