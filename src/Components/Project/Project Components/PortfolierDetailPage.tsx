import React from "react";
import ProjectDetailedView from "./ProjectDetailedView";

const PortfolierDetailPage = () => {
  const portfolierProject = {
    title: "Portfolier",
    overview:
      "Portfolier is a modern, full-featured portfolio management platform built with React and Appwrite. It enables professionals to create stunning portfolio websites, manage multiple projects, and showcase their work with a clean, responsive interface that adapts to any device. The platform features a strategic dual-theme approach with red for admin sections and blue for public portfolios.",
    features: [
      "Comprehensive portfolio with unlimited projects under a single profile",
      "Dual-theme design system (red for admin dashboard, blue for public view)",
      "Real-time updates with seamless synchronization across devices",
      "Secure authentication using email/password and Google OAuth",
      "Advanced media management with image uploads, captions, and organization",
      "Fully responsive design optimized for mobile, tablet, and desktop",
      "Modern React architecture powered by Redux Toolkit state management",
      "Custom portfolio URL generation for easy sharing and branding",
      "Project categorization system for structured project organization",
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Appwrite",
      "Redux Toolkit",
      "React Router DOM",
      "React Hook Form",            
      "Lucide React",
    ],
    challenges: [
      {
        title: "Dual-Theme Architecture",
        description:
          "Implementing a seamless dual-theme system that maintains visual hierarchy while ensuring consistent user experience across admin and public interfaces.",
      },
      {
        title: "Real-time Data Synchronization",
        description:
          "Ensuring data consistency across multiple devices and sessions using Appwrite's real-time capabilities while managing complex state updates.",
      },
      {
        title: "File Upload Optimization",
        description:
          "Implementing efficient media management with progress indicators, and validation.",
      },
      {
        title: "OAuth Integration",
        description:
          "Seamlessly integrating Google OAuth with automatic account linking and session management while maintaining security standards.",
      },
    ],
    learnings: [
      "Mastered Redux Toolkit for complex state management patterns and async thunks",
      "Gained deep experience with Appwrite SDK integration and backend-as-a-service architecture",
      "Developed expertise in responsive design with Tailwind CSS and mobile-first principles",
      "Learned file handling best practices with progress tracking and error handling",
      "Implemented OAuth flows and secure authentication patterns",
      "Adopted component-driven development with atomic design principles",
    ],
    codeLink: "https://github.com/Muhammad-Qasim-Sajid/Portfolier",
    liveDemo: "https://portfolier-org.vercel.app/",
  };

  return <ProjectDetailedView project={portfolierProject} />;
};

export default PortfolierDetailPage;