import { Project, SkillCategory, Experience, Education, Certificate, Honor } from './types';

export const PERSONAL_INFO = {
  name: "LÊ VĂN CƯỜNG",
  title: "Kỹ sư Phần mềm",
  objective: "Kỹ sư Phần mềm & Trưởng bộ phận ERP với hơn 4 năm kinh nghiệm chuyên sâu trong thiết kế kiến trúc hệ thống backend Java/Spring Boot hiệu năng cao, tích hợp hệ sinh thái phân tán và lãnh đạo đội ngũ kỹ thuật. Kiên định với mục tiêu kiến tạo các giải pháp chuyển đổi số toàn diện, tối ưu hóa năng suất vận hành doanh nghiệp và phát triển lên vị trí Kiến trúc sư Giải pháp (Solution Architect).",
  email: "cuonglevan.work@gmail.com",
  phone: "+84 389 365 835",
  github: "https://github.com/leecuongv",
  linkedin: "https://linkedin.com/in/leecuongv",
  cvUrl: "#", // Placeholder for CV download link
};

export const SOFT_SKILLS = [
  "Lãnh đạo & Hướng dẫn phát triển đội ngũ (Team Leadership & Mentoring)",
  "Phân tích & Tối ưu hóa quy trình nghiệp vụ ERP",
  "Quản trị dự án Agile / Scrum & Phân rã tiến độ (Sprint Planning & WBS)",
  "Giao tiếp & Kết nối đa phòng ban (Stakeholder Management)",
  "Thiết kế kiến trúc giải pháp kỹ thuật (Solution Architecture)",
  "Quản trị rủi ro & Xử lý sự cố vận hành (Incident Management & SLA)",
  "Giải quyết vấn đề phức tạp & Ra quyết định dựa trên dữ liệu",
];

