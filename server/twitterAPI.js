//Enclose all twitter API call functions in an exportable module.
var Twitter = require('twitter')
var fs = require('fs');
var keyFileName = 'keyfile.txt';


//Create twitter client.
var client = new Twitter({
	consumer_key: '',
	consumer_secret: '',
	access_token_key: '',
	access_token_secret: ''

});

//Create crypto module for the encryption functions.
var crypto = require('crypto'), algorithm = 'aes-256-ctr', password='^cHUVRS7e49BE^mqn!et';

module.exports = {
	
	getUserTimelineStatuses: function(userId){
		//Get the encryption key to decrypt the app secret.
		var keyJson = decrypt();



		client.get('statuses/user_timeline', params, function(error){
			if(!error){
				console.log(tweets);
				return tweets;
			}
		});


	}

};

function encrypt(consumerKey, consumerSecret){
	//Encrypt consumer key.
	var cipher = crypto.createCipher(algorithm, password);
	var cryptedKey = cipher.update(consumerKey,'utf8','hex');
	cryptedKey += cipher.final('hex');
	//Encrypt consumer secret.
	var cipher = crypto.createCipher(algorithm, password);
	var cryptedSecret = cipher.update(consumerSecret,'utf8','hex');
	cryptedSecret += cipher.final('hex');
	//Store encrypted keys in a json object, and in a file.
	keyJson = {consumerKey: cryptedKey, 
				consumerSecret: cryptedSecret};
	fs.writeFileSync(keyFileName, JSON.stringify(keyJson));

	return keyJson;
}


function decrypt(){
	//Read encrypted key file.
	var keyJson = JSON.parse(fs.readFileSync(keyFileName));
	//Decrypt consumer key.
	var decipher = crypto.createDecipher(algorithm, password);
	var decConsumerKey = decipher.update(keyJson.consumerKey,'hex','utf8');
	decConsumerKey += decipher.final('utf8');
	keyJson.consumerKey = decConsumerKey;
	//Decrypt consumer secret.
	var decipher = crypto.createDecipher(algorithm, password);
	var decConsumerSecret = decipher.update(keyJson.consumerSecret,'hex','utf8');
	decConsumerSecret += decipher.final('utf8');
	keyJson.consumerSecret = decConsumerSecret;
	//Return json file with both secrets.
	return keyJson;
}
