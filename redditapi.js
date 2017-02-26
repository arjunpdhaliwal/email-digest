'use strict';
const Snoocore = require('snoocore');
const Auth = require('./auth.js')

var reddit = new Snoocore({
  userAgent: 'js-digest',
  oauth: { 
    type: 'implicit', // required when using explicit OAuth
    duration: 'permanent', // defaults to 'temporary'
    key: Auth.redditAuth,
    redirectUri: 'http://www.google.com',
    scope: ['read'] 
  }
}); 

function createSubredditPromise(subreddit) {
	return new Promise(function(resolve, reject) {
		reddit('/r/' + subreddit + '/hot').get().then(function(result) {
			//console.log(result.data.children);
		  	var relevantData = result.data.children.map(function(post) {
			  	var currObj = [];
			  	currObj.source = 'reddit';
		  		currObj.title = post.data.title;
		  		currObj.url = post.data.url;
		  		currObj.commentsurl = 'http://www.reddit.com' + post.data.permalink;
		  		currObj.commentsnum = post.data.num_comments;
		  		currObj.subname = post.data.subreddit_name_prefixed;
			  	currObj.author = post.data.author;
			  	currObj.points = post.data.score;
			  	currObj.datetime = post.data.created_utc;
			  	return currObj;
			});
			resolve(relevantData);
		});
	});
}


function getAllPosts(subreddit) {
	return createSubredditPromise(subreddit);
}

module.exports = {
    getAllRedditPosts : getAllPosts
};