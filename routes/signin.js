const signinRouter = require('express').Router();
let Signup = require('../models/signupModel');

// signinRouter.get('/', (req,res) => {
//     Signin.find()
//     .then(signin => res.json(signin))
//     .catch(err => res.status(400).json('Error: '+err));
// })

signinRouter.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Signup.findOne({
        email: body.username
    })

    // const newUser = new Signin({email, password});
    // newUser.save()
    // .then(() => res.json('Login Successfull'))
    // .catch(err => res.status(400).json('Error: '+err))

    if (password == user.password) {
        res.json({ msg: "Success" })
    }

    else {
        res.json({ msg: "Invalid credentials" })
    }
})

module.exports = signinRouter