# CSV Image Viewer -- full stack project

Hello! If you're reading this (which hopefully you are) that means you're reviewing my submission! In this directory contains 2 subdirectories that implement this project to the best of my knowledge. There's a backend project written in rails (specifically rails 6.0.2.1 with ruby 2.6). Then there is a frontend that I implemented with react/redux that should be fairly easy to start with yarn. For the frontend side of things I used npm 6.11.3, and yarn 1.19.1.


TL;DR

To Start the project there should be simply two main steps (however they must be started in this order since the db port is important for the AJAX requests!)

1. Backend: install gems with `bundle install` then start the project with `bundle exec rails s`
2. Frontend: install node modules with `yarn install` then run the project with `yarn run`, you should be prompted to run the server on `port 3001` which is what we want!

To run specs (I only have them covered on the back end for now), just run `bundle exec rspec spec` in the backend directory

If you run into any issues getting the project running please let me know! I ran into some local development issues getting the project running the first day (mostly because I mainly dev on my work computer instead of my personal computer nowadays). I would have dockerized the project but unfortunately I didn't have the time to do it. Also if there are any questions please let me know! 
