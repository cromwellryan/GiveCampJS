var soda = require('soda')
	, assert = require('assert');

var browser = soda.createClient({
		host: 'localhost'
	,	port: 4444
	, url: 'http://localhost:3000'
	, browser: 'firefox'
});

function charitynewsexists() {
	browser
		.chain
		.session()
		.open('/')
		.waitForPageToLoad(5000);

	return browser;
}

var vows = require('vows')
	, assert = require('assert');

vows.describe('HomePage').addBatch( {
	'Charity News': {
		topic: charitynewsexists(),

		'is present': function(browser) {
			browser
				.assertElementPresent( 'css=p#charitynews' )
				.testComplete()
				.end( function(err) { if(err) throw err; } );
		}
	}
}).export(module);

