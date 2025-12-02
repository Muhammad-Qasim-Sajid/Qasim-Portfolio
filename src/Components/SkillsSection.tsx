import React, { useState, useEffect, useCallback} from "react";
import { CursorTracker } from "./subComponents/CursorTracker";
import BottomPointer from "./subComponents/BottomPointer";

function SkillsSection() {

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
    <div className="h-screen w-full bg-black flex flex-col relative font-['Fractul']">
      <div className="absolute top-8 left-8 text-[#f5deb3] text-base font-medium">
        Skills
      </div>

      <div className="flex-1 flex items-center justify-center px-16">
        <div className="text-[#f5deb3] text-center space-y-8">
          <div>
            <p className="text-2xl font-bold mb-3">Languages</p>
            <p className="sm:text-sm text-[11px] font-medium">
              HTML • CSS • JavaScript • TypeScript
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-3">Frontend</p>
            <p className="sm:text-sm text-[11px] font-medium">
              Next.js • React.js • Tailwind CSS 
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-3">Backend</p>
            <p className="sm:text-sm text-[11px] font-medium">
              Node.js • Express.js • Next.js • Appwrite • Clerk
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-3">Database</p>
            <p className="sm:text-sm text-[11px] font-medium">
              MongoDB • Mongoose • Prisma
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold mb-3">Tools & Deployment</p>
            <p className="sm:text-sm text-[11px] font-medium">
              Git • GitHub • Vercel • Netlify
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f5deb3 1px, transparent 1px), linear-gradient(to bottom, #f5deb3 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <CursorTracker mouseX={mousePosition.x} mouseY={mousePosition.y} />

      <BottomPointer />
    </div>
  );
}

export default SkillsSection;