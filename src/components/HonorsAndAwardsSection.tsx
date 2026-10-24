import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const HonorsAndAwardsSection: React.FC = () => {
  const { honorsAndAwards, t, language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'merit' | 'leadership' | 'activities'>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredItems = honorsAndAwards.filter((item) => {
    if (filter === 'all') return true;
    const lowerTitle = item.title.toLowerCase();
    const lowerContext = item.context.toLowerCase();
    if (filter === 'merit') {
      return lowerTitle.includes('merit') || lowerTitle.includes('5 tốt') || lowerTitle.includes('xuất sắc');
    }
    if (filter === 'leadership') {
      return (
        lowerTitle.includes('executive') ||
        lowerTitle.includes('ban chấp hành') ||
        lowerTitle.includes('cán bộ') ||
        lowerTitle.includes('leadership') ||
        lowerTitle.includes('collaborator') ||
        lowerTitle.includes('cộng tác viên')
      );
    }
    if (filter === 'activities') {
      return (
        lowerTitle.includes('volunteer') ||
        lowerTitle.includes('tình nguyện') ||
        lowerTitle.includes('cuộc thi') ||
        lowerTitle.includes('hackathon') ||
        lowerContext.includes('contest') ||
        lowerContext.includes('hackathon')
      );
    }
    return true;
  });

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section id="honors-awards" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold apple-amber-gradient">
            RECOGNITION & IMPACT
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-[#1d1d1f] dark:text-white mt-2 mb-4">
            {t('honorsTitle')}
          </h2>
          <p className="text-base sm:text-lg text-[#86868b] font-normal leading-relaxed">
            {t('honorsSubtitle')}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {([
              { id: 'all' as const, label: language === 'en' ? 'All Recognitions' : 'Tất cả' },
              { id: 'merit' as const, label: language === 'en' ? 'Academic & Merits' : 'Danh hiệu Sinh viên 5 Tốt' },
              { id: 'leadership' as const, label: language === 'en' ? 'Union & Leadership' : 'Đoàn - Hội & Lãnh đạo' },
              { id: 'activities' as const, label: language === 'en' ? 'Hackathons & Events' : 'Học thuật & Tình nguyện' },
            ]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-apple-blue text-white shadow-sm'
                    : 'bg-black/[0.04] dark:bg-white/[0.08] text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item, index) => {
            const hasProof = item.proofUrl && item.proofUrl !== '#' && item.proofUrl !== '';

            return (
              <div
                key={index}
                className="apple-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon & Period */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-base border border-amber-500/20 group-hover:scale-110 transition-transform">
                      <i className={item.icon || 'fas fa-star'}></i>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/[0.04] dark:bg-white/[0.08] text-[#86868b] dark:text-[#a1a1a6] border border-black/[0.04] dark:border-white/[0.06]">
                      {item.period}
                    </span>
                  </div>

                  {/* Title & Context */}
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-[#1d1d1f] dark:text-white group-hover:text-amber-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#86868b] dark:text-[#a1a1a6] mt-1.5 leading-relaxed">
                      {item.context}
                    </p>
                  </div>

                  {/* Optional Achievements List */}
                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="pt-2 space-y-1.5 text-xs text-[#515154] dark:text-[#a1a1a6]">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start">
                          <i className="fas fa-check text-emerald-500 mr-2 mt-0.5 text-[10px]"></i>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Footer Proof Link */}
                <div className="pt-5 mt-5 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-[#86868b]">Verified Activity</span>
                  {hasProof ? (
                    <a
                      href={item.proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-apple-blue font-semibold hover:underline"
                    >
                      <span>{t('honorsViewProof')}</span>
                      <i className="fas fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  ) : (
                    <span className="text-zinc-400 dark:text-zinc-600">Official Award</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More / Show Less Toggle Button */}
        {filteredItems.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="apple-btn-secondary !py-2.5 !px-6 !text-xs font-semibold"
            >
              <span>
                {showAll
                  ? (language === 'en' ? 'Show Less' : 'Thu gọn')
                  : (language === 'en'
                      ? `Show More (${filteredItems.length - 6} more)`
                      : `Xem thêm (${filteredItems.length - 6} mục)`)}
              </span>
              <i className={`fas fa-chevron-${showAll ? 'up' : 'down'} text-[10px]`}></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HonorsAndAwardsSection;
