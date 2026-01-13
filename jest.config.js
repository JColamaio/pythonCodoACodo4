module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverageFrom: [
    'server/**/*.js',
    'public/js/**/*.js',
    '!**/node_modules/**'
  ],
  verbose: true
};
