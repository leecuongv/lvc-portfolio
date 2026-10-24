import React, { createContext, useContext, useState, useEffect } from 'react';
import * as constantsEn from './constants';
import * as constantsVi from './constants_vi';
import { Project, SkillCategory, Experience, Education, Certificate, Honor, PersonalInfo } from './types';

export type Language = 'en' | 'vi';

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
    ribbonText: "Now leading ERP engineering at FAHASA · Building resilient enterprise backends",
    ribbonAction: "Explore Career",

    // Hero
    heroHello: "Hello, I'm",
    heroRoleBadge: "Software Engineer · Head of ERP",
    heroTagline: "Architecting backend resilience. Engineered for enterprise scale.",
    heroViewWork: "Explore Projects",
    heroDownloadCv: "Download CV",
    heroContactMe: "Get in touch",
    heroOpenToWork: "Open to Senior Backend Roles",

    // Hero Spec Sheet
    heroSpecHeader: "SYSTEM ARCHITECTURE & CORE SPEC",
    heroSpecPosTitle: "Current Position",
    heroSpecPosRole: "Head of ERP Department",
    heroSpecPosCompany: "Ho Chi Minh City Book Distribution Corporation - FAHASA",
    heroSpecFrameworksTitle: "Core Frameworks",
    heroSpecFrameworksSub: "REST APIs, MVC, Microservices",
    heroSpecDbTitle: "Database & Caching",
    heroSpecEduTitle: "Education & Honors",
    heroSpecEduDegree: "HCMUTE (GPA 3.2/4)",
    heroSpecEduAward: "3x Student with 5 Merits",

    // Bento stats
    bentoRoleTitle: "Head of ERP",
    bentoRoleSub: "Ho Chi Minh City Book Distribution Corporation - FAHASA",
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
    aboutCopyPhone: "Copy Phone",
    aboutPhoneCopied: "Copied!",
    aboutOpenRole: "Open to full-time, high-impact engineering roles",
    aboutLocation: "Based in Ho Chi Minh City, Vietnam",
    aboutFluent: "Fluent",
    
    // Skills
    skillsTitle: "Technical Specifications",
    skillsSubtitle: "A battle-tested stack spanning distributed backend engines, cloud databases, and DevOps automation.",
    skillsEyebrow: "ARCHITECTURE & CAPABILITIES",
    skillsProductionReady: "Production Ready",
    skillsVerified: "Verified",
    
    // Experience & Education
    experienceTitle: "Career Milestones",
    experienceSubtitle: "Track record of technical leadership, enterprise integrations, and mission-critical systems.",
    expEyebrow: "CAREER ROADMAP",
    expCurrentRole: "Current Role",
    expAcademicFoundation: "Academic Foundation",
    expCoreTech: "Core Technologies",
    
    // Projects
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Engineered from the ground up with focus on high concurrency, clean architecture, and data integrity.",
    projectsViewLink: "View Repository",
    projectsFeaturedBadge: "Flagship Architecture",
    flagshipCodePreview: "Architecture & Controller API",
    
    // Certificates
    certificatesTitle: "Certifications",
    certificatesSubtitle: "Industry-standard cloud and project management credentials.",
    certificatesVerify: "Verify Credential",
    certEyebrow: "ACCREDITATIONS & CLOUD",
    certVerified: "Verified Credential",
    
    // Honors & Awards
    honorsTitle: "Honors & Recognition",
    honorsSubtitle: "Academic excellence, community leadership, and competitive distinctions.",
    honorsViewProof: "View Proof",
    honorsEyebrow: "RECOGNITION & IMPACT",
    honorsVerified: "Verified Activity",
    honorsOfficial: "Official Award",
    
    // Footer
    footerNote1: "1. Experience highlights include enterprise ERP implementations at Ho Chi Minh City Book Distribution Corporation - FAHASA, CoreBanking and backend service integration at HPT Vietnam, and simulated agile training at FPT Software.",
    footerNote2: "2. All certificates and academic distinctions are independently verifiable via Credly and official institutional records.",
    footerNav: "Navigation",
    footerCapabilities: "Capabilities",
    footerConnect: "Connect",
    footerLangRegion: "Language & Region",
    footerDirectEmail: "Direct Email",
    footerCity: "Vietnam · Ho Chi Minh City",
    footerBackToTop: "Back to top",
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
    ribbonText: "Hiện đang là Trưởng bộ phận ERP tại FAHASA · Xây dựng hệ thống backend doanh nghiệp",
    ribbonAction: "Xem sự nghiệp",

    // Hero
    heroHello: "Xin chào, tôi là",
    heroRoleBadge: "Kỹ sư Phần mềm · Trưởng bộ phận ERP",
    heroTagline: "Kiến trúc hệ thống bền vững. Thiết kế cho quy mô doanh nghiệp.",
    heroViewWork: "Xem dự án",
    heroDownloadCv: "Tải CV",
    heroContactMe: "Liên hệ ngay",
    heroOpenToWork: "Sẵn sàng cho cơ hội Senior Backend",

    // Hero Spec Sheet
    heroSpecHeader: "KIẾN TRÚC HỆ THỐNG & THÔNG SỐ CỐT LÕI",
    heroSpecPosTitle: "Vị trí hiện tại",
    heroSpecPosRole: "Trưởng bộ phận ERP",
    heroSpecPosCompany: "Công ty Cổ phần Phát hành sách Thành phố Hồ Chí Minh - FAHASA",
    heroSpecFrameworksTitle: "Khung công nghệ chính",
    heroSpecFrameworksSub: "REST API, MVC, Microservices",
    heroSpecDbTitle: "Cơ sở dữ liệu & Caching",
    heroSpecEduTitle: "Học vấn & Thành tích",
    heroSpecEduDegree: "ĐH SPKT TP.HCM (GPA 3.2/4)",
    heroSpecEduAward: "3 Năm liền Sinh viên 5 Tốt",

    // Bento stats
    bentoRoleTitle: "Trưởng bộ phận ERP",
    bentoRoleSub: "Công ty Cổ phần Phát hành sách Thành phố Hồ Chí Minh - FAHASA",
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
    aboutCopyPhone: "Sao chép số",
    aboutPhoneCopied: "Đã chép!",
    aboutOpenRole: "Sẵn sàng cho các cơ hội kỹ thuật toàn thời gian và tạo tác động lớn",
    aboutLocation: "Sinh sống & làm việc tại TP. Hồ Chí Minh, Việt Nam",
    aboutFluent: "Thành thạo",
    
    // Skills
    skillsTitle: "Thông số kỹ thuật (Tech Specs)",
    skillsSubtitle: "Công nghệ được kiểm chứng trong môi trường thực tế từ backend, cơ sở dữ liệu đến DevOps.",
    skillsEyebrow: "KIẾN TRÚC & NĂNG LỰC",
    skillsProductionReady: "Sẵn sàng Production",
    skillsVerified: "Đã xác thực",
    
    // Experience & Education
    experienceTitle: "Hành trình sự nghiệp",
    experienceSubtitle: "Dấu ấn phát triển qua các vị trí kỹ thuật nòng cốt và hệ thống trọng yếu.",
    expEyebrow: "LỘ TRÌNH SỰ NGHIỆP",
    expCurrentRole: "Vị trí hiện tại",
    expAcademicFoundation: "Nền tảng học thuật",
    expCoreTech: "Công nghệ cốt lõi",
    
    // Projects
    projectsTitle: "Dự án tiêu biểu",
    projectsSubtitle: "Phát triển với sự chú trọng cao vào khả năng chịu tải, kiến trúc sạch và an toàn dữ liệu.",
    projectsViewLink: "Xem mã nguồn",
    projectsFeaturedBadge: "Dự án tiêu biểu",
    flagshipCodePreview: "Kiến trúc Backend & API Controller",
    
    // Certificates
    certificatesTitle: "Chứng chỉ quốc tế",
    certificatesSubtitle: "Chứng nhận chuyên môn về điện toán đám mây và quản lý dự án.",
    certificatesVerify: "Xác minh chứng chỉ",
    certEyebrow: "CHỨNG NHẬN & ĐIỆN TOÁN ĐÁM MÂY",
    certVerified: "Chứng chỉ đã xác thực",
    
    // Honors & Awards
    honorsTitle: "Giải thưởng & Hoạt động",
    honorsSubtitle: "Ghi nhận thành tích học tập xuất sắc, công tác Đoàn - Hội và các phong trào học thuật.",
    honorsViewProof: "Xem minh chứng",
    honorsEyebrow: "THÀNH TÍCH & ĐÓNG GÓP",
    honorsVerified: "Hoạt động đã xác nhận",
    honorsOfficial: "Giải thưởng chính thức",
    
    // Footer
    footerNote1: "1. Dấu ấn kinh nghiệm bao gồm triển khai hệ thống ERP doanh nghiệp tại Công ty Cổ phần Phát hành sách Thành phố Hồ Chí Minh - FAHASA, tích hợp dịch vụ backend & CoreBanking tại HPT Vietnam, và mô hình Agile tại FPT Software.",
    footerNote2: "2. Mọi chứng chỉ chuyên môn và danh hiệu học thuật đều có thể xác minh độc lập qua hệ thống Credly và hồ sơ chính thức của nhà trường.",
    footerNav: "Điều hướng",
    footerCapabilities: "Năng lực chuyên môn",
    footerConnect: "Kết nối",
    footerLangRegion: "Ngôn ngữ & Khu vực",
    footerDirectEmail: "Email trực tiếp",
    footerCity: "Việt Nam · TP. Hồ Chí Minh",
    footerBackToTop: "Về đầu trang",
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
    document.title = language === 'en'
      ? 'Lê Văn Cường — Software Engineer & Head of ERP'
      : 'Lê Văn Cường — Kỹ sư Phần mềm & Trưởng bộ phận ERP';
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
