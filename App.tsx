
import React, { useState, useEffect } from 'react';
import Header from './src/components/Header';
import HeroSection from './src/components/HeroSection';
import AboutSection from './src/components/AboutSection';
import SkillsSection from './src/components/SkillsSection';
import ExperienceSection from './src/components/ExperienceSection';
import ProjectsSection from './src/components/ProjectsSection';
import CertificatesSection from './src/components/CertificatesSection';
import HonorsAndAwardsSection from './src/components/HonorsAndAwardsSection';
import Footer from './src/components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Header theme={theme} onThemeSwitch={handleThemeSwitch} />
      <main className="pt-20">
        <div id="home" className="min-h-screen flex items-center">
            <HeroSection />
        </div>
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <HonorsAndAwardsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
