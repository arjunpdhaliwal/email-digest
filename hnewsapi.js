'use strict'
const HNews = require('node-hacker-news');
const NodeRestClient = require('node-rest-client').Client;

var restClient = new NodeRestClient();

function getAllHnIDs() {
	return new Promise(function(resolve, reject) {
		restClient.get("https://hacker-news.firebaseio.com/v0/newstories.json", function (data, response) {
			data = data.slice(0, 99);
			resolve(data);
		});
	});
}

function getAllHnPostsFromIDs(promises) {
	return Promise.all(promises);
}

function getAllHnPosts(hnPromise) {
	return hnPromise.then(function(ids) {
		var promises = [];
		var index;
		for (index in ids)
		{
			promises.push(new Promise(function(resolve, reject) {
				HNews.item(ids[index], function(err, item) {
					if (err) throw err;
					var currObj = [];
					//console.log(item);
				  	currObj.source = 'hnews';
			  		currObj.title = item.title;
			  		if (item.url)
			  			currObj.url = item.url;
			  		else
			  			currObj.url = "";
				  	currObj.author = item.by;
				  	currObj.commentsurl = 'https://news.ycombinator.com/item?id=' + item.id;
				  	if(item.kids)
				  		currObj.commentsnum = item.kids.length;
				  	else
				  		currObj.commentsnum = 0;
				  	currObj.points = item.score;
				  	currObj.datetime = item.time;
				  	resolve(currObj);
				});
			}));
		}
		return getAllHnPostsFromIDs(promises);
	});
}

function getAllPosts(hnPromise) {
	return getAllHnPosts(getAllHnIDs());
}

module.exports = {
    getAllHnPosts : getAllPosts
};