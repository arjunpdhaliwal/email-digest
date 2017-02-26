var request = require('request');
var API_URL = 'https://hacker-news.firebaseio.com/v0';

module.exports = {

	response: function(cb) {
		return function(error, response, body) {
			if (!error && response.statusCode == 200) {
				try {
					var data = JSON.parse(body);
				} catch (err) {
					cb(err);
				}
				return cb(null, data);
			} else return cb(error);
		}
	},

	topstories: function(cb) {
		request(API_URL+'/topstories.json', this.response(cb))
	},

	maxitem: function(cb) {
		request(API_URL+'/maxitem.json', this.response(cb))
	},

	askstories: function(cb) {
		request(API_URL+'/askstories.json', this.response(cb))
	},

	showstories: function(cb) {
		request(API_URL+'/showstories.json', this.response(cb))
	},

	jobstories: function(cb) {
		request(API_URL+'/jobstories.json', this.response(cb))
	},

	item: function(id, cb) {
		request(API_URL+'/item/{id}.json'.replace('{id}', id), this.response(cb))
	},

	user: function(id, cb) {
		request(API_URL+'/user/{id}.json'.replace('{id}', id), this.response(cb))
	}

}