
module.exports = function (wallaby) {
  var compilerOptions = Object.assign(
    require('./src/tsconfig.spec.json').compilerOptions);

  return {
    files: [
      'src/tsconfig.spec.json',
      'src/**/*.+(ts|js|html|json)',
      '!src/app/**/*.spec.ts'
    ],

    tests: [
      'src/app/**/*.spec.ts'
    ],

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript(compilerOptions)
    },

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    setup: function (wallaby) {
      const jestConfig = require('./package.json').jest;
      wallaby.testFramework.configure(jestConfig);
    },


  };
};
