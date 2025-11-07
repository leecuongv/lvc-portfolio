
import { Project, SkillCategory, Experience, Education, Certificate, Honor } from './types';

export const PERSONAL_INFO = {
  name: "CƯỜNG LÊ VĂN",
  title: "Software Engineer",
  objective: "Contributing to the development and success of the company where I work & Strive to become a senior developer in the future.",
  email: "vancuongle65@gmail.com",
  phone: "+84 389 365 835",
  github: "https://github.com/leecuongv",
  linkedin: "https://linkedin.com/in/leecuongv",
  cvUrl: "#", // Placeholder for CV download link
};

export const SOFT_SKILLS = [
  "Self-study",
  "Independent work",
  "Teamwork",
  "Planning",
  "Problem solving",
];

export const LANGUAGES = [
  "VietNamese",
  "English: TOEIC 615",
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming Language/Framework",
    skills: ["Java (Java Core, Spring Framework)", "JavaScript (NodeJS, Express)"],
  },
  {
    title: "Database",
    skills: ["SQL: PostgreSQL, MSSQL, OracleDB", "NoSQL: MongoDB, Firebase"],
  },
  {
    title: "Source Control",
    skills: ["Git", "Github"],
  },
  {
    title: "Pattern",
    skills: ["Architecture: MVC, Three-tier"],
  },
  {
    title: "Testing",
    skills: ["Jmeter", "Postman"],
  },
  {
    title: "Code Analysis Tools",
    skills: ["SonarQube", "SonarCloud"],
  },
  {
    title: "DLC Model",
    skills: ["Waterfall", "Agile"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Back-end Farm Management System",
    description: "A comprehensive back-end system for managing farm operations, including crop tracking, resource management, and data analytics.",
    tags: ["Java", "Spring", "MongoDB", "RESTful API", "JWT", "Swagger", "OAuth"],
    githubUrl: "https://github.com/leecuongv/back-end-farm-managerment-system",
  },
  {
    title: "Back-end Only Examination System",
    description: "A back-end only system for managing online examinations, including user management, exam creation, and result processing.",
    tags: ["Node.js", "Express", "MongoDB", "RESTful API", "Axios"],
    githubUrl: "https://github.com/leecuongv/BE_Online_Examination_System",
  },
  {
    title: "Realtime Mark Detection",
    description: "Realtime mark detection is a python project for detecting marks in real-time using computer vision techniques.",
    tags: ["Python", "OpenCV", "TensorFlow"],
    githubUrl: "https://github.com/leecuongv/RealtimeMaskDetection",
  },
  {
    title: "Hotel Management System",
    description: "Hotel Management System is a Windows application that allows hotel staff to manage bookings, check-ins, and check-outs efficiently.",
    tags: ["Windows Forms", "C#"],
    githubUrl: "https://github.com/leecuongv/Hotel-Managerment-System",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Java Software Developer",
    company: "Fahasa",
    period: "09/2024 - Now",
    description: [
      "Developed backend services using Java and Spring Framework to build RESTful APIs, Web APIs.",
      "Utilized Object-Oriented Programming (OOP) principles and Design Patterns (Singleton, Factory) for solution design.",
      "Designed, implemented, and optimized relational databases (MySQL, PostgreSQL); proficient in writing SQL queries and applying the MVC architecture.",
      "Proactively solved problems and worked independently; utilized Docker for application containerization and deployment.",
      "Participated in diverse projects, proactively researching and adopting new technologies such as Node.js."
    ],
  },
  {
    role: "Java Software Developer",
    company: "HPT Vietnam Corporation",
    period: "10/2022 - 08/2024",
    description: [
      "Developed Java-based backend systems to handle business logic, data/document storage, and integration with other backend systems such as CoreBanking, IBM Integration Designer, Digital Signature...",
      "Analyzed business requirements documents, collaborated with business analysts to provide consulting, solution selection, and technical design.",
      "Participated in internal research activities to enhance technical skills and develop new products for future markets/projects."
    ],
  },
  {
    role: "Internship Trainee",
    company: "FPT Software",
    period: "07/2022 - 09/2022",
    description: [
        "Deepened programming skills, participated in soft skills courses to improve problem-solving abilities, teamwork skills, and presentation skills.",
        "Engaged in simulated projects to become familiar with real project environments."
    ],
  },
];

export const EDUCATION: Education[] = [
    {
        degree: "Major: Software Engineering",
        institution: "HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY AND EDUCATION",
        details: "GPA: 3.2/4"
    }
];

