/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

// Base URLs
const backendBaseURL = "https://deployer.sharankonda.com";
const hostedURL = "http://project.sharankonda.com";

//SEO Related settings
const seo = {
  title: "Sharan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sharan Konda's Portfolio",
    type: "website",
    url: "https://www.sharankonda.com",
  },
};

//Home Page
const greeting = {
  title: "Sharan Reddy Konda",
  logo_name: "Sharan Konda",
  nickname: "",
  subTitle:
    "In the world of technology, versatility is the key. As a full-stack developer, I thrive on bridging the gap between front-end elegance and back-end functionality, ensuring seamless user experiences.",
  resumeLink: "https://www.sharankonda.com/SharanSaiReddy_Konda.pdf",
  portfolio_repository: "https://www.github.com/sharanreddy99/portfolio_new",
  githubProfile: "https://www.github.com/sharanreddy99",
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
    link: "https://github.com/sharanreddy99",
    fontAwesomeIcon: "fa-brands fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sharan-konda-90b3a6193/",
    fontAwesomeIcon: "fa-brands fa-linkedin", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sharan_konda/",
    fontAwesomeIcon: "fa-brands fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Gmail",
    link: "mailto:sharansaikonda99@gmail.com",
    fontAwesomeIcon: "fa-solid fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "phone",
    link: "tel:sharansaikonda99@gmail.com",
    fontAwesomeIcon: "fa-solid fa-phone", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in a variety of programming languages including Golang, Python, Java",
        "⚡ Extensive experience with database management systems such as Oracle SQL, MySQL, and MongoDB, ensuring efficient data handling and storage solutions for applications.",
        "⚡ Skilled in utilizing various technologies and frameworks including React, Angular, Node, Beego, Material UI, Generative AI, and Langchain to develop dynamic and user-friendly web applications.",
        "⚡ Ability to design and develop full-stack applications from concept to deployment, with a keen understanding of both frontend and backend development principles.",
        "⚡ Experienced in collaborating with cross-functional teams to deliver high-quality software solutions that meet client requirements and industry standards.",
      ],
      softwareSkills: [
        {
          skillName: "GoLang",
          fontAwesomeClassname: "skill-icons:golang",
          style: {
            color: "#00b4e0",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#00b4e0",
          },
        },
        {
          skillName: "JAVA",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            color: "#00b4e0",
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
          skillName: "Typescript",
          fontAwesomeClassname: "devicon:typescript",
          style: {
            backgroundColor: "#ffffff",
            color: "#F7DF1E",
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
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "devicon:php",
          style: {
            color: "#CC6699",
          },
        },

        {
          skillName: "Oracle SQL",
          fontAwesomeClassname: "devicon:oracle",
          style: {
            color: "#CC6699",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "devicon:mysql-wordmark",
          style: {
            color: "#CC6699",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {
            color: "#CC6699",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "devicon:react-wordmark",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "Material UI",
          fontAwesomeClassname: "devicon:materialui",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
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
      title: "Cloud and Devops",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in containerization technologies such as Docker for packaging applications into containers for easy deployment and management.",
        "⚡ Skilled in managing infrastructure as code using Terraform to provision and manage cloud resources in a declarative manner.",
        "⚡ Proficient in Kubernetes for orchestrating and managing containerized applications.",
        "⚡ Experienced in managing and configuring web servers like Nginx for load balancing, reverse proxying, and serving static content, optimizing application delivery and performance.",
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
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
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
          skillName: "NGINX",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#009639",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#5c4ee5",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "devicon-plain:ansible-wordmark",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
          style: {
            color: "#5c4ee5",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "mdi:git",
          style: {
            color: "#f34f29",
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
      profileLink: "https://leetcode.com/sharanreddy99/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/Sharanreddy",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/sharan99",
    },
    {
      siteName: "Github",
      profileLink: "https://github.com/sharanreddy99",
      iconifyClassname: "simple-icons:github", // Reference https://fontawesome.com/icons/github?style=brands
      style: {
        color: "black", // Reference https://simpleicons.org/?q=github
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Florida",
      subtitle: "M.S. in Computer and Informational Sciences",
      logo_path:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzBN8M-Is3ScTthW9PatpkKz6iq5Nrqq_NCc8BKM9-A&s",
      alt_name: "UFL",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.ufl.edu/",
    },
    {
      title: "Vardhaman College of Engineering",
      subtitle: "B.Tech. in Computer Science",
      logo_path:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToGXFeoDiOjTLpR8PF-U_-_CtxhTcNDBJXxx6LswsMdQ&s",
      alt_name: "VMEG",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://vardhaman.org//",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle: "- Associate Level",
      logo_path: "AWSSAA3.png",
      certificate_link:
        "https://www.credly.com/badges/6bfbeb13-dace-4d93-b14a-287b56fe53aa/linked_in_profile",
      alt_name: "AWS_SAA3",
      color_code: "#00000099",
      body: [
        "Highly skilled in various AWS Services, including but not limited to services offered in the areas of compute, storage, database, networking and content delivery, security and identity management.",
        "Ability to design robust and scalable architectures that meet the specific needs of a given application while adopting the best practices.",
      ],
    },
    {
      title: "Microsoft Certified: Azure Data Engineer",
      subtitle: "- Associate Level",
      logo_path: "AzureDE.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/SharanSaiKonda-2095/F240BC29AFD71C97?sharingId=C707F11359781231",
      alt_name: "dp209",
      color_code: "#00000099",
      body: [
        "deep expertise in a range of Azure data services, including Azure Data Factory, Synapse Analytics, Data Lake Storage Gen2, Databricks.",
        "Proficient in designing and implementing robust, scalable data solutions that ensure efficient data management, processing, and security.",
        "Demonstrates a strong ability to leverage Azure's comprehensive suite of data services to build resilient architectures that cater to complex data workflows, optimize performance, and adhere to best practices in data governance and compliance.",
      ],
    },
    {
      title: "Docker and Kubernetes",
      subtitle: "- Associate Level",
      logo_path: "dockerkubernetes.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#00000099",
      body: [
        "Highly skilled in containerizing projects built using various technologies and stacks and can seamlessly containerize applications into production ready services while ensuring efficiency and speed.",
        "Ability to orchestrate multi-container applications and manage their dependencies using docker compose.",
        "Proficient in building applications using microservice architecture and containerizing them to seamlessly deploy them.",
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  subtitle: "",
  description:
    "With close to two years of experience as a Software Engineer at Sureify Labs, I specialize in developing scalable and efficient solutions for real-world challenges. Passionate about enhancing operational efficiency and data integrity, I've engineered Python scripts, optimized SQL queries, and revamped microservices, consistently delivering significant reductions in overhead and response times.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer - II",
          company: "Sureify Labs",
          company_url: "https://www.sureify.com/",
          logo_path: "sureify.jpg",
          duration: "March 2022 - December 2022",
          location: "",
          description: ` <ul className="list-group">
      <li className="list-group-item">Engineered and deployed a Python script to facilitate seamless data transfer and environment synchronization across multiple stages, enhancing operational efficiency and data integrity of a system supporting 300k active users.</li>
      <li className="list-group-item">Spearheaded development of a React web-app for an API wrapper microservice, employing drag-and-drop functionality to connect data mappings in a graph-like structure. Delivered a 60% reduction in configuration overhead.</li>
      <li className="list-group-item">Enhanced Docker scripts to integrate an automated documentation micro-service, enabling real-time retrieval and serving of the latest documentation generated by backend services, thereby improving content accessibility and system responsiveness.</li>
      </ul>`,
          color: "#000000",
        },
        {
          title: "Software Engineer - I",
          company: "Sureify Labs",
          company_url: "https://www.sureify.com/",
          logo_path: "sureify.jpg",
          duration: "December 2020 - March 2022",
          location: "",
          description: ` <ul className="list-group">
      <li className="list-group-item">Optimized SQL database queries for high-volume email transaction system, reducing cron job processing times by 40% and enhancing reliability for 150k  scheduled emails daily.</li>
      <li className="list-group-item">Improved session validation procedures using JWT Tokens and Redis, cutting down response times by 45% without impacting backward compatibility for 100k+ users.</li>
      <li className="list-group-item">Revamped the API Wrapper Microservice, transitioning from synchronous to asynchronous API calls using Worker Pools for parallel response processing to mitigate high latency issues, achieving a 75% reduction in response times for 850K API requests daily.</li>
      <li className="list-group-item">Refined data mappings and API integration for a dynamic, database-driven UI, ensuring efficient and accurate data utilization for customer interfaces.</li>
      <li className="list-group-item">Configured debugging tools for Dockerized microservices, reducing diagnostic time by 30% and increasing development efficiency.</li>
      </ul>`,
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects and Dev Work",
  description:
    "Created an exciting portfolio platform on AWS, powered by dynamic project deployment through Docker Compose. Seamlessly scalable, it adapts to user engagement, ensuring optimal resource usage and limitless project hosting with simple storage expansion. Integrated AWS services like S3, SNS, Route53, and Nginx guarantee unparalleled performance, fortified by IAM and CloudWatch for top-notch security and monitoring.",
  avatar_image_path: "projects_image.svg",
};

const repos = {
  show: true,
  repoURL: `${backendBaseURL}/v1/github/getReposList/`,
  languagesURL: `${backendBaseURL}/v1/github/getLanguagesList/`,
  deployURL: `${backendBaseURL}/v1/aws/publishSNS`,
  hostedURL: hostedURL,
  heading: "Projects",
  gitHubUsername: "sharanreddy99",
  reposLength: 10,
  specificRepos: [],
};

const projectCredentials = {
  ceta: `<div class="mb-3">
    Faculty Email: <b>prasad@gmail.com</b><br/>
    Faculty Password: <b>Prasad@99</b><br/>
    <hr/>
    Student Roll Number: <b>17881A05G6</b></br>
    Student Password: <b>Sharan@123</b></br>
  </div>`,
  housemate: `<div class="mb-3">
    Email: <b>sharan.personal.projects@gmail.com</b><br/>
    Faculty Password: <b>Sharan@99</b><br/>
    <hr/>
  </div>`,
  securechat:
    "<b> Please sign in using your gmail account inorder to access the application.</b>",
  elevator_multithreading:
    "<b> No credentials are required for this application. </b>",
  image_slideshow: "<b> No credentials are required for this application. </b>",
  polls_viewer: "<b> No credentials are required for this application. </b>",
  walmart_order_parser:
    "<b> No credentials are required for this application. </b>",
  dbms_algos: "<b> Password: sharanreddy </b>",
};

// const publicationsHeader = {
//   title: "Publications",
//   description: "Some of my published Articles, Blogs and Research.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.jpg",
    description:
      "I have a strong enthusiasm for creating scalable and easily maintainable applications using the latest technologies. Currently, I am actively seeking opportunities in the fields of Software Development and DevOps. If you are aware of any open positions, have inquiries, or simply want to connect and say hello, please don't hesitate to get in touch with me!",
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
  contactPageData,
  repos,
  projectCredentials,
};
