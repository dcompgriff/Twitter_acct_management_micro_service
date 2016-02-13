Service Name: Twitter Account Management.
Creation Date: 2/10/2016
Developer: Dan Griffin

**********************************************************************
Running The Service:

COMMAND TO START:
"docker run -it --rm -p 80:80 --name mnode twitter_micro_service"

COMMAND TO STOP:
"Ctrl-c"
or
"docker stop mnode"

BUILD THE DOCKER IMAGE:

COMMAND TO BUILD:
"docker build -t twitter_micro_service ."

ENTERING THE NODE DOCKER IMAGE:

COMMAND TO ENTER THE IMAGE:
"docker exec -it <container id> /bin/bash"

TESTING THE SERVICE ENDPOINT:

COMMAND FORMAT:
GET http://<service url>/twitterpage/<valid twitter screen_name>/<number of tweets to return>

EXAMPLE COMMAND:
"http://127.0.0.1/twitterpage/twitterapi/2"

**********************************************************************
SERVICE PURPOSE:
This service can currently be used to retrieve tweets for a designated twitter ser. The API can return up to 200 of the most recent tweets for the specified user account. An example of calling the service can be seen above. This service is used to access twitter tweets for twitter users, without having to manage the communication protocols or authorization. This abstraction provides a way to decouple application logic from the details of managing twitter access. This abstraction allows the application to evolve in complexity separately from the twitter service.

**********************************************************************
PLANS FOR FUTURE WORK:
The plan is to eventually extend the service to manage posting tweets and other actions for users. This means setting up a database for managing access credentials for users that the service can access. 

**********************************************************************
OTHER NUANSCES TO NOTE:
The twitter response APIs are limited to 200 tweets per query.