import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const AboutSection: React.FC = () => {
  const { personalInfo, softSkills, languages, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-24 bg-black/[0.02] dark:bg-white/[0.015] border-y border-black/[0.04] dark:border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold apple-blue-gradient">
            CONNECTIONS & BACKGROUND
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-[#1d1d1f] dark:text-white mt-2 mb-4">
            {t('aboutTitle')}
          </h2>
          <p className="text-base sm:text-lg text-[#86868b] font-normal leading-relaxed">
            {t('aboutSubtitle')}
          </p>
        </div>

        {/* Apple Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Direct Contact Card (Span 7) */}
          <div className="md:col-span-7 apple-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.05] dark:border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-apple-blue/10 text-apple-blue flex items-center justify-center text-lg">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white">
                      {t('aboutContact')}
                    </h3>
                    <p className="text-xs text-[#86868b]">
                      Open to full-time, high-impact engineering roles
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="apple-btn-secondary !py-1.5 !px-3.5 !text-xs !font-medium"
                  title="Copy email to clipboard"
                >
                  <i className={`fas ${copied ? 'fa-check text-emerald-500' : 'fa-copy'}`}></i>
                  <span>{copied ? t('aboutEmailCopied') : t('aboutCopyEmail')}</span>
                </button>
              </div>

              {/* Contact Channels Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06] hover:border-apple-blue/40 transition-all group"
                >
                  <div className="text-xs text-[#86868b] font-medium flex items-center gap-2">
                    <i className="fas fa-envelope text-apple-blue"></i>
                    <span>Email</span>
                  </div>
                  <div className="text-sm font-semibold text-[#1d1d1f] dark:text-white mt-1 truncate group-hover:text-apple-blue transition-colors">
                    {personalInfo.email}
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06] hover:border-apple-blue/40 transition-all group"
                >
                  <div className="text-xs text-[#86868b] font-medium flex items-center gap-2">
                    <i className="fas fa-phone text-emerald-500"></i>
                    <span>Phone</span>
                  </div>
                  <div className="text-sm font-semibold text-[#1d1d1f] dark:text-white mt-1 group-hover:text-apple-blue transition-colors">
                    {personalInfo.phone}
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06] hover:border-apple-blue/40 transition-all group"
                >
                  <div className="text-xs text-[#86868b] font-medium flex items-center gap-2">
                    <i className="fab fa-github text-[#1d1d1f] dark:text-white"></i>
                    <span>GitHub</span>
                  </div>
                  <div className="text-sm font-semibold text-[#1d1d1f] dark:text-white mt-1 truncate group-hover:text-apple-blue transition-colors flex items-center justify-between">
                    <span>leecuongv</span>
                    <i className="fas fa-arrow-up-right-from-square text-[10px] opacity-60"></i>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06] hover:border-apple-blue/40 transition-all group"
                >
                  <div className="text-xs text-[#86868b] font-medium flex items-center gap-2">
                    <i className="fab fa-linkedin text-[#0077b5]"></i>
                    <span>LinkedIn</span>
                  </div>
                  <div className="text-sm font-semibold text-[#1d1d1f] dark:text-white mt-1 truncate group-hover:text-apple-blue transition-colors flex items-center justify-between">
                    <span>in/leecuongv</span>
                    <i className="fas fa-arrow-up-right-from-square text-[10px] opacity-60"></i>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#86868b]">
              <span>Based in Ho Chi Minh City, Vietnam</span>
              <span className="text-emerald-500 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                GMT+7 (ICT)
              </span>
            </div>
          </div>

          {/* Right Column: Soft Skills & Languages Bento (Span 5) */}
          <div className="md:col-span-5 space-y-6">
            {/* Soft Skills Card */}
            <div className="apple-card rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-black/[0.05] dark:border-white/[0.06]">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm">
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white">
                  {t('aboutSoftSkills')}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-black/[0.03] dark:bg-white/[0.05] text-[#1d1d1f] dark:text-[#f5f5f7] border border-black/[0.05] dark:border-white/[0.08]"
                  >
                    <i className="fas fa-check text-emerald-500 mr-1.5 text-[10px]"></i>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="apple-card rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-black/[0.05] dark:border-white/[0.06]">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm">
                  <i className="fas fa-language"></i>
                </div>
                <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white">
                  {t('aboutLanguage')}
                </h3>
              </div>

              <div className="space-y-2.5">
                {languages.map((lang) => (
                  <div
                    key={lang}
                    className="p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between"
                  >
                    <span className="text-sm font-semibold text-[#1d1d1f] dark:text-white">
                      {lang}
                    </span>
                    <span className="text-xs font-medium text-apple-blue px-2.5 py-0.5 rounded-full bg-apple-blue/10">
                      Fluent
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
