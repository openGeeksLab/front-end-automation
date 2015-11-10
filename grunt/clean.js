'use strict';

module.exports = function( grunt ) {
    return {
        public: {
            src: [
                grunt.config( 'clean.public' )
            ]
        },
        sass: {
            src: [
                grunt.config( 'clean.sass' )
            ]
        },
        tmp: {
            src: [
                grunt.config( 'clean.tmp' )
            ]
        },
        default: {
            src: [
                grunt.config( 'clean.public' ),
                grunt.config( 'clean.sass' ),
                grunt.config( 'clean.tmp' )
            ]
        }
    };
};
