import React, { createContext, useContext, useState, useEffect } from 'react';
import * as constantsEn from './constants';
import * as constantsVi from './constants_vi';
import { Project, SkillCategory, Experience, Education, Certificate, Honor } from './types';

export type Language = 'en' | 'vi';

interface PersonalInfo {
  name: string;
  title: string;
  objective: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  cvUrl: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: keyof typeof uiTranslations['en']) => string;
  personalInfo: PersonalInfo;
  softSkills: string[];
  languages: string[];
  skills: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  certificates: Certificate[];
  honorsAndAwards: Honor[];
}

const uiTranslations = {
  en: {
    // Header & Navigation
    navHome: "Overview",
    navAbout: "About",
    navSkills: "Tech Specs",
    navExperience: "Experience",
    navProjects: "Projects",
    navCertificates: "Certifications",
    navHonorsAwards: "Honors & Awards",
    navContact: "Contact",

    // Ribbon
    ribbonText: "Now leading ERP engineering at Fahasa · Building resilient enterprise backends",
    ribbonAction: "Explore Career",

    // Hero
    heroHello: "Hello, I'm",
    heroRoleBadge: "Software Engineer · Head of ERP",
    heroTagline: "Architecting backend resilience. Engineered for enterprise scale.",
    heroViewWork: "Explore Projects",
    heroDownloadCv: "Download CV",
    heroContactMe: "Get in touch",
    heroOpenToWork: "Open to Senior Backend Roles",

    // Bento stats
    bentoRoleTitle: "Head of ERP",
    bentoRoleSub: "Fahasa Book Corporation",
    bentoExpTitle: "3+ Years",
    bentoExpSub: "Production Engineering",
    bentoStackTitle: "Java & Spring",
    bentoStackSub: "Microservices & Cloud",
    bentoEduTitle: "HCMUTE",
    bentoEduSub: "Software Engineering (3.2/4)",

    // About
    aboutTitle: "About Me",
    aboutSubtitle: "Bridging complex business processes with high-throughput, maintainable software architectures.",
    aboutContact: "Direct Channels",
    aboutSoftSkills: "Core Competencies",
    aboutLanguage: "Languages",
    aboutCopyEmail: "Copy Email",
    aboutEmailCopied: "Copied!",
    
    // Skills
    skillsTitle: "Technical Specifications",
    skillsSubtitle: "A battle-tested stack spanning distributed backend engines, cloud databases, and DevOps automation.",
    
    // Experience & Education
    experienceTitle: "Career Milestones",
    experienceSubtitle: "Track record of technical leadership, enterprise integrations, and mission-critical systems.",
    
    // Projects
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Engineered from the ground up with focus on high concurrency, clean architecture, and data integrity.",
    projectsViewLink: "View Repository",
    projectsFeaturedBadge: "Flagship Architecture",
    
    // Certificates
    certificatesTitle: "Certifications",
    certificatesSubtitle: "Industry-standard cloud and project management credentials.",
    certificatesVerify: "Verify Credential",
    
    // Honors & Awards
    honorsTitle: "Honors & Recognition",
    honorsSubtitle: "Academic excellence, community leadership, and competitive distinctions.",
    honorsViewProof: "View Proof",
    
    // Footer
    footerRights: "All rights reserved."
  },
  vi: {
    // Header & Navigation
    navHome: "Tổng quan",
    navAbout: "Giới thiệu",
    navSkills: "Thông số kỹ thuật",
    navExperience: "Kinh nghiệm",
    navProjects: "Dự án",
    navCertificates: "Chứng chỉ",
    navHonorsAwards: "Giải thưởng & Hoạt động",
    navContact: "Liên hệ",

    // Ribbon
    ribbonText: "Hiện đang là Trưởng bộ phận ERP tại Fahasa · Xây dựng hệ thống backend doanh nghiệp",
    ribbonAction: "Xem sự nghiệp",

    // Hero
    heroHello: "Xin chào, tôi là",
    heroRoleBadge: "Kỹ sư Phần mềm · Trưởng bộ phận ERP",
    heroTagline: "Kiến trúc hệ thống bền vững. Thiết kế cho quy mô doanh nghiệp.",
    heroViewWork: "Xem dự án",
    heroDownloadCv: "Tải CV",
    heroContactMe: "Liên hệ ngay",
    heroOpenToWork: "Sẵn sàng cho cơ hội Senior Backend",

    // Bento stats
    bentoRoleTitle: "Trưởng bộ phận ERP",
    bentoRoleSub: "Công ty Fahasa",
    bentoExpTitle: "3+ Năm",
    bentoExpSub: "Kỹ sư thực chiến",
    bentoStackTitle: "Java & Spring",
    bentoStackSub: "Microservices & Cloud",
    bentoEduTitle: "HCMUTE",
    bentoEduSub: "Kỹ thuật phần mềm (3.2/4)",

    // About
    aboutTitle: "Giới thiệu bản thân",
    aboutSubtitle: "Kết hợp tư duy nghiệp vụ doanh nghiệp với kiến trúc phần mềm hiệu năng cao và dễ bảo trì.",
    aboutContact: "Thông tin liên hệ",
    aboutSoftSkills: "Kỹ năng cốt lõi",
    aboutLanguage: "Ngoại ngữ",
    aboutCopyEmail: "Sao chép Email",
    aboutEmailCopied: "Đã chép!",
    
    // Skills
    skillsTitle: "Thông số kỹ thuật (Tech Specs)",
    skillsSubtitle: "Công nghệ được kiểm chứng trong môi trường thực tế từ backend, cơ sở dữ liệu đến DevOps.",
    
    // Experience & Education
    experienceTitle: "Hành trình sự nghiệp",
    experienceSubtitle: "Dấu ấn phát triển qua các vị trí kỹ thuật nòng cốt và hệ thống trọng yếu.",
    
    // Projects
    projectsTitle: "Dự án tiêu biểu",
    projectsSubtitle: "Phát triển với sự chú trọng cao vào khả năng chịu tải, kiến trúc sạch và an toàn dữ liệu.",
    projectsViewLink: "Xem mã nguồn",
    projectsFeaturedBadge: "Dự án tiêu biểu",
    
    // Certificates
    certificatesTitle: "Chứng chỉ quốc tế",
    certificatesSubtitle: "Chứng nhận chuyên môn về điện toán đám mây và quản lý dự án.",
    certificatesVerify: "Xác minh chứng chỉ",
    
    // Honors & Awards
    honorsTitle: "Giải thưởng & Hoạt động",
    honorsSubtitle: "Ghi nhận thành tích học tập xuất sắc, công tác Đoàn - Hội và các phong trào học thuật.",
    honorsViewProof: "Xem minh chứng",
    
    // Footer
    footerRights: "Bảo lưu mọi quyền."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  const t = (key: keyof typeof uiTranslations['en']) => {
    return uiTranslations[language][key] || uiTranslations['en'][key] || key;
  };

  // Select dynamic data source based on current language
  const activeConstants = language === 'en' ? constantsEn : constantsVi;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        personalInfo: activeConstants.PERSONAL_INFO,
        softSkills: activeConstants.SOFT_SKILLS,
        languages: activeConstants.LANGUAGES,
        skills: activeConstants.SKILLS,
        projects: activeConstants.PROJECTS,
        experiences: activeConstants.EXPERIENCES,
        education: activeConstants.EDUCATION,
        certificates: activeConstants.CERTIFICATES,
        honorsAndAwards: activeConstants.HONORS_AND_AWARDS,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
