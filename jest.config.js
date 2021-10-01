const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

const SRC_PATH = '<rootDir>/src';
const resolvedPath = pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' });

module.exports = {
  preset: 'ts-jest',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
  modulePaths: ['<rootDir>'],
  roots: [SRC_PATH],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    ...resolvedPath,
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/mocks/styleMock.js',
  },
};
