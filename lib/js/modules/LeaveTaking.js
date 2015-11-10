'use strict';

( function( window, $ ) {

    function LeaveTaking( customConfig ) {

        var defaultConfig = {
            name: 'LeaveTaking'
        };

        this.config = $.extend( defaultConfig, customConfig );

        this.init();
    }

    $.extend( LeaveTaking.prototype, {

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
    window.modules.LeaveTaking = LeaveTaking;

} )( window, $ );
