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
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.1 }],
        "categories:accessibility": [
          "error",
          { minScore: 0.8, aggregationMethod: "pessimistic" },
        ],
        "categories:best-practices": ["error", { minScore: 0.8 }],
        "categories:seo": ["error", { minScore: 0.8 }],
        "categories.pwa": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
