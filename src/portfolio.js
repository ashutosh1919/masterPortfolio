/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pini's Portfolio",
  description:
    "What matter to me is an excellent user experience, a beautiful UI and a clean, easy to understand and scalable code.",
  og: {
    title: "Pini ZROUYA protfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Pini ZROUYA",
  logo_name: "pini  zrouya",
  nickname: "",
  subTitle:
    "As a seasoned Full Stack Developer, I specialize in crafting robust backend solutions and designing dynamic " +
    "frontend interfaces. My expertise spans the entire technology stack, showcasing a commitment to delivering " +
    "high-quality code and a passion for staying at the forefront of innovative development practices.",
  resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  githubProfile: "https://github.com/2snufkin",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/2snufkin",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pini-tzruya/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:pinidevpro@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

// the icons are taken from https://icon-sets.iconify.design/
const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "Front-End Development:",
        "HTML5 and CSS3 for building structured and styled web pages.",
        "Angular & TypeScript for creating dynamic and responsive web applications.",
        "ReactJS with  for building interactive user interfaces.",
        "Back-End Development:",
        "Flask for building lightweight and modular web applications in Python.",
        "Java and Spring for building enterprise-level, scalable, and robust applications.",
        "Python for general-purpose programming, including scripting and automation.",
        "Package Management and Tools:",
        "NPM for managing and installing JavaScript packages.",
        "Maven for managing Java-based project dependencies.",
        "Version Control:",
        "Git for version control, collaboration, and code management.",
        "Database Management:",
        "MySQL for relational database management.",
        "MongoDB for NoSQL database management.",
      ],

      softwareSkills: [
        // Front
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "devicon:angularjs",
          style: {
            color: "#DE102D",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "skill-icons:typescript",
          style: {
            color: "#017ACC",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Maven",
          fontAwesomeClassname: "devicon:maven",
          style: {
            color: "#872176",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#3A75A4",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "devicon:flask",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "devicon:spring",
          style: {
            color: "#339933",
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
      siteName: "Afpa",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "Udemy",
      iconifyClassname: "logos:udemy-icon",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.udemy.com/",
    },
    {
      siteName: "Packt",
      iconifyClassname: "simple-icons:packt",
      style: {
        color: "#F46F22",
      },
      profileLink: "https://www.packtpub.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "application designer and developer",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "logo-afpa.png",
      alt_name: "Afpa",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ Developed proficiency in writing algorithms and programs",
        "⚡ Mastered the design and implementation of layered software architecture, including database design and development of SQL and NoSQL data access components.",
        "⚡ Learned the process of analyzing requirements and creating application prototypes.",
        "⚡ Acquired hands-on experience in creating desktop and web applications for businesses and contributing to web projects with both front-end and back-end development.",
      ],
      website_link:
        "https://www.afpa.fr/formation-qualifiante/concepteur-developpeur-d-applications",
    },
  ],
};

const certifications = {
  courses: [
    {
      Platform: "Packt",
      Title: "Learn Angular 2 Development By Building 12 Apps",
      MainSubject: "Angular",
    },
    {
      Platform: "Packt",
      Title: "Data Scraping And Data Mining From Beginner To Pro With...",
      MainSubject: "Scraping",
    },
    {
      Platform: "Packt",
      Title: "Angular For Enterprise-Ready Web Applications - Second ...",
      MainSubject: "Angular",
    },
    {
      Platform: "Packt",
      Title: "Git And Github Crash Course",
      MainSubject: "Git",
    },
    {
      Platform: "Packt",
      Title: "Full-Stack React Projects - Second Edition",
      MainSubject: "React",
    },
    {
      Platform: "Packt",
      Title: "Modern Api Development With Spring And Spring Boot",
      MainSubject: "API",
    },
    {
      Platform: "Packt",
      Title: "Learn Python Programming - Third Edition",
      MainSubject: "Python",
    },
    {
      Platform: "Packt",
      Title: "React Js Masterclass - Go From Zero To Job Ready",
      MainSubject: "React",
    },
    {
      Platform: "Packt",
      Title: "Spring Boot Fundamentals",
      MainSubject: "Spring",
    },
    {
      Platform: "Packt",
      Title: "Understanding Apis And Restful Apis Crash Course",
      MainSubject: "API",
    },
    {
      Platform: "Packt",
      Title: "React Projects - Second Edition",
      MainSubject: "React",
    },
    {
      Platform: "Packt",
      Title: "Hands-On Web Scraping With Python",
      MainSubject: "Python",
    },
    {
      Platform: "Packt",
      Title: "Angular Projects - Second Edition",
      MainSubject: "Angular",
    },
    {
      Platform: "Packt",
      Title: "React - The Complete Guide (Includes Hooks, React Route...",
      MainSubject: "React",
    },
    { Platform: "Packt", Title: "Docker deep dive", MainSubject: "Docker" },
    {
      Platform: "Packt",
      Title: "Reactive Patterns With Rxjs For Angular",
      MainSubject: "Angular",
    },
    {
      Platform: "Packt",
      Title: "Automating Workflows With Github Actions",
      MainSubject: "Git",
    },
    {
      Platform: "Packt",
      Title: "The Complete Python Course",
      MainSubject: "Python",
    },
    {
      Platform: "Packt",
      Title: "Git Essentials: Become A Git And Github Ninja",
      MainSubject: "Git",
    },
    {
      Platform: "Packt",
      Title: "Build Full-Stack Projects With Farm Stack",
      MainSubject: "Farm Stack",
    },
    {
      Platform: "Packt",
      Title: "Angular Design Patterns",
      MainSubject: "Angular",
    },
    {
      Platform: "Packt",
      Title: "Github Essentials - Second Edition",
      MainSubject: "Git",
    },
    {
      Platform: "Packt",
      Title: "Java 9 Regular Expressions",
      MainSubject: "Regex",
    },
    {
      Platform: "Packt",
      Title: "Spring Boot Essentials",
      MainSubject: "Spring",
    },
    {
      Platform: "Packt",
      Title: "Complete Git Guide: Understand And Master Git And Githu...",
      MainSubject: "Git",
    },
    {
      Platform: "Packt",
      Title: "50 Projects In 50 Days - Html, Css, And Javascript",
      MainSubject: "Css",
    },
    {
      Platform: "Udemy",
      Title: "Full Stack: Angular And Java Spring Boot E-Commerce Website",
      MainSubject: "Full Stack",
    },
    {
      Platform: "Udemy",
      Title: "Spring Boot Unit Testing With Junit, Mockito And Mockmvc",
      MainSubject: "Springboot",
    },
    {
      Platform: "Udemy",
      Title: "Java Programming Masterclass Updated To Java 17",
      MainSubject: "Java",
    },
    {
      Platform: "Udemy",
      Title: "Build Responsive Real-World Websites With Html And Css",
      MainSubject: "Css",
    },
    {
      Platform: "Udemy",
      Title: "Advanced Css And Sass: Flexbox, Grid, Animations And More!",
      MainSubject: "Css",
    },
    {
      Platform: "Udemy",
      Title: "Complete Web Design: From Figma To Webflow To Freelancing",
      MainSubject: "Webflow",
    },
    {
      Platform: "Udemy",
      Title: "100 Days Of Code: The Complete Python Pro Bootcamp For 2023",
      MainSubject: "Python",
    },
    {
      Platform: "Udemy",
      Title: "The Complete Javascript Course 2023: From Zero To Expert",
      MainSubject: "Javascript",
    },
    {
      Platform: "Udemy",
      Title: "Angular - The Complete Guide (2023 Edition)",
      MainSubject: "Angular",
    },
    {
      Platform: "Udemy",
      Title: "- Node.Js, Express, Mongodb & More: The Complete Bootcamp 2023",
      MainSubject: "Node,Js",
    },
    {
      Platform: "Packt",
      Title: "Learning Github Actions For Devops",
      MainSubject: "Github",
    },
    {
      Platform: "Packt",
      Title:
        "Javascript Masterclass - Zero To Job-Ready With Hands-On Projects",
      MainSubject: "JavaScript",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
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
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
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
