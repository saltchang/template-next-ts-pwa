/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const nextJest = require('next/jest');
const tsconfig = require('./tsconfig.json');
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

const createJestConfig = nextJest({
  dir: './',
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
});

const customJestConfig = {
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper,
};
module.exports = createJestConfig(customJestConfig);
