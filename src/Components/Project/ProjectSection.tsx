import React from "react";
import ProjectCard from "./Project Components/ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="h-screen w-full bg-[#f5deb3] flex flex-col relative font-['Fractul']">
      <div className="absolute top-8 left-8 text-black text-base font-medium">
        Projects
      </div>
      <div className="flex-1 flex items-center justify-center md:px-16 sm:px-10 px-3 sm:pt-0 pt-6">
        <div className="max-w-5xl w-full">
          <div className="grid grid-cols-1 sm:gap-8 gap-3">
            <ProjectCard
              title="Portfolier"
              description="Portfolier is a portfolio management platform for professionals to create public portfolio with unlimited projects, featuring dual-theme design, real-time updates, and secure authentication with Appwrite as backend and database."
              codeLink="https://github.com/Muhammad-Qasim-Sajid/Portfolier"
              liveDemo="https://portfolier-org.vercel.app/"
              details={true}
              detailsRoute="/portfolier-detailed-view"
            />

            <ProjectCard
              title="Cashflower"
              description="Cash Flower is a personal finance tracker that manages income, expenses, and investments in one dashboard. Supports multi-currency balance calculations, visual analytics with bar charts, and works seamlessly across devices."
              codeLink="https://github.com/Muhammad-Qasim-Sajid/A-Complete-Finance-Tracker-"
              liveDemo="https://finance-tracker-by-qasim.netlify.app/"
              details={true}
              detailsRoute="/cashflower-detailed-view"
            />

            <ProjectCard
              title="WeatherPro"
              description="WeatherPro is a weather app built with HTML, CSS, and JavaScript that fetches real-time data from WeatherAPI. It features dynamic icons, smooth animations, and robust error handling."
              codeLink="https://github.com/Muhammad-Qasim-Sajid/Weather-App"
              liveDemo="https://weatherpro-by-qasim.netlify.app/"
              details={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;