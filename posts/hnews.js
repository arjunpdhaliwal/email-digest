'use strict'
const NodeRestClient = require('node-rest-client').Client;
let restClient = new NodeRestClient();

function getAllHnIDs() {
    return new Promise((resolve, reject) => {
        restClient.get("https://hacker-news.firebaseio.com/v0/newstories.json", (data, response) => {
            data = data.slice(0, 99);
            resolve(data);
        });
    });
}

function getAllHnPosts(getIDs) {
    return getIDs().then((ids) => {
        let promises = [];
        let index;
        for (index in ids) {
            promises.push(new Promise((resolve, reject) => {
                restClient.get('https://hacker-news.firebaseio.com/v0/item/' + ids[index] + '.json', (data, response) => {
                    let currObj = [];
                    currObj.source = 'hnews';
                    currObj.title = data.title;
                    if (data.url) {
                        currObj.url = data.url;
                    }
                    else {
                        currObj.url = "";
                    }
                    currObj.author = data.by;
                    currObj.commentsurl = 'https://news.ycombinator.com/item?id=' + data.id;
                    if(data.kids) {
                      currObj.commentsnum = data.kids.length;
                    }
                    else {
                      currObj.commentsnum = 0;
                    }
                    currObj.points = data.score;
                    currObj.datetime = data.time;
                    resolve(currObj);
                });
            }));
        }
        return Promise.all(promises);
    });
}

function getAllPosts(hnPromise) {
    return getAllHnPosts(getAllHnIDs);
}

module.exports = {
    getAllHnPosts : getAllPosts
};