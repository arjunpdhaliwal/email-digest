'use strict';
const Reddit = require('./redditapi.js');
const HNews = require('./hnewsapi.js');

function getAllPosts(subreddits) {
	var hnPromise = HNews.getAllHnPosts();
	var promises = [];
	var index;
	for (index in subreddits) {
		promises.push(Reddit.getAllRedditPosts(subreddits[index]));
	} 
	promises.push(hnPromise);

	return Promise.all(promises);
}

module.exports = {
    getPosts : getAllPosts
};
