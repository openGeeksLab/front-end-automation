'use strict';

describe( 'LeaveTaking:', function() {
    var LeaveTaking,
        leaveTaking;

    beforeEach( function() {
        LeaveTaking = mockbox.window.modules.LeaveTaking;
        leaveTaking = new LeaveTaking();
    } );

    it( 'should LeaveTaking to be defined:', function() {
        expect( LeaveTaking ).toBeDefined();
    } );

    describe( 'initialization=>', function() {
        beforeEach( function() {
            sandbox.stub( leaveTaking, 'bindEvents' );
            leaveTaking.init();
        } );

        it( 'should call bindEvents method:', function() {
            expect( leaveTaking.bindEvents ).toHaveBeenCalled();
        } );
    } );

} );