export const LANGUAGES = [
  "Tiếng Việt",
  "Tiếng Anh: TOEIC 615",
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Ngôn ngữ lập trình & Framework Backend",
    skills: [
      "Java (Java Core, Spring Framework, Spring Boot)",
      "NodeJS & Express",
      "Lập trình hướng đối tượng (OOP) & Clean Architecture",
      "Phát triển RESTful API & Web API",
    ],
  },
  {
    title: "Cơ sở dữ liệu & Công nghệ Caching",
    skills: [
      "Redis (Distributed Caching, Pub/Sub, Quản lý Session, Distributed Lock)",
      "Hệ CSDL quan hệ: PostgreSQL, MySQL, MSSQL, OracleDB",
      "Hệ CSDL NoSQL: MongoDB, Firebase",
      "Tối ưu hóa CSDL: Tối ưu truy vấn, Indexing & Đảm bảo tính toàn vẹn ACID",
    ],
  },
  {
    title: "Hệ thống ERP & Tích hợp Doanh nghiệp",
    skills: [
      "Tích hợp hệ sinh thái ERP: CoreBanking, POS, WMS, Chữ ký số & Hóa đơn điện tử",
      "Kiến trúc API: OpenAPI / Swagger, Webhooks, Message Brokers",
      "Kiến trúc hệ thống: MVC, Ba lớp (Three-tier), Modular Monolith & Microservices",
      "Tích hợp dịch vụ bên thứ ba & Chuẩn hóa luồng dữ liệu",
    ],
  },
  {
    title: "Quản lý đội ngũ & Quản trị kỹ thuật (Leadership)",
    skills: [
      "Lãnh đạo kỹ thuật, Đào tạo & Phát triển năng lực thành viên (Mentoring)",
      "Lập kế hoạch Sprint, Phân rã công việc (WBS) & Ước lượng độ phức tạp",
      "Duyệt mã nguồn (Code Review), Chuẩn hóa tiêu chuẩn chất lượng kỹ thuật",
      "Phối hợp liên phòng ban & Tư vấn giải pháp kỹ thuật cho Ban Giám đốc",
    ],
  },
  {
    title: "DevOps & Hạ tầng triển khai",
    skills: [
      "Docker & Đóng gói ứng dụng (Containerization), Docker Compose",
      "Quản lý mã nguồn: Git, GitHub, Quy trình phân nhánh Gitflow",
      "Quy trình CI/CD, Triển khai máy chủ & Thiết lập môi trường",
    ],
  },
  {
    title: "Kiểm thử & Đảm bảo chất lượng mã nguồn",
    skills: [
      "Phân tích mã nguồn tĩnh: SonarQube, SonarCloud",
      "Kiểm thử API & Tự động hóa: Postman, Newman",
      "Kiểm thử tải & Hiệu năng: Apache JMeter",
    ],
  },
  {
    title: "Mô hình phát triển phần mềm (SDLC)",
    skills: [
      "Agile (Scrum / Kanban)",
      "Waterfall (Thác nước) & Mô hình kết hợp",
      "Phân tích yêu cầu nghiệp vụ & Viết tài liệu đặc tả kỹ thuật",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Hệ thống Quản lý Nông nghiệp Thông minh (Backend)",
    description: "Hệ thống kiến trúc phân tán phục vụ quản lý toàn diện hoạt động nông nghiệp quy mô lớn: giám sát chu kỳ cây trồng, điều phối tài nguyên và phân tích dữ liệu cảm biến thời gian thực.",
    tags: ["Java", "Spring", "MongoDB", "RESTful API", "JWT", "Swagger", "OAuth"],
    githubUrl: "https://github.com/leecuongv/back-end-farm-managerment-system",
  },
  {
    title: "Nền tảng Khảo thí & Thi trực tuyến Tập trung (Backend)",
    description: "Giải pháp backend chuyên biệt phục vụ tổ chức và điều hành thi cử trực tuyến: quản trị người dùng phân quyền, tự động hóa tạo đề thi và xử lý kết quả bảo mật cao.",
    tags: ["Node.js", "Express", "MongoDB", "RESTful API", "Axios"],
    githubUrl: "https://github.com/leecuongv/BE_Online_Examination_System",
  },
  {
    title: "Hệ thống Nhận diện Khẩu trang Thời gian thực",
    description: "Ứng dụng thị giác máy tính (Computer Vision) kết hợp mô hình học sâu (Deep Learning) nhằm phát hiện và cảnh báo việc tuân thủ đeo khẩu trang theo thời gian thực với độ chính xác cao.",
    tags: ["Python", "OpenCV", "TensorFlow"],
    githubUrl: "https://github.com/leecuongv/RealtimeMaskDetection",
  },
  {
    title: "Phần mềm Quản lý Nghiệp vụ Khách sạn",
    description: "Ứng dụng máy tính (Desktop Application) hỗ trợ số hóa và tối ưu quy trình vận hành khách sạn: quản lý tình trạng buồng phòng, xử lý đặt/nhận/trả phòng và báo cáo doanh thu.",
    tags: ["Windows Forms", "C#"],
    githubUrl: "https://github.com/leecuongv/Hotel-Managerment-System",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Trưởng bộ phận ERP",
    company: "Công ty Cổ phần Phát hành sách Thành phố Hồ Chí Minh - FAHASA",
    period: "09/2024 - Hiện tại",
    technologies: ["Java", "Spring Boot", "Redis", "MySQL", "PostgreSQL", "Docker", "ERP Architecture", "Agile/Scrum", "SonarQube"],
    description: [
      "Quản lý và dẫn dắt đội ngũ kỹ sư phần mềm ERP; chủ trì hoạch định tiến độ Sprint (Agile/Scrum), phân bổ nguồn lực, đánh giá độ phức tạp và bảo đảm chất lượng mã nguồn (Code Review).",
      "Thiết kế kiến trúc và phát triển các dịch vụ backend cốt lõi bằng Java và Spring Boot, xây dựng các RESTful API và luồng tích hợp dữ liệu ổn định, hiệu năng cao.",
      "Thiết lập tầng bộ nhớ đệm phân tán Redis (quản lý session, cache danh mục sản phẩm, khóa phân tán), gia tăng tốc độ phản hồi và bảo vệ cơ sở dữ liệu trong các đợt cao điểm bán lẻ.",
      "Quy hoạch, chuẩn hóa và tối ưu hóa hệ quản trị cơ sở dữ liệu quan hệ (MySQL, PostgreSQL), bảo đảm tính toàn vẹn giao dịch (ACID), hiệu năng lập chỉ mục (indexing) và phân vùng dữ liệu.",
      "Đóng vai trò cầu nối kỹ thuật với các khối phòng ban (Bán lẻ POS, Chuỗi cung ứng WMS, Kế toán - Tài chính) nhằm chuẩn hóa luồng nghiệp vụ và chuyển giao các giải pháp phần mềm tối ưu.",
      "Tiêu chuẩn hóa quy trình đóng gói ứng dụng qua Docker, thiết lập luồng tự động hóa CI/CD và kiểm soát chất lượng mã nguồn nghiêm ngặt bằng SonarQube."
    ],
  },
  {
    role: "Kỹ sư Phần mềm Java (Backend Developer)",
    company: "HPT Vietnam Corporation",
    period: "10/2022 - 08/2024",
    technologies: ["Java Core", "Enterprise Backend", "CoreBanking Integration", "Digital Signature", "IBM Integration Designer", "Oracle DB"],
    description: [
      "Thiết kế và phát triển các hệ thống backend trọng yếu bằng Java, xử lý logic nghiệp vụ tài chính - ngân hàng phức tạp, lưu trữ tài liệu bảo mật và tích hợp với các hệ thống backend như CoreBanking, IBM Integration Designer, chữ ký số.",
      "Phân tích tài liệu đặc tả yêu cầu nghiệp vụ (BRD), phối hợp chặt chẽ cùng Chuyên viên phân tích nghiệp vụ (BA) để tư vấn kiến trúc kỹ thuật và lựa chọn giải pháp tối ưu.",
      "Chủ động tham gia hoạt động nghiên cứu & phát triển (R&D) nội bộ nhằm nâng cao tiêu chuẩn kỹ thuật, tối ưu hóa hiệu năng và đón đầu xu hướng công nghệ mới."
    ],
  },
  {
    role: "Thực tập sinh Kỹ thuật Phần mềm",
    company: "FPT Software",
    period: "07/2022 - 09/2022",
    technologies: ["Java", "OOP", "Data Structures", "Git", "Agile Fundamentals"],
    description: [
      "Hoàn thành xuất sắc chương trình đào tạo lập trình viên chuyên sâu, rèn luyện quy trình phát triển phần mềm chuẩn Agile/Scrum, kỹ năng cộng tác nhóm và giải quyết vấn đề kỹ thuật.",
      "Trực tiếp tham gia triển khai các dự án mô phỏng quy mô doanh nghiệp, rèn luyện tư duy lập trình hướng đối tượng (OOP) và tuân thủ quy chuẩn quản lý mã nguồn qua Git."
    ],
  },
];

