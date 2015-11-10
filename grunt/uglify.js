'use strict';

module.exports = function( grunt ) {
    var app = grunt.config( 'uglify.app' ),
        vendor = grunt.config( 'uglify.vendor' ),

        files = [
            grunt.config( 'uglify.modules' ),
            grunt.config( 'uglify.constructor' )
        ],

        vendorFiles = [
            grunt.config( 'uglify.bower.jquery' )
        ],

        config = {
            options: {
                mangle: true,
                compress: {
                    drop_console: true // jscs:disable
                },
                sourceMap: false,
                sourceMapIncludeSources: false,
                preserveComments: false
            },
            build: {
                files: {}
            },
            develop: {
                files: {}
            }
        };

    config.develop.files[ app ] = files;

    config.build.files[ app ] = files;
    config.build.files[ vendor ] = vendorFiles;

    return config;
};
