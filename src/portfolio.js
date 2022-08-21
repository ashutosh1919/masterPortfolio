/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Serdar Raşit's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Serdar Raşit's Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Serdar Raşit Fırlayiş",
  logo_name: "Serdar Rasit Firlayis",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/drive/folders/1wX9o-On5ByUdrzQBrMfQ89Ue91A-QeZ5?usp=sharing",
  portfolio_repository: "https://github.com/serdarfirlayis/serdarfirlayis.github.io",
  githubProfile: "https://github.com/serdarfirlayis",
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
    link: "https://github.com/serdarfirlayis",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/serdarfirlayis/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:serdarfirlayis@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/serdarfirlayis",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100013278221976",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/serdarfirlayis/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    { 
      title: "Software Engineer | Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating application backend in Spring Boot",
        "⚡ Creating application frontend in Angular",
        "⚡ Microservices Architecture Development",
      ],
      softwareSkills: [
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "bxl:spring-boot",
          style: { 
            color:"#6DB33F"
          }
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#E34F26",
          }
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql"
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#4479A1",
          }
        },
        {
          skillName: "Elasticsearch",
          fontAwesomeClassname: "logos:elasticsearch"

        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "logos:angular-icon"
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
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon"
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "bi:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
    {
      title: "Researcher | Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with NLP and Speech Processing projects"
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName:"Hugging Face",
          fontAwesomeClassname:"fluent-emoji-flat:hugging-face"
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos:pytorch-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458"
          }
        },
        {
          skillName:"Numpy",
          fontAwesomeClassname:"logos:numpy"  
        },
        {
          skillName:"Matplotlib",
          fontAwesomeClassname:"logos:matplotlib-icon"
        }
      ],
    }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "fa-brands:hackerrank",
      style: {
        color: "#00EA64",
      },
      profileLink: "https://www.hackerrank.com/serdarfirlayis",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/serdarfirlayis",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Istanbul University",
      subtitle: "B.Sc. in Computer Engineering",
      logo_path: "Istanbul_Universitesi_Logo.png",
      alt_name: "Istanbul University",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Double Major Program",
        "⚡ Bachelor Thesis: Creating Data Set from Turkish Legal Texts, Extracting        Semantic Results from This Data Set, and Estimating Court Case Outcomes"
      ],
      website_link: "https://bilgisayarmuhendislik.iuc.edu.tr/en/_",
    },
    {
      title: "Istanbul University",
      subtitle: "B.Sc. in Electrical and Electronics Engineering",
      logo_path: "Istanbul_Universitesi_Logo.png",
      alt_name: "Istanbul University",
      duration: "2015 - 2020",
      descriptions: [
        "⚡ Best CGPA (3.74/4.00) among EEE students, (Class Rank: 1) 🥇",
        "⚡ High Honour Degree",
        "⚡ Bachelor Thesis: Research and Simulations about Visible Light Communication"
      ],
      website_link: "https://elektrikelektronikmuhendislik.iuc.edu.tr/en/_",
    },
  ],
};

const certifications = {
  certifications: [
    /*{
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "During my university education, I increased my experience by working both part-time and as an intern in many companies. In this way, I had the chance to experience different team environments and working topics.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Researher",
          company: "Tübitak Bilgem",
          company_url: "https://bilgem.tubitak.gov.tr/en",
          logo_path: "tübitak_bilem_logo-removebg-preview.png",
          duration: "Full-time • Aug 2022 - PRESENT",
          location: "Gebze, Kocaeli, Turkey",
          description:
            "I am working as a Software Engineer and NLP researcher in Data Valorisation Solutions at Information Technologies Institute.",
          color: "#0879bf",
        },
        {
          title: "Researh Scholar",
          company: "Tübitak Bilgem",
          company_url: "https://bilgem.tubitak.gov.tr/en",
          logo_path: "tübitak_bilem_logo-removebg-preview.png",
          duration: "Part-time • Sep 2021 - July 2022",
          location: "Gebze, Kocaeli, Turkey",
          description:
            "I am working as a Software Engineer and NLP researcher in Data Valorisation Solutions at Information Technologies Institute.",
          color: "#0879bf",
        },
        {
          title: "Intern Engineer",
          company: "Turkish Aerospace",
          company_url: "https://www.tusas.com/en",
          logo_path: "tai_logo.png",
          duration: "Part-time • Nov 2019 - May 2020",
          location: "Istanbul, Turkey",
          description:
            "",
          color: "#0879bf",
        },
        {
          title: "Laboratory Teaching Assistant",
          company: "Istanbul University",
          company_url: "https://elektrikelektronikmuhendislik.iuc.edu.tr/en/",
          logo_path: "Istanbul_Universitesi_Logo.png",
          duration: "Part-time • Nov 2018 - May 2019",
          location: "Istanbul, Turkey",
          description:
            "Lab assistant for ELMU2006 Circuit Laboratory course.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Engineering Intern",
          company: "Aselsan",
          company_url: "https://www.aselsan.com.tr/en",
          logo_path: "aselsan.png",
          duration: "Jun 2019 - July 2019",
          location: "Ankara, Turkey",
          description:
            "",
          color: "#ee3c26",
        },
        {
          title: "Engineering Intern",
          company: "Baykar Defence",
          company_url: "BaykarLogo.png",
          logo_path: "BaykarLogo.png",
          duration: "Jun 2018 - Sep 2018",
          location: "Istanbul, Turkey",
          description:
            "",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack Web projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ttt-removebg-preview.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@serdarfirlayis",
    avatar_image_path: "blogs_image.svg",
  }
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
  contactPageData,
};
