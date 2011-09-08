var soda = require('soda')
	, assert = require('assert');

var browser = soda.createClient({
	  url: 'http://localhost:3000'
	, browser: 'firefox'
});

var vows = require('vows')
	, assert = require('assert');

vows.describe('HomePage').addBatch( {
	'Charity News': {

		'is present': function() {
			browser
				.chain
				.session()
				.open('/')
				.waitForPageToLoad(5000)
				.waitForElementPresent( 'css=p#charitynews' )
				.assertElementPresent( 'css=p.charitynews' )
				.testComplete()
				.end( function(err) { if(err) throw err; } );
		}
	}
}).export(module);

