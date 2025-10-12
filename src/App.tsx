import React, { useState, useEffect, useRef, Suspense, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import HomeSection from "./Components/HomeSection";
import AboutSection from "./Components/AboutSection";
import SkillsSection from "./Components/SkillsSection";
import ProjectsSection from "./Components/Project/ProjectSection";
import ContactSection from "./Components/ContactSection";
import ErrorPage from "./Components/ErrorHandling/ErrorPage";
import ErrorBoundary from "./Components/ErrorHandling/ErrorBoundary";
import { SectionContext, useSectionContext } from "./SectionContext";

const ChatterDetailPage = React.lazy(() => 
  import("./Components/Project/Project Components/ChatterDetailPage")
);

const PortfolierDetailPage = React.lazy(() => 
  import("./Components/Project/Project Components/PortfolierDetailPage")
);
const CashflowerDetailPage = React.lazy(() => 
  import("./Components/Project/Project Components/CashflowerDetailPage")
);

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex space-x-2">
        <span className="w-3 h-3 bg-[#f5deb3] animate-bounce"></span>
        <span className="w-3 h-3 bg-[#f5deb3] animate-bounce animation-delay-150"></span>
        <span className="w-3 h-3 bg-[#f5deb3] animate-bounce animation-delay-300"></span>
      </div>
    </div>
  );
};

const MainPortfolio: React.FC = () => {
  const { currentSection, setCurrentSection } = useSectionContext();
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number>(0);
  const lastActionTime = useRef<number>(0);

  const sections: string[] = ["home", "about", "skills", "projects", "contact"];

  const navigateToSection = useCallback((direction: 'up' | 'down'): void => {
    const now = Date.now();
    
    if (isScrolling || now - lastActionTime.current < 1000) return;
    
    lastActionTime.current = now;
    setIsScrolling(true);
    
    if (direction === 'down' && currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else if (direction === 'up' && currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
    
    setTimeout(() => setIsScrolling(false), 1000);
  }, [currentSection, isScrolling, setCurrentSection, sections.length]);

  useEffect(() => {
    // Desktop
    const handleWheel = (e: WheelEvent): void => {
      e.preventDefault();
      
      if (e.deltaY > 30) {
        navigateToSection('down');
      } else if (e.deltaY < -30) {
        navigateToSection('up');
      }
    };

    // Mobile
    const handleTouchStart = (e: TouchEvent): void => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent): void => {
      e.preventDefault(); 
    };

    const handleTouchEnd = (e: TouchEvent): void => {
      if (!touchStartY.current) return;
      
      touchEndY.current = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY.current;
      
      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          navigateToSection('down');
        } else {
          navigateToSection('up');
        }
      }
      
      touchStartY.current = 0;
      touchEndY.current = 0;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigateToSection]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      const target = e.target as HTMLElement;

      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        navigateToSection("down");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        navigateToSection("up");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigateToSection]);

  return (
    <div className="relative h-screen w-full overflow-hidden touch-none">
      {/* Navigation dots */}
      <div className="fixed right-4 bottom-5 z-50 flex flex-col space-y-2">
        {sections.map((_, index) => {
          const isAboutOrProjects = currentSection === 1 || currentSection === 3;
          
          return (
            <button
              key={index}
              onClick={() => {
                if (!isScrolling) {
                  setCurrentSection(index);
                  setIsScrolling(true);
                  setTimeout(() => setIsScrolling(false), 1000);
                }
              }}
              className={`sm:w-2 sm:h-4 w-1.5 h-3 transition-all cursor-pointer outline-none duration-300 ${
                index === currentSection 
                  ? (isAboutOrProjects ? 'bg-black scale-125' : 'bg-[#f5deb3] scale-125')
                  : (isAboutOrProjects ? 'bg-black/30 hover:bg-black/60' : 'bg-white/30 hover:bg-white/60')
              }`}
            />
          );
        })}
      </div>

      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <HomeSection />
      </div>

      <div
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out`}
        style={{
          zIndex: 2,
          transform: currentSection >= 1 ? "translateY(0%)" : "translateY(100%)",
        }}
      >
        <AboutSection />
      </div>

      <div
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out`}
        style={{
          zIndex: 3,
          transform: currentSection >= 2 ? "translateY(0%)" : "translateY(100%)",
        }}
      >
        <SkillsSection />
      </div>

      <div
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out`}
        style={{
          zIndex: 4,
          transform: currentSection >= 3 ? "translateY(0%)" : "translateY(100%)",
        }}
      >
        <ProjectsSection />
      </div>

      <div
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out`}
        style={{
          zIndex: 5,
          transform: currentSection >= 4 ? "translateY(0%)" : "translateY(100%)",
        }}
      >
        <ContactSection />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);

  return (
    <ErrorBoundary>
      <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route 
            path="/chatter-detailed-view" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ChatterDetailPage />
              </Suspense>
            } 
          />        
          <Route 
            path="/portfolier-detailed-view" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PortfolierDetailPage />
              </Suspense>
            } 
          />
          <Route 
            path="/cashflower-detailed-view" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <CashflowerDetailPage />
              </Suspense>
            } 
          />      
          <Route path="*" element={<ErrorPage type="404" />} />
        </Routes>
      </SectionContext.Provider>
    </ErrorBoundary>
  );
};

export default App;