'use strict';
const Snoocore = require('snoocore');
const Auth = require('../data/auth.js')

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

function getAllPosts(subreddit) {
    return new Promise((resolve, reject) => {
        reddit('/r/' + subreddit + '/hot').get().then((result) => {
              var relevantData = result.data.children.map((post) => {
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

module.exports = {
    getAllRedditPosts : getAllPosts
};