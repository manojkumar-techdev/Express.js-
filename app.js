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



// imporing multiple modules from one file
import express from 'express';
import home, { contact, team } from './pages/home.js';

const app = express();

app.get("", (req, resp) => {
    resp.send(home())
})

app.get("/contact", (req, resp) => {
    resp.send(contact())
})

app.get("/team", (req, resp) => {
    resp.send(team())
})

app.get("/about", (req, resp) => {
    resp.send("<h2>About Page</h2>")
})

app.listen(3400);



// Render HTML Elements or Forms
// Form can be impoted from another file
import express from 'express';
const app = express();

app.get("/", (req, resp) => {
    resp.send("<h1>Home Page</h1>");
})

app.get("/login", (req, resp) => {
    resp.send(`
        
        <form action="/submit" method="post">

        <input type='text' placeholder='Enter Name'>
        <br /><br />

        <input type='password' placeholder='Enter Password'>
        <br /><br />

        <button>LogIn</button>

        </form>
        `);
})

app.post("/submit", (req, resp) => {
    resp.send("<h1>Data Submitted</h1>");
})

app.listen(3200);



// +++++++++++++++++++++
// Importing lelement and forms from other files
import express from 'express';
import home, { contact, team } from './pages/home.js';
import login from './pages/login.js';
import submit from './pages/submit.js';

const app = express();

app.get("/", (req, resp) => {
    resp.send(home())
})

app.get("/login", (req, resp) => {
    resp.send(login())
})

app.post("/submit", (req, resp) => {
    resp.send(submit())
})

app.get("/about", (req, resp) => {
    resp.send("<h2>About Page</h2>")
})

app.listen(3400);


/ home.js - another file for import
export default function () {
    return "<h2>Home Page</h2> <a href = 'login'>Go to Login</a>"
}


// login.js - another file for import
export default function login() {
    return `<form action="/submit" method="post">
    
    <input type='text' name="username" placeholder='Enter Name'>
    <br /><br />
    
    <input type='password' name="username" placeholder='Enter Password'>
    <br /><br />
    
    <button>LogIn</button>
    
    </form>`
}



// submit.js - another file for import
export default function submit() {
    return "<h2>Data Submitted</h2>"
}


// Routing to a specific page
export default function home() {
    return "<h2>Home Page Ready</h2> <a href='login'>Go To Login Page</a>";
}



// +++++++++++++++++++
// Render HTML file
import express from 'express';
import path from 'path';

const app = express();

// to load pages in browser
// use get method
app.get("/", (req, resp) => {
    const absPath = path.resolve('view/home.html');
    console.log(absPath);
    // Error - Absolute path
    resp.sendFile(absPath);
})


app.get("/login", (req, resp) => {
    const absPath = path.resolve('view/login.html');
    console.log(absPath);
    // Error - Absolute path
    resp.sendFile(absPath);
})


app.get("/about", (req, resp) => {
    const absPath = path.resolve('view/about.html');
    console.log(absPath);
    // Error - Absolute path
    resp.sendFile(absPath);
})

app.listen(1000);



// Make 404 Pagee
// When page not find - Show 404 error or page not found

import express from 'express';
import path from 'path';

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.resolve("view/home.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("view/login.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.resolve("view/about.html"));
});

// 404 Page (must be the last route)
app.use((req, res) => {
    res.status(404).sendFile(path.resolve("view/404.html"));
});

app.listen(1000, () => {
    console.log("Server running on http://localhost:1000");
});
