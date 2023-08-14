/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ahmad Syamil's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ahmad Syamil Portfolio",
    type: "website",
    url: "https://syamilthoghts.com/",
  },
};

//Home Page
const greeting = {
  title: "Ahmad Syamil",
  logo_name: "Ahmad Syamil",
  nickname: "syamil",
  subTitle:
    "IT specialist with two years' experience in both operations and software development who is driven and focused on the details.",
  resumeLink:
    "https://drive.google.com/file/d/1JLAkgrfPyx4BcchQYdLZvFyQSNTz_L0M/view?usp=drive_link",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/syamil24",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/syamil24",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ahmad-syamil/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@madlim8169",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:syamil2498@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/syamil24/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Actively contributes to the development, implementation, maintenance, and smooth operations of application systems and IT solutions, particularly in banking applications.",
        "⚡ Demonstrates strong expertise in developing banking applications using Spring Boot, applying microservices architecture with a Backend for Frontend (BFF) design. Utilizes JIRA and Confluence for streamlined development ticket tracking.",
        "⚡ Drives efficiency by automating Java package deployment to SIT/UAT servers through the use of GitHub Actions and Bash scripts.",
      ],
      softwareSkills: [
        {
          skillName: "Java Spring Boot",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
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
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Application Maintenance, Release and Migration",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Actively participates in project change presentations to the Change Advisory Board (CAB) to enable smooth transitions into production releases.",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Plays a crucial role in Disaster Recovery (DR) activities to ensure compliance with BNM regulations. Effectively coordinates with network teams, ESB, and CICS teams to resolve any issues during downtime, ensuring the prompt resumption of services.",
        "⚡ Applies containerization with Docker to streamline the deployment of application dashboards to servers, using GitHub Actions and Bash scripts.",
        "⚡ Contributes to various operational activities, including migration and deployment of source code using Bash scripts and Linux commands. Proficiently manages configurations, database queries (Oracle), and deployments to production environments running on RHEL OS.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Oracle DB",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
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
          skillName: "RHEL / Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "simple-icons:bash",
          style: {
            color: "#326CE5",
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
      profileLink: "https://leetcode.com/syamil/",
    },
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://github.com/syamil24",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universiti Teknologi MARA Kampus Jasin",
      subtitle: "Bachelor Degree in Computer Science (Hons)",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2017-2021",
      descriptions: [
        "⚡ CGPA - 3.59",
        "⚡ FInal Year Project: Smart Irrigation System using Raspberry Pi where integrating sensors to Raspberry Pi for data collection and use the data fo machine learning processing to determine the best timing to water the plant.",
        "⚡Participate in military training called Reserve Officer Training Unit(ROTU).",
      ],
      website_link: "https://uitm.edu.my/",
    },
    {
      title: "UiTM Dengkil",
      subtitle: "Foundation in Science",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2016-2017",
      descriptions: ["⚡ CGPA – 3.45"],
      website_link: "https://uitm.edu.my/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Degree Graduation Certification",
      subtitle: "Universiti Teknologi MARA",
      logo_path: "UiTM-Logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1sSkT-ElAOUGS6dBhHVj-QYbqPvfPFAWw/view?usp=drive_link",
      alt_name: "Universiti Teknologi MARA",
      color_code: "#8C151599",
    },
    {
      title: "Degree Transcript",
      subtitle: "Computer Science Degree Transcript",
      logo_path: "UiTM-Logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ohFVJpF6ugzwyph2bkXLugPJUYT9apnP/view?usp=drive_link",
      alt_name: "Universiti Teknologi MARA",
      color_code: "#8C151599",
    },
    {
      title: "FYP Certificate",
      subtitle: "Final Year Project Competition Certificate",
      logo_path: "UiTM-Logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1E26UneDBcb5pSskOHrhEmMVAkPul1xi5/view?usp=drive_link",
      alt_name: "Universiti Teknologi MARA",
      color_code: "#8C151599",
    },
    {
      title: "Docker Training Certificate",
      subtitle: "Docker & Container Training Certificate",
      logo_path: "Docker.png",
      certificate_link:
        "https://drive.google.com/file/d/1jrgXmcrYxLmGf4yeT7J7vkrIyd740RfH/view?usp=drive_link",
      alt_name: "Amigoscode",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "My Career Journey",
  description:
    "IT specialist with two years' experience in both operations and software development who is driven and focused on the details. Holds a degree in computer science and keeps up with new developments and business rends. Participate heavily in the sprint or project and deliver by the deadline. Excellent programming skills, as well as related IT support activities, production maintenance, and migration. competent in reating project-related papers, such as signoff, implementation plans, etc., and able to communicate change to the Change Advisory Board (CAB)",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "Maybank Berhad",
          company_url: "https://www.maybank.com/en/index.page",
          logo_path: "legato_logo.png",
          duration: "Jan 2022 - Current",
          location: "Kuala Lumpur",
          description: [
            "⚡ Actively contributes to the development, implementation, maintenance, and smooth operations of application systems and IT solutions, particularly focused on the M2U Biz App.  \n ",
            "⚡ Demonstrates strong expertise in developing banking applications using Spring Boot, applying microservices architecture with a Backend for Frontend (BFF) design.  Utilizes JIRA and Confluence for streamlined development ticket racking. ",
            "⚡ Drives efficiency by automating Java package deployment to SIT/UAT servers through the use of GitHub Actions and Bash scripts.",
            "⚡ Ensures seamless user support during SIT/UAT and staging testing phases, promptly resolving any issues that arise, such as environmental challenges, connectivity hiccups, and code fixes.",
            "⚡ Actively participates in project change presentations to the Change Advisory Board (CAB) to enable smooth ransitions into production releases.",
            "⚡ Produces comprehensive documentation, including sign-offs and implementation plans, for successful CAB presentations.",
            "⚡ Contributes to various operational activities, including igration and deployment of source code using Bash scripts and Linux commands. Proficiently manages configurations, database queries (Oracle), and deployments to production environments running on RHEL OS.",
            "⚡ Plays a rucial role in Disaster Recovery (DR) activities to ensure compliance with BNM regulations. Effectively coordinates with network teams, ESB, and CICS teams to resolve any issues during downtime, ensuring the rompt esumption of services.",
            "⚡ Utilizes Grafana and ExpressJS, coupled with MongoDB, to develop insightful productivity dashboards. Captures metrics from attendance data, JIRA issues, and GitHub activity to visualize nternal department productivity.",
            "⚡ Applies containerization with Docker to streamline the deployment of productivity dashboards to servers, using GitHub Actions and Bash scripts.",
            "⚡ Successfully creates and deploys a elegram bot using TelegrafJS to capture staff attendance and automate various employee onboarding and management services. Implements a serverless application using AWS Lambda for efficient deployment.",
            "⚡ Adheres to ITIL framework principles as implemented by Maybank, including Incident Management, Asset Management, Access Management, and Services and Change Management",
          ],
          color: "#0879bf",
        },
        {
          title: "GEES (Protege)",
          company: "PETRONAS BHD",
          company_url: "https://www.linkedin.com/company/petronas",
          logo_path: "muffito_logo.png",
          duration: "July 2020 - Jan 2021",
          location: "Kuala Lumpur",
          description:
            "• Handling servers detail using Microsoft Excel and exposed with cloud server’ simplementation such as AWS and Azure.• Experience in using PowerApps and Power Automate to create CRUD related applications.• Basic usage of Power BI to visualize data from PowerApps and Excel.• Conduct and host online events such as meetups and quiz session during department activity",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships & Part Time",
      experiences: [
        {
          title: "IT Support Internship",
          company: "Miba Academy.",
          company_url: "",
          logo_path: "tiktok_logo.png",
          duration: "Sep 2020 - May 2021",
          location: "Seremban",
          description:
            "• Provide IT Support in terms hardware and software support such as setup workspace includes PC, printer and wifi.• Designing and creating posters for marketing urpose using Adobe Photoshop andAdobe Illustrator.• Develop and host website using CodeIgniter framework and GoDaddy Platform.• Develop and host website using ootstrap Library and Plesk Hosting platform.• Involve in marketing activity by presenting company products to new customers and deal with them.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create a scalable application with highly distributed architecture to ensure it delivers ACID Paradigm. (Availability, Consistency, Isolation * Durability",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published my own Final Year Project and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "402",
      name: "Smart Irrigation System Using Raspberry Pi",
      createdAt: "28 Feb 2020",
      description: "Smart Irrigation System Using Raspberry Pi",
      url: "https://ir.uitm.edu.my/id/eprint/402/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with System Design, Java Programming, Docker and VM Configuration, Linux Related and PC Setup.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.syamilthoughts.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Seremban, Negeri Sembilan",
    locality: "Negeri Sembilan",
    country: "MY",
    region: "Seremban",
    postalCode: "70400",
    location_map_link:
      "https://www.google.com/maps/d/u/0/viewer?mid=11AQWEBwjknqD-vouDgpbYiQ0snk&hl=en&ll=2.7349163232627554%2C101.959112&z=14MpMqtRZytFchMkZ76",
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
