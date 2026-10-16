export const resumeData = {
  personal: {
    name: "Jayasri R",
    title: "Software Engineer & Full Stack Developer",
    email: "srij83364@gmail.com",
    phone: "+91 7812848884",
    location: "Chennai, Tamil Nadu",
    linkedin: "https://linkedin.com/in/jayasri-r-11250529b",
    github: "https://github.com/Jayasri-0705",
    resumeUrl: "/Jayasri_R_Resume.pdf",
    resumeFileName: "Jayasri_R_Resume.pdf",
    summary:
      "Software engineer skilled in Python, Django, and React.js, with hands-on experience building and deploying production-grade web applications. Independently designed and deployed a job portal and a blog platform, each with complete authentication, REST APIs, and MySQL databases, live on Render. ISO 9001:2015 certified in Full Stack Web Development. Also built an AI-driven structural crack detection system combining TensorFlow and IoT sensors.",
    stats: [
      { label: "Live Deployed Web Apps", value: "2", suffix: "Apps", sub: "Render Cloud with MySQL & REST APIs" },
      { label: "Frontend Page Architecture", value: "8+", suffix: "Pages", sub: "Production React.js UI" },
      { label: "Django REST Endpoints", value: "10+", suffix: "APIs", sub: "Validated with Postman & JSON" },
      { label: "Component Duplication Reduced", value: "40%", suffix: "Efficiency", sub: "Engineered Reusable UI System" },
    ]
  },

  skills: {
    languages: [
      { name: "Python", level: "Advanced", icon: "Code2", highlight: true }
    ],
    frontend: [
      { name: "React.js", level: "Proficient", highlight: true },
      { name: "HTML5", level: "Expert", highlight: false },
      { name: "CSS3", level: "Expert", highlight: false },
      { name: "Bootstrap 5", level: "Proficient", highlight: false },
      { name: "Responsive & Mobile-First Design", level: "Proficient", highlight: true }
    ],
    backend: [
      { name: "Django", level: "Proficient", highlight: true },
      { name: "REST APIs", level: "Proficient", highlight: true },
      { name: "Authentication & Session Management", level: "Proficient", highlight: false }
    ],
    database: [
      { name: "MySQL", level: "Proficient", highlight: true },
      { name: "PostgreSQL", level: "Intermediate", highlight: false },
      { name: "Schema Design", level: "Proficient", highlight: false },
      { name: "Relational Data Modelling", level: "Proficient", highlight: false }
    ],
    versionControl: [
      { name: "Git", level: "Proficient", highlight: true },
      { name: "GitHub", level: "Proficient", highlight: true }
    ],
    toolsAndDeployment: [
      { name: "Render (Cloud Deployment)", level: "Proficient", highlight: true },
      { name: "VS Code", level: "Proficient", highlight: false },
      { name: "Postman", level: "Proficient", highlight: true },
      { name: "JSON", level: "Expert", highlight: false }
    ]
  },

  experience: [
    {
      role: "Full Stack Web Development Intern",
      company: "MIST Software Solutions Pvt. Ltd.",
      location: "Coimbatore",
      period: "02 Jul 2025 - 02 Aug 2025",
      certification: "ISO 9001:2015 Certified Organization",
      regNo: "922322106040",
      isVerified: true,
      highlights: [
        "Developed 5+ responsive web pages using HTML5 & CSS3, improving cross-device UX across desktop, tablet, and mobile.",
        "Engineered a reusable UI component library, reducing front-end code duplication by ~40% and cutting development time across modules.",
        "Integrated Django REST back-end with MySQL — designed schemas, wrote optimised SQL queries, and wired APIs to front-end views.",
        "Collaborated with Git in a professional team environment."
      ],
      technologies: ["HTML5", "CSS3", "Bootstrap 5", "Python", "Django", "MySQL", "REST API", "Git"]
    }
  ],

  projects: [
    {
      id: "job-portal",
      title: "Job Portal Web Application",
      category: "Full Stack Web App",
      period: "2025-26",
      liveUrl: "https://jobportal-1-pibn.onrender.com",
      githubUrl: "https://github.com/Jayasri-0705/Jobportal",
      technologies: ["Python", "Django", "React.js", "MySQL", "Render", "Postman", "REST APIs"],
      featured: true,
      summary: "Full-stack role-based job portal connecting employers and job seekers with comprehensive application tracking.",
      bulletPoints: [
        "Engineered a full-stack job portal with 3 user roles (admin, employer, job seeker) enabling employers to post jobs and seekers to search, apply, and track applications.",
        "Built and tested 10+ Django REST API endpoints backed by a MySQL database of 5+ relational models covering authentication, job listings, and application tracking; validated endpoints using Postman with JSON payloads.",
        "Implemented a responsive React.js front-end across 8+ pages and deployed the full application to production on Render."
      ],
      architectureHighlights: [
        { label: "User Roles", detail: "3 Roles: Admin, Employer, Job Seeker with tailored dashboards" },
        { label: "Backend Architecture", detail: "10+ Django REST endpoints with JWT/session validation" },
        { label: "Database Models", detail: "5+ Relational MySQL tables with optimized constraints" },
        { label: "Frontend", detail: "8+ dynamic responsive React.js pages" },
        { label: "Hosting", detail: "Live production deployment on Render cloud" }
      ]
    },
    {
      id: "blog-app",
      title: "Blog Web Application",
      category: "Full Stack Web App",
      period: "2025-26",
      liveUrl: "https://blog-project-0dxk.onrender.com",
      githubUrl: "https://github.com/Jayasri-0705/blog",
      technologies: ["Python", "Django", "MySQL", "Render", "CRUD", "Session Auth"],
      featured: true,
      summary: "Dynamic blogging platform with role-based access, complete CRUD workflows, category tagging, and interactive comments.",
      bulletPoints: [
        "Developed a full-stack Django blog supporting role-based access for 2 user types, with secure session-based authentication.",
        "Implemented complete CRUD operations across 3+ relational MySQL models (posts, categories, comments), including category tagging and a comment system.",
        "Configured end-to-end deployment on Render, including production settings, static files, and environment variables."
      ],
      architectureHighlights: [
        { label: "Access Control", detail: "2 user types with secure session authentication" },
        { label: "CRUD Operations", detail: "Full post lifecycle, category tagging, and nested discussions" },
        { label: "Data Schemas", detail: "3+ relational MySQL models (posts, categories, comments)" },
        { label: "DevOps", detail: "Production settings, static file handling, and environment config on Render" }
      ]
    },
    {
      id: "crack-detection",
      title: "IoT and Deep Learning Structural Crack Detection System",
      category: "AI & Embedded Systems",
      period: "2025-26",
      liveUrl: null,
      githubUrl: null,
      technologies: ["TensorFlow", "Python", "IoT", "Microcontroller", "Computer Vision"],
      featured: true,
      summary: "Real-time automated AI safety monitoring pipeline combining deep learning image classification with IoT hardware.",
      bulletPoints: [
        "Designed a real-time AI safety monitoring system using a TensorFlow deep learning model and automated image processing pipeline.",
        "Integrated IoT sensors to capture and transmit structural images, eliminating manual inspection and improving detection accuracy."
      ],
      architectureHighlights: [
        { label: "Model Architecture", detail: "TensorFlow deep neural network trained for structural defect detection" },
        { label: "Hardware Integration", detail: "IoT sensors & microcontroller for autonomous physical image capture" },
        { label: "Data Pipeline", detail: "Automated real-time image processing and inference pipeline" },
        { label: "Impact", detail: "Eliminated hazardous manual inspection and improved crack detection precision" }
      ]
    }
  ],

  education: [
    {
      degree: "B.E. - Electronics and Communication Engineering",
      institution: "University College of Engineering, Dindigul (Anna University)",
      period: "2022 - 2026",
      score: "CGPA: 7.78 / 10",
      description:
        "Comprehensive engineering coursework blending hardware fundamentals, microcontrollers, embedded systems, and modern software development practices. Demonstrated strong technical rigor across computational problem solving, data modeling, and web architectures.",
      highlights: [
        "Consistent academic performance with 7.78/10 CGPA",
        "Applied electronics and computing knowledge into advanced IoT & AI deep learning crack detection",
        "Active full-stack web developer and software builder"
      ]
    }
  ],

  certifications: [
    {
      title: "Full Stack Web Development",
      issuer: "MIST Software Solutions Pvt. Ltd.",
      standard: "ISO 9001:2015 Certified",
      year: "2025",
      regNo: "922322106040",
      verified: true,
      coveredSkills: [
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "Python",
        "Django",
        "MySQL",
        "REST API",
        "Git"
      ],
      description: "Rigorous hands-on professional certification verifying industrial full-stack web application engineering, database schema architecture, and API integration."
    }
  ],

  achievements: [
    {
      title: "ISO 9001:2015 Certified Full Stack Developer",
      badge: "Industry Verified",
      issuer: "MIST Software Solutions Pvt. Ltd.",
      credentialId: "Reg. No: 922322106040",
      date: "2025",
      description:
        "Successfully completed verified industrial training and certification covering HTML5, CSS3, Bootstrap 5, Python, Django, MySQL, REST APIs, and Git."
    },
    {
      title: "Live Production Cloud Deployments on Render",
      badge: "DevOps & Cloud",
      issuer: "Render Cloud Platform",
      credentialId: "2 Production Web Apps Live",
      date: "2025 - 2026",
      description:
        "Configured and maintained 2 live production web applications (Job Portal & Blog Project) with relational MySQL backends, static asset handling, and secure environment configurations."
    },
    {
      title: "40% Frontend Code Duplication Reduction",
      badge: "Architecture & Optimization",
      issuer: "MIST Software Solutions Internship",
      credentialId: "Component Library Architecture",
      date: "Jul - Aug 2025",
      description:
        "Engineered a modular, reusable UI component library during internship that cut frontend duplicate code by ~40% and accelerated feature delivery across pages."
    },
    {
      title: "Real-time AI & IoT Sensor Safety System",
      badge: "AI / Deep Learning Innovation",
      issuer: "Engineering Innovation",
      credentialId: "TensorFlow & Microcontroller Integration",
      date: "2025 - 2026",
      description:
        "Engineered an automated real-time structural crack detection system marrying TensorFlow convolutional deep learning with microcontroller IoT image capture, removing manual safety hazards."
    },
    {
      title: "Consistent Academic Record (7.78 CGPA)",
      badge: "Academic Excellence",
      issuer: "Anna University (UCE Dindigul)",
      credentialId: "B.E. ECE (2022 - 2026)",
      date: "2022 - 2026",
      description:
        "Maintained high academic standing while simultaneously mastering modern full-stack web technologies, building live portfolio systems, and pursuing certifications."
    }
  ]
};
