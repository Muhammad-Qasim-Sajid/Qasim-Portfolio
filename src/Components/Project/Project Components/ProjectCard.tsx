import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  codeLink: string;
  liveDemo: string;
  details: boolean;
  detailsRoute?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  codeLink,
  liveDemo,
  details,
  detailsRoute,
}) => {
  return (
    <div className="border-2 border-black md:p-4 md:pb-5 p-2 pb-3 md:px-8 px-6 font-['Fractul']">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center">
        <div className="flex-1">
          <p className="text-black text-xl font-bold mb-1.5">
            {title}{" "}
            {details && detailsRoute && (
              <Link
                to={detailsRoute}
                className="relative -top-[1px] ml-1 text-xs font-medium border-b border-transparent hover:border-black transition-colors duration-300"
              >
                Details →
              </Link>
            )}
          </p>
          <p
            className="text-black md:text-xs text-[10px] max-w-xl"
          >
            {description}
          </p>
        </div>
        <div className="flex gap-3 mt-3 sm:mt-0 sm:ml-8">
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black sm:text-xs text-[9px] border-1 border-black sm:px-5 px-2 sm:py-2 py-1 cursor-pointer hover:bg-black hover:text-[#f5deb3] transition-colors duration-300"
          >
            View Code →
          </a>
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black sm:text-xs text-[9px] border-1 border-black sm:px-5 px-2 sm:py-2 py-1 cursor-pointer hover:bg-black hover:text-[#f5deb3] transition-colors duration-300"
          >
            Live Demo →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;