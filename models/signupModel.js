const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const { hash } = require('bcrypt');

const signupSchema = new schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 8
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        length: 10
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    }
}, {
    timestamps: true
})

 signupSchema.pre('save', function(next){
     if(this.isModified('password')){
         bcrypt.hash(this.password, 8, (err, hash) => {
             if(err) return next (err);
             this.password = hash;
             next();
         })
     }
 })

const signup = mongoose.model('signup',signupSchema);
module.exports = signup;
