'use strict';
const Reddit = require('./reddit.js');
const HNews = require('./hnews.js');

function getAllPosts(subreddits) {
    var hnPosts = HNews.getAllHnPosts();
    var promises = [];
    var index;
    for (index in subreddits)
    {
        promises.push(Reddit.getAllRedditPosts(subreddits[index]));
    } 
    promises.push(hnPosts);

    return Promise.all(promises);
}

module.exports = {
    getPosts : getAllPosts
};