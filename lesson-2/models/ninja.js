const mongoose = require('mongoose');
const Schema = mongoose.Schema;




//Create geolocation schema
const geoSchema = new Schema({
    type: {
        default: "Point",
        type: String
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
})

//create ninja schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required.']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: geoSchema
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
