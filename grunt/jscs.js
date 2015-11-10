'use strict';

module.exports = function( grunt ) {
    return {
        options: {
            config: 'jscs.json'
        },
        build: {
            src: [
                grunt.config( 'jscs.js' ),
                grunt.config( 'jscs.spec' ),
                grunt.config( 'jscs.grunt' ),
                grunt.config( 'jscs.server' )
            ]
        },
        changed: {
            src: []
        }
    };
};
