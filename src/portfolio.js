/* Change this file to get your personal Porfolio */

const theme = {
  primaryTheme: "#6C63FF",
  secondaryTheme: "#55198b",
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
};

const greeting = {
	/* Your Summary And Greeting Section */
	//title: "Hi all 👋 I'm Saad",
	title: "Ashutosh Hathidara",
	nickname: "layman_brother",
	// subTitle:
	//   "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks",
	subTitle:
		"A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
	resumeLink:
		"https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf"
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/ashutosh1919",
	linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
	gmail: "ashutoshhathidara98@gmail.com",
	gitlab: "https://gitlab.com/ashutoshhathidara98",
	facebook: "https://www.facebook.com/laymanbrother.19/",
	twitter: "https://twitter.com/ashutosh_1919",
	instagram: "https://www.instagram.com/layman_brother/"
};

const skills = {
  data: [
    {
      title: "Data Science & AI",
      imagePath: "data_science.svg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        }
      ]
    },
    {
      title: "Full Stack Development",
      imagePath: "fullstack.svg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699"
          }
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
          }
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
          }
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933"
          }
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837"
          }
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB"
          }
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399"
          }
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B"
          }
        }
      ]
    },
    {
      title: "Cloud Infra-Architecture",
      imagePath: "cloud_infrastructure.svg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4"
          }
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900"
          }
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6"
          }
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28"
          }
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791"
          }
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248"
          }
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6"
          }
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5"
          }
        }
      ]
    },
    {
      title: "UI/UX Design",
      imagePath: "ui_ux_design.svg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience"
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2"
          }
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E"
          }
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00"
          }
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000"
          }
        }
      ]
    }
  ]
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866"
      },
      profileLink: "https://www.hackerrank.com/layman_brother"
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638"
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919"
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB"
      },
      profileLink: "http://codeforces.com/profile/layman_brother"
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754"
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391"
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF"
      },
      profileLink: "https://www.kaggle.com/laymanbrother"
    }
  ]
}

const degrees = {
  degrees : [
    {
      title: "Indian Institute of Information Technology Kurnool",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics."
      ],
      website_link: "http://iiitk.ac.in"
    }
  ]
}

const certifications = {
	certifications: [
		{
			title: "Machine Learning",
			subtitle: "- Andrew Ng",
			logo_path: "stanford_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
			alt_name: "Stanford University",
			color_code: "#8C151599"
		},
		{
			title: "Deep Learning",
			subtitle: "- Andrew Ng",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
			alt_name: "deeplearning.ai",
			color_code: "#00000099"
		},
		{
			title: "ML on GCP",
			subtitle: "- GCP Training",
			logo_path: "google_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
			alt_name: "Google",
			color_code: "#0C9D5899"
		},
		{
			title: "Data Science",
			subtitle: "- Alex Aklson",
			logo_path: "ibm_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
			alt_name: "IBM",
			color_code: "#1F70C199"
		},
		{
			title: "Big Data",
			subtitle: "- Kim Akers",
			logo_path: "microsoft_logo.png",
			certificate_link:
				"https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
			alt_name: "Microsoft",
			color_code: "#D83B0199"
		},
		{
			title: "Advanced Data Science",
			subtitle: "- Romeo Kienzler",
			logo_path: "ibm_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
			alt_name: "IBM",
			color_code: "#1F70C199"
		},
		{
			title: "Advanced ML on GCP",
			subtitle: "- GCP Training",
			logo_path: "google_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
			alt_name: "Google",
			color_code: "#0C9D5899"
		},
		{
			title: "DL on Tensorflow",
			subtitle: "- Laurence Moroney",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
			alt_name: "deeplearning.ai",
			color_code: "#00000099"
		},
		{
			title: "Fullstack Development",
			subtitle: "- Jogesh Muppala",
			logo_path: "coursera_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
			alt_name: "Coursera",
			color_code: "#2A73CC"
		},
		{
			title: "Kuberenetes on GCP",
			subtitle: "- Qwiklabs",
			logo_path: "gcp_logo.png",
			certificate_link:
				"https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
			alt_name: "GCP",
			color_code: "#4285F499"
		},
		{
			title: "Cryptography",
			subtitle: "- Saurabh Mukhopadhyay",
			logo_path: "nptel_logo.png",
			certificate_link:
				"https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
			alt_name: "NPTEL",
			color_code: "#FFBB0099"
		},
		{
			title: "Cloud Architecture",
			subtitle: "- Qwiklabs",
			logo_path: "gcp_logo.png",
			certificate_link:
				"https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
			alt_name: "GCP",
			color_code: "#4285F499"
		}
	]
};

const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */

  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username"
};

const bigProjects = {
  /* Some Big Projects You have worked with your company */
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "http://nextu.se/wp-content/themes/nextu/images/og_img.jpg",
      link: "http://nextu.se/"
    }
  ]
};

const achievementSection = {
  /* Your Achievement Section Include Your Certification Talks and More */

  title: "Achievements And Certifications 🏆 ",
  subtitle:
    "Achievements, Certifications Award Letters and Some Cool Stuff that i have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      description:
        "First Pakistani to be selected as Google Google-in Finalist from 4000 students from 77 diffrent countries",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      description:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      description:
        "Completed Certifcation from SMIT for PWA Web App Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ]
};

const blogSection = {
  /* Blogs Section */

  title: "Blogs",
  subtitle:
    "With love for individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  link: "https://ashutoshhathidara.wordpress.com",
  avatar_image_path: "blogs_image.svg"

  
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section
const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ]
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

export {
	theme,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo
};
