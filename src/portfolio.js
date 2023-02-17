/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kosuke's Portfolio",
  description:
    "データサイエンスの力を用いて世界をよりよくすることに興味があります。人工知能、特にニューラルネットワークを用いた問題解決に注力しています。計算機との出会いは中学校の時に熱中したオンラインゲームです。E-sportsという言葉もなく、ゲーム配信の価値が模索されている中、ローエンドな計算機でオンラインゲーム、またそこでの仲間とのコミュニケーションを楽しみました。その経験から東京工業大学情報理工学院に入学し、計算機の理解を深めました。機械の「知能」を機械の「言葉」に感じ、自然言語処理を専門とする研究室に所属しています。言葉を理解して人の手伝いができるような機械に魅力を感じています。",
  og: {
    title: "Kosuke Endo Portfolio",
    type: "website",
    url: "http://kosukeendo.com/",
  },
};

//Home Page
const greeting = {
  title: "Kosuke Endo",
  logo_name: "KosukeEndo",
  nickname: "immisius",
  subTitle:
    "データサイエンスの力を用いて世界をよりよくすることに興味があります。人工知能、特にニューラルネットワークを用いた問題解決に注力しています。計算機との出会いは中学校の時に熱中したオンラインゲームです。E-sportsという言葉もなく、ゲーム配信の価値が模索されている中、ローエンドな計算機でオンラインゲーム、またそこでの仲間とのコミュニケーションを楽しみました。その経験から東京工業大学情報理工学院に入学し、計算機の理解を深めました。機械の「知能」を機械の「言葉」に感じ、自然言語処理を専門とする研究室に所属しています。言葉を理解して人の手伝いができるような機械に魅力を感じています。",
  resumeLink:
    "https://drive.google.com/file/d/1k0SYUjUUk-VWZHNg92YVFdFLeiZua1qz/view?usp=sharing",
  portfolio_repository: "https://github.com/immisius/masterPortfolio",
  githubProfile: "https://github.com/immisius",
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
    link: "https://github.com/immisius",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  //   {
  //     name: "LinkedIn",
  //     link: "https://www.linkedin.com/in/ashutosh1919/",
  //     fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
  //     backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  //   },
  //   {
  //     name: "YouTube",
  //     link: "https://youtube.com/c/DevSense19",
  //     fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //     backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  //   },
  {
    name: "Gmail",
    link: "immisius@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/immisius",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  //   {
  //     name: "Facebook",
  //     link: "https://www.facebook.com/laymanbrother.19/",
  //     fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //     backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  //   },
  //   {
  //     name: "Instagram",
  //     link: "https://www.instagram.com/layman_brother/",
  //     fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //     backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  //   },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ 機械学習アプリケーションの開発",
        "⚡ 画像キャプション生成へのJPEG圧縮の影響の分析と改善（学士論文）",
        "⚡ 修士論文のテーマは考案中です。",
        "⚡ 機械学習コンペティションにおけるチーム開発",
        // "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        // "⚡ Experience of working with Computer Vision and NLP projects",
        // "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        // {
        //   skillName: "Tensorflow",
        //   fontAwesomeClassname: "logos-tensorflow",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "Keras",
        //   fontAwesomeClassname: "simple-icons:keras",
        //   style: {
        //     backgroundColor: "white",
        //     color: "#D00000",
        //   },
        // },
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
      ],
    },
    // {
    //   title: "Full Stack Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building responsive website front end using React-Redux",
    //     "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
    //     "⚡ Creating application backend in Node, Express & Flask",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "Sass",
    //       fontAwesomeClassname: "simple-icons:sass",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#000000",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     },
    //     {
    //       skillName: "NodeJS",
    //       fontAwesomeClassname: "simple-icons:node-dot-js",
    //       style: {
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "NPM",
    //       fontAwesomeClassname: "simple-icons:npm",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //     {
    //       skillName: "Yarn",
    //       fontAwesomeClassname: "simple-icons:yarn",
    //       style: {
    //         color: "#2C8EBB",
    //       },
    //     },
    //     {
    //       skillName: "Gatsby",
    //       fontAwesomeClassname: "simple-icons:gatsby",
    //       style: {
    //         color: "#663399",
    //       },
    //     },
    //     {
    //       skillName: "Flutter",
    //       fontAwesomeClassname: "simple-icons:flutter",
    //       style: {
    //         color: "#02569B",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
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
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/immisius/",
    // },
    // {
    //   siteName: "AtCoder",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://atcoder.jp/users/immisius",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/immisius",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "東京工業大学",
      subtitle: "情報理工学院 情報工学系",
      logo_path: "tokyotech.jpeg",
      alt_name: "Tokyo Tech",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ 初年度に理工系の基礎科目を学び、2年次以降に情報工学の専門知識を学びました。",
        "⚡ 情報工学分野では機械学習を中心に数理的な背景まで体系的な知識を会得しました。",
        "⚡ 自然言語処理を専門とする岡崎研究室に所属し、人工知能の研究をしました。",
      ],
      grade_link:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRiy3mbWlCj8DMfjRQt29zHFCo6L8QizFcfGa16gZEyJh3fuZX0o-LW2R5pgF464Mb5BDjmfKb2fvTN/pubhtml",
      website_link: "https://www.nlp.c.titech.ac.jp/index.ja.html",
    },
    {
      title: "東京工業大学大学院　（予定）",
      subtitle: "情報理工学院 知能情報コース",
      logo_path: "tokyotech.jpeg",
      alt_name: "Tokyo Tech",
      duration: "2023 - 2025",
      descriptions: ["⚡ 引き続き、岡崎研究室に所属する予定です。"],
      website_link: "https://www.nlp.c.titech.ac.jp/index.ja.html",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "深層生成モデルサマースクール",
      subtitle: "- 東大 松尾研究室",
      logo_path: "toudai.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1ZfGuu6fUwdssNaIcHoppKCz0mDe9_TQr/view?usp=sharing",
      alt_name: "東大",
      color_code: "#FFFFFF",
    },
    {
      title: "TOEIC L&W 865",
      subtitle: "- ETS",
      logo_path: "toiec.png",
      certificate_link:
        "https://drive.google.com/file/d/1IFyoVx6oR25LjdULoz9H1WqhcwiiQ49L/view?usp=sharing",
      alt_name: "TOEIC",
      color_code: "#FFFFFF",
    },

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
const competitions = {
  certifications: [
    {
      title: "AtCoder",
      // subtitle: "- 東大 松尾研究室",
      logo_path: "atcoder.png",
      certificate_link: "https://atcoder.jp/users/immisius",
      alt_name: "AtCoder",
      color_code: "#FFFFFF",
    },
    {
      title: "Kaggle",
      //   subtitle: "- TOEIC",
      logo_path: "kaggle.svg",
      certificate_link: "https://www.kaggle.com/immisius",
      alt_name: "Kaggle",
      color_code: "#0A2472",
    },
    {
      title: "Signate",
      //   subtitle: "- TOEIC",
      logo_path: "signate.png",
      certificate_link: "https://signate.jp/users/110232",
      alt_name: "Signate",
      color_code: "#FFFFFF",
    },
    {
      title: "Nishika",
      //   subtitle: "- TOEIC",
      logo_path: "nishika.jpg",
      certificate_link:
        "https://competition.nishika.com/users/YZrBgeo5KRVjqJmx",
      alt_name: "Nishika",
      color_code: "#7F8DAA",
    },
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
  subtitle: "Job, Internship and Hobby",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Part time jobs",
      experiences: [
        {
          title: "家庭教師",
          //   company: "Legato Health Technology",
          //   company_url: "https://legatohealthtech.com/",
          logo_path: "no-image.png",
          duration: "2019/6 -  2019/12",
          //   location: "Hyderabad, Telangana",
          description:
            "母の知り合いのご家庭で家庭教師をしました。中高一貫校に所属される高校1年生でした。数学、物理を担当しました。",
          color: "#0879bf",
        },
        {
          title: "塾講師",
          company: "英才個別指導学院",
          company_url: "https://www.eisai.org/",
          logo_path: "eisai.jpg",
          duration: "2020/12 - 2020/4",
          //   location: "Pune, Maharashtra",
          description:
            "主に理数系科目について中高生を相手に個別指導をしました。軌道に乗りつつあったところ、新型コロナウイルスの流行により退職せざるを得なくなりました。",
          color: "#9b1578",
        },
        {
          title: "塾講師",
          company: "個別指導のトライ",
          company_url: "https://www.trygroup.co.jp/",
          logo_path: "kateikyousi.svg",
          duration: "2020/4 - 2021/3",
          // location: "Pune, Maharashtra",
          description:
            "主に理数系科目について中高生を相手に個別指導をしました。自宅の近くで働けたため、積極的に参加することができました。",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer intern",
          company: "IPDefine Ltd.",
          company_url: "https://ipdefine.com/",
          logo_path: "ipdefine.avif",
          duration: "2021/4 - ",
          location: "Tokyo, Japan",
          description: "",
          color: "#F40078",
        },
      ],
    },
    {
      title: "Hobbies",
      experiences: [
        {
          title: "サークル活動",
          company: "WAVE",
          company_url:
            "https://twitter.com/wave_diving?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
          logo_path: "wave.jpeg",
          duration: "2019/4 -  ",
          location: "Meguro, Tokyo",
          description:
            "海好き、水族館好き、魚好きが高じて東工大入学とともにダイビングサークルに入りました。夏の肌は黒くなりがちです。",
          color: "#338AFF",
        },
        {
          title: "サッカー観戦",
          company: "大宮アルディージャ",
          company_url: "https://www.ardija.co.jp/",
          logo_path: "ardija.gif",
          duration: "1999/10 -  ",
          location: "Omiya, Saitama",
          description:
            "サッカー観戦が好きです。特に大宮アルディージャを応援しています。シーズンチケットを持っています。#寝ても大宮",
          color: "#e06c00",
        },
        {
          title: "Formula 1 観戦",
          company: "Formula 1",
          company_url: "https://www.formula1.com/",
          logo_path: "f1.png",
          duration: "2021 -  ",
          location: "The Earth",
          description:
            "F1が好きです。全ドライバー、マーシャル、ピットクルーの安全を願っています。いつか生で観戦したいです。",
          color: "#FF0000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "機械学習を用いたアプリ開発を行っています。",
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
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description: "",
  },
  //   blogSection: {
  //     title: "Blogs",
  //     subtitle:
  //       "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //     link: "https://blogs.ashutoshhathidara.com/",
  //     avatar_image_path: "blogs_image.svg",
  //   },
  //   addressSection: {
  //     title: "Address",
  //     subtitle: "",
  //     avatar_image_path: "address_image.svg",
  //     location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  //   },
  //   phoneSection: {
  //     title: "",
  //     subtitle: "",
  //   },
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
  //   certifications_pub,
  competitions,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
