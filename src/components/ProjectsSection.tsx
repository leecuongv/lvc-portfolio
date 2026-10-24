import React from 'react';
import { useLanguage } from '../LanguageContext';

const ProjectsSection: React.FC = () => {
  const { projects, t } = useLanguage();

  const flagshipProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Style Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold apple-blue-gradient">
            {t('projectsFeaturedBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-[#1d1d1f] dark:text-white mt-2 mb-4">
            {t('projectsTitle')}
          </h2>
          <p className="text-base sm:text-lg text-[#86868b] font-normal leading-relaxed">
            {t('projectsSubtitle')}
          </p>
        </div>

        {/* Flagship Hero Project (Apple Pro Bento Card) */}
        {flagshipProject && (
          <div className="mb-8 apple-card rounded-3xl p-7 sm:p-10 relative overflow-hidden group">
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-apple-blue/10 text-apple-blue dark:bg-apple-blue/20 dark:text-apple-bluelight border border-apple-blue/20">
                    Flagship Architecture
                  </span>
                  <span className="text-xs text-[#86868b]">
                    Distributed Backend System
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1d1d1f] dark:text-white group-hover:text-apple-blue transition-colors">
                  {flagshipProject.title}
                </h3>

                <p className="text-base text-[#86868b] dark:text-[#a1a1a6] leading-relaxed max-w-2xl">
                  {flagshipProject.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {flagshipProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.08] text-[#1d1d1f] dark:text-[#f5f5f7] border border-black/[0.06] dark:border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center items-start lg:items-end gap-3">
                <a
                  href={flagshipProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn-primary !py-3 !px-6 !text-sm w-full sm:w-auto text-center"
                >
                  <i className="fab fa-github text-base"></i>
                  <span>{t('projectsViewLink')}</span>
                  <i className="fas fa-arrow-up-right-from-square text-xs opacity-75"></i>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => {
            const icons = [
              'fas fa-server',
              'fas fa-eye',
              'fas fa-desktop'
            ];
            const iconClass = icons[index % icons.length];

            return (
              <div
                key={project.title}
                className="apple-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Card Top: Icon & Link */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-apple-blue text-lg border border-black/[0.04] dark:border-white/[0.08] group-hover:scale-110 transition-transform">
                      <i className={iconClass}></i>
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full flex items-center justify-center text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/[0.1] transition-all"
                      aria-label="GitHub Repository"
                    >
                      <i className="fab fa-github text-lg"></i>
                    </a>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f] dark:text-white group-hover:text-apple-blue transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#86868b] dark:text-[#a1a1a6] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Footer Tags & Link */}
                <div className="pt-6 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/[0.03] dark:bg-white/[0.06] text-[#86868b] dark:text-[#d2d2d7] border border-black/[0.03] dark:border-white/[0.05]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-apple-blue hover:text-apple-bluehover transition-colors"
                  >
                    <span>{t('projectsViewLink')}</span>
                    <i className="fas fa-chevron-right text-[10px]"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
