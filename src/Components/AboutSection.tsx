import React, { useState, useEffect, useCallback} from "react";
import { CustomCursor } from "./subComponents/CustomCursor";
import BottomPointer from "./subComponents/BottomPointer";

function AboutSection() {

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
    <div className="h-screen w-full bg-[#f5deb3] flex flex-col relative font-['Fractul'] cursor-none">
      <div className="absolute top-8 left-8 text-black text-base font-medium tracking-tight">
        About Me
      </div>
      <div className="flex-1 flex items-center justify-center lg:px-14 md:px-14 sm:px-8 px-16">
        <div className="max-w-6xl w-full flex items-center lg:gap-16 md:gap-10 gap-6">
          <div className="lg:w-80 lg:h-96 md:w-70 md:h-84 sm:w-60 sm:h-72 bg-black items-center justify-center hidden sm:flex">
            <img
              src="/favicon.png"
              alt="No Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="text-black md:text-sm sm:font-medium md:leading-relaxed sm:text-xs text-[10px] space-y-4">
              <p>
                I am Muhammad Qasim, a full-stack web developer specializing in
                the MERN stack, enhanced by Next.js for modern, scalable
                applications.. My journey began with curiosity about how code
                turns into interactive experiences, and has grown into a
                dedication to delivering reliable solutions across both frontend
                and backend.
              </p>
              <p>
                I have delivered multiple production-grade projects with 99%+
                uptime, working with Node.js, Express.js, Next.js, React,
                TypeScript and other modern technologies. I focus on writing
                clean, maintainable code, seamless API integration, and ensuring
                consistent performance across all devices.
              </p>
              <p>
                Every project is a chance to enhance problem-solving skills,
                explore emerging technologies, and adhere to modern development
                standards. I am currently pursuing ICS while contributing to
                open-source and expanding my full-stack expertise across the
                modern web development ecosystem.
              </p>
            </div>
          </div>
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

export default AboutSection;