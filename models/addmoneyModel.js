const mongoose = require('mongoose');
const schema = mongoose.Schema;
//const bcrypt = require('bcrypt');
//const { hash } = require('bcrypt');

const addmoneySchema = new schema({
    balance: {
        type: Number,
        required: true,
        trim: true,
    }
}, {
    timestamps: true
})

 addmoneySchema.pre('save', function(next){next()})

const addmoney = mongoose.model('addmoney',addmoneySchema);
module.exports = addmoney;