import React from 'react';
import { useLanguage } from '../LanguageContext';

const getCategoryIcon = (title: string): string => {
  const lower = title.toLowerCase();
  if (lower.includes('language') || lower.includes('ngôn ngữ') || lower.includes('framework') || lower.includes('backend')) return 'fas fa-code';
  if (lower.includes('database') || lower.includes('cơ sở dữ liệu') || lower.includes('caching') || lower.includes('redis')) return 'fas fa-database';
  if (lower.includes('integration') || lower.includes('tích hợp') || lower.includes('erp')) return 'fas fa-network-wired';
  if (lower.includes('leadership') || lower.includes('lãnh đạo') || lower.includes('management') || lower.includes('quản lý') || lower.includes('quản trị') || lower.includes('team')) return 'fas fa-users-gear';
  if (lower.includes('devops') || lower.includes('docker') || lower.includes('hạ tầng') || lower.includes('infrastructure') || lower.includes('đóng gói')) return 'fab fa-docker';
  if (lower.includes('source') || lower.includes('mã nguồn') || lower.includes('git')) return 'fas fa-code-branch';
  if (lower.includes('pattern') || lower.includes('mẫu thiết kế') || lower.includes('kiến trúc') || lower.includes('architecture')) return 'fas fa-cubes';
  if (lower.includes('testing') || lower.includes('kiểm thử') || lower.includes('quality') || lower.includes('chất lượng')) return 'fas fa-vial';
  if (lower.includes('analysis') || lower.includes('phân tích') || lower.includes('sonar')) return 'fas fa-shield-halved';
  if (lower.includes('dlc') || lower.includes('mô hình') || lower.includes('agile') || lower.includes('lifecycle')) return 'fas fa-diagram-project';
  return 'fas fa-microchip';
};

const SkillsSection: React.FC = () => {
  const { skills, t } = useLanguage();

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold apple-blue-gradient">
            {t('skillsEyebrow')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-[#1d1d1f] dark:text-white mt-2 mb-4">
            {t('skillsTitle')}
          </h2>
          <p className="text-base sm:text-lg text-[#86868b] font-normal leading-relaxed">
            {t('skillsSubtitle')}
          </p>
        </div>

        {/* Apple Bento Tech Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => {
            const iconClass = getCategoryIcon(category.title);

            return (
              <div
                key={category.title}
                className="apple-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:border-apple-blue/40 transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-black/[0.05] dark:border-white/[0.06]">
                    <div className="w-10 h-10 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-apple-blue text-base border border-black/[0.04] dark:border-white/[0.08] group-hover:scale-110 transition-transform">
                      <i className={iconClass}></i>
                    </div>
                    <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-black/[0.03] dark:bg-white/[0.05] text-[#1d1d1f] dark:text-[#f5f5f7] border border-black/[0.05] dark:border-white/[0.08] hover:bg-apple-blue/10 hover:text-apple-blue dark:hover:text-apple-bluelight hover:border-apple-blue/30 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between text-[11px] text-[#86868b]">
                  <span className="uppercase tracking-wider font-semibold">{t('skillsProductionReady')}</span>
                  <span className="flex items-center gap-1 text-emerald-500 font-medium">
                    <i className="fas fa-check-circle text-[10px]"></i> {t('skillsVerified')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
