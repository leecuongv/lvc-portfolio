import React from 'react';
import { useLanguage } from '../LanguageContext';

const CertificatesSection: React.FC = () => {
  const { certificates, t } = useLanguage();

  return (
    <section id="certificates" className="py-24 bg-black/[0.02] dark:bg-white/[0.015] border-y border-black/[0.04] dark:border-white/[0.05]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold apple-blue-gradient">
            ACCREDITATIONS & CLOUD
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-[#1d1d1f] dark:text-white mt-2 mb-4">
            {t('certificatesTitle')}
          </h2>
          <p className="text-base sm:text-lg text-[#86868b] font-normal leading-relaxed">
            {t('certificatesSubtitle')}
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificates.map((cert, index) => {
            const isAws = cert.title.toLowerCase().includes('aws');
            const isGoogle = cert.title.toLowerCase().includes('google');

            return (
              <div
                key={index}
                className="apple-card rounded-3xl p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Ambient Glow */}
                <div
                  className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl pointer-events-none ${
                    isAws
                      ? 'bg-amber-500/10'
                      : isGoogle
                      ? 'bg-blue-500/10'
                      : 'bg-apple-blue/10'
                  }`}
                ></div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Badge Icon */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-sm border ${
                        isAws
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                          : isGoogle
                          ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
                          : 'bg-black/[0.04] dark:bg-white/[0.06] text-apple-blue border-black/[0.04]'
                      }`}
                    >
                      <i className={isAws ? 'fab fa-aws' : isGoogle ? 'fab fa-google' : 'fas fa-certificate'}></i>
                    </div>

                    {/* Date Pill */}
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/[0.04] dark:bg-white/[0.08] text-[#86868b] dark:text-[#a1a1a6] border border-black/[0.04] dark:border-white/[0.06]">
                      {cert.date}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f] dark:text-white group-hover:text-apple-blue transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-[#86868b] mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="relative z-10 pt-6 mt-6 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <i className="fas fa-circle-check text-[11px]"></i>
                    <span>Verified Credential</span>
                  </span>

                  {cert.url && cert.url !== '#' && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-btn-secondary !py-1.5 !px-3.5 !text-xs !font-medium"
                    >
                      <span>{t('certificatesVerify')}</span>
                      <i className="fas fa-arrow-up-right-from-square text-[10px] opacity-75"></i>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;