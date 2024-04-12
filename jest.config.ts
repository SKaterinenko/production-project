/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ["src"],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};

export default config;
