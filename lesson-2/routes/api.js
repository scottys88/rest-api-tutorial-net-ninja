const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Ninja = require('../models/ninja');


//Get a list of ninjas from the database
router.get('/ninjas', (req,res) => {
    res.send({type:'GET'});
});

//Add a new ninja to the database
router.post('/ninjas', (req,res) => {
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    });
});

//update a ninja in the database
router.put('/ninjas/:id', (req,res) => {
    res.send({type:'PUT'});
});

//Delete a ninja in the database
router.delete('/ninjas/:id', (req,res) => {
    res.send({type:'DELETE'});
});

module.exports = router;
