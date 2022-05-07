//const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()

const User = require('../models/signupModel')

loginRouter.post('/', async (req, res) => {
    var username=req.body.email
    var password=req.body.password
    User.findOne({$or:[{email:username}]})
    .then(user =>{
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    //let token=jwt.sign({name:user.email},'secret',{expiresIn:'2h'})
                    res.json({
                        message:"Login success",
                       //token
                    })
                }else{
                    return res.json({
                        error: 'Incorrect Password',
                    })
                }
            })
        }else{
            return res.json({
                error: 'User Not Found'
            })
        }
    })
    })


module.exports = loginRouter