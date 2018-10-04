module.exports = {
  modulePaths: [
    "src"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    "**/*.test.(ts|tsx)"
  ],
  globals: {
    "ts-jest": {
      useBabelrc: true,
      tsConfigFile: "jest.tsconfig.json"
    }
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "enzyme.js"
  ],
  setupTestFrameworkScriptFile: "<rootDir>/enzyme.js",
  coverageReporters: [
    "json",
    "lcov",
    "text",
    "text-summary"
  ]
};
