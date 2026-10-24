import React from 'react';
import { useLanguage } from '../LanguageContext';

const HeroSection: React.FC = () => {
  const { personalInfo, t } = useLanguage();

  return (
    <section className="w-full pt-16 pb-20 md:pt-20 md:pb-28 relative overflow-hidden">
      {/* Apple Subtle Ambient Backlight Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-500/10 via-cyan-400/10 to-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      {/* Top Announcement Ribbon (Apple banner style) */}
      <div className="max-w-5xl mx-auto px-4 mb-10 text-center">
        <a
          href="#experience"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium apple-glass hover:border-black/20 dark:hover:border-white/30 transition-all group shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[#1d1d1f] dark:text-[#f5f5f7]">
            {t('ribbonText')}
          </span>
          <span className="text-apple-blue font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
            <span>{t('ribbonAction')}</span>
            <i className="fas fa-chevron-right text-[10px]"></i>
          </span>
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          {/* Eyebrow */}
          <div className="inline-block">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold apple-blue-gradient">
              {t('heroRoleBadge')}
            </span>
          </div>

          {/* Massive Apple Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-[#1d1d1f] dark:text-white leading-[1.05]">
            {personalInfo.name}
          </h1>

          {/* Subtitle with metallic Apple gradient */}
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight apple-title-gradient max-w-3xl mx-auto">
            {t('heroTagline')}
          </p>

          {/* Objective / Overview paragraph */}
          <p className="text-base sm:text-lg text-[#86868b] dark:text-[#a1a1a6] max-w-2xl mx-auto leading-relaxed font-normal">
            {personalInfo.objective}
          </p>

          {/* Apple Action CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#projects"
              className="apple-btn-primary shadow-apple hover:shadow-apple-glow !py-3 !px-7 !text-[15px]"
            >
              <span>{t('heroViewWork')}</span>
              <i className="fas fa-arrow-down text-xs"></i>
            </a>

            <a
              href={personalInfo.cvUrl}
              download
              className="apple-btn-secondary !py-3 !px-7 !text-[15px]"
            >
              <i className="fas fa-arrow-down-to-bracket text-xs opacity-75"></i>
              <span>{t('heroDownloadCv')}</span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-apple-blue hover:text-apple-bluehover transition-colors px-3 py-2"
            >
              <span>{t('heroContactMe')}</span>
              <i className="fas fa-chevron-right text-xs"></i>
            </a>
          </div>
        </div>

        {/* Apple Pro Silicon / Spec Showcase Bento Card */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="apple-glass rounded-3xl p-6 sm:p-8 md:p-10 shadow-apple-lg transition-all duration-300 relative overflow-hidden border border-black/[0.08] dark:border-white/[0.12]">
            {/* Ambient Corner Flare */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-apple-blue/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Avatar in Apple Bezel */}
              <div className="md:col-span-5 flex flex-col items-center text-center">
                <div className="relative group">
                  {/* Subtle ring glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[32px] blur-sm opacity-30 group-hover:opacity-75 transition duration-500"></div>
                  
                  {/* Avatar Container */}
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[28px] overflow-hidden bg-black/5 dark:bg-white/5 border-2 border-black/[0.08] dark:border-white/[0.15] shadow-2xl">
                    <img
                      src={`${import.meta.env.BASE_URL}avt.jpg`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://github.com/leecuongv/gemini-portfolio/blob/main/public/avt.jpg?raw=true';
                      }}
                      alt={personalInfo.name}
                      width={224}
                      height={224}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Online / Active Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full apple-glass text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 whitespace-nowrap shadow-sm border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{t('heroOpenToWork')}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-[#86868b] mt-0.5">
                    cuonglevan.work@gmail.com · +84 389 365 835
                  </p>
                </div>
              </div>

              {/* Right Column: Engineering Spec Sheet (Apple M4 Style) */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#86868b]">
                    {t('heroSpecHeader')}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.08] text-apple-blue font-medium">
                    JAVA · SPRING · CLOUD
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {/* Spec 1 */}
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06]">
                    <div className="text-[11px] font-medium text-[#86868b] uppercase tracking-wider">
                      {t('heroSpecPosTitle')}
                    </div>
                    <div className="text-sm font-semibold text-[#1d1d1f] dark:text-white mt-1">
                      {t('heroSpecPosRole')}
                    </div>
                    <div className="text-xs text-apple-blue font-medium mt-0.5">
                      {t('heroSpecPosCompany')}
                    </div>
                  </div>

                  {/* Spec 2 */}
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06]">
                    <div className="text-[11px] font-medium text-[#86868b] uppercase tracking-wider">
                      {t('heroSpecFrameworksTitle')}
                    </div>
                    <div className="text-sm font-semibold text-[#1d1d1f] dark:text-white mt-1">
                      Java · Spring Boot
                    </div>
                    <div className="text-xs text-[#86868b] mt-0.5">
                      {t('heroSpecFrameworksSub')}
                    </div>
                  </div>

                  {/* Spec 3 */}
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06]">
                    <div className="text-[11px] font-medium text-[#86868b] uppercase tracking-wider">
                      {t('heroSpecDbTitle')}
                    </div>
                    <div className="text-sm font-semibold text-[#1d1d1f] dark:text-white mt-1">
                      Redis · SQL & NoSQL
                    </div>
                    <div className="text-xs text-[#86868b] mt-0.5">
                      Redis, PostgreSQL, MySQL, Oracle, Mongo
                    </div>
                  </div>

                  {/* Spec 4 */}
                  <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06]">
                    <div className="text-[11px] font-medium text-[#86868b] uppercase tracking-wider">
                      {t('heroSpecEduTitle')}
                    </div>
                    <div className="text-sm font-semibold text-[#1d1d1f] dark:text-white mt-1">
                      {t('heroSpecEduDegree')}
                    </div>
                    <div className="text-xs text-amber-500 font-medium mt-0.5">
                      {t('heroSpecEduAward')}
                    </div>
                  </div>
                </div>

                {/* Micro tech pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {['Java Core', 'Spring Boot', 'Redis', 'PostgreSQL', 'Docker', 'ERP Integration', 'Team Leadership', 'RESTful API', 'SonarQube'].map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-[#1d1d1f] dark:text-[#f5f5f7] border border-black/[0.04] dark:border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Key Metrics Row (Apple Spec Numbers) */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {/* Metric 1 */}
          <div className="apple-card rounded-2xl p-5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] dark:text-white tracking-tight">
              {t('bentoRoleTitle')}
            </div>
            <div className="text-xs font-medium text-[#86868b] mt-1">
              {t('bentoRoleSub')}
            </div>
          </div>

          {/* Metric 2 */}
          <div className="apple-card rounded-2xl p-5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-apple-blue tracking-tight">
              {t('bentoExpTitle')}
            </div>
            <div className="text-xs font-medium text-[#86868b] mt-1">
              {t('bentoExpSub')}
            </div>
          </div>

          {/* Metric 3 */}
          <div className="apple-card rounded-2xl p-5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] dark:text-white tracking-tight">
              {t('bentoStackTitle')}
            </div>
            <div className="text-xs font-medium text-[#86868b] mt-1">
              {t('bentoStackSub')}
            </div>
          </div>

          {/* Metric 4 */}
          <div className="apple-card rounded-2xl p-5 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-500 tracking-tight">
              {t('bentoEduTitle')}
            </div>
            <div className="text-xs font-medium text-[#86868b] mt-1">
              {t('bentoEduSub')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;