import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  image: string;
  detailsRoute: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, detailsRoute }) => {

  return (
    <Link
      to={detailsRoute}
      className="flex flex-col items-center overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="w-full md:h-40 h-30 object-cover md:mb-2 mb-1"
        loading="lazy"
      />
        <p className="text-black tracking-tight">{title}</p>

    </Link>
  );
};

export default ProjectCard;