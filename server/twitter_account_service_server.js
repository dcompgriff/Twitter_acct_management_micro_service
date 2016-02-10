var http = require('http');
var express = require('express');
var fs = require('fs');

//Initialize the packages that are used by the
var app = express();



app.get('/', function(req, res){
	res.send('Hello to you.')
});

app.listen(8080, function(){
	console.log('Twitter server started.');
});

