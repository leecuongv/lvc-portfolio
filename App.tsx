
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import HonorsAndAwardsSection from './components/HonorsAndAwardsSection';
import Footer from './components/Footer';

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
