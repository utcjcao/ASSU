/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",

  // Test environment for React components
  testEnvironment: "jsdom",

  // Test file patterns
  testMatch: [
    "**/__tests__/**/*.(ts|tsx|js|jsx)",
    "**/*.(test|spec).(ts|tsx|js|jsx)",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // Ignore patterns
  testPathIgnorePatterns: ["/node_modules/"],

  // Transform patterns
  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
  // Whether to use watchman for file crawling
  // watchman: true,
  testEnvironment: 'jsdom', // ✅ Fix for DOM errors
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', {}],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // ✅ Fix for path alias
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/__tests__/**/*.test.ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig);
