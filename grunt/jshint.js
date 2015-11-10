'use strict';

module.exports = function( grunt ) {
    return {
        options: {
            jshintrc: '.jshintrc'
        },
        build: {
            src: [
                grunt.config( 'jshint.js' ),
                grunt.config( 'jshint.spec' ),
                grunt.config( 'jshint.grunt' ),
                grunt.config( 'jshint.server' )
            ]
        },
        changed: {
            src: []
        }
    };
};
