const signupRouter = require('express').Router();
let Signup = require('../models/signupModel');

signupRouter.get('/', (req,res) => {
    Signup.find()
    .then(signup => res.json(signup))
    .catch(err => res.status(400).json('Error: '+err));
})

signupRouter.post('/', (req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const phoneNumber = Number(req.body.phoneNumber);
    const password = req.body.password;

    const newUser = new Signup({fullName, email, phoneNumber, password});
    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error: '+err))
})

module.exports = signupRouter