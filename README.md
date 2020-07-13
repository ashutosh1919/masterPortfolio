<p align="center"> 
  <kbd>
    <img src="images/MasterPortfolioLogo.png" align="center" height="150"></img>
  </kbd>
</p>

# Software Developer Master Portfolio 🔥  
> A clean, beautiful, responsive and 100% customizable portfolio template for Software Developers!

[![HitCount](http://hits.dwyl.com/ashutosh1919/masterPortfolio.svg)](http://hits.dwyl.com/ashutosh1919/masterPortfolio) [![NodeJS](https://img.shields.io/badge/node-12.14.1-important)](https://img.shields.io/badge/node-12.14.1-important) [![NPM](https://img.shields.io/badge/npm-6.13.7-blueviolet)](https://img.shields.io/badge/npm-6.13.7-blueviolet) [![Made With React](https://img.shields.io/badge/made%20with-react-61DAFB)](https://img.shields.io/badge/npm-6.13.7-blueviolet) [![Price](https://img.shields.io/badge/price-free-ff69b4)](https://img.shields.io/badge/price-free-ff69b4) [![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) [![Maintenance](https://img.shields.io/badge/maintained-yes-green.svg)](https://github.com/ashutosh1919/masterPortfolio/commits/master) [![Website shields.io](https://img.shields.io/badge/website-up-yellow)](http://ashutosh1919.github.io/) [![Ask Me Anything !](https://img.shields.io/badge/ask%20me-linkedin-1abc9c.svg)](https://www.linkedin.com/in/ashutosh-hathidara-88710b138/)



<p align="center"> 
  <kbd>
    <a href="https://ashutosh1919.github.io" target="_blank">
    <img src="images/masterPortfolioThemes.png"></img>
  </a>
  </kbd>
</p>

:star: Star us on GitHub — it helps!

# Sections 📚
✔️ Summary and About me\
✔️ Skills \
✔️ Open Source Projects Connected with Github\
✔️ Experience\
✔️ Certifications 🏆\
✔️ Blogs\
✔️ Education\
✔️ Contact me

To view a live example, **[click here](https://ashutosh1919.github.io/)**

# Clone And Use 📋
- The website is completely built on `react-js` framework of `javascript` and that's why we need `nodejs` and `npm` installed.
- While installing `nodejs` and `npm`, try to install versions which are equal or greater than the versions mentioned in badges above.
- You can fork the repository just by clicking the button on the top-right corner of this page.
- After the successful installation of `nodejs` and `npm`, clone the repository into your local system using below command:
    - ```python
       git clone https://github.com/ashutosh1919/masterPortfolio.git
       ```
    - This will clone the whole repository in your system.
- To download required dependencies to your system, navigate to the directory where the cloned repository resides and execute following command:
    - ```python
      npm install
      ```
- Now, the project is ready to use. 
- You can check it using `npm start`, it will open the website locally on your browser.

# Customize it to make your own portfolio ✏️
In this project, there are basically 3 things that you need to change to customize this to anyone else's portfolio: **Personal Information**, **Github Information** and **Splash Logo**.
### Personal Information
You will find `src/portfolio.js` file which contains the complete information about the user. The file looks something like below:
```python
// Home Page
const greeting = {
    ...
}

// Social Media
const socialMediaLinks = {
    ...
}

...
```
You can change the personal information, experience, education, social media, certifications, blog information, contact information etc. in `src/portfolio.js` to directly reflect them in portfolio website. 

### Github Information
You will find `git_data_fetcher.js` file in the main directory of the repository. This file is used to fetch the data (Pull requests, Issues, Organizations, Pinned projects etc.) from your github.
If you open the file, you will see below component at the top of the file. You need to change only that component.
```python
const openSource = {
  githubConvertedToken: "Your Github Token Here.",
  githubUserName: "Your Github Username Here.",
};
```
You can get github token as described [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). Give all permissions while generating token. Also add your github username.
Now, you need to run following command.
```python
node git_data_fetcher.js
```
This will fetch all the data from your github and it will automatically replace my data with yours.
Whenever you want to update the github related information on the website you need to run this command.

### Splash Logo
Note here that if you click [my portfolio](https://ashutosh1919.github.io), you can see animating the logo at the beginning. I have designed that logo in [`Figma`](https://www.figma.com/) and then animated it using css. 
Therefore, this part of portfolio is not customizable. But don't worry we have a solution to this problem. You have below two alternatives: 
- If you want to design your own logo, then you can design it using `Figma` or `Adobe XD` or `Adobe Illustrator` or `Inkscape`. If you want to animate it, you can refer to `./src/components/Loader` directory which contains `js` and `css` files which animates the logo.
- If you don't want Splash screen or you don't know how to design logo, then this option is for you.
  - You can open `src/portfolio.js` file and at the top of this file you will see `settings` component as below:
  - ```python
    // Website related settings
    const settings = {
      isSplash: true,
    };
    ```
  - Change `isSplash` from `true` to `false`. 
  - Now, if you see your website using `npm start`, it will directly open `home` rather than animating logo `splash` screen.
  - If you design your logo in future, then edit the files in `./src/components/Loader` and then revert `isSplash` to `true` in `src/portfolio.js`.
  
# Choose Theme 🌈
- You can take a look at `src/theme.js` file where all available themes are mentioned with respective color codes.
- At the bottom of this file you will see the below code: 
  - ```export const chosenTheme = blueTheme;```
  - You need to change the name from `blueTheme` to whatever theme you want to set your website to.
  - You can define new theme similarly as other themes and you can assign name of that new defined theme to `chosenTheme`.
- That's it. You just need to change the theme name and the code will take care of everything else.
  
# Deployment 📦 
- Once you have done with your setup and you have successfully completed all steps above, You need to put your website online!
- I highly recommend to use [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this on the EASIEST WAY.
- To deploy your website, first you need to create github repository with name `<your-github-username>.github.io`. Please don't give any other name.
- Push the generated code to the `master` branch of this repository.
- Now, we need to generate production build and deploy website.
  - ```npm run build``` command will generate the production build.
  - ```npm run deploy``` will create another branch called `gh-pages` and it will push the `build` files to that branch.
- The last step in deploying is to enable `Github Pages` in settings of the repository and select `gh-pages` branch.
- Now, your website is successfully deployed and you can visit it at `<your-github-username>.github.io`.
  
# Technologies used 🛠️
- [React](https://reactjs.org/)
- [graphql](https://graphql.org/) 
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/) 
- [baseui](https://github.com/uber/baseweb)
- [react-reveal](https://www.react-reveal.com/)
- [styled-components](https://styled-components.com/)

# illustrations 🍥
- [UnDraw](https://undraw.co/illustrations)

# License 📄
This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.

# Contributing 💡
If you can help us with these. Please don't hesitate to open an [pull request](https://github.com/ashutosh1919/masterPortfolio/pulls) or [issue](https://github.com/ashutosh1919/masterPortfolio/issues).
- Move to Gatsby
- Add Podcast Section and Video Section
- Add tests to automate review.
- Setup Travis workflow.

# Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
        <td align="center"><a href="http://ashutosh1919.github.io"><img src="https://avatars3.githubusercontent.com/u/20843596?s=460&u=7f184b911f73ae1dc5765ab686fff2b2e984830f&v=4" width="100px;" alt=""/><br /><sub><b>Ashutosh Hathidara</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=ashutosh1919" title="Code">💻</a> <a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=ashutosh1919" title="Documentation">📖</a> <a href="#design-ashutosh1919" title="Design">🎨</a> <a href="#maintenance-ashutosh1919" title="Maintenance">🚧</a> <a href="#ideas-ashutosh1919" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

# References 👏🏻
Some Design and Implementation Ideas are taken from [Saad Pasta's Portfolio Project](https://github.com/saadpasta/developerFolio).

# Sponsors 🚩
<a href="https://tracking.gitads.io/?repo=masterPortfolio"><img src="https://images.gitads.io/masterPortfolio" alt="GitAds"/></a>
