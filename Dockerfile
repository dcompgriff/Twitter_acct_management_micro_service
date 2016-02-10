#File for building a node docker instance that will run the node twitter service.
FROM node:4-onbuild
#Expose my application's port.
EXPOSE 8080
EXPOSE 80