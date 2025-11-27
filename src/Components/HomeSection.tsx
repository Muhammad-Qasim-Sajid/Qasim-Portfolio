import React, { useState, useEffect, useCallback } from "react";
import { CustomCursor, CursorTracker } from "./subComponents/CustomCursor";
import BottomPointer from "./subComponents/BottomPointer";
import KineticWord from "./subComponents/KineticWord";

const HomeSection: React.FC = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center relative font-['Fractul'] cursor-none overflow-hidden">
      <div className="absolute top-8 left-8 text-[#f5deb3] text-base font-medium tracking-tight">
        Home
      </div>
      <div className="mb-24 flex flex-col items-center lg:-space-y-18 md:-space-y-14 sm:-space-y-10 -space-y-5">
        <p className="text-[#f5deb3] text-[25vw] tracking-tight text-center leading-tighter font-black">
          Qa<span className="lg:ml-3 md:ml-2.5 sm:ml-2 ml-0.5">s</span>im,
        </p>
        <KineticWord 
          text="Full-Stack Web Developer"
          className="text-[#f5deb3] text-[5vw] tracking-tight text-center leading-tighter font-medium"
          delayOffset={0.1}
        />
      </div>

      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f5deb3 1px, transparent 1px), linear-gradient(to bottom, #f5deb3 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <CustomCursor
        mousePosition={mousePosition}
        color="bg-[#f5deb3]"
        borderColor="border-[#f5deb3]"
      />
      <CursorTracker mouseX={mousePosition.x} mouseY={mousePosition.y} />

      <BottomPointer />
    </div>
  );
};

export default HomeSection;