export const CERTIFICATES: Certificate[] = [
    {
        title: "Google Project Management",
        issuer: "Coursera",
        date: "06/2023",
        url: "https://www.credly.com/earner/earned/badge/98d01fb0-ced2-4178-8618-278d9bca35f8"
    },
    {
        title: "AWS Academy Cloud Foundations",
        issuer: "Amazon Web Services (AWS)",
        date: "09/2022",
        url: "https://www.credly.com/badges/b09871d9-9c88-4bbe-821f-6a8a96d64f5e/linked_in_profile"
    }
];

const honorsAndAwardsData: Honor[] = [
  {
    icon: 'fas fa-star',
    title: "Student with 5 Merits (School Level)",
    period: "2021",
    context:  "Student with 5 Merits (School Level) - Academic Year 2020-2021",
    proofUrl: "",
  },
  {
    icon: 'fas fa-star',
    title: "Excellent Union Member",
    period: "2021",
    context:  "Excellent Union Member - Academic Year 2020-2021",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-star',
    title: "Executive Committee Member",
    period: "2022",
    context: "Outstanding Union-Association Officer of the Faculty - 2022",
    proofUrl: "https://www.facebook.com/photo/?fbid=3386772624886535&set=a.1467109430186207",
  },
  {
    icon: 'fas fa-star',
    title: "Student with 5 Merits (School Level)",
    period: "2022",
    context: "Student with 5 Merits (School Level) - Academic Year 2021-2022",
    proofUrl: "https://www.facebook.com/photo.php?fbid=593807556107946&id=100064361214701&set=a.593813909440644",
  },
  {
    icon: 'fas fa-star',
    title: "Student with 5 Merits for three consecutive years (School Level)",
    period: "2023",
    context: "Student with 5 Merits for three consecutive years (School Level) - Academic Year 2021-2023",
    proofUrl: "https://www.facebook.com/photo.php?fbid=376776481668342&id=100080079805690&set=a.353115687367755",
  },
  {
    icon: 'fas fa-star',
    title: "Excellent Union Member",
    period: "2022",
    context:  "Excellent Union Member - Academic Year 2021-2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-star',
    title: "Outstanding Student in Association Work and Student Movements",
    period: "2022",
    context: "Outstanding Student in Association Work and Student Movements - 2021-2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-star',
    title: "Advanced Youth Following Uncle Ho's Words",
    period: "2022",
    context: "Recognized as 'Advanced Youth Following Uncle Ho's Words' - 2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-users',
    title: "Collaborator",
    period: "2021",
    context: "Outstanding Collaborator of the Faculty's Union-Association - 2021",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Leadership",
    period: "2021",
    context: "Head of 'Student with 5 Merits' Movement Development Board (07/2021)",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Volunteering",
    period: "2022",
    context: "Organizing Committee Member for academic competitions: CV Contest",
    
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Volunteering",
    period: "2021",
    context: "Organizing Committee Member for academic competitions: English Contest 2",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Volunteering",
    period: "2022",
    context: "Organizing Committee Member for academic competitions: Capture The Flag 1",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Volunteering",
    period: "2022",
    context: "Organizing Committee Member for academic competitions: Mastering IT 15",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Volunteering",
    period: "2022",
    context: "Organizing Committee Member for academic competitions: Hackathon 2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Volunteering",
    period: "2021",
    context: "Organizing Committee Member for academic competitions: beCod3r",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Volunteering",
    period: "2021",
    context:  "Volunteer for COVID-19 prevention in Ea H'leo, Dak Lak (07/2021)",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Volunteering",
    period: "2021",
    context: "Volunteer for University Entrance Exam Support Program (07/2021)",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Volunteering",
    period: "2023",
    context: "Steering Committee Member for Git & GitHub Workshop 2023",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Volunteering",
    period: "2021",
    context: "Contributed to the Faculty achieving the 'Collective of Students with 5 Merits' title (School Level) - 2020-2021",
    proofUrl: "#",
  },

  {
    icon: 'fas fa-lightbulb',
    title: "Contributions to Digital Transformation",
    period: "2022",
    context: "Supported the University's Union in developing a digital transformation propaganda application for the Youth Month launch program.",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-lightbulb',
    title: "Key Initiatives & Solutions",
    period: "2022",
    context: "Developed an experiential game for the Faculty of Information Technology's Open Day 2022.",
    proofUrl: "#",
  },
];

// Helper function to extract the latest year from a period string
const getLatestYearFromPeriod = (period: string): number => {
    const years = period.match(/\d{4}/g);
    if (years) {
        return Math.max(...years.map(Number));
    }
    return 0; // Default year if none found
};

// Sort the array in-place from newest to oldest
honorsAndAwardsData.sort((a, b) => {
    const yearB = getLatestYearFromPeriod(b.period);
    const yearA = getLatestYearFromPeriod(a.period);
    return yearB - yearA;
});

export const HONORS_AND_AWARDS: Honor[] = honorsAndAwardsData;
