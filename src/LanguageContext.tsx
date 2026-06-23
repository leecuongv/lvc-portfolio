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
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navExperience: "Experience",
    navProjects: "Projects",
    navCertificates: "Certificates",
    navHonorsAwards: "Honors & Awards",
    
    // Hero
    heroHello: "Hello, I'm",
    heroViewWork: "View My Work",
    heroDownloadCv: "Download CV",
    
    // About
    aboutTitle: "About Me",
    aboutContact: "Contact",
    aboutSoftSkills: "Soft Skills",
    aboutLanguage: "Languages",
    
    // Skills
    skillsTitle: "Technical Skills",
    
    // Experience & Education
    experienceTitle: "Experience & Education",
    
    // Projects
    projectsTitle: "Personal Projects",
    projectsViewLink: "View Project",
    
    // Certificates
    certificatesTitle: "Certificates",
    certificatesVerify: "Verify Certificate",
    
    // Honors & Awards
    honorsTitle: "Honors & Awards",
    honorsViewProof: "View Proof",
    
    // Footer
    footerRights: "All rights reserved."
  },
  vi: {
    // Header & Navigation
    navHome: "Trang chủ",
    navAbout: "Giới thiệu",
    navSkills: "Kỹ năng",
    navExperience: "Kinh nghiệm",
    navProjects: "Dự án",
    navCertificates: "Chứng chỉ",
    navHonorsAwards: "Giải thưởng & Hoạt động",
    
    // Hero
    heroHello: "Xin chào, tôi là",
    heroViewWork: "Xem dự án",
    heroDownloadCv: "Tải CV",
    
    // About
    aboutTitle: "Giới thiệu bản thân",
    aboutContact: "Liên hệ",
    aboutSoftSkills: "Kỹ năng mềm",
    aboutLanguage: "Ngoại ngữ",
    
    // Skills
    skillsTitle: "Kỹ năng chuyên môn",
    
    // Experience & Education
    experienceTitle: "Kinh nghiệm & Học văn",
    
    // Projects
    projectsTitle: "Dự án cá nhân",
    projectsViewLink: "Xem dự án",
    
    // Certificates
    certificatesTitle: "Chứng chỉ",
    certificatesVerify: "Xác minh chứng chỉ",
    
    // Honors & Awards
    honorsTitle: "Giải thưởng & Hoạt động",
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
