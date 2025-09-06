import { createContext, useContext } from 'react';

interface SectionContextType {
  currentSection: number;
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>;
}

export const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const useSectionContext = (): SectionContextType => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('UseSectionContext must be used within a SectionProvider');
  }
  return context;
};