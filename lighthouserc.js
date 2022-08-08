module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      numberOfRuns: 3,
      url: [
        "http://localhost:3000/#/home",
        "http://localhost:3000/#/education",
        "http://localhost:3000/#/experience",
        "http://localhost:3000/#/projects",
        "http://localhost:3000/#/opensource",
        "http://localhost:3000/#/contact",
      ],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
