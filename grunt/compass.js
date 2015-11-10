'use strict';

module.exports = function( grunt ) {
    return {
        options: {
            cssDir: grunt.config( 'compass.css' ),
            specify: grunt.config( 'compass.scss' )
        },
        build: {},
        watch: {
            options: {
                watch: true
            }
        }
    };
};
