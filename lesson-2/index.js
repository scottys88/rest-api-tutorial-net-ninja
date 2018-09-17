const express = require('express');

//set up the express app
const app = express();



app.get('/api', (req, res) => {
    console.log('hey');
    res.send({name: 'Yoshi'});
    
    res.end();
});

//listens for requests
app.listen(4000, function(){
    console.log('now listening for requests');
});