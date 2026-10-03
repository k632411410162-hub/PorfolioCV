import { EducationItem, ExperienceItem, ProjectItem, ResearchItem, BookItem, ContactInfo } from '../types';

export const contactData: ContactInfo = {
  name: "Nguyễn Quỳnh Trang",
  email: "gnahcquynh2811@gmail.com",
  phone: "0816278296",
  location: "Hà Nội",
  // Preserved in data model per instructions, but only "Hà Nội" is displayed on public page
  residentialAddressPrivate: "Chung cư NHS Trung Văn, Đại Mỗ, Hà Nội",
};

export const aboutData = {
  name: "Nguyễn Quỳnh Trang",
  bio: "Tôi là Nguyễn Quỳnh Trang, sinh viên năm 3, K63 ngành Kinh tế Quốc tế tại Trường Đại học Ngoại thương, Hà Nội. Tôi có kinh nghiệm quản lý dự án, tổ chức sự kiện và điều phối đội nhóm thông qua các hoạt động và dự án cộng đồng. Tôi quan tâm đến nghiên cứu, phát triển bền vững và mong muốn sử dụng kiến thức cùng trải nghiệm thực tiễn để tạo ra những giá trị tích cực cho xã hội.",
};

export const educationData: EducationItem[] = [
  {
    institution: "Trường Đại học Ngoại thương",
    major: "Ngành Kinh tế Quốc tế",
    program: "Chương trình tiêu chuẩn",
    cohort: "K63",
    period: "2024–2028",
  },
  {
    institution: "Trường THPT Chuyên Thái Bình",
    specialization: "Chuyên Ngữ văn",
    period: "2021–2024",
  },
];

export const mainExperience: ExperienceItem = {
  organization: "Enactus FTU Hanoi",
  role: "Thành viên Ban Dự án | Trưởng Ban Dự án",
  period: "2024 – nay",
  steps: [
    "Nghiên cứu, thiết kế và triển khai các dự án khởi nghiệp xã hội nhằm giải quyết vấn đề cộng đồng thông qua tư duy kinh doanh.",
    "Xây dựng định hướng chuyên môn, mentoring và phản biện ý tưởng; đồng hành cùng thành viên trong quá trình phát triển mô hình, lập kế hoạch và triển khai dự án.",
    "Quản lý kế hoạch, điều phối nhân sự và phối hợp với các bên liên quan để đảm bảo tiến độ, chất lượng và hiệu quả của chương trình.",
    "Xây dựng nội dung chuyên môn, phát triển chương trình đào tạo và cuộc thi về khởi nghiệp xã hội; kết nối với cố vấn, diễn giả và đối tác chuyên môn.",
  ],
};

