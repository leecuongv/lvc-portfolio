import React from 'react';
import { useLanguage } from '../LanguageContext';

const ExperienceSection: React.FC = () => {
  const { experiences, education, t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-black/[0.02] dark:bg-white/[0.015] border-y border-black/[0.04] dark:border-white/[0.05]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold apple-blue-gradient">
            {t('expEyebrow')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-[#1d1d1f] dark:text-white mt-2 mb-4">
            {t('experienceTitle')}
          </h2>
          <p className="text-base sm:text-lg text-[#86868b] font-normal leading-relaxed">
            {t('experienceSubtitle')}
          </p>
        </div>

        {/* Milestone Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-black/[0.08] dark:border-white/[0.12] space-y-12 ml-2 sm:ml-4">
          {/* Work Experiences */}
          {experiences.map((exp, index) => {
            const isCurrent = index === 0;

            return (
              <div key={index} className="relative group">
                {/* Timeline Node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full border-2 transition-all ${
                    isCurrent
                      ? 'bg-apple-blue border-white dark:border-black ring-4 ring-apple-blue/20'
                      : 'bg-[#86868b] border-white dark:border-black group-hover:bg-apple-blue'
                  }`}
                ></div>

                {/* Experience Card */}
                <div className="apple-card rounded-3xl p-6 sm:p-8 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-black/[0.05] dark:border-white/[0.06]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-apple-blue">
                          {exp.company}
                        </span>
                        {isCurrent && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            {t('expCurrentRole')}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white tracking-tight mt-1">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.08] text-[#86868b] dark:text-[#a1a1a6] border border-black/[0.04] dark:border-white/[0.06] w-fit">
                      <i className="far fa-calendar-alt mr-1.5 text-[10px]"></i>
                      {exp.period}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="mt-5 space-y-3">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-[#515154] dark:text-[#a1a1a6] leading-relaxed"
                      >
                        <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-apple-blue flex-shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-black/[0.05] dark:border-white/[0.06]">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b] mr-1.5 flex items-center gap-1">
                          <i className="fas fa-layer-group text-[10px] text-apple-blue"></i>
                          <span>{t('expCoreTech')}:</span>
                        </span>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-black/[0.03] dark:bg-white/[0.05] text-[#1d1d1f] dark:text-[#f5f5f7] border border-black/[0.05] dark:border-white/[0.08] hover:border-apple-blue/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Education Milestone */}
          {education.map((edu, index) => (
            <div key={`edu-${index}`} className="relative group">
              {/* Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full border-2 bg-amber-500 border-white dark:border-black ring-4 ring-amber-500/20"></div>

              {/* Education Card */}
              <div className="apple-card rounded-3xl p-6 sm:p-8 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-black/[0.05] dark:border-white/[0.06]">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                      {t('expAcademicFoundation')}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white tracking-tight mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-[#86868b] mt-0.5">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 w-fit">
                    <i className="fas fa-award mr-1.5 text-[11px]"></i>
                    {edu.details}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
