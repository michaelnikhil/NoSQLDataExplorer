# NoSQL data import and exploration
## Overview
Data management and editing project. 
A Json file is read and pushed to a mongoDB instance by a console application.
A Web app then consumes the data and displays it, with editing functionality.

## Tech stack
* .Net backend
* Angular front end with a ngrx store for the state management
* The whole application runs within docker (Web app to be fixed)


## Quickstart
* Install docker
* From the command line, navigate to the folder /docker-repo
* Run docker-compose build, then docker-compose up
* Navigate to the folder DB-initializer where the .csproj file is located, then : dotnet run DB-initializer.csproj
* Check the mongoDB using a client such as MongoDBCompass
