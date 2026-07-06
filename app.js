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



