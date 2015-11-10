'use strict';

( function( window, $ ) {

    function Greetings( customConfig ) {

        var defaultConfig = {
            name: 'Greetings'
        };

        this.config = $.extend( defaultConfig, customConfig );

        this.init();
    }

    $.extend( Greetings.prototype, {

        init: function() {
            this.bindEvents();
            if ( this.config.onInit instanceof Function ) {
                this.config.onInit( this );
            }
        },

        bindEvents: function() {
            var service = this;
        }

    } );

    window.modules = window.modules || {};
    window.modules.Greetings = Greetings;

} )( window, $ );
