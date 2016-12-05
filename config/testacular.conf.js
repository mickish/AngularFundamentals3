module.exports = function (config) {

    'use strict';

    config.set({

        basePath: '../app',

        files: [
            '../test/lib/jquery.min.js',
            'lib/angular/angular.js',
            'lib/angular/angular-*.js',
            '../node_modules/angular-mocks/angular-mocks.js',
            '../test/lib/sinon-1.6.0.js',
            'js/**/*.js',
            '../test/unit/**/*.js'
        ],

        autoWatch: true,

        browsers: ['PhantomJS'],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },


        client: {captureConsole: true},
        colors: false,
        frameworks: ['mocha', 'chai'],
        plugins: ['karma-chai', 'karma-mocha', 'karma-phantomjs-launcher'],
        singleRun: true
    });
};
