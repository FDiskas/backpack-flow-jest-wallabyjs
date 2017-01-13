module.exports = function(wallaby) {
  return {
    files: [
      '!src/**/*.spec.js',
      'src/**/*.js',
      {pattern: 'package.json', load: false}
    ],
    tests: ['src/**/*.spec.js'],
    env: {type: 'node'},
    compilers: {'**/*.js': wallaby.compilers.babel()},
    testFramework: 'jest',
    setup: function(w) {
      wallaby.testFramework.configure(require('./package.json').jest);
    }
  };
};
