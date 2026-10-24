import React, { useState, useEffect } from 'react';
import Header from './src/components/Header';
import HeroSection from './src/components/HeroSection';
import ProjectsSection from './src/components/ProjectsSection';
import ExperienceSection from './src/components/ExperienceSection';
import SkillsSection from './src/components/SkillsSection';
import CertificatesSection from './src/components/CertificatesSection';
import HonorsAndAwardsSection from './src/components/HonorsAndAwardsSection';
import AboutSection from './src/components/AboutSection';
import Footer from './src/components/Footer';
import { LanguageProvider } from './src/LanguageContext';

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'; // Default to sleek dark mode like Apple Pro products
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#f5f5f7] dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7] selection:bg-apple-blue selection:text-white transition-colors duration-300">
        <Header theme={theme} onThemeSwitch={handleThemeSwitch} />
        
        <main className="pt-12">
          <div id="home">
            <HeroSection />
          </div>

          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <CertificatesSection />
          <HonorsAndAwardsSection />
          <AboutSection />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
