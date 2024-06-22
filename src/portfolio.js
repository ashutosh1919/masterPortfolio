/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ritvi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end projects to develop  scalable technical systems to create impact.",
  og: {
    title: "Ritvi Portfolio",
    type: "website",
    url: "http://ritvishah.com/",
  },
};

//Home Page
const greeting = {
  title: "Ritvi Shah",
  logo_name: "Ritvi Shah",
  subTitle:
    "A passionate individual who always thrives to work on end to end projects to develop scalable technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1_XoR-_ktPj6pWmW658cQrdnamPVrhE26/view?usp=sharing",
  portfolio_repository: "https://github.com/ritvi3601",
  githubProfile: "https://github.com/ritvi3601",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ritvi3601",
  // linkedin: "https://www.linkedin.com/in/ritvi3601/",
  // gmail: "shahritvi3@gmail.com",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ritvi14",

  {
    name: "Github",
    link: "https://github.com/ritvi3601",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ritvi3601//",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shahritvi3@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/ritvi14",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/_ritvi_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "BI & Data Visualization",
      fileName: "FullStackImg",
      skills: [
        "⚡Extensively built solution driven views and dashboards to convey the story inside the data",
        "⚡ Formulated reports, identified KPIs and rendered the metrics and results as dashboards",
        "⚡ Implemented projects that yielded measurable results including reduced cost, improved system/ process performance and increased efficiency",
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          subtitle: "Tableau",
          logo_path: "tableau-software.png",
          style: {
            color: "#78909C",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#78909C",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "MS Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#20744a",
          },
        },
        {
          skillName: "Amazon S3",
          fontAwesomeClassname: "simple-icons:amazons3",
          style: {
            color: "#339933",
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
          skillName: "Quicksight",
          fontAwesomeClassname: "logos-aws-quicksight",
          style: {
            color: "#CB3837",
          },
        },
        {
          // skillName: "Yarn",
          // fontAwesomeClassname: "simple-icons:yarn",
          // style: {
          //   color: "#2C8EBB",
          // },
        },
        {
          // skillName: "Gatsby",
          // fontAwesomeClassname: "simple-icons:gatsby",
          // style: {
          //   color: "#663399",
          // },
        },

      ],
    },
  
    {
      title: "Data Engineering & Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡Developed Data Pipelines (ETL), Data Architecture, Data Management, Stream Processing, System analysis and Cloud migration solutions",
        "⚡Experience with Data flow diagrams, Data dictionary, Database normalization theory techniques, Entity relation modeling and design techniques",
        "⚡Experience with workflow automation tools and setup of CI/CD pipelines",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
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
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
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
      ],
    },
    {
      title: "Data Science & ML",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developed highly scalable production ready models for various machinelearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Implemented highly scalable production ready models for various machinelearning and statistical use cases",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
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
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
   
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
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
      profileLink: "https://leetcode.com/u/ritvi3601/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/ritvishah3601",
    },

  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Texas at Dallas",
      subtitle: "Masters in Information Technology and Management",
      logo_path: "utd_logo.png",
      alt_name: "UTD",
      duration: "2023 - 2025",
      descriptions: [
        "⚡  I enrolled in this master's program because I believed the curriculum would hone my analytical and business knowledge, allowing me to solve real world business problems more efficiently.",
        "⚡ I took a mix of Data Engineering, Data Science, Data analysis and Project Management courses."
      ],
      website_link: "https://www.utdallas.edu/",
    },
    {
      title: "Gujarat Technological University",
      subtitle: "B.Tech in Information Communication Technology",
      logo_path: "gtu_logo.png",
      alt_name: "Gujarat Technological University",
      duration: "2019 - 2023",
      descriptions: [
        "⚡  I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, ML, AI etc.",
        "⚡ During my time at university, I developed my skills in the area of analytics using tools like Python, SQL, and Tableau.",
        "⚡ I further created projects using python libraries like NumPy, Pandas, and Matplotlib."
      ],
      website_link: "https://www.gtu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Data Engineering",
      subtitle: "AWS Academy",
      logo_path: "aws_academy.png",
      certificate_link:
        "https://www.credly.com/badges/412014db-23b5-4f18-95a1-8ca870c9e3ab/linked_in_profile",
      alt_name: "AWS Academy",
      //color_code: "#8C151599",
    },
    {
      title: "Advanced Excel",
      subtitle: "- Kyle Pew",
      logo_path: "excel.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-14a235ca-9294-46ca-bac8-a07a0d1f8847/",
      alt_name: "excel",
      //color_code: "#00000099",
    },
    {
      title: "Web Development",
      subtitle: "- Angela Yu",
      logo_path: "webdev.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b2eb347a-8e89-47f5-8e18-c4148a587926/",
      alt_name: "Web Dev",
      //color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience, Leadership and Volunteering",
  description:
    "I have worked across data pipelines providing effective and efficient Data Engineering, Data Science and Business Intelligence solution architectures. I want to help businesses adopt cloud and modern data practices, deploying scalable analytic solutions and doing workflow orchestration in production.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Data Engineer",
          company: "York IE",
          company_url: "https://york.ie/",
          logo_path: "york.png",
          duration: "Jan 2023 - Jun 2023",
          location: "Ahmedabad, Gujarat, India",
          description:
            "I was responsible for synchronizing data between Google Sheets and DynamoDB, ensuring any changes in the Google Sheets were reflected in DynamoDB. This involved setting up the Google Sheets API, comparing fetched data with the existing DynamoDB schema, and updating the table's structure using AWS SDK for Python (Boto3). Automation was achieved by triggering a Lambda function periodically through CloudWatch events. A key part of my role was handling Personally Identifiable Information (PII), where I implemented secure storage and processing protocols. I created IAM policies to control access, stored data in Amazon S3 and RDS, and utilized AWS KMS for encryption. Monitoring and compliance were maintained through AWS CloudTrail, CloudWatch, GuardDuty, and AWS Config. Additionally, I focused on enhancing user experience by managing recurring data and implementing user-friendly error messages. I ensured data integrity and security through EC2, executing SQL queries, and securing JSON datasets. I eliminated duplicate fields by using Amazon S3 for storage, AWS Glue to create tables, and Amazon Athena to run SQL queries with DISTINCT and GROUP BY functions. This comprehensive approach safeguarded student information obtained from Blackbaud, providing robust data protection throughout its lifecycle.",
          //color: "#000000",
        },
        {
          title: "Data Analyst",
          company: "Brainy Beam Pvt Ltd",
          company_url: "https://www.brainybeam.com/",
          logo_path: "brainy.png",
          duration: " Apr 2022 - Jun 2022",
          location: "Ahmedabad, Gujarat, India",
          description:
            "During my internship, I established an analysis of user behavior data from an e-commerce platform using statistical and Markov analysis techniques. This involved conducting exploratory data analysis, goal setting, forecasting, and quantitative descriptive statistics on sales data to optimize KPIs, which resulted in a 14% reduction in backlogs. I optimized data warehousing to handle Big Data by using SQL and R for product analysis, leading to a 20% reduction in data redundancy. Additionally, I performed data modeling and cleaning to ensure the accuracy and reliability of the data. Utilizing Power BI, I created interactive dashboards and visualizations to present insights and trends effectively. This comprehensive approach not only improved the efficiency of data handling but also provided valuable insights that contributed to strategic decision-making. By integrating advanced analytical techniques and robust data management practices, I was able to enhance the overall performance and reliability of the data infrastructure, demonstrating my ability to leverage data for business optimization and driving impactful results.",
          color: "#0879bf",
        },
        {
          title: "Data Visualization Intern",
          company: "Saint Louis University",
          company_url: "https://www.slu.edu/",
          logo_path: "slu_logo.png",
          duration: "May 2021 - Jun 2021",
          location: "Remote",
          description:
            "During my internship, I spearheaded a statistical analysis using TensorFlow and Scikit-Learn, and processed text predictions using Python's NLTK. I emphasized the use of Microsoft Excel and Matplotlib to showcase data processing and create informative charts. Additionally, I developed a Database Management System utilizing Microsoft VBA for efficient data mapping and executed a Power BI dashboard, enhancing data insights and efficiency by 4%. I also engineered custom sentiment analysis models, leveraging pre-trained NLP models to achieve high accuracy rates. My responsibilities included extensive data modeling and cleaning to ensure the integrity and reliability of the datasets. Furthermore, I utilized Tableau to create interactive dashboards that provided comprehensive data visualizations and insights. This combination of advanced analytical techniques, robust data management practices, and effective data visualization tools allowed me to deliver valuable insights and contribute to strategic decision-making processes. My work not only improved data processing efficiency but also enhanced the overall data analysis capabilities of the organization, demonstrating my ability to apply technical skills to drive impactful results.",
          color: "#9b1578",
        },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Leadership",
      experiences: [
        {
          title: "Program Manager",
          company: "Phoenix Club",
          company_url: "https://www.instagram.com/phoenix_club21/",
          logo_path: "phoenix_club_logo.png",
          duration: "Aug 2022 - May 2023",
          location: "Ahmedabad, Gujarat",
          description:
            "I led the transformation of our student leadership team, successfully increasing membership by 20% over two years. This was achieved through close collaboration with industry leaders and comprehensive training of students in instructional, logistical, and technological tasks, which significantly improved performance outcomes. Additionally, I worked with the analytics team to identify and address system issues, thereby enhancing teamwork efficiency. I also initiated and executed a targeted outreach campaign that created valuable opportunities for student internships and mentorships, ultimately boosting our annual revenue by $5K.",
          color: "#000000",
        },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Safecity Safety Co-ordinator",
          company: "Red Dot Foundation",
          company_url: "https://reddotfoundation.org/",
          logo_path: "safecitylogo_final.png",
          duration: "Apr 2020 - Jun 2020",
          location: "Ahmedabad, Gujarat",
          description:
            "I led efforts to crowdsource anonymous personal stories of harassment and abuse, enabling the aggregation of crime hotspots on a local map. Collaborating with local organizations, I supported survivors and promoted a safer community environment. By initiating and participating in a grassroots project, I actively contributed to the community's safety and well-being, focusing on combating sexual harassment and abuse in public spaces. This initiative not only raised awareness but also provided a platform for survivors to share their experiences and find support, fostering a collective effort to create a safer public space for all.",
          color: "#4285F4",
        },
        {
          title: "Volunteer",
          company: "Grow Billion Trees",
          company_url: "https://growbilliontrees.com/pages/tree-plantation-in-ahmedabad",
          logo_path: "grow_billion_trees_logo.png",
          duration: "Aug 2020 - Dec 2020",
          location: "Ahmedabad, Gujarat",
          description:
            "Every weekend, we spearheaded extensive seed planting campaigns across various regions, transforming local landscapes into lush, green sanctuaries. Our initiatives also included interactive sessions with frontline warriors during the pandemic, focusing on mental health support and resilience. These sessions provided invaluable insights and emotional aid to those tirelessly serving our community. Furthermore, we organized numerous donation drives, gathering essential supplies for those in need, and made heartwarming visits to orphanages, bringing joy and support to countless children. Our multifaceted approach not only promoted environmental sustainability but also fostered community well-being and solidarity.",
          color: "#D83B01",
        },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
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
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      // id: "neuro-symbolic-sudoku-solver",
      // name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      // description: "Paper published in KDD KiML 2023",
      // url: "https://arxiv.org/abs/2307.00653",
    },
    {
      // id: "mdp-diffusion",
      // name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      // description: "Blog published in Paperspace",
      // url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      //id: "consistency-models",
      //name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      //description: "Blog published in Paperspace",
      //url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am keen to apply my skills and contribute to the organzation I work at. I am open to work in areas like Data analytics, Data Engineering, Data science and Cloud.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    //title: "Address",
    // subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    // locality: "San Jose",
    // country: "USA",
    // region: "California",
    // postalCode: "95129",
    // streetAddress: "Saratoga Avenue",
    // avatar_image_path: "address_image.svg",
    // location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
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
