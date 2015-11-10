'use strict';

describe( 'Greetings:', function() {
    var Greetings,
        greetings;

    beforeEach( function() {
        Greetings = mockbox.window.modules.Greetings;
        greetings = new Greetings();
    } );

    it( 'should Greetings to be defined:', function() {
        expect( Greetings ).toBeDefined();
    } );

    describe( 'initialization=>', function() {
        beforeEach( function() {
            sandbox.stub( greetings, 'bindEvents' );
            greetings.init();
        } );

        it( 'should call bindEvents method:', function() {
            expect( greetings.bindEvents ).toHaveBeenCalled();
        } );
    } );

} );
