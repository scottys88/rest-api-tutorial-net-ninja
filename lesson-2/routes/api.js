const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Ninja = require('../models/ninja');


//Get a list of ninjas from the database
router.get('/ninjas', (req,res,next) => {
    Ninja.aggregate().near({
        near: {
         'type': 'Point',
         'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        maxDistance: 100000,
        spherical: true,
        distanceField: "dis"
       }).then(function(ninjas){
        res.send(ninjas);
    }).catch(next);   
});

//Add a new ninja to the database
router.post('/ninjas', (req,res,next) => {
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});


//update a ninja in the database
router.put('/ninjas/:id', (req,res,next) => {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body ).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        })
    });
});

//Delete a ninja in the database
router.delete('/ninjas/:id', (req,res,next) => {
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    });
});

module.exports = router;
