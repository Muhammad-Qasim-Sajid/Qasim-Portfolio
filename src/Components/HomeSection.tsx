import React from "react";

const HomeSection = () => {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center relative font-['Fractul']">
      <div className="absolute top-8 left-8 text-[#f5deb3] text-base font-medium tracking-tight">
        Home
      </div>
      <div className="mb-24 flex flex-col items-center lg:-space-y-18 md:-space-y-14 sm:-space-y-10 -space-y-5">
        <p className="text-[#f5deb3] text-[25vw] tracking-tight text-center leading-tighter font-black">
          Qa<span className="lg:ml-3 md:ml-2.5 sm:ml-2 ml-0.5">s</span>im,
        </p>
        <p className="text-[#f5deb3] text-[5vw] tracking-tight text-center leading-tighter font-medium">
          Full-Stack Web Developer
        </p>
      </div>
    </div>
  );
};

export default HomeSection;