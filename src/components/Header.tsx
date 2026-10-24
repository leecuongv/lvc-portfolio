import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  theme: string;
  onThemeSwitch: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onThemeSwitch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, toggleLanguage, t, personalInfo } = useLanguage();

  const NAV_LINKS = [
    { href: '#home', label: t('navHome') },
    { href: '#projects', label: t('navProjects') },
    { href: '#experience', label: t('navExperience') },
    { href: '#skills', label: t('navSkills') },
    { href: '#certificates', label: t('navCertificates') },
    { href: '#honors-awards', label: t('navHonorsAwards') },
    { href: '#about', label: t('navAbout') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'projects', 'experience', 'skills', 'certificates', 'honors-awards', 'about'];
      const scrollY = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'apple-glass-nav shadow-sm'
          : 'bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-black/[0.04] dark:border-white/[0.08]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Brand & Name */}
          <div className="flex items-center gap-2">
            <a
              href="#home"
              className="flex items-center gap-2 text-[#1d1d1f] dark:text-[#f5f5f7] transition-opacity hover:opacity-75"
              aria-label="Home"
            >
              <span className="text-[14px] font-bold tracking-tight">
                {personalInfo.name}
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links (Apple Style: centered, compact, 12-13px, active state) */}
          <nav className="hidden lg:flex items-center space-x-6 text-[12px] tracking-tight">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`transition-colors duration-150 ${
                    isActive
                      ? 'text-apple-blue dark:text-apple-bluelight font-semibold'
                      : 'text-[#1d1d1f]/75 dark:text-[#f5f5f7]/75 hover:text-[#0071e3] dark:hover:text-white font-normal'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Pill Buttons */}
          <div className="hidden sm:flex items-center space-x-2">
            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium tracking-tight bg-black/[0.04] dark:bg-white/[0.08] hover:bg-black/[0.08] dark:hover:bg-white/[0.14] text-[#1d1d1f] dark:text-[#f5f5f7] transition-all flex items-center gap-1.5 border border-black/[0.05] dark:border-white/[0.1]"
              title="Toggle Language"
              aria-label="Toggle Language"
            >
              <i className="fas fa-globe text-[10px] opacity-70"></i>
              <span className="font-semibold">{language.toUpperCase()}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onThemeSwitch}
              className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] text-[#1d1d1f]/80 dark:text-[#f5f5f7]/80 hover:bg-black/[0.05] dark:hover:bg-white/[0.1] transition-all"
              title="Toggle Theme"
              aria-label="Toggle Light and Dark Theme"
            >
              <i className={theme === 'dark' ? 'fas fa-sun text-amber-400' : 'fas fa-moon text-zinc-600'}></i>
            </button>

            {/* Apple Blue CTA */}
            <a
              href="#about"
              className="ml-1 apple-btn-primary !py-1 !px-3 !text-[12px] !font-medium shadow-none"
            >
              <span>{t('heroContactMe')}</span>
              <i className="fas fa-arrow-right text-[9px] opacity-80"></i>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-black/[0.04] dark:bg-white/[0.08] text-[#1d1d1f] dark:text-[#f5f5f7]"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={onThemeSwitch}
              className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] text-[#1d1d1f] dark:text-[#f5f5f7]"
            >
              <i className={theme === 'dark' ? 'fas fa-sun text-amber-400' : 'fas fa-moon'}></i>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-black/[0.05] dark:hover:bg-white/[0.1]"
              aria-label="Toggle Menu"
            >
              <i className={isOpen ? 'fas fa-times text-sm' : 'fas fa-bars text-sm'}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Apple iOS Sheet Style) */}
      {isOpen && (
        <div className="lg:hidden apple-glass border-b border-black/[0.08] dark:border-white/[0.12] transition-all animate-fadeIn">
          <div className="px-6 py-6 space-y-3">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block text-base font-medium py-1.5 border-b border-black/[0.04] dark:border-white/[0.04] transition-colors ${
                    isActive
                      ? 'text-apple-blue dark:text-apple-bluelight font-semibold'
                      : 'text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#about"
                onClick={handleLinkClick}
                className="w-full apple-btn-primary !py-2.5 text-center justify-center text-sm"
              >
                {t('heroContactMe')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
