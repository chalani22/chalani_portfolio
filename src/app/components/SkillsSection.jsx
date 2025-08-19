"use client";
import React from "react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "TypeScript", "HTML/CSS", "SQL"]
    },
    {
      category: "AI/ML Technologies",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP"]
    },
    {
      category: "Web Development",
      items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"]
    },
    {
      category: "Mobile Development",
      items: ["React Native", "Flutter", "Android Studio", "iOS Development"]
    },
    {
      category: "Design Tools",
      items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Canva"]
    },
    {
      category: "Database & Cloud",
      items: ["MongoDB", "PostgreSQL", "Firebase", "AWS", "Docker"]
    }
  ];

  return (
    <section id="skills" className="text-white py-8 px-4 sm:py-16 xl:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-700">
          My Skills
        </h2>
        <p className="text-[#ADB7BE] text-center mb-12 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div 
              key={index} 
              className="bg-[#181818] rounded-lg p-6 hover:bg-[#1a1a1a] transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-green-700">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gradient-to-r from-green-900 to-green-700 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;