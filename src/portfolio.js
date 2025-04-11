/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sohan's Portfolio",
  description:
    "I’m a results-driven Senior Software Engineer with 5+ years of experience building scalable, distributed impactful solutions. I specialize in Network Security, HealthTech, Loyalty & Reward industry, with a passion for solving complex problems and driving innovation. I thrive in fast-paced environments and enjoy collaborating across teams to turn ideas into reality. Always learning, always building.",
  og: {
    title: "Sohan Kathait Portfolio",
    type: "website",
    url: "http://Thesohan.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Sohan Kathait",
  logo_name: "SohanKathait",
  nickname: "Computer Science And Engineering",
  subTitle:
    "I’m a results-driven Senior Software Engineer with 5+ years of experience building scalable, distributed impactful solutions. I have been part of Network Security, HealthTech, Loyalty & Reward industries in past. I thrive in fast-paced environments and enjoy collaborating across teams to turn ideas into reality. Always learning, always building!!!",
  resumeLink:
    "https://drive.google.com/file/d/1AZHbn4Q_SoIg0Yhr1mnNB3NW4VcaABWH/view?usp=drive_link",
  portfolio_repository: "https://github.com/Thesohan/",
  githubProfile: "https://github.com/Thesohan",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Thesohan",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/the-sohan-kathait/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@sohankathait7977",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:sohan.kathait@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Build highly scalable production ready backend services for different industries viz Network Security, HealthTech, Loyalty and Reward.",
        "⚡ Build RESTful or GRPC APIs to interact with the frontend and other services.",
        "⚡ Optimize backend performance (caching, indexing, background jobs).",
        "⚡ Monitor system performance and resolve bottlenecks.",
        "⚡ Prevent common vulnerabilities(SQL injection, XSS, CSRF) and encrypt sensitive data and follow best practices for compliance.",
        "⚡ Write unit, integration, and functional tests for backend logic.",
        "⚡ Debug and fix bugs from logs, monitoring tools, or user reports.",
        "⚡ Publish RCAs(root cause analysis) for production issues and prevent them from resurfacing by fixing the root cause.",
        "⚡ API documentation to keep customer's up-to date with the latest changes in the API contract.",
        "⚡ Expertise in Event driven, Pub-Sub, Push-Pull, Long polling, Websocket, Server sent event(SSE) architecture.",
        "⚡ Expertise in background jobs, cron jobs, scheduled jobs, dependent task scheduling and task monitoring.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "devicon:go",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "skill-icons:javascript",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "skill-icons:java-light",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "vscode-icons:file-type-shell",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Shell",
          fontAwesomeClassname: "logos:typescript-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C and C++",
          fontAwesomeClassname: "mdi:language-c",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "skill-icons:django",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Fastapi",
          fontAwesomeClassname: "devicon:fastapi",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Database Schema design using relational database and graph database.",
        "⚡ Database optimizations, Query optimizations.",
        "⚡ Server side Cache implementation",
        "⚡ Experience working on multiple cloud platforms.",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases.",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP, AWS and Azure.",
        "⚡ Hands on experience with deploying web application using kubernates with auto scalling.",
        "⚡ Automatic release management",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Neo4J",
          fontAwesomeClassname: "devicon-plain:neo4j-wordmark",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "devicon:redis-wordmark",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "devicon:heroku-wordmark",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Serverless",
          fontAwesomeClassname: "logos:aws-lambda",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "S3 Bucket",
          fontAwesomeClassname: "logos:aws-s3",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Mobile App Development & Automation (CI/CD)",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing mobile applications using Flutter, and solo android apps using Java",
        "⚡ Integrating push notifications using Firebase.",
        "⚡ Publishing app to google play store",
        "⚡ Setup CI/CD Pipeline using circle CI, github action and gitlab actions.",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "skill-icons:flutter-light",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "material-icon-theme:android",
          style: {
            backgroundColor: "transparent",
            color: "#02569B",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "skill-icons:github-light",
          style: {
            backgroundColor: "transparent",
            color: "#02569B",
          },
        },
        {
          skillName: "Gitlab",
          fontAwesomeClassname: "skill-icons:gitlab-light",
          style: {
            backgroundColor: "transparent",
            color: "#02569B",
          },
        },
        {
          skillName: "CircleCI",
          fontAwesomeClassname: "material-icon-theme:circleci",
          style: {
            backgroundColor: "transparent",
            color: "#02569B",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/TheSohan/",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@sohan21/",
    },
    {
      siteName: "Stackoverflow",
      iconifyClassname: "skill-icons:stackoverflow-light",
      style: {
        color: "#323754",
      },
      profileLink: "https://stackoverflow.com/users/9141726/thesohan",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Institute of Technology Uttarakhand",
      subtitle: "B.Tech. in Computer Science And Engineering",
      logo_path: "nituk.png",
      alt_name: "nit uk",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://nituk.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Founding Backend Software Engineer",
          company: "Ariksa Inc.",
          company_url: "https://www.ariksa.com/",
          logo_path: "ariksa.png",
          duration: "Aug 2023 - Present",
          location: "Cupertino, California, USA",
          description:
            "Designed and led a multi-cloud vulnerability management framework (AWS, GCP, Azure), built a scalable system to prioritize patching across millions of vulnerabilities, and implemented backend support for runtime protection via eBPF agent visibility.",
          color: "#000000",
        },
        {
          title: "SDE 2",
          company: "Orange Health Labs",
          company_url: "https://orangehealth.in/",
          logo_path: "orangehealth.jpg",
          duration: "Apr 2023 - July 2023",
          location: "Benguluru, India",
          description:
            "Successfully optimized high-impact service endpoints, leading to an Apdex score of 1 for a critical customer-facing service and significantly boosting system performance. Implemented and maintained engineering processes such as git-flow, detailed design documentation, and thorough API documentation—ensuring clarity, consistency, and long-term maintainability. Owned the end-to-end lifecycle of key features released by the team, including development, deployment, and post-release monitoring. Actively identified and resolved critical issues post-launch, contributing to stable operations and a better customer experience. Conducted and shared Root Cause Analyses (RCAs) for major incidents, helping teams across the organization avoid similar pitfalls and fostering a culture of continuous improvement and knowledge sharing. Demonstrated initiative and leadership by stepping up in the absence of the Engineering Manager and Tech Lead—making architectural decisions, unblocking team members, and ensuring uninterrupted execution across sprints.",
          color: "#0879bf",
        },
        {
          title: "SDE 1",
          company: "Orange Health Labs",
          company_url: "https://orangehealth.in/",
          logo_path: "orangehealth.jpg",
          duration: "Jan 2022 - Mar 2023",
          location: "Benguluru, India",
          description:
            "Scaled systems to support 5M+ users, playing a key role in expanding operations from 1 to 8 cities as part of the founding engineering team. Led bulk order processing system design, revamped monolithic services for microservice transition, and improved observability via logging middleware. Established a Go backend template with logging/monitoring and consistently optimized service performance.",
          color: "#9b1578",
        },
        {
          title: "Sr. Product Engineer",
          company: "Loyalty Juggernaut (LJI)",
          company_url: "https://orangehealth.io",
          logo_path: "lji.jpeg",
          duration: "Jul 2021 - Dec 2021",
          location: "Hyderabad, India",
          description:
            "Led architecture and development of a critical receipt scanning module. Mentored new hires and supported onboarding for smooth integration. Played an active role in hiring through daily interviews. Optimized CircleCI builds, reducing build time by 30% and improving developer productivity.",
          color: "#fc1f20",
        },
        {
          title: "Product Engineer",
          company: "Loyalty Juggernaut (LJI)",
          company_url: "https://orangehealth.io",
          logo_path: "lji.jpeg",
          duration: "May 2020 - Jun 2021",
          location: "Hyderabad, India",
          description:
            "At 100M+ user scale, optimized critical endpoints in a multi-tenant app, cutting p95 latency by 50%. Added caching to analytics APIs (Redshift + SQLAlchemy), reducing latency by 70%. Integrated API docs with CircleCI for up-to-date client access. Built SQL logging middleware to identify slow queries, boosting system efficiency and client satisfaction.",
          color: "#fc1f20",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sohan.png",
    description:
      "I’m a backend engineer with a strong foundation in designing and scaling high-performance systems for both startups and enterprise-grade platforms, serving over 100 million users. My expertise lies in distributed systems, microservice architecture, performance tuning, and developer experience. I’ve led several impactful projects, including a multi-cloud (AWS, GCP, Azure) vulnerability management framework, a scalable patch prioritization system handling millions of vulnerabilities, and backend support for runtime protection using eBPF. In another role, I helped scale operations from one city to eight, revamped monolithic services for microservices migration, and built a reusable Go backend template with built-in observability. My optimizations have led to significant performance gains, such as a 70% reduction in p95 latency on analytics dashboards and a 30% cut in CI build times. I also integrated API documentation with CI/CD pipelines to keep documentation always up-to-date for clients. Beyond technical contributions, I’ve actively participated in hiring, mentoring new team members, conducting root cause analyses, and stepping into leadership roles during transitions. I thrive in fast-paced, collaborative environments and aim to build robust systems that not only scale but also drive meaningful business impact.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://medium.com/@sohankathait",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dehradun, Uttarakhand, 248001, India",
    locality: "",
    country: "India",
    region: "Uttarakhand",
    postalCode: "248001",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/@30.3203071,78.0395782,15.01z?entry=ttu&g_ep=EgoyMDI1MDQwOC4wIKXMDSoASAFQAw%3D%3D",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
