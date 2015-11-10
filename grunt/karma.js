'use strict';

module.exports = function( grunt ) {
    var preprocessorFiles = grunt.config( 'karma.js.pattern' );

    var config = {
        options: {
            singleRun: true,
            colors: true,
            logLevel: 'WARN',
            browsers: [ 'PhantomJS' ],
            frameworks: [ 'jasmine', 'sinon' ],
            plugins: [
                'karma-phantomjs-launcher',
                'karma-chrome-launcher',
                'karma-sinon',
                'karma-jasmine',
                'karma-coverage',
                'karma-threshold-reporter'
            ],
            files: [
                grunt.config( 'karma.node_modules.phantomjs-polyfill' ),
                grunt.config( 'karma.node_modules.jasmine-sinon' ),
                grunt.config( 'karma.bower.jquery' ),
                grunt.config( 'karma.js.modules' ),
                grunt.config( 'karma.js.constructor' ),
                grunt.config( 'karma.test.config' ),
                grunt.config( 'karma.test.spec' )
            ],
            exclude: [
                grunt.config( 'karma.js.excludePattern' )
            ],
            preprocessors: {}

        },
        unit: {
            options: {
                reporters: [ 'progress', 'coverage', 'threshold' ],
                coverageReporter: {
                    dir: grunt.config( 'karma.js.root' ),
                    type: 'json',
                    subdir: 'coverage',
                    file: 'coverage.json'
                },
                thresholdReporter: {
                    statements: 75,
                    branches: 75,
                    functions: 75,
                    lines: 75
                }
            }
        },
        coverage: {
            options: {
                reporters: [ 'coverage' ],
                coverageReporter: {
                    dir: grunt.config( 'karma.js.root' ),
                    type: 'html',
                    subdir: 'report'
                }
            }
        },
        watch: {
            options: {
                singleRun: false,
                autoWatch: true
            }
        },
        debug: {
            options: {
                reporters: [ 'progress' ],
                singleRun: false,
                browsers: [ 'Chrome' ]

            }
        }
    };

    config.options.preprocessors[ preprocessorFiles ] = [ 'coverage' ];

    return config;
};
