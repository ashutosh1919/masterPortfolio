# Customize it to make your own portfolio ✏️

In this project, there are basically 5 things that you need to change to customize this to be your own portfolio: **package.json**, **Personal Information (portfolio.js)**, **Github Information**, **Splash Logo** and **Favicon**.

### package.json

Open this file, which is in the main cloned directory, choose any "name" and change "homepage" to `https://<your-github-username>.github.io`. Do not forget the `https://`, otherwise fonts will not load.

### Personal Information

You will find a file named `src/portfolio.js` which contains information about the user. 


You can change the personal information, experience, education, social media, certifications, blog information, contact information etc. in `src/portfolio.js` to directly reflect them in portfolio website.

#### Splash settings
Set it to true only if you have set up your own logo on the splashscreen.

#### Greeting
The main information, found as soon as someone lands on your website. Be creative and concise. It is their first impression. 

You can upload your CV in another branch of your portfolio's repository and link it from here, or rename this button at `src/containers/greeting/Greeting.js` and insert whatever url you need.

#### Social Media URLs
Fill in your social network URLs and, in case you need another one which is not listed here, look for its icon at [Iconify](https://iconify.design) and fill in the `fontAwesomeIcon` variable.

#### Skills
This is where you will begin to be considered for the job position. Think really well about what you write here, since this is your skills' description abilities being put to the test. You have to be confident, truthful and concise. Look for icons at [Iconify](https://iconify.design) and fill in the `fontAwesomeClassname` variable.

#### Competitive Websites
This is optional and can be replaced by text with a few changes at `src/pages/education/EducationComponent.js` (comment CompetitiveSites line).

#### Degrees
Upload your institution logo to `src/assests/images/` and fix names at `logo_path`. This is where you can write longer about your education.

#### Certifications
Upload your institution logo to `src/assests/images/` and fix names at `logo_path`. Change colors accordingly (optional).

#### Experience
Briefly describe what you have worked with, so far. Afterwards, give yourself time to talk about your experiences. 

#### Projects
This is only a brief description about your Github projects, which will be automatically imported through the API in `git_data_fetcher.js` (see further below).

#### Contact Me
This is intuitive. This part is done!

### Github Information

You will find `git_data_fetcher.js` file in the main directory of the repository. This file is used to fetch the data (Pull requests, Issues, Organizations, Pinned projects etc.) from your github.
If you open the file, you will see below component at the top of the file. You need to change only that component.

```python
const openSource = {
  githubConvertedToken: "Your Github Token Here.",
  githubUserName: "Your Github Username Here.",
};
```

You can get a github token as described [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). Give all permissions while generating token. Also add your `githubUserName` in the correct field inside `git_data_fetcher.js`.
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

### Favicon
Replace all the icons by your own.

# Choose Theme 🌈

- You can take a look at `src/theme.js` file where all available themes are mentioned with respective color codes.
- At the bottom of this file you will see the below code:
  - `export const chosenTheme = blueTheme;`
  - You need to change the name from `blueTheme` to whatever theme you want to set your website to.
  - You can define new theme similarly as other themes and you can assign name of that new defined theme to `chosenTheme`.
- That's it. You just need to change the theme name and the code will take care of everything else.

  Run `npm start` to check if everything is ok.
