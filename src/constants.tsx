
import { Project, SkillCategory, Experience, Education, Certificate, Honor } from './types';

export const PERSONAL_INFO = {
  name: "LÊ VĂN CƯỜNG",
  title: "Software Engineer",
  objective: "Dedicated Software Engineer & Head of ERP with proven expertise in architecting high-throughput Java/Spring enterprise backends, distributed caching, and leading cross-functional engineering teams. Passionate about driving business growth through robust system design and advancing toward Solution Architect",
  email: "cuonglevan.work@gmail.com",
  phone: "+84 389 365 835",
  github: "https://github.com/leecuongv",
  linkedin: "https://linkedin.com/in/leecuongv",
  cvUrl: "#", // Placeholder for CV download link
};

export const SOFT_SKILLS = [
  "Engineering Team Leadership & Mentoring",
  "ERP Business Process Analysis & Optimization",
  "Agile / Scrum Sprint Planning & Estimation",
  "Cross-Functional Stakeholder Collaboration",
  "Technical Solution Architecture & Consulting",
  "Risk Management & Production Incident Response",
  "Data-Driven Decision Making & Problem Solving",
];

export const LANGUAGES = [
  "Vietnamese",
  "English: TOEIC 615",
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Backend & Programming Frameworks",
    skills: [
      "Java (Java Core, Spring Framework, Spring Boot)",
      "NodeJS & Express",
      "Object-Oriented Programming (OOP) & Clean Architecture",
      "RESTful API & Web API Development",
    ],
  },
  {
    title: "Database & Caching Technologies",
    skills: [
      "Redis (Distributed Caching, Pub/Sub, Session Store, Distributed Lock)",
      "SQL Engines: PostgreSQL, MySQL, MSSQL, OracleDB",
      "NoSQL Engines: MongoDB, Firebase",
      "Database Optimization: Query Tuning, Indexing & ACID Transactions",
    ],
  },
  {
    title: "Enterprise ERP & System Integration",
    skills: [
      "Enterprise Integration: CoreBanking, POS, WMS, Digital Signature & E-Invoice",
      "API Architecture: OpenAPI / Swagger, Webhooks, Message Brokers",
      "System Architecture: MVC, Three-tier, Modular Monolith & Microservices",
      "Third-Party Service Integration & Data Transformation",
    ],
  },
  {
    title: "Team Leadership & Engineering Management",
    skills: [
      "Technical Team Leadership, Mentoring & Capacity Building",
      "Sprint Planning, WBS Task Decomposition & Effort Estimation",
      "Code Review, Technical Standards & CI/CD Quality Gates",
      "Cross-Functional Stakeholder Collaboration & Solution Consulting",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      "Docker & Containerization, Docker Compose",
      "Version Control: Git, GitHub, Gitflow Workflow",
      "CI/CD Pipelines, Server Deployment & Environment Setup",
    ],
  },
  {
    title: "Testing & Code Quality",
    skills: [
      "Static Code Analysis: SonarQube, SonarCloud",
      "API Testing & Automation: Postman, Newman",
      "Performance & Load Testing: Apache JMeter",
    ],
  },
  {
    title: "Software Development Lifecycle (SDLC)",
    skills: [
      "Agile (Scrum / Kanban)",
      "Waterfall & Hybrid Project Delivery",
      "Business Requirements Analysis & System Specification",
    ],
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
    title: "Realtime Mask Detection",
    description: "Realtime mask detection is a Python project for detecting masks in real-time using computer vision techniques.",
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
    role: "Head of ERP Department",
    company: "Fahasa",
    period: "09/2024 - Now",
    technologies: ["Java", "Spring Boot", "Redis", "MySQL", "PostgreSQL", "Docker", "ERP Architecture", "Agile/Scrum", "SonarQube"],
    description: [
      "Lead and manage the ERP engineering team; facilitate Agile/Scrum sprint planning, task delegation, backlog grooming, and technical code reviews.",
      "Architect backend enterprise services using Java and Spring Boot, building high-throughput RESTful APIs and reliable system integrations.",
      "Implement Redis distributed caching layers (session storage, master data caching, distributed locks) to boost performance and reduce database load during peak retail traffic.",
      "Design, maintain, and optimize relational databases (MySQL, PostgreSQL) ensuring data consistency, indexing efficiency, and ACID transactions.",
      "Collaborate directly with cross-functional stakeholders (Retail POS, Warehouse WMS, Finance) to analyze business workflows and deliver scalable technical solutions.",
      "Deploy services with Docker, establish automated CI/CD workflows, and enforce strict code quality standards via SonarQube."
    ],
  },
  {
    role: "Java Software Developer",
    company: "HPT Vietnam Corporation",
    period: "10/2022 - 08/2024",
    technologies: ["Java Core", "Enterprise Backend", "CoreBanking Integration", "Digital Signature", "IBM Integration Designer", "Oracle DB"],
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
    technologies: ["Java", "OOP", "Data Structures", "Git", "Agile Fundamentals"],
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
