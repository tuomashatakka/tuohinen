import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',

  transformIgnorePatterns: [
    '<rootDir>/bower_components/',
    '<rootDir>/node_modules/',
  ],

  moduleNameMapper: {
    '^(.*).(css|scss|sass)$':       '<rootDir>/__mock__/MockImageInstance.tsx',
    '^(.*).(png|jpg)$':             '<rootDir>/__mock__/MockStyleModule.tsx',
    '^@/(.*)$':                     '<rootDir>/$1',
    '^@/components/(.*)$':          '<rootDir>/lib/components/$1',
    '^@/theme/(.*)$':               '<rootDir>/lib/theme/$1',
    '^@/styles/(.*)$':              '<rootDir>/styles/$1',
  },
}

export default createJestConfig(config)
