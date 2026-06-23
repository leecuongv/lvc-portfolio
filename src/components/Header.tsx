import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  theme: string;
  onThemeSwitch: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onThemeSwitch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t, personalInfo } = useLanguage();

  const NAV_LINKS = [
    { href: '#home', label: t('navHome') },
    { href: '#about', label: t('navAbout') },
    { href: '#skills', label: t('navSkills') },
    { href: '#experience', label: t('navExperience') },
    { href: '#projects', label: t('navProjects') },
    { href: '#certificates', label: t('navCertificates') },
    { href: '#honors-awards', label: t('navHonorsAwards') },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-primary-600 dark:text-primary-400">
              {personalInfo.name.split(' ').slice(0, 2).join(' ')}
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <nav className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map(link => (
                <a key={link.label} href={link.href} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                  {link.label}
                </a>
              ))}
            </nav>
            {/* Language Switcher Button (Desktop) */}
            <button onClick={toggleLanguage} className="ml-4 px-2.5 py-1 rounded-full text-xs font-bold border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none flex items-center gap-1.5 transition-colors">
              <i className="fas fa-globe"></i>
              <span>{language === 'en' ? 'EN' : 'VI'}</span>
            </button>
            {/* Theme Toggle Button */}
            <button onClick={onThemeSwitch} className="ml-2 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none">
              <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
          </div>
          <div className="md:hidden flex items-center">
            {/* Language Switcher Button (Mobile) */}
            <button onClick={toggleLanguage} className="mr-2 px-2.5 py-1 rounded-full text-xs font-bold border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none flex items-center gap-1.5 transition-colors">
              <i className="fas fa-globe"></i>
              <span>{language === 'en' ? 'EN' : 'VI'}</span>
            </button>
            {/* Theme Toggle Button */}
            <button onClick={onThemeSwitch} className="mr-2 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none">
              <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none">
              <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
