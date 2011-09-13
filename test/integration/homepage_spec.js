var soda = require('soda')
	, assert = require('assert');

var browser = soda.createClient({
	  url: 'http://localhost:3000'
	, browser: 'firefox'
});


	var assert = require('assert');
exports.homepagehascharitynews = function() {
			browser
				.chain
				.session()
				.open('/')
				.waitForPageToLoad(5000)
				.waitForElementPresent( 'css=p#charitynews' )
				.assertElementPresent('css=p#charitynews')
				.testComplete()
				.end( function(err) { if(err) throw err; } );
		};