export const earlierExperiences: ExperienceItem[] = [
  {
    organization: "CTB Radio",
    role: "Thành viên Ban Truyền thông",
    period: "2021–2023",
    responsibilities: [
      "Xây dựng và triển khai kế hoạch truyền thông, đảm bảo tính nhất quán của thông điệp.",
      "Sáng tạo và quản lý nội dung fanpage nhằm tăng độ phủ và tương tác.",
      "Phối hợp quay, chụp, xử lý hình ảnh/video và sản xuất nội dung đa phương tiện.",
    ],
  },
  {
    organization: "Voice of CTB",
    role: "Thành viên Ban Hùng biện",
    period: "2021–2022",
    responsibilities: [
      "Tham gia đào tạo và thực hành hùng biện, tư duy phản biện và lập luận.",
      "Nghiên cứu, phân tích vấn đề kinh tế – xã hội để chuẩn bị lập luận cho các cuộc thi.",
      "Tham gia tranh biện, luyện tập và thi đấu; rèn luyện diễn thuyết, phản biện và làm việc nhóm.",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "seph-2026",
    title: "Social Entrepreneurship Preparation Hackathon (SEPH) 2026",
    role: "Trưởng Ban Tổ chức",
    image: "SEPH.jpg",
    overview:
      "Hackathon ngắn ngày dành cho sinh viên quan tâm đến việc giải quyết vấn đề xã hội bằng tư duy kinh doanh. Với chủ đề Smart Mobility, chương trình hướng tới các ý tưởng kinh doanh xã hội ứng dụng công nghệ để cải thiện hệ sinh thái đô thị theo hướng thông minh, linh hoạt và bền vững.",
    responsibilities: [
      "Điều phối tổng thể quá trình triển khai, quản lý tiến độ và phối hợp giữa các ban chức năng.",
      "Xây dựng kế hoạch tổ chức, phân bổ nguồn lực và điều phối đội ngũ theo mục tiêu chương trình.",
      "Làm việc với cố vấn, diễn giả, đối tác và thành viên dự án để xây dựng chương trình, tối ưu trải nghiệm của đội thi và người tham gia.",
      "Giám sát công tác chuẩn bị, quản trị rủi ro và điều phối trực tiếp các hoạt động.",
      "Theo dõi phản hồi từ các bên liên quan để đánh giá và tối ưu quy trình vận hành.",
    ],
    programDetails: {
      targetAudience:
        "Sinh viên năm nhất và năm hai tại Hà Nội, đặc biệt K63 và K64 của Trường Đại học Ngoại thương.",
      plannedScale: "Quy mô dự kiến: 25 người.",
      format: "Kết hợp trực tuyến và trực tiếp.",
      activities: [
        "Workshop về kinh doanh, công nghệ và pitching",
        "Hackathon xây dựng đề án",
        "Mentoring 1–1",
        "Học hỏi giữa người tham gia",
        "Đối thoại cùng chuyên gia",
      ],
      coreValues: "Social Innovation, Connectivity, Empowerment.",
    },
  },
  {
    id: "recruitment-2025",
    title: "Enactus FTU Hanoi Recruitment 2025",
    role: "Leader Ban Dự án",
    image: "recruitment.jpg",
    overview:
      "Thiết kế và điều phối hoạt động tuyển thành viên phù hợp với định hướng phát triển của Ban Dự án.",
    responsibilities: [
      "Xây dựng chiến lược tuyển thành viên và định hình chân dung ứng viên.",
      "Thiết kế đề bài, tiêu chí đánh giá, bảng chấm điểm và câu hỏi phỏng vấn để đánh giá năng lực và tinh thần xã hội.",
      "Điều phối quy trình tuyển chọn; phối hợp truyền thông, tổ chức các vòng tuyển và tối ưu timeline.",
      "Trực tiếp đánh giá, phỏng vấn, lựa chọn ứng viên và đề xuất cải tiến chất lượng tuyển chọn.",
    ],
  },
  {
    id: "tom-2025",
    title: "Teen on a mission 2025 / Teens On a Mission (TOM)",
    role: "Thành viên Ban Nội dung — 2025",
    image: "TOM.jpg",
    overview:
      "Dự án giáo dục thiện nguyện do Enactus FTU Hanoi tổ chức dành cho học sinh trên địa bàn Hà Nội, tập trung vào giao tiếp và kỹ năng sống, góp phần phát triển tư duy xã hội, cảm xúc và sự tự tin.",
    responsibilities: [
      "Xây dựng định hướng chuyên môn, nội dung chương trình và giáo án đào tạo.",
      "Phối hợp hoàn thiện format và lộ trình triển khai.",
      "Chuẩn bị tài liệu chuyên môn, xây dựng timeline và đảm bảo chất lượng nội dung.",
      "Tham gia tổ chức, vận hành các hoạt động và sự kiện chính.",
      "Trực tiếp giảng dạy, hướng dẫn và hỗ trợ học sinh về kỹ năng sống và giáo dục giới tính.",
    ],
    contextDetails: {
      title: "Bối cảnh hoạt động của dự án",
      points: [
        "Mùa đầu được triển khai tại các địa điểm như Trường Tiểu học Thạch Thán và Trường THCS Pascal.",
        "TOM 2026 tiếp tục đồng hành cùng Lớp Học Cầu Vồng với hoạt động nhận biết, gọi tên, chia sẻ và tôn trọng cảm xúc.",
        "Tài liệu ghi nhận hoạt động phát cơm thiện nguyện tại Bệnh viện Ung Bướu Hà Nội ngày 16/08/2026, hướng tới bệnh nhân ung thư và người nhà.",
      ],
    },
  },
];

export const researchData: ResearchItem[] = [
  {
    id: "research-1",
    shortTitle: "Phát triển con người và tăng trưởng kinh tế",
    fullTitle:
      "Tác động của phát triển con người đến tăng trưởng kinh tế: Kiểm chứng vai trò điều tiết của thể chế tại các quốc gia có thu nhập trung bình giai đoạn 2000–2024.",
    authorshipRole: "Thành viên nhóm tác giả",
    researchFocus:
      "Xem xét liệu phát triển con người tạo ra tăng trưởng kinh tế ở cùng một mức độ trong các môi trường thể chế khác nhau hay không; phân tích vai trò điều tiết của hiệu quả quản trị chính phủ (GE) đối với tác động của HDI.",
    data: [
      "Mẫu gồm 88 quốc gia thu nhập trung bình.",
      "Giai đoạn nghiên cứu: 2000–2024.",
      "So sánh chi tiết nhóm thu nhập trung bình thấp và trung bình cao.",
    ],
    methods: [
      "Tương tác tuyến tính và phi tuyến.",
      "Ước lượng tác động cố định với sai số chuẩn Driscoll–Kraay.",
      "Dynamic Panel Threshold Regression.",
    ],
    findings:
      "HDI có mối liên hệ tích cực với tăng trưởng kinh tế, nhưng hiệu quả phụ thuộc vào chất lượng thể chế. Trong mô hình ngưỡng động toàn mẫu, ngưỡng GE ước lượng khoảng −0,393; tác động của HDI rõ rệt hơn và có ý nghĩa thống kê khi GE vượt ngưỡng.",
    implications:
      "Đầu tư giáo dục, y tế và kỹ năng cần đi cùng cải cách thể chế; chính sách cần điều chỉnh theo trình độ phát triển.",
    qualification:
      "Ngưỡng GE là kết quả của mẫu và mô hình nghiên cứu, không phải chuẩn chung cho mọi quốc gia.",
  },
  {
    id: "research-2",
    shortTitle: "Năng suất và khả năng thoát bẫy thu nhập trung bình",
    fullTitle:
      "Kiểm chứng tác động của năng suất các nhân tố tổng hợp và thể chế chính phủ đến khả năng thoát khỏi bẫy thu nhập trung bình của các quốc gia.",
    authorshipRole: "Thành viên nhóm tác giả",
    researchFocus:
      "Phân tích vai trò của TFP và GE trong khả năng chuyển đổi nhóm thu nhập và thời gian chờ đến khi chuyển đổi diễn ra.",
    data: [
      "Mẫu gồm 71 quốc gia.",
      "Dữ liệu nghiên cứu: 2000–2025.",
      "Lịch sử phân loại thu nhập: 1987–2025.",
      "Phân biệt chặng trung bình thấp lên trung bình cao và trung bình cao lên thu nhập cao.",
    ],
    methods: [
      "Cox Proportional Hazards.",
      "Đường cong Kaplan–Meier.",
      "Kiểm định giả định rủi ro tỷ lệ.",
      "Bảng và đồ thị trong báo cáo được tổng hợp bằng Python.",
    ],
    findings:
      "TFP có vai trò tích cực ở chặng trung bình thấp lên trung bình cao; GE thể hiện vai trò tích cực ở chặng trung bình cao lên thu nhập cao. Thời gian chuyển đổi trung vị ước lượng bằng Kaplan–Meier khoảng 23 năm và 25 năm ở hai chặng tương ứng.",
    implications:
      "Ưu tiên năng suất, khả năng tiếp thu công nghệ và hiệu quả sử dụng nguồn lực ở chặng đầu; chú trọng chất lượng thể chế khi tiến tới nhóm thu nhập cao.",
    qualification:
      "Kết quả phản ánh mẫu và phương pháp ước lượng trong báo cáo; đóng vai trò phân tích mẫu thực nghiệm.",
  },
  {
    id: "research-3",
    shortTitle: "Đổi mới sáng tạo và dấu chân sinh thái",
    fullTitle:
      "Đổi mới sáng tạo, thu nhập và dấu chân sinh thái: Bằng chứng về tác động phi tuyến từ dữ liệu đa quốc gia trong giai đoạn từ 2011 đến 2024.",
    authorshipRole: "Thành viên nhóm tác giả",
    researchFocus:
      "Kiểm tra liệu đổi mới sáng tạo luôn giúp giảm áp lực môi trường hay tác động thay đổi theo mức độ đổi mới và nhóm thu nhập.",
    data: [
      "118 quốc gia.",
      "Giai đoạn 2011–2024.",
      "46 quốc gia thu nhập cao.",
      "62 quốc gia thu nhập trung bình.",
      "10 quốc gia thu nhập thấp.",
    ],
    methods: [
      "Khung STIRPAT.",
      "Hồi quy dữ liệu bảng.",
      "Local Projection.",
      "Sai số chuẩn Driscoll–Kraay.",
      "Các dạng đa thức để kiểm tra tính phi tuyến.",
    ],
    findings:
      "Mẫu tổng thể ghi nhận quan hệ chữ U ngược giữa GII và dấu chân sinh thái, với điểm chuyển ước lượng khoảng 35,48. Ở mức đổi mới thấp, đổi mới có thể đi cùng gia tăng áp lực sinh thái; khi năng lực đổi mới cao hơn, hiệu ứng kỹ thuật và công nghệ xanh có điều kiện phát huy.",
    additionalFindings: [
      "Tác động giảm EF của đổi mới được ghi nhận ở nhóm thu nhập cao.",
      "Các nhóm thu nhập còn lại có kết quả khác biệt, chưa thể hiện hiệu quả giảm áp lực tương tự.",
      "Thu nhập có quan hệ cùng chiều với EF trong mẫu tổng thể.",
    ],
    implications:
      "Phát triển năng lực hấp thụ công nghệ, định hướng đổi mới xanh và thiết kế chính sách phù hợp với trình độ phát triển.",
    qualification:
      "Điểm chuyển là ước lượng trong nghiên cứu. Kết quả về GE, thương mại và FDI thay đổi giữa mô hình, nhóm thu nhập và kỳ dự báo; không gộp thành một kết luận cố định.",
  },
  {
    id: "research-4",
    shortTitle: "Thích ứng khí hậu và xuất khẩu công nghệ cao",
    fullTitle:
      "Tác động của năng lực thích ứng với biến đổi khí hậu đến tỷ trọng xuất khẩu hàng công nghệ cao của các quốc gia châu Á.",
    authorshipRole: "Thành viên nhóm tác giả",
    researchFocus:
      "Kết nối mức độ sẵn sàng thích ứng khí hậu với năng lực cạnh tranh xuất khẩu; sử dụng ND-GAIN Readiness làm biến đại diện.",
    data: ["49 quốc gia và vùng lãnh thổ châu Á.", "Giai đoạn 2010–2023."],
    methods: [
      "Hồi quy dữ liệu bảng.",
      "So sánh mô hình và kiểm định khuyết tật.",
      "FGLS là mô hình cuối cùng trong báo cáo.",
      "Kết quả được tổng hợp bằng Stata 17.",
    ],
    findings:
      "Năng lực sẵn sàng thích ứng có mối liên hệ cùng chiều với tỷ trọng xuất khẩu hàng công nghệ cao, đạt mức ý nghĩa thống kê 10% trong mô hình cuối cùng. FDI, chi tiêu giáo dục và chất lượng pháp quyền cũng cho thấy vai trò hỗ trợ.",
    implications:
      "Gắn chính sách thích ứng với đầu tư giáo dục, cải thiện thể chế và hợp tác khu vực.",
    qualification:
      "Giới thiệu đây là bằng chứng về mối liên hệ trong mẫu nghiên cứu, tránh kết luận nhân quả tuyệt đối.",
  },
  {
    id: "research-5",
    shortTitle: "Cạnh tranh và hàm sản xuất ngành bất động sản Việt Nam",
    fullTitle:
      "Phân tích mức độ tập trung và ước lượng hàm sản xuất của ngành bất động sản tại Việt Nam giai đoạn 2017–2024.",
    authorshipRole: "Tác giả chính trong nhóm tác giả",
    researchFocus:
      "Kết hợp phân tích cấu trúc thị trường với đánh giá vai trò của vốn và lao động đối với doanh thu doanh nghiệp.",
    data: [
      "108 doanh nghiệp từ FiinPro.",
      "Giai đoạn 2017–2024.",
      "Bốn phân ngành cấp 5: phát triển và vận hành bất động sản khác; văn phòng cho thuê; bất động sản công nghiệp; bất động sản dân cư.",
    ],
    methods: [
      "HHI và CR4.",
      "Hàm Cobb–Douglas.",
      "Hồi quy dữ liệu bảng và F-GLS.",
      "Stata 15.",
    ],
    findings:
      "Trong mô hình F-GLS, hệ số vốn là 0,540 và lao động là 0,501, đều có ý nghĩa thống kê ở mức 1%. Khi các yếu tố khác không đổi, vốn tăng 1% gắn với doanh thu tăng khoảng 0,540%; lao động tăng 1% gắn với doanh thu tăng khoảng 0,501%.",
    additionalFindings: [
      "Phát triển và vận hành bất động sản khác có mức độ tập trung cao nhất.",
      "Bất động sản công nghiệp có mức độ tập trung thấp hơn tương đối trong mẫu.",
      "Văn phòng cho thuê và bất động sản dân cư có xu hướng tập trung gia tăng trong phần lớn giai đoạn quan sát.",
    ],
    qualification:
      "Tổng hai hệ số là 1,041, gợi ý khả năng có lợi thế quy mô; bản thảo chưa trình bày kiểm định riêng để khẳng định tổng này khác 1 có ý nghĩa thống kê.",
    implications:
      "Theo dõi cạnh tranh và M&A ở các phân ngành tập trung cao; cải thiện hiệu quả sử dụng vốn, quản trị doanh nghiệp và tiếp cận nguồn tài chính dài hạn.",
  },
];

export const booksData: BookItem[] = [
  {
    id: "book-1",
    title: "Một thoáng ta rực rỡ ở nhân gian",
    author: "Ocean Vương",
    image: "motthoangtarucroonhangia.jpg",
    summary:
      "Cuốn tiểu thuyết dưới hình thức một lá thư gửi mẹ, đan xen ký ức gia đình, chiến tranh, nhập cư, tuổi mới lớn và bản sắc. Mối quan hệ mẹ – con hiện lên với cả tình yêu thương, bạo lực và sang chấn, đặt ra những suy tư về vẻ đẹp mong manh của đời người.",
    expandedThemes: [
      "Ký ức và lịch sử gia đình.",
      "Trải nghiệm nhập cư và khoảng cách ngôn ngữ.",
      "Tình mẫu tử và sang chấn liên thế hệ.",
      "Tuổi mới lớn, bản sắc và LGBT+.",
      "Sự ngắn ngủi của cái đẹp và đời sống.",
    ],
  },
  {
    id: "book-2",
    title: "Truyện ngắn Thạch Lam",
    author: "Thạch Lam",
    image: "thachlam.jpg",
    subtitle: "Những khoảnh khắc thanh bình của cuộc sống",
    summary:
      "Những câu chuyện về đời sống bình dị và số phận những con người nghèo, được kể bằng giọng văn nhẹ nhàng, tinh tế và giàu chất thơ. Qua những tác phẩm như Hai đứa trẻ và Gió lạnh đầu mùa, tình thương, sự sẻ chia và niềm hy vọng hiện lên từ những điều nhỏ bé.",
    expandedThemes: [
      "Đời sống thường nhật và những số phận âm thầm.",
      "Sự cảm thông trước hoàn cảnh khó khăn.",
      "Giá trị của những khoảnh khắc bình dị.",
      "Tình người và niềm hy vọng.",
    ],
  },
  {
    id: "book-3",
    title: "Báu vật của đời",
    author: "Mạc Ngôn",
    image: "bauvatcuadoi.jpg",
    summary:
      "Bức tranh xã hội Trung Quốc qua những biến động lịch sử, với hình tượng người mẹ Thượng Quan Lỗ Thị ở trung tâm. Tác phẩm gợi suy ngẫm về tình mẫu tử, sự hy sinh, sức chịu đựng và khả năng tiếp tục sống giữa những biến cố.",
    expandedThemes: [
      "Tình mẫu tử và sức sống bền bỉ.",
      "Số phận gia đình giữa biến động lịch sử.",
      "Đau thương, sinh tồn và tình yêu thương.",
      "Lối kể chuyện bi tráng và huyền ảo.",
    ],
  },
  {
    id: "book-4",
    title: "Phía sau nghi can X",
    author: "Higashino Keigo",
    image: "phiasaunghicanX.jpg",
    subtitle: "Một vụ giết người hoàn hảo hay một bài toán ẩn X hóc búa?",
    summary:
      "Cuộc đối đầu trí tuệ giữa toán học và vật lý mở ra một câu chuyện về tình yêu đơn phương, sự hy sinh và giằng xé giữa lý trí với cảm xúc. Điểm hấp dẫn không chỉ nằm ở lời giải vụ án mà còn ở những lựa chọn đạo đức và nội tâm nhân vật.",
    hasSpoilerWarning: true,
    expandedThemes: [
      "Logic và sự thật.",
      "Tình yêu, cô độc và hy sinh.",
      "Ranh giới giữa cảm thông và trách nhiệm.",
      "Cái giá của những lựa chọn.",
    ],
  },
  {
    id: "book-5",
    title: "Xứ tuyết",
    author: "Kawabata Yasunari",
    image: "xutuyet.jpg",
    subtitle: "Con đường đi tìm cái đẹp",
    summary:
      "Hành trình tìm kiếm cái đẹp mong manh và hư ảo, đặt giữa thiên nhiên xứ tuyết và những mối quan hệ đầy cô đơn. Komako và Yoko gợi hai sắc thái của cái đẹp: gần gũi, mãnh liệt và xa xôi, lý tưởng.",
    expandedThemes: [
      "Thiên nhiên, bốn mùa và vẻ đẹp cổ xưa Nhật Bản.",
      "Cái đẹp trần tục và cái đẹp lý tưởng.",
      "Cô đơn, tình yêu và sự bất lực trong việc nắm giữ cái đẹp.",
      "Những giá trị truyền thống giữa đổi thay.",
    ],
  },
];
