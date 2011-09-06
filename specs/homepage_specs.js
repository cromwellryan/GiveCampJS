var soda = require('soda')
	, assert = require('assert');

var browser = soda.createClient({
		host: 'localhost'
	,	port: 4444
	, url: 'http://localhost:3000'
	, browser: 'firefox'
});

browser
	.chain
	.session()
	.open('/')
	.waitForPageToLoad(5000)
	.assertElementPresent( 'css=p#charitynews' )
	.testComplete()
	.end( function(err) { if(err) throw err; } );