export const EDUCATION: Education[] = [
    {
        degree: "Chuyên ngành: Kỹ thuật Phần mềm",
        institution: "TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT THÀNH PHỐ HỒ CHÍ MINH",
        details: "GPA: 3.2/4"
    }
];

export const CERTIFICATES: Certificate[] = [
    {
        title: "Quản lý Dự án Google",
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
    title: "Danh hiệu Sinh viên 5 Tốt (Cấp Trường)",
    period: "2021",
    context: "Đạt danh hiệu Sinh viên 5 Tốt Cấp Trường - Năm học 2020-2021",
    proofUrl: "",
  },
  {
    icon: 'fas fa-star',
    title: "Danh hiệu Đoàn viên Ưu tú",
    period: "2021",
    context: "Đoàn viên Ưu tú Đoàn TNCS Hồ Chí Minh - Năm học 2020-2021",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-award',
    title: "Ủy viên Ban Chấp hành Liên chi hội Khoa",
    period: "2022",
    context: "Cán bộ Đoàn - Hội tiêu biểu có thành tích xuất sắc cấp Khoa - 2022",
    proofUrl: "https://www.facebook.com/photo/?fbid=3386772624886535&set=a.1467109430186207",
  },
  {
    icon: 'fas fa-star',
    title: "Danh hiệu Sinh viên 5 Tốt (Cấp Trường)",
    period: "2022",
    context: "Đạt danh hiệu Sinh viên 5 Tốt Cấp Trường - Năm học 2021-2022",
    proofUrl: "https://www.facebook.com/photo.php?fbid=593807556107946&id=100064361214701&set=a.593813909440644",
  },
  {
    icon: 'fas fa-star',
    title: "Sinh viên 5 Tốt 3 năm liên tiếp (Cấp Trường)",
    period: "2023",
    context: "Đạt danh hiệu Sinh viên 5 Tốt 3 năm liên tiếp Cấp Trường - Giai đoạn 2020-2023",
    proofUrl: "https://www.facebook.com/photo.php?fbid=376776481668342&id=100080079805690&set=a.353115687367755",
  },
  {
    icon: 'fas fa-star',
    title: "Danh hiệu Đoàn viên Ưu tú",
    period: "2022",
    context: "Đoàn viên Ưu tú Đoàn TNCS Hồ Chí Minh - Năm học 2021-2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-medal',
    title: "Sinh viên tiêu biểu trong công tác Hội & phong trào sinh viên",
    period: "2022",
    context: "Khen thưởng Sinh viên tiêu biểu trong công tác Hội và phong trào sinh viên - 2021-2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-certificate',
    title: "Thanh niên tiên tiến làm theo lời Bác",
    period: "2022",
    context: "Tuyên dương danh hiệu Thanh niên tiên tiến làm theo lời Bác cấp Trường - 2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-user-check',
    title: "Cộng tác viên Đoàn - Hội Xuất sắc",
    period: "2021",
    context: "Cộng tác viên Đoàn - Hội có thành tích đóng góp xuất sắc cấp Khoa - 2021",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-users-gear',
    title: "Trưởng ban Phong trào 'Sinh viên 5 Tốt'",
    period: "2021",
    context: "Trưởng ban Phát triển Phong trào 'Sinh viên 5 Tốt' cấp Khoa (07/2021)",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-laptop-code',
    title: "Ban Tổ chức Cuộc thi CV Contest",
    period: "2022",
    context: "Thành viên Ban Tổ chức cuộc thi kỹ năng viết CV & Phỏng vấn tuyển dụng",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-language',
    title: "Ban Tổ chức Cuộc thi English Contest 2",
    period: "2021",
    context: "Thành viên Ban Tổ chức cuộc thi Tiếng Anh học thuật sinh viên",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-shield-halved',
    title: "Ban Tổ chức Cuộc thi Capture The Flag (CTF)",
    period: "2022",
    context: "Thành viên Ban Tổ chức giải đấu An toàn thông tin Capture The Flag 1",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-graduation-cap',
    title: "Ban Tổ chức Cuộc thi Học thuật Mastering IT",
    period: "2022",
    context: "Thành viên Ban Tổ chức cuộc thi học thuật CNTT Mastering IT lần thứ 15",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-code',
    title: "Ban Tổ chức Cuộc thi Hackathon 2022",
    period: "2022",
    context: "Thành viên Ban Tổ chức giải đấu lập trình công nghệ Hackathon 2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-terminal',
    title: "Ban Tổ chức Cuộc thi Lập trình beCod3r",
    period: "2021",
    context: "Thành viên Ban Tổ chức cuộc thi lập trình thuật toán beCod3r",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hand-holding-heart',
    title: "Tình nguyện viên Phòng chống Dịch COVID-19",
    period: "2021",
    context: "Tham gia lực lượng tình nguyện tuyến đầu phòng chống dịch COVID-19 tại Ea H'leo, Đắk Lắk (07/2021)",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Tình nguyện viên 'Tiếp sức Mùa thi'",
    period: "2021",
    context: "Tham gia hỗ trợ thí sinh và phụ huynh trong chiến dịch Tiếp sức Mùa thi (07/2021)",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-code-branch',
    title: "Ban Chỉ đạo Workshop Chuyên đề Git & GitHub",
    period: "2023",
    context: "Thành viên Ban Chỉ đạo tổ chức chuỗi Workshop thực hành Git & GitHub cho sinh viên",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-trophy',
    title: "Đóng góp Danh hiệu 'Tập thể Sinh viên 5 Tốt'",
    period: "2021",
    context: "Đóng góp tích cực giúp Khoa đạt danh hiệu 'Tập thể Sinh viên 5 Tốt' cấp Trường (2020-2021)",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-lightbulb',
    title: "Sáng kiến Phần mềm Tuyên truyền Chuyển đổi số",
    period: "2022",
    context: "Hỗ trợ Đoàn trường phát triển ứng dụng tuyên truyền chuyển đổi số trong chương trình phát động Tháng Thanh niên",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-gamepad',
    title: "Sáng kiến Phần mềm Trải nghiệm Open Day",
    period: "2022",
    context: "Thiết kế và phát triển trò chơi trải nghiệm công nghệ phục vụ ngày hội Open Day Khoa Công nghệ Thông tin",
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
