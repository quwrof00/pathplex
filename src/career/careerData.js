import auctionIcon from "../assets/icons/auction.png";
import barsIcon from "../assets/icons/bars.png";
import computerIcon from "../assets/icons/computer.png";
import customerIcon from "../assets/icons/customer.png";
import editToolsIcon from "../assets/icons/edit-tools.png";
import healthcareIcon from "../assets/icons/healthcare.png";
import resourcesIcon from "../assets/icons/resources.png";
import scienceIcon from "../assets/icons/science.png";
import settingsIcon from "../assets/icons/settings.png";
import teacherIcon from "../assets/icons/teacher.png";
export const careerData = {
    "medical-healthcare": {
      icon: healthcareIcon,
      title: "Medical & Healthcare",
      description: "Careers focused on health and patient care.",
      whatTheyDo: "Diagnose and treat patients, conduct research, and promote public health.",
      skillsRequired: ["Medical knowledge", "Empathy", "Communication"],
      education: "Medical degree, nursing degree, or related health science degree",
      salary: "$50,000 - $300,000+ per year",
      pathway: [
        { icon: "🎓", title: "Student", color: "bg-green-500" },
        { icon: "🩺", title: "Practitioner", color: "bg-blue-500" },
        { icon: "🏛", title: "Specialist", color: "bg-purple-500" }
      ],
      pros: ["Meaningful work", "Job security", "Advancement opportunities"],
      cons: ["Long hours", "High stress", "Extensive education required"],
      avgSalary: "$80,000/year",
      growthRate: "15% (Much faster than average)",
      topCompanies: ["Mayo Clinic", "Cleveland Clinic", "Johns Hopkins"],
      resources: [
        { icon: "📚", title: "Medical Courses", link: "/resources/medical-courses" },
        { icon: "✅", title: "Healthcare Certifications", link: "/resources/healthcare-certifications" },
        { icon: "💼", title: "Medical Job Listings", link: "/resources/medical-jobs" }
      ],
      relatedCareers: [
        { icon: "🧬", title: "Geneticist", slug: "geneticist" },
        { icon: "💊", title: "Pharmacist", slug: "pharmacist" },
        { icon: "🦷", title: "Dentist", slug: "dentist" }
      ]
    },
    "engineering-technology": {
        icon: computerIcon,
        title: "Engineering & Technology",
        description: "Careers focused on innovation, design, and problem-solving using science and technology.",
        whatTheyDo: "Develop, test, and improve systems, software, and infrastructure to solve real-world problems.",
        skillsRequired: ["Problem-solving", "Mathematics", "Technical proficiency"],
        education: "Engineering degree, computer science degree, or technical certifications",
        salary: "$60,000 - $200,000+ per year",
        pathway: [
          { icon: "📖", title: "Student", color: "bg-green-500" },
          { icon: "🛠", title: "Engineer", color: "bg-blue-500" },
          { icon: "🏗", title: "Specialist", color: "bg-purple-500" }
        ],
        pros: ["High demand", "Diverse career options", "Strong earning potential"],
        cons: ["Continuous learning required", "High-pressure deadlines", "Technical complexity"],
        avgSalary: "$90,000/year",
        growthRate: "10% (Faster than average)",
        topCompanies: ["Google", "Tesla", "SpaceX", "Intel", "Siemens"],
        resources: [
          { icon: "📚", title: "Engineering Courses", link: "/resources/engineering-courses" },
          { icon: "✅", title: "Technical Certifications", link: "/resources/tech-certifications" },
          { icon: "💼", title: "Engineering Job Listings", link: "/resources/engineering-jobs" }
        ],
        relatedCareers: [
          { icon: "💻", title: "Software Engineer", slug: "software-engineer" },
          { icon: "🔬", title: "Biomedical Engineer", slug: "biomedical-engineer" },
          { icon: "🚀", title: "Aerospace Engineer", slug: "aerospace-engineer" }
        ]
      },
      "science-research": {
        icon: scienceIcon,
        title: "Science & Research",
        description: "Careers focused on discovering new knowledge, solving complex problems, and advancing technology through research.",
        whatTheyDo: "Conduct experiments, analyze data, develop theories, and publish findings to expand scientific understanding.",
        skillsRequired: ["Critical thinking", "Analytical skills", "Attention to detail"],
        education: "Bachelor’s, Master’s, or PhD in a scientific field",
        salary: "$50,000 - $150,000+ per year",
        pathway: [
          { icon: "📖", title: "Student", color: "bg-green-500" },
          { icon: "🧪", title: "Researcher", color: "bg-blue-500" },
          { icon: "🏛", title: "Scientist", color: "bg-purple-500" }
        ],
        pros: ["Intellectually rewarding", "Opportunities for innovation", "Diverse career paths"],
        cons: ["Requires years of education", "Highly competitive field", "Funding challenges"],
        avgSalary: "$85,000/year",
        growthRate: "8% (Faster than average)",
        topCompanies: ["NASA", "MIT", "CERN", "Pfizer", "National Institutes of Health (NIH)"],
        resources: [
          { icon: "📚", title: "Scientific Research Courses", link: "/resources/science-courses" },
          { icon: "✅", title: "Research Grants & Funding", link: "/resources/research-funding" },
          { icon: "💼", title: "Science Job Listings", link: "/resources/science-jobs" }
        ],
        relatedCareers: [
          { icon: "🧬", title: "Biologist", slug: "biologist" },
          { icon: "🛰", title: "Astrophysicist", slug: "astrophysicist" },
          { icon: "🧪", title: "Chemical Researcher", slug: "chemical-researcher" }
        ]
      },
      "finance-business": {
        icon: barsIcon,
        title: "Finance & Business",
        description: "Careers focused on managing money, investments, and corporate strategy to drive economic success.",
        whatTheyDo: "Analyze financial data, manage investments, optimize business operations, and develop strategies for growth.",
        skillsRequired: ["Analytical thinking", "Financial literacy", "Strategic planning"],
        education: "Business degree, finance degree, or relevant certifications (CFA, CPA, MBA)",
        salary: "$50,000 - $250,000+ per year",
        pathway: [
          { icon: "📖", title: "Student", color: "bg-green-500" },
          { icon: "📊", title: "Analyst", color: "bg-blue-500" },
          { icon: "🏦", title: "Executive", color: "bg-purple-500" }
        ],
        pros: ["High earning potential", "Diverse career options", "Opportunities for leadership"],
        cons: ["High pressure", "Long hours", "Constant learning required"],
        avgSalary: "$95,000/year",
        growthRate: "7% (Faster than average)",
        topCompanies: ["Goldman Sachs", "JP Morgan", "Deloitte", "McKinsey & Co.", "Amazon"],
        resources: [
          { icon: "📚", title: "Finance & Business Courses", link: "/resources/finance-courses" },
          { icon: "✅", title: "Financial Certifications", link: "/resources/finance-certifications" },
          { icon: "💼", title: "Business Job Listings", link: "/resources/business-jobs" }
        ],
        relatedCareers: [
          { icon: "📈", title: "Financial Analyst", slug: "financial-analyst" },
          { icon: "🏦", title: "Investment Banker", slug: "investment-banker" },
          { icon: "📊", title: "Management Consultant", slug: "management-consultant" }
        ]
      },
      "creative-design": {
        icon: editToolsIcon,
        title: "Creative & Design",
        description: "Careers focused on visual storytelling, user experience, and artistic expression through various media.",
        whatTheyDo: "Design graphics, create digital content, build user-friendly experiences, and bring creative ideas to life.",
        skillsRequired: ["Creativity", "Visual communication", "Software proficiency (Photoshop, Illustrator, Figma)"],
        education: "Design degree, fine arts degree, or self-taught with a strong portfolio",
        salary: "$40,000 - $150,000+ per year",
        pathway: [
          { icon: "📖", title: "Student", color: "bg-green-500" },
          { icon: "🎨", title: "Designer", color: "bg-blue-500" },
          { icon: "🏆", title: "Creative Director", color: "bg-purple-500" }
        ],
        pros: ["Creative freedom", "Diverse career paths", "Opportunities for freelancing"],
        cons: ["Competitive industry", "Client demands can be stressful", "Project-based income"],
        avgSalary: "$70,000/year",
        growthRate: "6% (Faster than average)",
        topCompanies: ["Adobe", "Nike", "Apple", "Pixar", "Figma"],
        resources: [
          { icon: "📚", title: "Design Courses", link: "/resources/design-courses" },
          { icon: "✅", title: "Creative Certifications", link: "/resources/creative-certifications" },
          { icon: "💼", title: "Design Job Listings", link: "/resources/design-jobs" }
        ],
        relatedCareers: [
          { icon: "🖌", title: "Graphic Designer", slug: "graphic-designer" },
          { icon: "🎬", title: "Multimedia Artist", slug: "multimedia-artist" },
          { icon: "📱", title: "UX/UI Designer", slug: "ux-ui-designer" }
        ]
      },
      "education-training": {
        icon: teacherIcon,
        title: "Education & Training",
        description: "Careers focused on teaching, mentoring, and developing knowledge and skills in others.",
        whatTheyDo: "Educate students, train professionals, develop learning materials, and guide individuals in their personal and professional growth.",
        skillsRequired: ["Communication", "Patience", "Subject expertise"],
        education: "Degree in education, subject specialization, or relevant teaching certifications",
        salary: "$40,000 - $120,000+ per year",
        pathway: [
          { icon: "📖", title: "Student", color: "bg-green-500" },
          { icon: "🏫", title: "Educator", color: "bg-blue-500" },
          { icon: "🎓", title: "Professor/Trainer", color: "bg-purple-500" }
        ],
        pros: ["Fulfilling and impactful", "Job security", "Opportunities for lifelong learning"],
        cons: ["High workload", "Emotional challenges", "Requires continuous professional development"],
        avgSalary: "$60,000/year",
        growthRate: "5% (Steady demand)",
        topCompanies: ["Harvard University", "Khan Academy", "Udemy", "Coursera", "Teach For America"],
        resources: [
          { icon: "📚", title: "Teaching Certifications", link: "/resources/teaching-certifications" },
          { icon: "✅", title: "Education Training Programs", link: "/resources/education-programs" },
          { icon: "💼", title: "Teaching Job Listings", link: "/resources/teaching-jobs" }
        ],
        relatedCareers: [
          { icon: "🏫", title: "School Teacher", slug: "school-teacher" },
          { icon: "🎓", title: "University Professor", slug: "university-professor" },
          { icon: "📖", title: "Corporate Trainer", slug: "corporate-trainer" }
        ]
      },
      "law-government": {
        icon: auctionIcon,
        title: "Law & Government",
        description: "Careers focused on legal justice, policymaking, and public service to maintain order and governance.",
        whatTheyDo: "Interpret laws, advocate for clients, enforce regulations, and develop policies for public welfare.",
        skillsRequired: ["Critical thinking", "Persuasion", "Legal expertise"],
        education: "Law degree (JD, LLB), political science degree, or relevant public administration studies",
        salary: "$50,000 - $250,000+ per year",
        pathway: [
          { icon: "📖", title: "Student", color: "bg-green-500" },
          { icon: "⚖", title: "Practitioner", color: "bg-blue-500" },
          { icon: "🏛", title: "Leader/Official", color: "bg-purple-500" }
        ],
        pros: ["Influence and impact", "Job stability", "Diverse career options"],
        cons: ["High pressure", "Extensive education required", "Long working hours"],
        avgSalary: "$90,000/year",
        growthRate: "6% (Stable demand)",
        topCompanies: ["Supreme Court", "United Nations", "Department of Justice", "Law Firms (Baker McKenzie, DLA Piper)", "FBI"],
        resources: [
          { icon: "📚", title: "Legal Studies & Law Courses", link: "/resources/law-courses" },
          { icon: "✅", title: "Government Job Listings", link: "/resources/government-jobs" },
          { icon: "💼", title: "Bar Exam & Certifications", link: "/resources/bar-exam" }
        ],
        relatedCareers: [
          { icon: "⚖", title: "Lawyer", slug: "lawyer" },
          { icon: "🏛", title: "Judge", slug: "judge" },
          { icon: "📜", title: "Policy Analyst", slug: "policy-analyst" }
        ]
      },
      "administration-hr": {
        icon: resourcesIcon,
        title: "Administration & Human Resources",
        description: "Careers focused on managing operations, hiring talent, and ensuring workplace efficiency.",
        whatTheyDo: "Oversee business operations, recruit employees, manage workplace policies, and support organizational growth.",
        skillsRequired: ["Communication", "Organization", "Leadership"],
        education: "Business administration degree, HR certification (SHRM, PHR), or relevant experience",
        salary: "$45,000 - $150,000+ per year",
        pathway: [
          { icon: "📖", title: "Student", color: "bg-green-500" },
          { icon: "🗂", title: "HR/Admin Specialist", color: "bg-blue-500" },
          { icon: "🏢", title: "HR Director/Manager", color: "bg-purple-500" }
        ],
        pros: ["Job security", "People-oriented work", "Opportunities in every industry"],
        cons: ["Handling conflicts", "Repetitive tasks", "Can be high-pressure"],
        avgSalary: "$70,000/year",
        growthRate: "7% (Faster than average)",
        topCompanies: ["Google", "LinkedIn", "Deloitte", "SAP", "IBM"],
        resources: [
          { icon: "📚", title: "HR & Business Management Courses", link: "/resources/hr-courses" },
          { icon: "✅", title: "HR Certifications", link: "/resources/hr-certifications" },
          { icon: "💼", title: "HR & Admin Job Listings", link: "/resources/hr-jobs" }
        ],
        relatedCareers: [
          { icon: "🤝", title: "Recruiter", slug: "recruiter" },
          { icon: "🏢", title: "Office Administrator", slug: "office-administrator" },
          { icon: "📜", title: "HR Consultant", slug: "hr-consultant" }
        ]
      },
      "social-public-services": {
        icon: customerIcon,
        title: "Social & Public Services",
        description: "Careers focused on helping communities, advocating for social change, and improving public well-being.",
        whatTheyDo: "Provide support services, advocate for policy changes, assist vulnerable populations, and manage community programs.",
        skillsRequired: ["Empathy", "Communication", "Problem-solving"],
        education: "Social work degree, public administration, psychology, or relevant certifications",
        salary: "$35,000 - $100,000+ per year",
        pathway: [
          { icon: "📖", title: "Student", color: "bg-green-500" },
          { icon: "🤝", title: "Social Worker", color: "bg-blue-500" },
          { icon: "🏛", title: "Community Leader", color: "bg-purple-500" }
        ],
        pros: ["Meaningful work", "High job satisfaction", "Diverse career paths"],
        cons: ["Emotionally demanding", "Lower pay in some roles", "High workload"],
        avgSalary: "$55,000/year",
        growthRate: "9% (Faster than average)",
        topCompanies: ["United Nations", "Red Cross", "World Health Organization", "Local Government Agencies", "Nonprofit Organizations"],
        resources: [
          { icon: "📚", title: "Social Work & Public Policy Courses", link: "/resources/social-courses" },
          { icon: "✅", title: "Social Services Certifications", link: "/resources/social-certifications" },
          { icon: "💼", title: "Public Service Job Listings", link: "/resources/social-jobs" }
        ],
        relatedCareers: [
          { icon: "🏥", title: "Healthcare Social Worker", slug: "healthcare-social-worker" },
          { icon: "⚖", title: "Policy Advisor", slug: "policy-advisor" },
          { icon: "🏠", title: "Community Outreach Coordinator", slug: "community-outreach-coordinator" }
        ]
      },
      "misc-specialized": {
        icon: settingsIcon,
        title: "Miscellaneous & Specialized Roles",
        description: "Careers that don’t fit into traditional categories but require unique expertise and specialized skills.",
        whatTheyDo: "Work in niche industries, apply specialized knowledge, and innovate in unique fields.",
        skillsRequired: ["Adaptability", "Problem-solving", "Industry-specific expertise"],
        education: "Varies by field—could require certifications, apprenticeships, or advanced degrees",
        salary: "$40,000 - $200,000+ per year",
        pathway: [
          { icon: "📖", title: "Learner", color: "bg-green-500" },
          { icon: "⚙", title: "Specialist", color: "bg-blue-500" },
          { icon: "🏆", title: "Expert/Consultant", color: "bg-purple-500" }
        ],
        pros: ["Unique career paths", "Often high demand for niche skills", "Potential for specialization"],
        cons: ["Limited job openings", "Might require constant upskilling", "Competitive fields"],
        avgSalary: "$75,000/year",
        growthRate: "Varies widely",
        topCompanies: ["NASA", "Lockheed Martin", "Weta Digital", "Freelance Marketplaces (Upwork, Fiverr)"],
        resources: [
          { icon: "📚", title: "Specialized Training Programs", link: "/resources/specialized-courses" },
          { icon: "✅", title: "Industry-Specific Certifications", link: "/resources/specialized-certifications" },
          { icon: "💼", title: "Unique Job Listings", link: "/resources/specialized-jobs" }
        ],
        relatedCareers: [
          { icon: "🚀", title: "Astronomer", slug: "astronomer" },
          { icon: "🎭", title: "Professional Stunt Performer", slug: "stunt-performer" },
          { icon: "🎮", title: "Esports Coach", slug: "esports-coach" }
        ]
      },
    };