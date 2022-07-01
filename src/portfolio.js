/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Deepak Kumar Mandal",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ashutosh Hathidara Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Deepak Kumar Mandal",
  logo_name: "Mercy",
  nickname: "Nomercy Hunter",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1qXnUfDG8s7TwCpwOMTFgH2Wi7fJzyB7l/view?usp=sharing",
  portfolio_repository: "https://github.com/Deepumandal/MyProtfolio",
  githubProfile: "https://github.com/Deepumandal",
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
    link: "https://github.com/Deepumandal",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deepak-mandal-32b885211/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCDqHKKzAyGO4m9JFlo8jdQg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:deepak.studentid2030@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/no_mercy_hunter",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100023750443100",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/no_mercy_hunter/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },   <FontAwesomeIcon icon="f" />
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Design complex styles of a website using bootstrap5 and styling library",
        "⚡ Build narrow funcnality of website using vanila js and ES6 also used jQuery as required ",
        // "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        // "⚡ Creating application backend in Node, Express & mangobd",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          imgurl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABBVBMVEX////9mCz6UC7e7PH9miz7ZC7n8fT6TSn9kAn/8uX8Pwvd8vji6+7f7PD6SyX9nTP1hXb9lBz9liT5bFP+zJ79ql31f2v//Pn+sGn9kxf6Rh/6RyH6Qxj+59H9kAD/+fP+06z+2rn+4cf/9ev+wo39r5/9var9pUr+vH3/7t3+38H9pk39p0z9yr/6SRT+17T+6eTwlov+2Mr+z6Tyn5P6WTn8pJP9nzz0j4D+t3j6XTL8loH+4t77eV78hmj9zcb8tar8Vwv7aEX7ak79wrj7VSL6eU37aj7+v4j+5t39rWP3kHLk19jmysrsv7vusajupJr7fGTpwr3l0dL5XUL1gG/7aSxAzR8/AAAMZUlEQVR4nN2dD0PTyBbFIxTSP5jaQoG0qQWKQmGFRayAu7LvwbLLQ1AU3O//UV5KiEsgc8+dO5k09nwAzM8mMyf3nrlxnH/V85/ZV2lmyrrar5x0LdUnhfC1inCjORmEwRsFoXMxIYTVX1WER5NC2FMRrjcmg3BHSbgwIYQfllSEuzlsFzkQuvMqQKc7GYTeCyXhYDIIO78pCSuTsZZ23isJezmYmhwIlZYmH1OTA2Hwh5LQaU0G4e9qwuWJINxRmjbH2ZwIQo8gzMG22Sd0h0rT5jgr9jfEHAjVlsZx1iaC8CNBmINts0/oHROEg0l4DgnT5jj9SVhLlXWoO00CIWVpHOdg4gm3rf+IORC+pQjt16JyWGkqFKF9U5PDfkgBOisTQDhFEq5a3/KtE7p/k4T2bZt9wr9IwkH5pyckLY3j9F7+9ITt/5CEzs9/lwbqOtSdrFfb7BMqW2uRrJsa+4SkpWHUovyyof5blctjEFb7NOE52PIbqxVDzck1vchArNKAsMHmb4E/ADU7LVaNQ7gD/n1Ui2rsF5zQ/QD+/S1EeF50QqoONRIyNc2jghMCS+M4fUTYKjqhurUWqVcChBvKHnkxCOk61IgQVWrqRMm8CITItGFT0wAb6tgJgaXBpqY8KDahOg8VCzXY/LViE1LNw0ioFuWvFJvwDK4T+8iYLhSa0D2Baz2qRRmbGruE3ld4AajB1lwuNuF3eAGowdbcLjYhMm2OUwGm5lnJ0NTYJYSmjZGLKheaEFsax0G5qDLZ+Bg7IZEWioVsW7n7sxMi2+avFpmw/T98BZtoy18pMuEU48UA1aIa6wUmdG8ZV4BMjemWb5fwlHEFqMHW/KXIhKgONRLMRZUKTEjmoWJVEKFfYEKGpXGcJdQk9c3qGFYJgz85l4DCCr7Zlm+XELTWIqFqm2Edwy4hrEONhOLs/m6BCRmWBteiDOsYdglZ1VxkapqbxSVErbVIqMHWvGD8kSWlZp+LhQnPWITQtnHqGK26Sn/NyzUEgCAPFauLNsQDxlu+8h2sNOPKBQB5liY0NYiwxNjylXkAq1kMlqVhmJoGo3WhLCxbJUR5qJgQVds4pkZ54NYuIaMONRKqRXHyGMo8gFVCnmnDgwc4eQzlcmWVsMqyNDjszaljKPMAdgmZtVzUYOPkMZbGcpfuMAmhbWOYGuVyZZVQPWogKTR4gJXHUC1XNglZdaiRYNibk8dQLVc2CYlRA0nBsLfPIFQtVzYJYR4qVh/VMTh5DNVyZZWQZ9oYDTZOHWOh3EzXjCcXIIR5qFhw8ACnjrF1sZyuTy/EWgSEXEuDKzVGdYzZmliXHZqwymitRUINNqM8hryKUbsKaEKcFoqFalFGzRmLhGdsQmjbNsZD+BkQfmDnJuHgAZPmjAHhlzYJSI4aSAqampfjIXxHrzSMPFQs2GAzyWMYEL6gN0RmHWqkATo4Y5LHMCD8Dgi5pi20bQDQKI9hQAgKwmxL4+ATbCYhU4Oq/ke6YEofxE/qIIM6RvaEc6eAkNVai4RyUSbnSgwIST49QlSLMolgygkvwYbvMSttI8HBA/WxEFbBj6iRmoSDB5ryCKac8Ib+Dd2hxlXAwQNNeR5DTIiMt3uicRXQtnGaM5kTAuPNykPFwrUoeR5DTnhNG2/vk8ZVwMEDBqZGTrhHG29ma+1eiNCgjmGNkJeHioVaiAZ5DDkheLXg16FG+sVeHUNO+BUQalgaXIsyOCwrJwS2tKr10ooGDzQ5eYyMCafppRSOGkgKTvaui7d8OSEwbbw8VCxYi2qI6xhiwjlAiEYNJIUGDxgclhUTAuMNpic9FjY14vkYYkJgvNmttUho8IDBfAwpYe0bIOS21iL1ULVNXscQE4J6sE4dKtQSikLLTY2YEBhvbh4qFqzUcEKmuRLqWRqGqRHPxxATHtLGG48aSApO9hY3Z9I7pAxCUA9Wf5gkXXgIpjIEDJSWET6dx4jIluJRA0mhwQNipWaEvSkGIck35f6t+dhYG4KZmjZxh8aEGq21SDDsnS0h4y59Dgi5eahY1j7IkkroLWLCOXqh0TRtjMED2RIeYsIberPQNG2MaUqZEnbeQUJkS3UtDQ57Z0rYvsaEoB7MOYiflK0PsqQTfhkDoa0PsogJ0auFRmstEho8kClhwCAEUZMpTVtq7ytz6YTfMCFdD3Zvtd8EbJmadMIrBDhdo2MKGnmoWLYme6cSVi8x4TxNqNNaiwRzUYoI8EPxCedMCTXyULEq4DncaEGl1gmkhCBqom1pHGeJJmSdfUq7DdIJIeD0HH1+VK+1FoneDzkNxNT3k3RCbEsvQeNJIw8Vi85FZUvYYRhvuuKtW4caibZtmRK6twxCYNq0LQ2qRWVL+NH41aIj6IXRpiZTQsYLMDLenj4gaLBlS4hfgFE9WK+1Fom2bZkSdvYwIV0PZo4aYFzf+Ahp4y2wNGjwAIswLZWTRhgYEwosTWhqyNQQh7B/dFBuPF6RnxB6wfD7DQKcnqajJnp5qFjGu4Xj9LrrjyGThF7gvvg2x+haPKeNN2fk5VORpoYf+xosbPh+M4XQ7QTBYYjH4MO2VCsPFYs0NVrBtv5u61kMeU8Y4g0Pv7GaThFh9pYGhL11o3v9raN6uXFP6Haqt4dXz9l40zBqwh01kBTZYBOEE5e666VyozTTqQ73bpg35w+BqIleWigWaduE8cvBwsHMuxtNupGA8eZNT3oscvCAPGA6q48HjbdWxPtfkbUoA0IBIKoHe4uiSyFzUXkTviMJRZYGDB7InZA03kJCcvBA3oT0q4VmHioWOXggb0I6aiKzNLSpyZuQtqX8UQNJUQ22vAlBWki78RSJqkXlTQgsjZCQsm05E4KMN3/UQFJULSpnQtp4u/PCGCFlanImpI230NLQDbZ8CcHRQ1EdaiRq8EDOhHQ9WDsPFYsaPJAzIW28hZaGDnvnTEhXvKWWhsxF5UxIG29Jay0SYdvyPW9RO6RtqdC0kbWo5nJFuAeJCOmoic6ogaQoU9Msb693JZAiwluScCj+6iQd9m42/IPNNW1IfcJarTakCFmfXkkXzkU1fX95Ve9/UJOwNj33ZTGg00LckZdPxcpFhZAXKxqnETUIa7W5m735ahtMExTkoWLBM3o/IBvbC9wDiVzCWu3y8/fbageOKdcbNZAUPKP3ALLRODhnTY/iEIZP3s31qRt4GG/KwNI4ePBAUo1y42gLPpSQMLw3Px961TaLbiRJHiqWdk646TeXd+mHkiSs1aZvrhfbAeMb6g8IxaZNFmcPIVv7xEOpJqzVnn87PA3QwvKUUGzaxGHv0U65oHoo0wlHszu/fO0EjIXlibhzytOEBg9QkOXS+VraQ5lCGD55V3uncFdQEsoBDcPejXL9aPVJGusx4d2uMOTsCirJmoeR4OAB+FP6z1q7ScjZBF3tir8rqCRrHkaCgwdYkOWDh3bgB2Hoxz4fVgP+rqCQ5qiBpDI6oxc+lBs/XkRm75fNm+uvVb1dQSGNgZBP1dfb8knI0YtI744wXFhEu4JCJpZG/YUDEWT4UIYvIuGu8NH0ycuQEA3B1Kb0y/9o+DGWZHmoWGjwgL6ynzpvYmlsnGDLnlB31EBScPBAEQiNPqONBw+Mn/DMiDD7wQOZE7rcT6+kK/szetkTyqs0I2U/eCBzQu/QiBB+Onf8hOLWWqR+8ddSYR4qVvaDBzIn1B81kBD8IMv4Cc0sjYXBA5kTSvNQsY5e+tkyZkvodgIz0xaqv3pUb2RImR2h6wXeyXvDe/Reg/3l+tPTL2Ml9NrByac3pj/fQ/W6661yFj9lBoThrblz/OpXI7OmoFzdLBlTGhKGt2bw4f1bC3SxBivLdd/khjUhDG/N4fGf8nHwXPW6CxdNMaWUMLw1z76++t3ij/eIcuv8QLaPiAi9oBremuI8glSV3eVn+j+lNqHbDtzj1/ZvTYW6C62SHqUWYXhruh9fZbPlydVfW9/WWGH5hF67evLbH2P78ZLq7x41mJaARzhyY8evbWx5BhrstziPJSa8c2NjvzXT1VtbbyEPCwi99k7oxgw+emZf/dXN+kvipyQIR25s0Yoby1yDlQtfdcMqCO/d2LivXEfd9e1U45M6F6Md3B6/KciqqaPK1vnGk33kMWHebixrLVVWlv3EPpIgHJMby1zdhQc37A/C0I1N5fGikJP6a+cb0T5yR1gMN5a5KrtHpfCGnblzY28n5sdLaincR/75lO+Lwv8BK3b8HrKECEwAAAAASUVORK5CYII=",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          imgurl:
            "data:image/png;base64,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",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap5",
          fontAwesomeClassname: "fa-brands fa-bootstrap",
          imgurl:
            "data:image/png;base64,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",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          imgurl:
            "data:image/png;base64,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",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          imgurl:
            "data:image/jpeg;base64,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",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          imgurl:
            "data:image/png;base64,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",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          imgurl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAArlBMVEXMAAH////MAAD//P/6//ywAADrxMb9/vz6//3+//vrqan8//n///7qy8uzAAC9AADHAwDKXl//7fHWcHD/9fOpAAD5//H/9v/ry8X//fL0///KAgTTAgzaAA7BBQPRAAHdhYXrxMvbmaDUABTjraDu//vpzcrprKPy/+3tqKj+9/T//O3/9Or/9ff/7erJbm7Tc2/YamzjlZ6hAADOXWHDX1zNXVjefn7RTU7wvL6qMayJAAAEyElEQVR4nO2dC3ObRhRG94HEIjC7fugFCsRNE8eq4qZt6rb//48VHMejMevXElZ30XdGnvGMZMTR5btrS+O7jIERIO6/RvsNAAFAJC3IIQCjhkg/QKcBRw2RtCCHAIwaIv0AnQYcNUTSghwCMGqI9AN0GnDUEEkLcgjAqCHSD9BpwFFDJC3IIQCjhkg/QKcBRw2RtCCH/hEPL5SPJ2tvXguy2WzeMSNMOfxTlboq63qz8fFcewgzmcznOtf5ZHByrfP5fKKN+9myN8dXbPL30+nJ1AurVXO7/GXy4Xsw/HQasZnPJOfNzQuSK345/+AziEJMfl0rKdNUxYOTJjL6qD7Na6+dRuRXaymTxedIRQOjopQnKV/ltfvZsrfnsNTXcrnkaRoNX0OlZMblpXY7VdcXxeir9ZYXRSyHR31MFymf5pXr2TrRGsaqkMtk6Is0ipeqNTzJtVdDNpnJJhyKZ8N30ljGUcxPJn5X/B+G8fCCWSKbMDaG7ifrFN8DGJZ+/7Y4jKFP/BqqfldpKIbuNQwgh2r0ORz5VRr1vkrpG2Y918MQDNWoV/w9w5F2mv41hGH4hsihlaBq6NEwe+4P5vZOywOCMowW7RuDhUy6bzfJZbFYb3nyW0cxKEOeSBmnEV9375FLFW1lUaSde4LqNDJSfLu7udhddFh/2a5vlkWhnjUk32maX6Hl5e/n51/PO3z9o7n9eSa3Q9TQnyGPCj77K9cWjKh0fnuzDjyH6aLgV7mpu+/PCyGM0ae7dDGEobccZs1PPGHIWFUa8+2L7H6cFVIOs7Q1nOe2jzrrsjmbbxcvGPrE6SpNMslnuWaWGoqKGXO7s3wkGZYhjxvDqrQZlqzJ4VncPWBghuolw2QIQ38r/p7h4wO+zpB6pzlYDX0avpjDwA3bR9sNBRtHDvcMHx3wlYbkc3ioGsIQhvQN0WmsBFVDEoZY8ZFD5BCGMCRuiE5jJagakjDEio8cIocwhCFxQ3QaK0HVkIQhVnzkEDmEIQyJG6LTWAmqhiQMseIjh8ghDGFI3BCdxkpQNSRhiBUfOUQOYQhD4oboNFaCqiEJQ6z4yCFySN4wlPk0robhzBhyM+w/J4p6pwlp1le/GgZ+lT6z4oc0zcy5hj3nJgaQw2BmXz5dQ/YKQ/eT7WP4thm03w2N9SptZxOfnmVdwwPNoHWbIxzH7cSBStj+D7iuhT5tZyqoew47R9hxFnSaFupK22p4d9Dq7516GD+U/cRZ0A7xdZznnaxVcV2ZkonuAcuyFre7JImTew47z9ttJrvKsqKYmbLqPrEoK1PXtzsllXp0mf6Emewugm5z9bks1HVVVtZeamrRzjZpShbf+T381EHm6rvujZDw5Lrtpd0a1nU7geemWRvu2W/SffdGcMmh4/4Wq9X0H90mrnPAumaV/ve/kxWR/S3c9ihpNxvJm1ZaWkbwmJqZd7W2Ha//HiUuuO0zY0yjV5Wl5ZVtDHXbg6p2ZNQdP+450D4zjLnsFfTyg596hGDM815BYeEW34C+ASAAiKQFOQRg1BDpB+g04KghkhbkEIBRQ6QfoNOAo4ZIWpBDAEYNkX6ATgOOGiJpQQ4BGDVE+gE6DThqiKQFOQRg1BDpB+g04KghkhbkEDzF/zwn5FlQCmWVAAAAAElFTkSuQmCC",
          style: {
            color: "#CB3837",
          },
        },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
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
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing intermidate level designs of web application",
        "⚡ Customizing logo designs and building logos from Coral-Draw",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe PhotoShop",
          fontAwesomeClassname: "simple-icons:adobeps",
          imgurl:
            "data:image/png;base64,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",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Coral-Draw",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
          imgurl:
            "data:image/jpeg;base64,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",
        },
        {
          skillName: "Adobe Lightroom",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
          imgurl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAArlBMVEUAHjYxqP////8AFzFUXWoyqv8AGC4zrf8TTHcADCAoi9UyrP8ABxstm+wAGjEAFSoOPWEbYZcAABYAACQAAB8AEi8ADCwAABIAABwAABdvdoC8v8MAAykAAA9ZYm4AFTCan6Xi5OZ7gYrT1dg+SVgebaiFi5NjanUhMkVPWWb19veorLLHys2PlJw0QVHs7e8XVoYjfL4ieLiytroGJ0IQQ2sYWYsKMlImhs0rl+XVMuneAAAFkUlEQVR4nO3d61qiUBSA4e1WJEVFOQvIuTKtmE5jc/83NqhZJGhi4Jbl+v7WQ+t9gA2YFqE/FVrejXnrtM4v59a88azwRwHZ98WZFUx1RbY11XWb55frqpotK/o0sGZHGl/udFlrkvOvqcnS3Utxox8Ysst6+AK5shH4hYy+o2uspy6cpjv5yjzjzJyorAc+KlU3807MHOPcqN8+3KQZ8wOMs0hhPeivUqLMrtw23iv1PEy/UpX7/UZvwnrEEpp4+4ymwXq+UjLM3UZHZj1dScnOLqNjs56ttGwn32hC2YvLZDPP+FDva8Z2ykPWaOmspyo53do2xmPWM5XeON4yPtbpIeOw3MfvRg/SerNJ9tLGWGI9TyVJccro1P0mNT/V+TKGMHdjsiPDT2MEb8FZ50YbYwjvurFpHH4YgZ6Ny1ZnZGKMod3hpNPjldGD87iRzfZWxmkdXic+tuZ0afThrjjLxn5iBH2oJgfrPDG2oF4c17mtxAjr0TibQokP46W43Rk+sSA+VaWTLQJ8yVleIUkA90ZunRoQB/aymiysDokGrIeouEFEpqxnqDz4QgzDMAzDMAzDMAyrvEFPyjQWWU9VaoPXBp/tGRSyfcU3MnHdDuu5ygyNMEIjjNAIIzTCCI0wQiOM0AgjNMIIjTBCY0UN2mLSyd41dXJju9MTh39G19fXi1MhSzWKkr5V77tj0OlcPfV5nhcEgT/ZCVGmUXxezp6O7w9TyIG0eOJ4gTv1SV+msdPltrck9D8/WTPoDbu8wGJhK9X4JGQ2xb+1118UyTvPlfBDjqjUY/U6axQ+fq2g/+WEUn7IEZVqHGWN6021xa2dWFtj+092W1xDSvCLxi79KSrVmLctXiSdKyGzGNXVOHjLM772/mSO0xobh3nGRc4RXGPjImdbwiifCMmYs9rAM+6qpsZX+EZCLsDYvgCjeAHGziUYd10nABl7efdsmY1zH68RwDQmOp7vd9+fr5Oeh7V8zWqvkRP4xvvoTRx3OqJY39ce9xg5vvE8lDqng6U6jZHj3990Jr5lpzByfHfRa5c8eIFOYOS4K53pp6WrN3L9V8bv+K3eyA9Zv6n5FEbWH+tHY8HQyCw0FgyNzEJjwdDILDQWDI3MQmPB0MgsNBYMjcxCY8HQyCw0FgyNzEJjwdDIrB3GiXh4X4RaGf/9HR3e66ehTsYGJxxe6g8K1cpYJGEE3/j5KRXIxq+NQTWuPsDxEVhj6loK1Sg8XYDxa1kFa0wtq3CNqY0BNXKN1L+Ag2pMP6IANaaXVbDG1LIK1ZheVsEa0xuDaUzfrZ6zkftFwr/0Kz89Iedb2BuJ2O3/pqv0+8TFp5z92GdOJKTT+03f3wovjrN/QLrHyIVhGIZhGIZhGIZhGIZhGIZdUlPWA1TelERn8FuFShtExHFZD1FxrkMClfUQFacGxLNZD1FxtkcsmfUQFSdbxDdYD1Fxhk+ownqIilMooS3YC6vbSozAFx17nhj9MesxKm3sJ0Y6bbKeo8KaU7o0gj5YbW9ljPWfv7W26fHKSB24t3OqQ9fGEO6qMw4/jDSCeol0I7oxhtLP317LpPDTCPWMXJ2NG2MMc0dKccpIPYhPWLJH00b6CG/ZcR/pd2MM7zHSiLeM1IJ2t6NbdNtIH2A9LCsPNGukJqR1RzZpnpE6cB5AbIfmG6kDZU/KaeJ3IzVhrK6GSXcbqTdhPV8JTTy6z0jvlbrfuqrKPd1vpLOo3tcQJZptkzJGSueGxnrQo9OMeRaUY6Qzc1LPA1bVzcxO3GGk1Hcm9duXmu74uZp8Y6IMDLlOjyKubAT5wt3GpJc7Xdbq8PpyU5Olu5fdkD3G5MS0gqmuyLamum7z/HJdVbNlRZ8GVt5peJhxVWh5N+at0zq/nFvzxrPCHwX/ARzKluiLUCGsAAAAAElFTkSuQmCC",
        },
        // {
        //   skillName: "Inkscape",
        //   fontAwesomeClassname: "simple-icons:inkscape",
        //   style: {
        //     color: "#000000",
        //   },
        //},
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
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
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Greater Noida Institute of Technology",
      subtitle: "B.Tech. in Electronics and Communication Engineering",
      logo_path: "GNOIT.png",
      alt_name: "GNOIT",
      duration: "2022 - Present",
      descriptions: ["⚡ Pursuing"],
      website_link: "https://www.gniotgroup.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "TYPING TEST",
      subtitle: " ",
      logo_path: "download.png",
      certificate_link:
        "https://www.typing.com/apiv1/student/tests/205645423/133385846/certificate?language=en",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Fullstack WEB Development",
      subtitle: "",
      logo_path: "Masai-550x330.jpg",
      certificate_link:
        "https://drive.google.com/file/d/15c74nCKl83lZd49HS5p0wEVhz3gxvyK2/view?usp=sharing",
      alt_name: "MASAI SCHOOL",
      color_code: "#2A73CC",
    },
    {
      title: "Advance Diploma In Information Technology",
      subtitle: "",
      logo_path: "jms.png",
      certificate_link:
        "https://drive.google.com/file/d/14FT8lxa4YvhgcpCFGcGtGa_lVDzr1mVX/view?usp=sharing",
      alt_name: "JMS EDUCATION POINT",
      color_code: "#2A73CC",
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
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
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
    "My journey of project started by MASAI SCHOOL in it, The last week (constructive week) is my best week , this helps me a lot to improve my skils however i have been created Three Projects since join masai school",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_image_path.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@deepak.studentid2030",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "House 188,st-04/D-Block Basantpur Colony FBD HARIYANA",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/@28.5006897,77.3152116,12z",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7827119146",
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
  contactPageData,
};
