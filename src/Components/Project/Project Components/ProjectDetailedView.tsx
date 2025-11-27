import React, { useState, useEffect, useCallback} from "react";
import { CustomCursor } from "../../subComponents/CustomCursor";

interface Challenge {
    title: string;
    description: string;
}

interface Project {
    title: string;
    overview: string;
    features: string[];
    techStack: string[];
    challenges?: Challenge[];
    learnings?: string[];
    codeLink: string;
    liveDemo: string;
}

interface ProjectDetailedViewProps {
    project: Project;
}

const ProjectDetailedView: React.FC<ProjectDetailedViewProps> = ({ project }) => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = useCallback((e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, []);
    useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, [handleMouseMove]);

    return (
      <div className="min-h-screen w-full bg-[#f5deb3] text-black font-['Fractul'] cursor-none">
        <div className="sm:px-30 px-7 py-15 sm:pb-23 pb-21 space-y-10">
          {/* Header */}
          <div>
            <p className="text-5xl font-bold mb-3">{project.title}</p>
            <p className="text-xs leading-relaxed tracking-wide max-w-5xl mx-3">
              {project.overview}
            </p>
          </div>

          {/* Key Features */}
          <section>
            <p className="mb-3 font-bold text-lg">Key Features</p>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-xs flex items-start mx-3">
                  <span className="mr-3">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Tech Stack */}
          <section>
            <p className="mb-3 font-bold text-lg">Tech Stack</p>
            <div className="flex flex-wrap gap-3 mx-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs border-1 border-black px-4 py-1.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges & Solutions */}
          {project.challenges && (
            <section>
              <p className="mb-4 font-bold text-lg">Challenges & Solutions</p>
              <div className="space-y-6 mx-3">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="border-1 border-black">
                    <div className="border-b-1 border-black p-1 px-3">
                      <p className="text-base">{challenge.title}</p>
                    </div>
                    <div className="p-2 px-5">
                      <p className="text-xs leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Learning Outcomes */}
          {project.learnings && (
            <section>
              <p className="mb-3 font-bold text-lg">Key Learnings</p>
              <ul className="space-y-2 mx-3">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="text-xs flex items-start">
                    <span className="mr-3">•</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Links */}
          <section>
            <p className="mb-3 font-bold text-lg">Project Links</p>
            <div className="flex sm:gap-4 gap-2 mx-3">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border-1 border-black sm:px-5 px-4 py-2 cursor-pointer hover:bg-black hover:text-[#f5deb3] transition-colors duration-300"
              >
                View Code →
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border-1 border-black sm:px-5 px-4 py-2 cursor-pointer hover:bg-black hover:text-[#f5deb3] transition-colors duration-300"
              >
                Live Demo →
              </a>
            </div>
          </section>
        </div>
        <p className="text-center md:pb-3 pb-2 text-black md:text-xs text-[10px] font-medium">
          © {new Date().getFullYear()} Qasim. All rights reserved.
        </p>

        <CustomCursor
          mousePosition={mousePosition}
          color="bg-[#000000]"
          borderColor="border-[#000000]"
        />
      </div>
    );
};

export default ProjectDetailedView;