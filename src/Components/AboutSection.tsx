import React from "react";

function AboutSection() {
  return (
    <div className="h-screen w-full bg-[#f5deb3] flex flex-col relative font-['Fractul']">
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
                I am Muhammad Qasim, a web developer who builds full-stack
                applications. My journey started with curiosity about how code
                transforms into something people interact with, and has evolved
                into a focus on creating reliable, scalable solutions from
                frontend to backend.
              </p>
              <p>
                I have shipped multiple production-ready projects with 99%+
                uptime, working across Next.js, React, TypeScript, Tailwind,
                Prisma, and Appwrite. My approach emphasizes clean, maintainable
                code, smooth API integration, and consistent performance across
                all devices.
              </p>
              <p>
                Every project is an opportunity to sharpen my problem-solving,
                experiment with emerging technologies, and align with modern
                development standards. I am currently pursuing ICS while
                contributing to open-source and deepening my backend expertise
                with Node.js and Express.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;