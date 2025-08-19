"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-6 text-[#ADB7BE]">
                <li>Python, JavaScript, TypeScript</li>
                <li>React, Next.js, Node.js</li>
                <li>TensorFlow, PyTorch, Scikit-learn</li>
                <li>MongoDB, MySQL, Firebase</li>
                <li>Figma, UI/UX Design</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-6 text-[#ADB7BE]">
                <li>BSC.(Hons) in Information Technology in Software Engineering</li>
                <li>Sri Lanka Technology Campus, Padukka</li>
            </ul>
        )
    },
    {
        title: "Professional Focus",
        id: "professional",
        content: (
            <ul className="list-disc pl-6 text-[#ADB7BE]">
                <li>AI/ML Engineering</li>
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>UI/UX Design</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id="about" className="text-white py-8 px-4 sm:py-16 xl:px-16">
            <div className="md:grid md:grid-cols-2 gap-8 items-center">
                <div className="w-full relative aspect-[16/13] overflow-hidden rounded-lg group">
                    <Image
                        src="/images/about-image.png"
                        alt="About me"
                        fill
                        style={{ objectFit: "cover", objectPosition: "top" }}
                        className="transition-transform duration-500 group-hover:scale-110 absolute inset-0 bg-black/30 rounded-lg"
                    />
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg text-[#ADB7BE] mb-6">
                        I'm an undergraduate student specializing in Software Engineering with a strong passion for Artificial Intelligence and 
                        its real-world applications. As an aspiring AI Engineer, I'm continuously exploring innovative ways to integrate AI into 
                        impactful solutions. My skill set spans across software development, including web development, mobile app development, 
                        and UI/UX design.
                    </p>
                    <p className="text-base lg:text-lg text-[#ADB7BE] mb-6">
                        I enjoy creating seamless, user-focused digital experiences and solving complex problems through clean, 
                        scalable code. With a growth mindset and a dedication to continuous learning, I aim to contribute to cutting-edge projects 
                        that blend creativity, technology, and intelligent systems.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("professional")} 
                            active={tab === "professional"}
                        >
                            Professional Focus
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;