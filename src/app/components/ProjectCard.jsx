import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, technologies }) => {
  return (
    <div className="bg-[#181818] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
      {/* Project Image */}
      <div 
        className="h-52 md:h-72 bg-gradient-to-r from-green-800 to-green-700 relative group"
        style={{ 
          background: `url(${imgUrl})`, 
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Overlay with action buttons */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h5 className="text-xl font-semibold mb-2 text-white">{title}</h5>
        <p className="text-[#ADB7BE] mb-4 text-sm">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-gradient-to-r from-green-500/20 to-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-medium border border-green-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;