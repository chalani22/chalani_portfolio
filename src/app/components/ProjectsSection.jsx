"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const projectsData = [
    {
      id: 1,
      title: "Emotion Recognition System using ML",
      description: "Engineered an AI-driven emotion recognition system using computer vision and deep learning models to reliably detect and classify expressions in real time.",
      image: "/images/projects/project1.png",
      tag: ["All", "AI/ML"],
      gitUrl: "https://github.com/Happy-Path/emotion-recognition",
      previewUrl: "https://your-chatbot-demo.com",
      technologies: ["Python", "TensorFlow", "Flask", "OpenCV"]
    },
    {
      id: 2,
      title: "CrickInfo",
      description: "Developed a squad selector system for Sri Lanka cricket, leveraging player statistics, performance analytics, and selection criteria to generate optimized team lineups",
      image: "/images/projects/project2.png",
      tag: ["All", "Web", "AI/ML"],
      gitUrl: "https://github.com/yourusername/ecommerce-platform",
      previewUrl: "https://your-ecommerce-demo.com",
      technologies: ["React", "Node.js", "Flask", "Scikit-learn", "Pandas"]
    },
    {
      id: 3,
      title: "NIC - Decoder",
      description: "Designed a NIC decoder system to process and extract structured personal information from National Identity Card numbers efficiently.",
      image: "/images/projects/project3.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/yourusername/fitness-app",
      previewUrl: "https://your-fitness-app-demo.com",
      technologies: ["Dart", "C", "HTML", "C++"]
    },
    {
      id: 4,
      title: "Happy Path - LMS for Down Syndrome Children",
      description: "Designed and developed a specialized LMS tailored for children with Down syndrome, integrating interactive learning modules, assistive technologies, and accessibility-focused UI/UX",
      image: "/images/projects/project4.png",
      tag: ["All", "AI/ML", "Web"],
      gitUrl: "https://github.com/yourusername/data-dashboard",
      previewUrl: "https://your-dashboard-demo.com",
      technologies: ["Javascript", "Node.js", "Python"]
    },
    {
      id: 5,
      title: "Portfolio - Chalani Nadeesha",
      description: "Developed a responsive portfolio website using modern web technologies to showcase projects, skills, and achievements with a clean UI/UX design",
      image: "/images/projects/project5.png",
      tag: ["All", "Design", "Web"],
      gitUrl: "https://github.com/chalani22/chalani_portfolio",
      previewUrl: "https://your-design-system-demo.com",
      technologies: ["Next.js", "Tailwind CSS"]
    }
  ];

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="text-white py-8 px-4 sm:py-16 xl:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-700">
          My Projects
        </h2>
        <p className="text-[#ADB7BE] text-center mb-8 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in AI, web development, mobile apps, and design
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "AI/ML", "Web", "Mobile", "Design"].map((filterTag) => (
            <button
              key={filterTag}
              onClick={() => handleTagChange(filterTag)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                tag === filterTag
                  ? "bg-gradient-to-r from-green-800 to-green-700 text-white"
                  : "bg-[#181818] text-[#ADB7BE] hover:text-white hover:bg-[#1a1a1a]"
              }`}
            >
              {filterTag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;