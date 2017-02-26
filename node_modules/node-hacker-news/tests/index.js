var should = require('chai').should();
var hn = require('../index');

describe('Top Stories call', function(){

	it('should return the top stories', function(done){
		hn.topstories(function(err, stories){
			if(err) return done(err);
			stories.length.should.equal(500);
			done();
		});
	});

});

describe('Item call', function () {

	beforeEach(function (done) {
		hn.item(8422599, function(err, returnedItem){
			if(err) return done(err);
			item = returnedItem;
			done();
		});
	});

	it('should return a title', function () {
		item.title.should.equal('Hacker News API');
	});

	it('should return a url', function () {
		item.url.should.equal('http://blog.ycombinator.com/hacker-news-api');
	});

	it('should return a score', function () {
		item.score.should.be.at.least(1500);
	});

	it('should return an author', function () {
		item.by.should.equal('kevin');
	});

	it('should return array of comments', function () {
		item.kids.length.should.be.at.least(50);
	});

});

describe('User call', function () {

	beforeEach(function (done) {
		hn.user('arjunkomath', function(err, returnedUser) {
			if(err) return done(err);
			user = returnedUser;
			done();
		});
	});

	it('should return a karma score', function () {
		user.karma.should.be.at.least(1);
	});

	it('should return an array of sumbission ids', function () {
		user.submitted.length.should.be.at.least(1);
	});

	it('should return a created datetime', function () {
		user.created.should.equal(1439963996);
	});

});