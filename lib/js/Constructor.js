'use strict';

( function( window, $ ) {

    function Constructor() {

        this.version = '1.0.0';
        this.init();
    }

    $.extend( Constructor.prototype, {

        init: function() {
            Object.keys( window.modules ).forEach( function( module ) {
                var Module = window.modules[ module ];
                var config = window.modules.config[ module ];
                if ( config ) {
                    new Module( config );
                }
            } );
        }

    } );

    window.modules = window.modules || {};
    window.modules.config = {
        Greetings: {
            onInit: function( scope ) {}
        },
        LeaveTaking: {
            onInit: function( scope ) {}
        }
    };
    window.modules.Constructor = new Constructor();

} )( window, $ );
