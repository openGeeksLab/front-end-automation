'use strict';

module.exports = function( grunt ) {
    return {
        options: {
            thresholds: {
                'statements': 75,
                'branches': 75,
                'lines': 75,
                'functions': 75
            },
            dir: 'coverage',
            root: grunt.config( 'coverage.js.root' )
        }
    };
};
