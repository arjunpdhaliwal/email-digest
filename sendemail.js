'use strict';
const Postmark = require('postmark');
const HTMLBody = require('./htmlcard.js');
const PostAPI = require('./api.js');
const Auth = require('./auth.js');
const Data = require('./data.js');

var emailClient = new Postmark(Auth.postmarkAuth);

function sendEmail() {
	PostAPI.getPosts(Data.subreddits).then(data => {
		var index;


		for (index in data)
			data[index].sort( (a,b) => { return (a.points < b.points) ? 1 : ((b.points < a.points) ? -1 : 0); });

		var hnData = data.splice(-1, 1)[0].splice(0, 3);
		var redditData = [].concat.apply([], data.map(currObj => {return currObj.splice(0, 3)}));


		var allPostBody = ``;

		//console.log(hnData);

		var hours;
		var commentsString = '';
		for (index in redditData)
		{
			if(redditData[index].commentsnum == 1)
				commentsString = '1 comment';
			else
				commentsString = '' + redditData[index].commentsnum + ' comments';
			hours = Math.round(Math.abs(Date.now() - redditData[index].datetime * 1000) / 36e5);
			allPostBody += HTMLBody.getRedditString(redditData[index].points, redditData[index].title, redditData[index].url, '/u/' + redditData[index].author, 'http://www.reddit.com' + '/u/' + redditData[index].author, commentsString, redditData[index].commentsurl, 'about ' + hours + ' hours ago', redditData[index].subname, 'http://www.reddit.com/' + redditData[index].subname)
		}
		for (index in hnData)
		{
			if(hnData[index].commentsnum == 1)
				commentsString = '1 discussion';
			else
				commentsString = '' + hnData[index].commentsnum + ' discussions';
			hours = Math.round(Math.abs(Date.now() - hnData[index].datetime * 1000) / 36e5);
			allPostBody += HTMLBody.getHnString(hnData[index].points, hnData[index].title, hnData[index].url, hnData[index].author, 'https://news.ycombinator.com' + '/user?id=' + hnData[index].author, commentsString, hnData[index].commentsurl, 'about ' + hours + ' hours ago')
		}

		emailClient.sendEmail({
		    "From": Data.fromEmail, 
		    "To": Data.toEmail, 
		    "Subject": "Daily Digest",
		    "HtmlBody": allPostBody
		});
	});
}

module.exports = { 
	sendEmail : sendEmail
};