# Web Development Workshop: HackSMU V

This repository holds the materials and code for the intro to web development workshop @ HackSMU V (Fall 2023). In this workshop, we will cover how to create a simple full-stack blog web application using `Next.js 12` and `MongoDB`.

For the sake of time, there is an incomplete (initial) version of the code, which we will use in the demo and build up to a completed project. The completed version is also included in this repository for anyone who wants to come back and take a look. 

You can access the completed code by running `git checkout endofsession`.

- To see all of the available branches (versions of the code), run `git branch -a`.

# Setup (Do prior to the Workshop)

If you want to code along, complete the setup in full prior to the workshop. Set aside at least 30 minutes.

## Prerequisites
You must have the following things installed on your laptop prior to the workshop for the interactive coding portion:
* **Node.js** (Installation: https://nodejs.org/en/download/current) 
    * (check if you have this by running `node -v` in your command prompt)
* **Git** (Installation: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* **A code editor or IDE** (VSCode, Sublime Text, Atom, etc.)
    * For this workshop, I will be using [VSCode.](https://code.visualstudio.com/download)

## Setup Application

### General
1. Open a command prompt (cmd.exe on Windows; Terminal on Mac/Linux)
2. Clone the repository: `git clone https://github.com/mplennon617/hacksmuv-webdev.git`
3. Open the cloned codebase on your IDE
    * in VSCode you can do this straight from the terminal: `code .` (Don't forget the period)

### Next.js Application

We need to get our Next.js application up and running.

1. Go back to your command prompt. Make sure you are in your root directory (`[...]/webdev-workshop`). Run combinations of the commands `pwd`, `ls`, and `cd [...]` to navigate there.
2. Install dependencies: `npm install` 
    * Note: You need Node.js to `npm install`.
3. Run the Application: `npm run dev`
4. Navigate to `http://localhost:3000`. If you see "Simple Social App" at the top of your screen, you are done!

### MongoDB

For this workshop, you will read and write to your own MongoDB Database. This portion of the setup creates your database.

1. Navigate to https://www.mongodb.com/ 
2. "Start Free" > Create an Account
3. After you're signed in, click `+Create`
4. Fill in the information as shown below and click `Create` at the bottom of the page. 
![Create DB](./public/img/readme-1.png)
    * **IMPORTANT:** Make sure you name your database `webdesign-workshop` !!
5. You will be taken to the Quickstart page. Select `Username and Password` and enter the username and password of your choice. Select `Create User`
6. Select `My Local Environment` and click on `Add My Current IP Address`
7. Click `Finish and Close`

*At this point you have successfully created a MongoDB Database cluster deployment! Now we need to connect to the Database from our web application.*
![Create DB](./public/img/readme-2.png)

8. In VSCode: Open the cloned `hacksmuv-webdev` application.
9. Inside the root directory `hacksmuv-webdev` you will see a file named `.env.local.example.` rename it to `.env.local`. This is where we will place our DB connection string.
10. Go back to the MongoDB console. In the Overview tab, click `Connect` then select `Drivers`
![Create DB](./public/img/readme-3.png)
11. Find `Add your connection string into your application code.` Copy the URL and place it into `.env.local`. Replace `<password>` with the password you defined in step 5. Example:

    ```
    MONGODB_URI=mongodb+srv://username:password123@webdesign-workshop.oynsgim.mongodb.net/?retryWrites=true&w=majority
    ```

*At this point you should be able to connect to your database! We'll test that, but before that we need to add a Collection and insert some sample data.*

12. Select `Add Data`. Find `Create Database on Atlas` and click `Start`
![Create DB](./public/img/readme-4.png)
13. Fill in the Database name and Collection Name as shown below
    * Insert the following into the optional `Insert JSON` textbox:

    ```
    {
        "author": "Jane Doe",
        "title": "My First Web App",
        "body": "It's time to make a website!"
    }
    ```

14. Click `Create Database`. You should see a database console with a document containing the data you just inserted.
15. Hover over your new document and click `Clone Document`. This is just so we have multiple documents.
16. Run your application from the terminal: `npm run dev`
17. Navigate to `http://localhost:3000/testdb`. If you see one of your posts, you are done!
![Create DB](./public/img/readme-5.png)

***If you had trouble setting up MongoDB, let me know at the beginning of the workshop and I can give you a spare connection string for*** `.env.local`.

### Start Coding!
At this point, you are good to go for the workshop! See you there!

# Workshop Materials

* Code Repository: https://github.com/mplennon617/hacksmuv-webdev.git

# Additional Technology Not Covered

### Next.js 13
* [Video](https://www.youtube.com/watch?v=NgayZAuTgwM&t=347s) 
    * FYI: Web Dev Simplified YT Channel is a fantastic resource for learning web design
* [CodeBase](https://github.com/WebDevSimplified/n...) 
    * You can use this as a starter project
* It's a new version of Next.js that came out last year, and it's pretty sweet...
* There's a lot of changes, but one of the most notable changes is *server side components.* With Next.js 13, you can create frontend components that render on the server side. The server sends static HTML/CSS/JS to the client. You can also *directly* interact with server infrastructure (e.g. a database) with server side components.

### Typescript
* TypeScript is exactly what it sounds like: JavaScript with types! TypeScript has a steeper learning curve than JavaScript, but if used well it can avoid a lot of headaches you'd get with JavaScript.
* See the Get Started portion of [this Page](https://www.typescriptlang.org/docs/handbook/intro.html#get-started)  for more info.

### Deploying your Next.js application on Vercel
* [Video](https://www.youtube.com/watch?v=2HBIzEx6IZA)
* From Next.js developers:
    >The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

    >Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
