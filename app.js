// creates a basic server using the Express framework in Node.js
// iports the express library in project
const express = require('express');
// create an express application instance 
// "app" object defines routes, middleware and start server
const app = express();

app.get("", (req, resp)=>{
    resp.send('<h1>Basic node js example</h1>')
});

app.get("/about", (req, resp)=>{
    resp.send('<h1>This is about page</h1>')
});

app.get("/contact", (req, resp)=>{
    resp.send('<h1>This is contact page</h1>')
});
app.listen(3200);



// Using Express.JS - Method 1
// creating a server
// Recommended method
const express = require('express');
const app = express();

app.listen(3400, () => {
    console.log('Server is running on port 3400');
});



// Using Express.JS - Method 2
// creating aserver
const app = require('express')();

app.listen(3400, () => {
    console.log('Server is running on port 3400');
});



// Logging a large object 
// A function with many attached methods
const express = require('express');
const app = express();
console.log(app);
app.listen(3400, () => {
    console.log('Server is running on port 3400');
});


// Creating server 
// Without Route Path and a Callback function
const express = require('express')
const app = express();

app.get("");
app.listen(4800);



// Creating server
// App.get(path, callback);
// Path → the URL path (e.g., /)
// Callback → a function that runs when a request is made to that path

const express = require('express')
const app = express();

// Route path
app.get("/", (req, resp) => {
    resp.send("Hello, World")
});

// Route path
app.get("/about", (req, resp) => {
    resp.send("About Page")
});

// Route path
app.get("/contact", (req, resp) => {
    resp.send("Contact Page")
});

// Route path
app.get("/team", (req, resp) => {
    resp.send("<h3>My Team</h3>")
});

app.listen(4800, () => {
    console.log('Server is running on port 4800');
});



/ When two or more Routes are same
// first one preferred

const express = require('express')
const app = express();

// Route path
app.get("", (req, resp) => {
    resp.send("Hello, World1")
});

// Route path
app.get("", (req, resp) => {
    resp.send("Hello, World2")
});


app.listen(4800, () => {
    console.log('Server is running on port 4800');
});



// Import Methods
// Vanilla JS Script - Old-fashioned
const express = require('express');
// Exma Script - Modern
import express from 'express';



// Package.json --> type --> common.js
// Change type to --> module
// Now can use ECMA Script import method


// import function
import express from 'express';
import home from './home.js';

const app = express();

app.get("", (req, resp) => {
    resp.send(home())
});

app.get("/about", (req, resp) => {
    resp.send('<h2>About page</h2>')
});

app.listen(3200);


// import export another js file
import express from 'express';
import home, { team } from './pages/home.js';

const app = express();

app.get("", (req, resp) => {
    resp.send(home())
})

app.get("/about", (req, resp) => {
    resp.send("<h2>About Page</h2>")
})

app.listen(3400);


