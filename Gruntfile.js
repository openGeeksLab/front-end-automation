'use strict';

module.exports = function( grunt ) {

    var config = JSON.parse( grunt.file.read( 'grunt/path.json' ) );

    grunt.config.init( config );

    require( 'load-grunt-config' )( grunt, {
        configPath: process.cwd() + '/grunt'
    } );

};
