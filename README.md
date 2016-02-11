Service Name: Twitter Account Management.
Creation Date: 2/10/2016
Developer: Dan Griffin

**********************************************************************
Running The Service:
Command to start:
"docker run -it --rm -p 80:80 -name mnode twitter_micro_service"
Command to stop:
"Ctrl-c"
or
"docker stop mnode"

Building The Docker Image:
Command to build:
"docker build -t twitter_micro_service ."

Entering The Node Docker Image:
Command to enter the image:
"docker exec -it <container id> /bin/bash"

Testing The Service Endpoint:
Command format:
GET http://<service url>/twitterpage/<valid twitter screen_name>/<number of tweets to return>

Example command:
"http://127.0.0.1:8080/twitterpage/twitterapi/2"

**********************************************************************
Service Purpose:


**********************************************************************
Design Overview:


**********************************************************************
Plans For Future Work:


**********************************************************************
Other nuansces to note:
The twitter response APIs are limited to 200 tweets per query.