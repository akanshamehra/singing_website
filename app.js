const express = require("express");
const path = require("path");
// const fs = require("fs");
const app = express();
const port = 5000;

//express specif stuff
app.use('/static',express.static('static')); // for serving static file-
app.use(express.urlencoded())
//pug staff

app.set('view engine','pug')//set template engine as pug
app.set('views',path.join(__dirname, 'views')) //set views directory

//end points
app.get('/',(req,res) =>{
    const p= {}
    res.status(200).render('home.pug',p)
});

app.get('/contact',(req,res) =>{
    const p= {}
    res.status(200).render('contact.pug',p);
});

app.listen(port,()=>{
    console.log(`this is app started succesfully on port ${port}`)
});
