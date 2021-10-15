const config = {
    "preset": "jest-puppeteer",
    "collectCoverage": true,
    "collectCoverageFrom": [
      "src/**/*"
    ],
    "coverageReporters": [
      "text",
      "lcov",
      "cobertura"
    ],
    "setupFilesAfterEnv": [
      "jest-puppeteer-istanbul/lib/setup"
    ],
    "reporters": [
      "default",
      "jest-puppeteer-istanbul/lib/reporter"
    ],
    "coverageDirectory": "coverage"
  }
module.exports = config;