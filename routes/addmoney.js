const addmoneyRouter = require('express').Router();
let addmoney = require('../models/addmoneyModel');

addmoneyRouter.get('/', (req,res) => {
    Signup.find()
    .then(signup => res.json(signup))
    .catch(err => res.status(400).json('Error: '+err));
})

addmoneyRouter.post('/', (req, res) => {
    const balance = Number(req.body.balance);

    const newbalance = new addmoney({balance});
    newbalance.save()
    .then(data => {
        console.log(data)
        res.json({ msg: 'Amount updated' })
    })
    .catch(err => {
        res.json({ error: err })
    })
})

module.exports = addmoneyRouter