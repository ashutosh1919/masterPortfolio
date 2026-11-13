# Contributing to MasterPortfolio

Thank you for helping improve the project!

1. Fork and clone the repository, then change into its directory.
2. Use Node.js 24.15 or newer in the 24.x line, or Node.js 26 or newer. Install the locked dependencies with `npm ci`.
3. Make a focused change and add or update tests for its behavior.
4. Run the local checks:

   ```bash
   npm test
   npm run build
   npx playwright install chromium
   npm run test:e2e
   ```

   The browser tests use the production build. See the [README](README.md#continuous-integration) for the development-worker and GitHub Pages checks also run by CI.
5. Commit your changes and open a pull request against the intended base branch. Describe the change, testing, and any known limitations.

Do not commit credentials or private GitHub data. See [SECURITY_AUDIT.md](SECURITY_AUDIT.md) and the README's GitHub information section for details. Please report security issues responsibly instead of publishing secrets in an issue or pull request.
