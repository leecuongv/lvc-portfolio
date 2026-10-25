
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
    title: "Smart Farm Management Platform (Backend)",
    description: "Distributed backend architecture engineered to manage end-to-end farm operations, featuring crop telemetry tracking, automated resource allocation, and real-time data analytics.",
    tags: ["Java", "Spring", "MongoDB", "RESTful API", "JWT", "Swagger", "OAuth"],
    githubUrl: "https://github.com/leecuongv/back-end-farm-managerment-system",
  },
  {
    title: "Centralized Online Examination Platform (Backend)",
    description: "Dedicated backend engine for managing online testing and certifications, featuring role-based access control, automated exam generation, and tamper-resistant result evaluation.",
    tags: ["Node.js", "Express", "MongoDB", "RESTful API", "Axios"],
    githubUrl: "https://github.com/leecuongv/BE_Online_Examination_System",
  },
  {
    title: "Realtime Mask Detection System",
    description: "High-accuracy computer vision application utilizing Deep Learning models to detect and alert facial mask compliance in real time with minimal latency.",
    tags: ["Python", "OpenCV", "TensorFlow"],
    githubUrl: "https://github.com/leecuongv/RealtimeMaskDetection",
  },
  {
    title: "Hotel Management & Operations System",
    description: "Comprehensive desktop software streamlining hotel operations: room inventory management, fast check-in/out workflows, and automated revenue reporting.",
    tags: ["Windows Forms", "C#"],
    githubUrl: "https://github.com/leecuongv/Hotel-Managerment-System",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Head of ERP Department",
    company: "Ho Chi Minh City Book Distribution Corporation - FAHASA",
    period: "09/2024 - Now",
    technologies: ["Java", "Spring Boot", "Redis", "MySQL", "PostgreSQL", "Docker", "ERP Architecture", "Agile/Scrum", "SonarQube"],
    description: [
      "Lead and manage the ERP software engineering team; direct Agile/Scrum sprint planning, resource allocation, story estimation, and code reviews.",
      "Architect and engineer high-throughput backend services using Java and Spring Boot, establishing reliable RESTful APIs and mission-critical enterprise integrations.",
      "Implement distributed Redis caching layers (session storage, product catalog caching, distributed locking) to elevate throughput and safeguard relational databases during retail peak events.",
      "Design, standardize, and optimize relational database architectures (MySQL, PostgreSQL), ensuring ACID compliance, indexing efficiency, and seamless data partitioning.",
      "Serve as primary technical partner to cross-functional stakeholders (Retail POS, Warehouse WMS, Finance) to streamline business processes and deliver scalable software solutions.",
      "Standardize Docker containerized environments, establish automated CI/CD deployment pipelines, and enforce strict code quality metrics via SonarQube."
    ],
  },
  {
    role: "Java Backend Software Engineer",
    company: "HPT Vietnam Corporation",
    period: "10/2022 - 08/2024",
    technologies: ["Java Core", "Enterprise Backend", "CoreBanking Integration", "Digital Signature", "IBM Integration Designer", "Oracle DB"],
    description: [
      "Engineered mission-critical Java enterprise backend services, implementing banking business logic, secure document management, and integrations with CoreBanking, IBM Integration Designer, and Digital Signatures.",
      "Analyzed Business Requirement Documents (BRDs) and partnered with Business Analysts (BAs) to architect robust, scalable technical solutions.",
      "Spearheaded internal R&D initiatives to evaluate emerging technologies and build high-potential solutions for client delivery."
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "FPT Software",
    period: "07/2022 - 09/2022",
    technologies: ["Java", "OOP", "Data Structures", "Git", "Agile Fundamentals"],
    description: [
      "Completed rigorous software engineering immersion, practicing Agile/Scrum development methodologies, collaborative workflows, and technical problem-solving.",
      "Built enterprise-simulated projects adhering to strict OOP design principles, clean code standards, and Git version control best practices."
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
    title: "Student with 5 Merits (University Level)",
    period: "2021",
    context: "Awarded 'Student with 5 Merits' Distinction (University Level) - Academic Year 2020-2021",
    proofUrl: "",
  },
  {
    icon: 'fas fa-star',
    title: "Outstanding Youth Union Member",
    period: "2021",
    context: "Commended as Outstanding Youth Union Member - Academic Year 2020-2021",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-award',
    title: "Faculty Student Union Executive Committee Member",
    period: "2022",
    context: "Exemplary Faculty Student Union Officer recognized for exceptional leadership - 2022",
    proofUrl: "https://www.facebook.com/photo/?fbid=3386772624886535&set=a.1467109430186207",
  },
  {
    icon: 'fas fa-star',
    title: "Student with 5 Merits (University Level)",
    period: "2022",
    context: "Awarded 'Student with 5 Merits' Distinction (University Level) - Academic Year 2021-2022",
    proofUrl: "https://www.facebook.com/photo.php?fbid=593807556107946&id=100064361214701&set=a.593813909440644",
  },
  {
    icon: 'fas fa-star',
    title: "Student with 5 Merits for 3 Consecutive Years",
    period: "2023",
    context: "Honored with 'Student with 5 Merits' for 3 Consecutive Years (University Level) - 2020-2023",
    proofUrl: "https://www.facebook.com/photo.php?fbid=376776481668342&id=100080079805690&set=a.353115687367755",
  },
  {
    icon: 'fas fa-star',
    title: "Outstanding Youth Union Member",
    period: "2022",
    context: "Commended as Outstanding Youth Union Member - Academic Year 2021-2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-medal',
    title: "Exemplary Student in Union Movements",
    period: "2022",
    context: "Commendation for Exemplary Contributions to Student Association & Campus Movements - 2021-2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-certificate',
    title: "Advanced Youth Exemplar Following Uncle Ho's Teachings",
    period: "2022",
    context: "University-level Recognition as 'Advanced Youth Exemplar' - 2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-user-check',
    title: "Outstanding Student Union Collaborator",
    period: "2021",
    context: "Recognized as Outstanding Collaborator of the Faculty's Student Union - 2021",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-users-gear',
    title: "Head of 'Student with 5 Merits' Movement Committee",
    period: "2021",
    context: "Head of Movement Development Committee for 'Student with 5 Merits' (07/2021)",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-laptop-code',
    title: "CV Contest Organizing Committee",
    period: "2022",
    context: "Organizing Committee Member for Academic CV Writing & Professional Interview Contest",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-language',
    title: "English Contest Organizing Committee",
    period: "2021",
    context: "Organizing Committee Member for Campus-Wide Academic English Competition",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-shield-halved',
    title: "Capture The Flag (CTF) Organizing Committee",
    period: "2022",
    context: "Organizing Committee Member for Cybersecurity Capture The Flag Competition",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-graduation-cap',
    title: "Mastering IT Academic Contest Organizing Committee",
    period: "2022",
    context: "Organizing Committee Member for the 15th Annual IT Mastery Academic Contest",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-code',
    title: "Hackathon Organizing Committee",
    period: "2022",
    context: "Organizing Committee Member for IT Faculty Innovation Hackathon 2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-terminal',
    title: "beCod3r Programming Contest Organizing Committee",
    period: "2021",
    context: "Organizing Committee Member for beCod3r Competitive Algorithmic Programming Contest",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hand-holding-heart',
    title: "Frontline COVID-19 Prevention Volunteer",
    period: "2021",
    context: "Frontline volunteer dedicated to pandemic prevention & community support in Ea H'leo, Dak Lak (07/2021)",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "University Entrance Exam Support Volunteer",
    period: "2021",
    context: "Volunteer assisting national university examination candidates and families (07/2021)",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-code-branch',
    title: "Git & GitHub Workshop Steering Committee",
    period: "2023",
    context: "Steering Committee Member organizing practical Git & GitHub developer workshops",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-trophy',
    title: "Contribution to 'Collective of Students with 5 Merits'",
    period: "2021",
    context: "Active contributor leading Faculty to achieve the University-level 'Collective of Students with 5 Merits' (2020-2021)",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-lightbulb',
    title: "Digital Transformation Campaign Software Initiative",
    period: "2022",
    context: "Engineered digital transformation awareness application supporting University Youth Month campaign",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-gamepad',
    title: "Interactive Tech Solution for IT Faculty Open Day",
    period: "2022",
    context: "Developed interactive technology showcase software for the Faculty of IT Open Day 2022",
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
