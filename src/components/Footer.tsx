import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { personalInfo, t, language, toggleLanguage } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f5f5f7] dark:bg-[#000000] border-t border-black/[0.08] dark:border-white/[0.12] pt-12 pb-16 text-[#86868b] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Apple Style Top Disclaimer / Colophon Note */}
        <div className="pb-8 border-b border-black/[0.06] dark:border-white/[0.08] space-y-2 leading-relaxed">
          <p>
            1. Experience highlights include enterprise ERP implementations at Fahasa Book Corporation, CoreBanking and backend service integration at HPT Vietnam, and simulated agile training at FPT Software.
          </p>
          <p>
            2. All certificates and academic distinctions are independently verifiable via Credly and official institutional records.
          </p>
        </div>

        {/* Directory & Links Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
          <div>
            <h4 className="font-semibold text-[#1d1d1f] dark:text-white mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline">{t('navHome')}</a></li>
              <li><a href="#about" className="hover:underline">{t('navAbout')}</a></li>
              <li><a href="#experience" className="hover:underline">{t('navExperience')}</a></li>
              <li><a href="#projects" className="hover:underline">{t('navProjects')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1d1d1f] dark:text-white mb-3">
              Capabilities
            </h4>
            <ul className="space-y-2">
              <li><a href="#skills" className="hover:underline">{t('navSkills')}</a></li>
              <li><a href="#certificates" className="hover:underline">{t('navCertificates')}</a></li>
              <li><a href="#honors-awards" className="hover:underline">{t('navHonorsAwards')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1d1d1f] dark:text-white mb-3">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                  Direct Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1d1d1f] dark:text-white mb-3">
              Language & Region
            </h4>
            <div className="space-y-3">
              <button
                onClick={toggleLanguage}
                className="apple-btn-secondary !py-1 !px-3 !text-xs"
              >
                <i className="fas fa-globe text-[11px]"></i>
                <span>{language === 'en' ? 'English (US)' : 'Tiếng Việt'}</span>
              </button>
              <p className="text-[11px]">Vietnam · Ho Chi Minh City</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Copyright © {new Date().getFullYear()} {personalInfo.name}. {t('footerRights')}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-apple-blue hover:text-apple-bluehover font-medium transition-colors"
          >
            <span>Back to top</span>
            <i className="fas fa-arrow-up text-[10px]"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
