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
                I am Qasim, a frontend developer who builds functional web
                applications that users actually want to interact with. My
                interest in web development started with figuring out how code
                becomes something people can use, and I've spent time learning
                to create applications that work well on both the frontend and
                backend sides.
              </p>
              <p>
                Through various projects, I've gotten comfortable writing
                maintainable code, working with APIs, and making sure things
                function properly across different devices. I focus on
                connecting frontend experiences with backend logic, ensuring
                that what I build works reliably and feels natural to use.
              </p>
              <p>
                I see each project as a chance to improve my skills, try
                different approaches, and keep up with current web development
                practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;