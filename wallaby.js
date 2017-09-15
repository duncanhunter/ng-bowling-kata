module.exports = function (wallaby) {

  var compilerOptions = Object.assign(
    require('./src/tsconfig.spec.json').compilerOptions);

  return {
    files: [
      'src/tsconfig.spec.json',
      'src/setupJest.ts',
      'src/app/**/*.ts',
      'src/app/**/*.html',
      'src/app/**/*.scss',
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

  };
};
