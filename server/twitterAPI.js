//Enclose all twitter API call functions in an exportable module.
var Twitter = require('twitter')
var fs = require('fs');
var keyFileName = 'keyfile.txt';


//Create crypto module for the encryption functions.
var crypto = require('crypto'), algorithm = 'aes-256-ctr', password='^cHUVRS7e49BE^mqn!et';

module.exports = {
	
	getUserTimelineStatuses: function(userId, req, res){
		//Get the encryption key to decrypt the app secret.
		var keyJson = decrypt();
		console.log('decrypted: ' + JSON.stringify(keyJson));

		//Create a new twitter client.
		var client = new Twitter({
			consumer_key: keyJson.consumerKey,
			consumer_secret: keyJson.consumerSecret,
			access_token_key: keyJson.accessToken,
			access_token_secret: keyJson.accessTokenSecret
		});

		//Get the user timeline statuses for the current user.
		client.get('statuses/user_timeline', function(error, tweets, response){
			if(!error){
				console.log(tweets);

				//Create clean response object to return.
				var tweetResponseList = {'tweetList': [],
											'userId': req.params.id};
				for (i=0; i<tweets.length; i++){
					tweetResponseList.tweetList.push({'text': tweets[i].text, 'date': tweets[i].created_at});
				};

				//Convert all data back to string, and return.
				res.send(JSON.stringify(tweetResponseList));
			}else{
				res.statusCode = 500;
				res.send(error);
			}
		});
	}

};

function encrypt(consumerKey, consumerSecret, accessToken, accessTokenSecret){
        //Encrypt consumer key.
        var cipher = crypto.createCipher(algorithm, password);
        var cryptedKey = cipher.update(consumerKey,'utf8','hex');
        cryptedKey += cipher.final('hex');
        //Encrypt consumer secret.
        var cipher = crypto.createCipher(algorithm, password);
        var cryptedSecret = cipher.update(consumerSecret,'utf8','hex');
        cryptedSecret += cipher.final('hex');
        //Encrypt accessToken.
        var cipher = crypto.createCipher(algorithm, password);
        var cryptedAccessToken = cipher.update(accessToken,'utf8','hex');
        cryptedAccessToken += cipher.final('hex');
        //Encrypt consumer secret.
        var cipher = crypto.createCipher(algorithm, password);
        var cryptedAccessTokenSecret = cipher.update(accessTokenSecret,'utf8','hex');
        cryptedAccessTokenSecret += cipher.final('hex');
        //Store encrypted keys in a json object, and in a file.
        keyJson = {consumerKey: cryptedKey, 
                                consumerSecret: cryptedSecret,
                                accessToken: cryptedAccessToken,
                                accessTokenSecret: cryptedAccessTokenSecret};
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
        //Decrypt consumer secret.
        var decipher = crypto.createDecipher(algorithm, password);
        var decAccessToken = decipher.update(keyJson.accessToken,'hex','utf8');
        decAccessToken += decipher.final('utf8');
        keyJson.accessToken = decAccessToken;
        //Decrypt consumer secret.
        var decipher = crypto.createDecipher(algorithm, password);
        var decAccessTokenSecret = decipher.update(keyJson.accessTokenSecret,'hex','utf8');
        decAccessTokenSecret += decipher.final('utf8');
        keyJson.accessTokenSecret = decAccessTokenSecret;
        //Return json file with both secrets.
        return keyJson;
}
