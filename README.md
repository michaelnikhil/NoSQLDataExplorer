# Dockerized application for NoSQL data import and exploration
## Overview
Data management and editing project. 
A Json file is read and pushed to a mongoDB instance by a console application.
A Web app then consumes the data and displays it, with editing functionality.

## Tech stack
* .Net backend
* Angular front end with a ngrx store for the state management
* The whole application runs within docker

## Quickstart
* Install docker
* From the command line, navigate to the folder /docker-repo
* Run docker-compose build, then docker-compose up
* On startup, the DB-initializer console application writes data to a mongoDB database. 
* The data is read from an input text file data.json located inside the DB-initializer solution
* Launch the Web app : http://localhost:8000 
* If needed, explore the DB using the mongo express client : http://localhost:8081
