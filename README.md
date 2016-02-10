Service Name: Twitter Account Management.
Creation Date: 2/10/2016
Developer: Dan Griffin

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

Service Purpose:



Design Overview:



Plans For Future Work:



Other nuansces to note:
None