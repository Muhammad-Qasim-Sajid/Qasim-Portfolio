import React from "react";
import ProjectDetailedView from "./ProjectDetailedView";

const CashflowerDetailPage = () => {
  const cashflowerProject = {
    title: "Cashflower",
    overview:
      "Cash Flower is a comprehensive web-based expense tracking application built with vanilla JavaScript, HTML, and CSS. It provides a complete solution for tracking income, expenses, and investments while offering detailed analytics and multi-currency support. The project was a significant learning journey that highlighted the importance of frameworks and libraries in modern development.",
    features: [
      "Multi-section navigation: Dashboard, Income, Expenses, Investments, and Analytics",
      "Real-time balance calculation (Income - Expenses - Investments)",
      "Multi-currency support with persistent storage across sessions",
      "Income management with multiple sources and live total updates",
      "Comprehensive expense tracking organization",
      "Investment portfolio monitoring ",
      "Visual analytics with interactive bar and chart visualizations",
      "Smart input validation ensuring accurate numerical entries only",
      "Persistent data storage using browser's localStorage",
      "Fully responsive design optimized for all device sizes",
      "Dynamic currency updates reflected across all amounts",
      "Financial health alerts when expenses exceed income",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Local Storage API",
      "Dynamic DOM Manipulation",
      "Modular Architecture",
    ],
    challenges: [
      {
        title: "State Management Without Frameworks",
        description:
          "Managing application state manually across multiple categories without framework benefits, leading to complex tracking of editing states and data synchronization.",
      },
      {
        title: "Dynamic Currency Management",
        description:
          "Implementing currency switching that updates all existing entries while maintaining proper formatting and parsing stored amounts correctly.",
      },
      {
        title: "Manual DOM Manipulation",
        description:
          "Creating, editing, and deleting elements dynamically while maintaining event listeners and preventing memory leaks.",
      },
      {
        title: "Local Storage Complexity",
        description:
          "Designing robust localStorage management with data integrity, corruption handling, and proper load/save synchronization.",
      },
      {
        title: "Custom Analytics Visualization",
        description:
          "Building responsive bar chart system without external libraries, handling proportional scaling and overflow gracefully.",
      },
    ],
    learnings: [
      "Understanding the critical importance of frameworks and libraries in modern development",
      "Realizing how much complexity frameworks handle behind the scenes",
      "Learning that manual state management becomes exponentially difficult with scale",
      "Discovering why component-based architecture is essential for maintainable code",
      "Understanding the value of automatic data binding and reactive updates",
      "Appreciating developer experience improvements that frameworks provide",
      "Learning that vanilla JavaScript is crucial for fundamentals but frameworks solve real problems",
      "Gaining deep understanding of DOM manipulation and event handling",
      "Mastering localStorage management and data persistence patterns",
    ],
    codeLink:
      "https://github.com/Muhammad-Qasim-Sajid/A-Complete-Finance-Tracker-",
    liveDemo: "https://finance-tracker-by-qasim.netlify.app/",
  };

  return <ProjectDetailedView project={cashflowerProject} />;
};

export default CashflowerDetailPage;