import React from "react";
import ProjectCard from "./Project Components/ProjectCard";
import BottomPointer from "../subComponents/BottomPointer";

const ProjectsSection: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#f5deb3] flex flex-col relative font-['Fractul']">
      <div className="absolute top-8 left-8 text-black text-base font-medium">
        Projects
      </div>

      <div className="flex-1 flex items-center justify-center px-5">
        <div className="flex flex-wrap justify-center gap-4 max-w-7xl">
          <ProjectCard
            title="E-Commerce Store"
            image="/ecommerce.jpg"
            detailsRoute="/ecommerce-detailed-view"
          />
          <ProjectCard
            title="Chatter"
            image="/chatter.png"
            detailsRoute="/chatter-detailed-view"
          />
          <ProjectCard
            title="Portfolier"
            image="/portfolier.png"
            detailsRoute="/portfolier-detailed-view"
          />
        </div>
      </div>

      <BottomPointer color="text-black" />
    </div>
  );
};

export default ProjectsSection;