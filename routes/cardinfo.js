const cardinfoRouter = require('express').Router();
let cardinfo = require('../models/cardinfoModel');

cardinfoRouter.get('/', (req,res) => {
    cardinfo.find()
    .then(cardinfo => res.json(cardinfo))
    .catch(err => res.status(400).json('Error: '+err));
})

cardinfoRouter.post('/', (req, res) => {
    const cardnumber = req.body.cardnumber;
    const cardholder = req.body.cardholder;
    const expirydate = req.body.expirydate;

    const newcard = new cardinfo({cardnumber, cardholder, expirydate});
    newcard.save()
    .then(data => {
        console.log(data)
        res.json({ msg: 'Card added' })
    })
    .catch(err => {
        res.json({ error: err })
    })
})

module.exports = cardinfoRouter