var http = require('http');
var express = require('express');
var fs = require('fs');
var twitter = require('./twitterAPI')

//Initialize the packages that are used by the
var app = express();



app.get('/twitterpage/:id', function(req, res){
	//Call twitter read API.
	var tweets = twitter.getUserTimelineStatuses(req.param('id'));
	//Convert into json obj.
	var jsonTweets = JSON.parse(tweets);
	jsonTweets.name = req.param(id);

	//Convert all data back to string, and return.
	res.send(JSON.stringify(jsonTweets));
});

app.listen(8080, function(){
	console.log('Twitter server started.');
});

