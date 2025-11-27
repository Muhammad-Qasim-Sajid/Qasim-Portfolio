import React, { useState, useEffect, useCallback} from "react";
import ProjectCard from "./Project Components/ProjectCard";
import { CustomCursor } from "../subComponents/CustomCursor";
import BottomPointer from "../subComponents/BottomPointer";

const ProjectsSection: React.FC = () => {

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
    <div className="min-h-screen w-full bg-[#f5deb3] flex flex-col relative font-['Fractul'] cursor-none">
      <div className="absolute top-8 left-8 text-black text-base font-medium">
        Projects
      </div>

      <div className="flex-1 flex items-center justify-center px-5">
        <div className="flex flex-wrap justify-center gap-4 max-w-7xl">
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
          <ProjectCard
            title="Cashflower"
            image="/cashflower.png"
            detailsRoute="/cashflower-detailed-view"
          />
        </div>
      </div>

      <CustomCursor
        mousePosition={mousePosition}
        color="bg-[#000000]"
        borderColor="border-[#000000]"
      />

      <BottomPointer color="text-black" />
    </div>
  );
};

export default ProjectsSection;