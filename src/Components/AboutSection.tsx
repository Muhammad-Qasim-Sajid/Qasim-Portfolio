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
                I am Qasim, a frontend developer who loves fully functional,
                user-focused web applications. My journey in web development
                began with a curiosity for how code shapes real-world
                interactions, and over time, I have sharpened my skills by
                building projects that connect frontend experiences with
                powerful backend logic.
              </p>
              <p>
                Through these projects, I have gained solid experience in
                creating scalable, efficient applications, from writing clean
                and maintainable code to integrating APIs and ensuring
                everything runs smoothly across devices. I am passionate about
                bridging the gap between frontend and backend, making sure what
                I build not only works flawlessly but also feels seamless for
                the user.
              </p>
              <p>
                I believe every project is an opportunity to push myself
                further, experiment with new approaches, and stay aligned with
                modern best practices in web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;