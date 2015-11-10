'use strict';

module.exports = function( grunt ) {
    return {
        build: {
            files: [ {
                expand: true,
                cwd: grunt.config( 'cssmin.css' ),
                src: [ '*.css' ],
                dest: grunt.config( 'cssmin.min' ),
                ext: '.css'
            } ]
        }
    };
};
