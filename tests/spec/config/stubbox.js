'use strict';

var stubbox = {};

beforeEach( function() {
    stubbox.log = sandbox.stub( console, 'log' );
} );
