import React from "react";

function SkillsSection() {
  return (
    <div className="h-screen w-full bg-black flex flex-col relative font-['Fractul']">
      <div className="absolute top-8 left-8 text-[#f5deb3] text-base font-medium">
        Skills
      </div>
      <div className="flex-1 flex items-center justify-center px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-60 gap-y-8">
          <div className="sm:space-y-12 space-y-8">
            <div className="text-center">
              <p className="text-[#f5deb3] text-2xl font-bold sm:mb-4 mb-2">
                Languages
              </p>
              <div
                className="text-[#f5deb3] sm:text-sm text-[11px] font-medium space-y-1"
              >
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-[#f5deb3] text-2xl font-bold sm:mb-4 mb-2">
                Frameworks
              </p>
              <div
                className="text-[#f5deb3] sm:text-sm text-[11px] font-medium space-y-1"
              >
                <div>React.js</div>
                <div>Tailwind CSS</div>
              </div>
            </div>
          </div>
          <div className="sm:space-y-12 space-y-8">
            <div className="text-center">
              <p className="text-[#f5deb3] text-2xl font-bold sm:mb-4 mb-2">
                Tools
              </p>
              <div
                className="text-[#f5deb3] sm:text-sm text-[11px] font-medium space-y-1"
              >
                <div>Git</div>
                <div>GitHub</div>
                <div>Appwrite</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-[#f5deb3] text-2xl font-bold sm:mb-4 mb-2">
                Libraries
              </p>
              <div
                className="text-[#f5deb3] sm:text-sm text-[11px] font-medium space-y-1"
              >
                <div>React Hook Form</div>
                <div>Redux Toolkit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;