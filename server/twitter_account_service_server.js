var http = require('http');
var express = require('express');
var fs = require('fs');
var twitter = require('./twitterAPI')

//Initialize the packages that are used by the
var app = express();



app.get('/twitterpage/:id', function(req, res){
	//Call twitter read API.
	var jsonTweets = twitter.getUserTimelineStatuses(req.params.id, req, res);
});

app.listen(8080, function(){
	console.log('Twitter server started.');
});

