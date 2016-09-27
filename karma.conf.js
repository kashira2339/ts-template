// Karma configuration
// Generated on Wed Sep 28 2016 03:29:03 GMT+0900 (JST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],

    files: [
      'test/*.ts'
    ],

    exclude: [],

    preprocessors: {
      'src/index.ts': ['webpack'],
      'test/*.ts': ['webpack']
    },

    reporters: ['mocha'],

    port: 9876,

    colors: true,

    // LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    webpack: require('./webpack.config.js'),

    concurrency: Infinity
  });
};
