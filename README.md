# Web Development Workshop: HackSMU 2020
This repository holds the materials and code for the intro to web development workshop @ HackSMU V (Fall 2023). In this workshop, we will cover how to create a simple full-stack blog web application using `Next.js 12` and `MongoDB`.

For the sake of time, there is an incomplete (initial) version of the code, which we will use in the demo and build up to a completed project. The completed version is also included in this repository for anyone who wants to come back and take a look. 

You can access the completed code by running `git checkout endofsession`.

- To see all of the available branches (versions of the code), run `git branch -a`.

# Setup (Do prior to the Workshop)

## Prerequisites
You must have the following things installed on your laptop prior to the workshop for the interactive coding portion:
* Node.js (Installation: https://nodejs.org/en/download/current) 
    * (check if you have this by running `node -v` in your command prompt)
* Git (Installation: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* MongoDB Community Edition (Installation: https://docs.mongodb.com/manual/administration/install-community/)
* A code editor or IDE (VSCode, Sublime Text, Atom, etc.)
    * For this workshop, I will be using [VSCode.](https://code.visualstudio.com/download)

## Setup Application

### General
1. Open a command prompt (cmd.exe on Windows; Terminal on Mac/Linux)
2. Clone the repository: `git clone https://github.com/mplennon617/hacksmuv-webdev.git`.
3. Open the cloned codebase on your IDE
    * in VSCode you can do this straight from the terminal: `code .` (Don't forget the period)

### Next.js Application

### MongoDB

TODO: NEED TO ADD INSTRUCTIONS ON HOW TO CREATE YOUR OWN MONGODB DATABASE
AND CREATE YOUR OWN ENV.LOCAL

3. Run `mongod --config /usr/local/etc/mongod.conf --fork` to start MongoDB manually as a background process.
    * On MacOS, you may have some issues with missing directory `/data/db` or insufficient permissions. To fix this, use the following commands:
        - `sudo mkdir -p /System/Volumes/Data/data/db`
        - `sudo chown -R `id -un` /System/Volumes/Data/data/db`
        - `mongod --config /usr/local/etc/mongod.conf --fork --dbpath=/System/Volumes/Data/data/db`

CHECKPOINT: Run `ps -x | grep mongo` in a terminal. You should see a `mongod` process running if you did your database setup correctly!

### Start Coding!
At this point, you are good to go for the workshop! See you there!

### References Used
* https://www.positronx.io/react-mern-stack-crud-app-tutorial/
* https://medium.com/@arijit_chowdhury/basic-crud-app-setup-with-react-node-js-express-mysql-5e097e1145ff

# Workshop Materials

# Additional References

* Next.js 13
    * Amazing [video](https://www.youtube.com/watch?v=NgayZAuTgwM&t=347s) by Web Dev Simplified: https://www.youtube.com/watch?v=NgayZAuTgwM&t=347s
    * [CodeBase](https://github.com/WebDevSimplified/n...) (You can use this as a starter project): https://github.com/WebDevSimplified/n...
    * It's a new version of Next.js that came out last year, and it's pretty sweet...
    * There's a lot of changes, but one of the most notable changes is *server side components.* With Next.js 13, you can create frontend components that render on the server side. The server sends static HTML/CSS/JS to the client.

* Tailwind Documentation
    *

* Deploying your Next.js application on Vercel
    * Video: https://www.youtube.com/watch?v=2HBIzEx6IZA
    * Vercel is a website hosting service that allows you to instantly deploy websites on the cloud. 
    * Since Next.js is made by the same company as Vercel, Next.js integrates with Vercel very well. A great option for deploying your HackSMU app.