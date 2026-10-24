import React from 'react';
import { useLanguage } from '../LanguageContext';

const ProjectsSection: React.FC = () => {
  const { projects, t, language } = useLanguage();

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
          <div className="mb-8 apple-card rounded-3xl p-7 sm:p-9 relative overflow-hidden group">
            {/* Ambient Background Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Project Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-apple-blue/10 text-apple-blue dark:bg-apple-blue/20 dark:text-apple-bluelight border border-apple-blue/20">
                    {t('projectsFeaturedBadge')}
                  </span>
                  <span className="text-xs text-[#86868b]">
                    {language === 'en' ? 'Distributed Backend Architecture' : 'Kiến trúc Backend Phân tán'}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1d1d1f] dark:text-white group-hover:text-apple-blue transition-colors">
                  {flagshipProject.title}
                </h3>

                <p className="text-base text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">
                  {flagshipProject.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {flagshipProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.08] text-[#1d1d1f] dark:text-[#f5f5f7] border border-black/[0.06] dark:border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <a
                    href={flagshipProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-btn-primary !py-2.5 !px-5 !text-xs sm:!text-sm inline-flex items-center gap-2"
                  >
                    <i className="fab fa-github text-base"></i>
                    <span>{t('projectsViewLink')}</span>
                    <i className="fas fa-arrow-up-right-from-square text-xs opacity-75"></i>
                  </a>
                </div>
              </div>

              {/* Right Column: macOS Code Window Terminal Mockup */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-xl bg-[#16181d] text-left text-[#f0f6fc]">
                  {/* macOS Title Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0d1117] border-b border-white/[0.08]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="text-[11px] font-mono text-[#8b949e] flex items-center gap-1.5">
                      <i className="fab fa-java text-amber-400"></i>
                      <span>FarmTelemetryController.java</span>
                    </div>
                    <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>200 OK</span>
                    </div>
                  </div>

                  {/* Code Body */}
                  <div className="p-4 font-mono text-[11px] leading-relaxed overflow-x-auto text-[#c9d1d9] space-y-1">
                    <div>
                      <span className="text-purple-400">@RestController</span>
                    </div>
                    <div>
                      <span className="text-purple-400">@RequestMapping</span>
                      <span className="text-[#79c0ff]">("/api/v1/farms")</span>
                    </div>
                    <div>
                      <span className="text-blue-400">public class</span> <span className="text-yellow-300">FarmTelemetryController</span> {'{'}
                    </div>
                    <div className="pl-3 text-[#8b949e]">
                      // Spring Boot & Redis Telemetry
                    </div>
                    <div className="pl-3">
                      <span className="text-purple-400">@GetMapping</span>
                      <span className="text-[#79c0ff]">("/{'{'}id{'}'}/telemetry")</span>
                    </div>
                    <div className="pl-3">
                      <span className="text-blue-400">public</span> ResponseEntity&lt;FarmMetrics&gt; <span className="text-yellow-200">pollMetrics</span>(
                    </div>
                    <div className="pl-6">
                      <span className="text-purple-400">@PathVariable</span> String id
                    </div>
                    <div className="pl-3">) {'{'}</div>
                    <div className="pl-6">
                      <span className="text-blue-400">return</span> ResponseEntity.ok(
                    </div>
                    <div className="pl-9 text-emerald-300">
                      farmCache.getRealtimeMetrics(id)
                    </div>
                    <div className="pl-6">);</div>
                    <div className="pl-3">{'}'}</div>
                    <div>{'}'}</div>
                  </div>
                </div>
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
