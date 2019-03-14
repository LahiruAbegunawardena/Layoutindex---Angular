const express = require('express');
// const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const admn = require('./routes/products');
const app = express();

const port = process.env.PORT ||3000;
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/layoutdb", { useNewUrlParser: true }, function(err, callback){
    if(callback) { console.log('db connected successfully'); }
    if(err) { console.log('db connection failed..'); }
});

app.get("/",function (req,res){
    res.send("hello world");
});

app.use('/prod', admn);


app.listen(port, function(){
    console.log("listening to port "+port);
});