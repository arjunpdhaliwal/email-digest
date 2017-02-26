# node-hacker-news
Hacker News Node Client

[![NPM](https://nodei.co/npm/node-hacker-news.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-hacker-news/)

###Install

```
npm install node-hacker-news
```
##Usage
```
var hn = require("node-hacker-news");
```

###Get Top Stories
```
hn.topstories(function(err, stories){
	if(err) return console.log(err);
	console.log(stories);
});
```

###Get Item

```
hn.item(8422599, function (err, item) {
  if (!err) {
    console.log(item.by); // kevin
    console.log(item.id); // 8422599
    console.log(item.kids); // array
    console.log(item.score); // 1677
    console.log(item.time); // 1412703525
    console.log(item.title); // Hacker News API
    console.log(item.url); // http://blog.ycombinator.com/hacker-news-api
  }
});
```

###Get User

```
hn.user('arjunkomath', function (err, user) {
  if (!err) {
    console.log(user.created); // 1439963996
    console.log(user.id); // arjunkomath
    console.log(user.karma); // 4
    console.log(user.submitted); // [ 11490797, ... ]
  }
});
```

###Get Max Item
```
hn.maxitem(function(err, item){
	if(err) return console.log(err);
	console.log(item);
});
```
