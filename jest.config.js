module.exports = {
  preset: 'ts-jest',
	transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.development.json' }],
  },
  testEnvironment: 'node',
	testMatch: ['<rootDir>/**/__test__/**/*.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  roots: ['<rootDir>'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
	coverageDirectory: '<rootDir>/../coverage',
	coverageReporters: ['html'],
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/**/*.d.ts',
		'!src/**/__tests__/**',
	],
};