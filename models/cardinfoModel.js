const mongoose = require('mongoose');
const schema = mongoose.Schema;
//const bcrypt = require('bcrypt');
//const { hash } = require('bcrypt');

const cardinfoSchema = new schema({
    cardnumber: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 16
    },
    cardholder: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    expirydate: {
        type: Date,
        required: true,
        minlength: 4
    }
}, {
    timestamps: true
})

 cardinfoSchema.pre('save', function(next){next()})

const cardinfo = mongoose.model('card',cardinfoSchema);
module.exports = cardinfo;