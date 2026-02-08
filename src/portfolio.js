/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nikki Vishwakarma",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Nikki Vishwakarma Portfolio",
    type: "website",
    url: "http://nikkivishwakarma.com/",
  },
};

//Home Page
const greeting = {
  title: "Ganesh Pratap Vishwakarma",
  logo_name: "NikkiVishwakarma",
  nickname: "Nikki",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/ganeshpratap1306/masterPortfolio",
  githubProfile: "https://github.com/ganeshpratap1306",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ganeshpratap1306",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ganesh-pratap-vishwakarma-8b252a290/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  /* {
     name: "YouTube",
     link: "https://youtube.com/c/DevSense19",
     fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
     backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
   },*/
  {
    name: "Gmail",
    link: "mailto:ganeshpratapvishwakarma05@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://www.threads.com/@nikki_vishwakarma9__________a?xmt=AQF0hjsR7oXpnxZDoZUTXqGmOyOEQv1Xk4ritqE2949lpzw",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/ganeshpratap.vishwakarma.1",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nikki_vishwakarma9__________a/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "DevOps & Cloud Engineering",
      fileName: "DevOpsCloudImg",
      skills: [
        "⚡ Designed and deployed cloud infrastructure to build fast, secure, and highly scalable applications",
        "⚡ Built and maintained CI/CD pipelines to ensure smooth and reliable deployments with minimal downtime",
        "⚡ Containerized applications using Docker and managed them efficiently with Kubernetes",
        "⚡ Worked extensively with Linux servers, monitoring systems, and performance optimization",
        "⚡ Automated repetitive tasks using scripts to improve efficiency, reliability, and delivery speed",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos-aws",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos-docker-icon",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos-kubernetes",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos-jenkins",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "logos-github-actions",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos-linux-tux",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "logos-terraform-icon",
          style: { backgroundColor: "transparent" },
        },
      ],
    },


    {
      title: "Full Stack Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build modern, responsive, and user-friendly web interfaces",
        "⚡ Develop secure and scalable backend APIs using Flask and Node.js",
        "⚡ Design and integrate RESTful APIs for smooth frontend-backend communication",
        "⚡ Test and debug APIs using Postman for reliable development",
        "⚡ Work with databases, authentication, and cloud deployment",],
      softwareSkills: [
        // Frontend
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
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
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: { color: "#06B6D4" },
        },

        // Backend
        {
          skillName: "Node.js",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: { color: "#339933" },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: { color: "#000000" },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: { color: "#000000" },
        },

        // Databases
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },

        // Tools & Cloud
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: { color: "#FF6C37" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { color: "#181717" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
      ],
    },


  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [

    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/ganeshpratapvis1",
    },

  ],
};

const degrees = {
  degrees: [
    {
      title: "Gyan Ganga Institute of Technology and Sciences Jabalpur",
      subtitle: "B.Tech. in Artificial Intelligence and Robotics",
      logo_path: "ggits.png",
      alt_name: "GGITS JABALPURE",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Solid understanding of core computer science concepts and problem-solving.",
        "⚡ Practical learning through hands-on projects in Full Stack, Cloud, and AI.",
        "⚡ Always curious to learn, improve, and build better solutions every day.",
      ],

      website_link: "https://ggits.org/",
    },

  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack Web Development",
      subtitle: "Hitesh Choudhary",
      logo_path: "udmy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-4d1246b0-5a0f-4a6a-a588-58bc3b5b09b6/",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work And Internship",
  description:
    " I’m a job seeker, exploring new opportunities. ✨",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "0",
          company: "0",
          company_url: "0",
          logo_path: "0",
          duration: "0",
          location: "0",
          description:
            "0",
          color: "#000000",
        },



      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "0",
          company: "0",
          company_url: "0",
          logo_path: "0",
          duration: "0",
          location: "0",
          description:
            "0",
          color: "#000000",
        },



      ],
    },
    {
      title: "Volunteerships",
      experiences: [




        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "February 2026- PRESENT",
          location: "Work From Home",
          description:
            "⚡ Start Contributing to Open Source Projects.",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create web applications Deploy in aws.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [


  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactnikki.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Gourpani, Harrai, Chhindwara, Madhya Pradesh, India ",
    locality: "India",
    country: "India",
    region: "Madhya Pradesh",
    postalCode: "480224",
    streetAddress: "Center of the town",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/dir//22.5013109,79.3301093/@22.5012074,79.3296171,20z/data=!4m5!4m4!1m1!4e2!1m0!3e9?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
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
