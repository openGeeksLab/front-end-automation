'use strict';

module.exports = function() {
    return {
        develop: {
            tasks: [
                'githooks',
                'watch:js',
                'watch:css',
                'watch:html',
                'karma:watch'
            ],
            options: {
                limit: 5,
                logConcurrentOutput: true
            }
        }
    };
};
