// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({

    // 0 - Pluggins
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      // require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require( '@angular-devkit/build-angular/plugins/karma' ),
      require('karma-mocha-reporter')
    ],

    // 1  - Trigger
    autoWatch: true,
    restartOnFileChange: true,
    singleRun: false,

    // 2 - Build
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    // 3 - Run
    port: 9876,
    // browsers: ['Chrome'],
    browsers: ['ChromeHeadless'],

    // 4 - Report
    colors: true,
    logLevel: config.LOG_INFO,
    // reporters: ['progress', 'kjhtml'],
    reporters: ['mocha'],

    mochaReporter: {
      showDiff: false,
      ignoreSkipped: true,
    },
    client: {
      jasmine: {
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },

    // 5 - Coverage
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/angular-budget'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },
  });
};
