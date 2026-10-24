import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t('footerBackToTop')}
      title={t('footerBackToTop')}
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full apple-glass shadow-apple-lg border border-black/10 dark:border-white/15 text-[#1d1d1f] dark:text-white flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:border-apple-blue/40 hover:text-apple-blue dark:hover:text-apple-bluelight focus:outline-none ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <i className="fas fa-chevron-up text-xs transition-transform group-hover:-translate-y-0.5"></i>
    </button>
  );
};

export default BackToTop;
