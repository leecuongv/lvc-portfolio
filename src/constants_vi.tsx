import { Project, SkillCategory, Experience, Education, Certificate, Honor } from './types';

export const PERSONAL_INFO = {
  name: "LÊ VĂN CƯỜNG",
  title: "Kỹ sư Phần mềm",
  objective: "Đóng góp vào sự phát triển và thành công của công ty nơi tôi làm việc & Nỗ lực trở thành một lập trình viên cao cấp (Senior Developer) trong tương lai.",
  email: "cuonglevan.work@gmail.com",
  phone: "+84 389 365 835",
  github: "https://github.com/leecuongv",
  linkedin: "https://linkedin.com/in/leecuongv",
  cvUrl: "#", // Placeholder for CV download link
};

export const SOFT_SKILLS = [
  "Tự học",
  "Làm việc độc lập",
  "Làm việc nhóm",
  "Lập kế hoạch",
  "Giải quyết vấn đề",
];

export const LANGUAGES = [
  "Tiếng Việt",
  "Tiếng Anh: TOEIC 615",
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Ngôn ngữ lập trình/Framework",
    skills: ["Java (Java Core, Spring Framework)", "JavaScript (NodeJS, Express)"],
  },
  {
    title: "Cơ sở dữ liệu",
    skills: ["SQL: PostgreSQL, MSSQL, OracleDB", "NoSQL: MongoDB, Firebase"],
  },
  {
    title: "Quản lý mã nguồn",
    skills: ["Git", "Github"],
  },
  {
    title: "Mẫu thiết kế & Kiến trúc",
    skills: ["Kiến trúc: MVC, Ba lớp (Three-tier)"],
  },
  {
    title: "Kiểm thử",
    skills: ["Jmeter", "Postman"],
  },
  {
    title: "Công cụ phân tích mã nguồn",
    skills: ["SonarQube", "SonarCloud"],
  },
  {
    title: "Mô hình phát triển phần mềm",
    skills: ["Waterfall (Thác nước)", "Agile (Linh hoạt)"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Hệ thống quản lý trang trại Back-end",
    description: "Hệ thống back-end toàn diện để quản lý các hoạt động của trang trại, bao gồm theo dõi cây trồng, quản lý tài nguyên và phân tích dữ liệu.",
    tags: ["Java", "Spring", "MongoDB", "RESTful API", "JWT", "Swagger", "OAuth"],
    githubUrl: "https://github.com/leecuongv/back-end-farm-managerment-system",
  },
  {
    title: "Hệ thống thi trực tuyến Back-end",
    description: "Hệ thống chỉ dành cho phần back-end để quản lý các kỳ thi trực tuyến, bao gồm quản lý người dùng, tạo đề thi và xử lý kết quả.",
    tags: ["Node.js", "Express", "MongoDB", "RESTful API", "Axios"],
    githubUrl: "https://github.com/leecuongv/BE_Online_Examination_System",
  },
  {
    title: "Nhận diện khẩu trang thời gian thực",
    description: "Dự án Python nhận diện khẩu trang trong thời gian thực bằng cách sử dụng các kỹ thuật thị giác máy tính.",
    tags: ["Python", "OpenCV", "TensorFlow"],
    githubUrl: "https://github.com/leecuongv/RealtimeMaskDetection",
  },
  {
    title: "Hệ thống quản lý khách sạn",
    description: "Hệ thống quản lý khách sạn là một ứng dụng Windows cho phép nhân viên khách sạn quản lý đặt phòng, nhận phòng và trả phòng một cách hiệu quả.",
    tags: ["Windows Forms", "C#"],
    githubUrl: "https://github.com/leecuongv/Hotel-Managerment-System",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Lập trình viên Java Backend",
    company: "Fahasa",
    period: "09/2024 - Hiện tại",
    description: [
      "Phát triển các dịch vụ backend sử dụng Java và Spring Framework để xây dựng các RESTful API và Web API.",
      "Áp dụng các nguyên lý lập trình hướng đối tượng (OOP) và mẫu thiết kế (Singleton, Factory) cho thiết kế giải pháp.",
      "Thiết kế, triển khai và tối ưu hóa cơ sở dữ liệu quan hệ (MySQL, PostgreSQL); thành thạo viết truy vấn SQL và áp dụng mô hình kiến trúc MVC.",
      "Chủ động giải quyết vấn đề và làm việc độc lập; sử dụng Docker để đóng gói ứng dụng (containerization) và triển khai ứng dụng.",
      "Tham gia vào nhiều dự án khác nhau, chủ động nghiên cứu và tiếp cận các công nghệ mới như Node.js."
    ],
  },
  {
    role: "Lập trình viên Java Backend",
    company: "HPT Vietnam Corporation",
    period: "10/2022 - 08/2024",
    description: [
      "Phát triển hệ thống backend dựa trên Java để xử lý logic nghiệp vụ, lưu trữ tài liệu/dữ liệu và tích hợp với các hệ thống backend khác như CoreBanking, IBM Integration Designer, chữ ký số...",
      "Phân tích tài liệu yêu cầu nghiệp vụ, phối hợp với Chuyên viên phân tích nghiệp vụ (BA) để tư vấn, lựa chọn giải pháp và thiết kế kỹ thuật.",
      "Tham gia các hoạt động nghiên cứu nội bộ để nâng cao kỹ năng chuyên môn và phát triển các sản phẩm mới cho thị trường và dự án trong tương lai."
    ],
  },
  {
    role: "Thực tập sinh",
    company: "FPT Software",
    period: "07/2022 - 09/2022",
    description: [
        "Nâng cao kỹ năng lập trình, tham gia các khóa học kỹ năng mềm để nâng cao khả năng giải quyết vấn đề, kỹ năng làm việc nhóm và kỹ năng thuyết trình.",
        "Tham gia vào các dự án giả lập để làm quen với môi trường dự án thực tế."
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
    title: "Sinh viên 5 Tốt (Cấp Trường)",
    period: "2021",
    context: "Sinh viên 5 Tốt (Cấp Trường) - Năm học 2020-2021",
    proofUrl: "",
  },
  {
    icon: 'fas fa-star',
    title: "Đoàn viên xuất sắc",
    period: "2021",
    context: "Đoàn viên xuất sắc - Năm học 2020-2021",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-star',
    title: "Thành viên Ban Chấp hành",
    period: "2022",
    context: "Cán bộ Đoàn - Hội xuất sắc của Khoa - 2022",
    proofUrl: "https://www.facebook.com/photo/?fbid=3386772624886535&set=a.1467109430186207",
  },
  {
    icon: 'fas fa-star',
    title: "Sinh viên 5 Tốt (Cấp Trường)",
    period: "2022",
    context: "Sinh viên 5 Tốt (Cấp Trường) - Năm học 2021-2022",
    proofUrl: "https://www.facebook.com/photo.php?fbid=593807556107946&id=100064361214701&set=a.593813909440644",
  },
  {
    icon: 'fas fa-star',
    title: "Sinh viên 5 Tốt 3 năm liên tiếp (Cấp Trường)",
    period: "2023",
    context: "Sinh viên 5 Tốt 3 năm liên tiếp (Cấp Trường) - Năm học 2021-2023",
    proofUrl: "https://www.facebook.com/photo.php?fbid=376776481668342&id=100080079805690&set=a.353115687367755",
  },
  {
    icon: 'fas fa-star',
    title: "Đoàn viên xuất sắc",
    period: "2022",
    context: "Đoàn viên xuất sắc - Năm học 2021-2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-star',
    title: "Sinh viên tiêu biểu trong công tác Hội và phong trào sinh viên",
    period: "2022",
    context: "Sinh viên tiêu biểu trong công tác Hội và phong trào sinh viên - 2021-2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-star',
    title: "Thanh niên tiên tiến làm theo lời Bác",
    period: "2022",
    context: "Được công nhận danh hiệu 'Thanh niên tiên tiến làm theo lời Bác' - 2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-users',
    title: "Cộng tác viên",
    period: "2021",
    context: "Cộng tác viên Đoàn - Hội xuất sắc của Khoa - 2021",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Vai trò Lãnh đạo",
    period: "2021",
    context: "Trưởng ban Phát triển Phong trào 'Sinh viên 5 Tốt' (07/2021)",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Hoạt động Tình nguyện",
    period: "2022",
    context: "Thành viên Ban tổ chức các cuộc thi học thuật: CV Contest",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Hoạt động Tình nguyện",
    period: "2021",
    context: "Thành viên Ban tổ chức các cuộc thi học thuật: English Contest 2",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Hoạt động Tình nguyện",
    period: "2022",
    context: "Thành viên Ban tổ chức các cuộc thi học thuật: Capture The Flag 1",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Hoạt động Tình nguyện",
    period: "2022",
    context: "Thành viên Ban tổ chức các cuộc thi học thuật: Mastering IT 15",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Hoạt động Tình nguyện",
    period: "2022",
    context: "Thành viên Ban tổ chức các cuộc thi học thuật: Hackathon 2022",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Hoạt động Tình nguyện",
    period: "2021",
    context: "Thành viên Ban tổ chức các cuộc thi học thuật: beCod3r",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Hoạt động Tình nguyện",
    period: "2021",
    context: "Tình nguyện viên phòng chống dịch COVID-19 tại Ea H'leo, Đắk Lắk (07/2021)",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Hoạt động Tình nguyện",
    period: "2021",
    context: "Tình nguyện viên chương trình 'Tiếp sức mùa thi' (07/2021)",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Hoạt động Tình nguyện",
    period: "2023",
    context: "Thành viên Ban chỉ đạo Git & GitHub Workshop 2023",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-hands-helping',
    title: "Hoạt động Tình nguyện",
    period: "2021",
    context: "Đóng góp giúp Khoa đạt danh hiệu 'Tập thể Sinh viên 5 Tốt' (Cấp Trường) - 2020-2021",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-lightbulb',
    title: "Đóng góp chuyển đổi số",
    period: "2022",
    context: "Hỗ trợ Đoàn trường phát triển ứng dụng tuyên truyền chuyển đổi số cho chương trình phát động Tháng Thanh niên.",
    proofUrl: "#",
  },
  {
    icon: 'fas fa-lightbulb',
    title: "Sáng kiến & Giải pháp chính",
    period: "2022",
    context: "Phát triển trò chơi trải nghiệm cho ngày hội Open Day 2022 của Khoa Công nghệ Thông tin.",
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
