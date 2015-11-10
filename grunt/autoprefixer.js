'use strict';

module.exports = function( grunt ) {
    return {
        options: {
            browsers: [ 'last 2 versions' ]
        },
        build: {
            src: grunt.config( 'autoprefixer.root' ) + grunt.config( 'autoprefixer.pattern' )
        }
    };
};
