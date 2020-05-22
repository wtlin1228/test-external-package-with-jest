// jest.config.js
module.exports = {
  verbose: true,
  moduleNameMapper: {
    KA: '<rootDir>/__mocks__/KA',
  },
  // https://jestjs.io/docs/en/configuration#transformignorepatterns-arraystring
  transformIgnorePatterns: ['node_modules/KA'],
}
