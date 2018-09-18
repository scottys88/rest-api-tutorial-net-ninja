const express = require('express');
var bodyParser = require('body-parser')
const routes = require('./routes/api');
const mongoose = require('mongoose');


//set up the express app and uses the router
const app = express();

//connect to mongo
mongoose.connect('mongodb://netninja:netninja1@ds259802.mlab.com:59802/rest-api-tutorial-net-ninja', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(bodyParser.json());

//initialise routes
app.use('/api/',routes);

//Error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message });
});

//listens for requests
app.listen(4000, function(){
    console.log('now listening for requests');
});