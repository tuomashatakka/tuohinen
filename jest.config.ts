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

  moduleNameMapper: {
    '^@/(.*)$':             '<rootDir>/$1',
    '^@/components/(.*)$':  '<rootDir>/lib/components/$1',
    '^@/theme/(.*)$':       '<rootDir>/lib/theme/$1',
    '^@/styles/(.*)$':      '<rootDir>/styles/$1',
  },
}

export default createJestConfig(config)
