require('../data/db');
const express = require('express');
const router = express.Router();
const userModel = require('../models/User');
const bcrypyt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = 10;

router.get('/', (req, res) => {
    res.send('HELLO');
})

router.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send('All Fields are required!');
        return;
    }

    userModel.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            res.status(500).send('ERROR');
            return;
        }
        if (!user) {
            res.status(400).send('LOGIN FAILED!');
            return;
        } else {
            bcrypyt.compare(req.body.password, user.password, (err, result) => {
                if (result) {
                    let payload = { subject: user._id };
                    let token = jwt.sign(payload, 'secretKey');
                    res.status(200).send({ token });

                } else {

                    res.status(400).send('LOGIN FAILED!');
                    return;
                }
            })
        }
    })
});


router.post('/register', (req, res) => {
    let userData = req.body;

    if (userData.email && userData.password) {
        bcrypyt.hash(req.body.password, salt, (err, hash) => {
            let user = new userModel({ email: req.body.email, password: hash });
            user.save((err, registeredUser) => {
                if (err) {
                    console.log(err)
                } else {
                    let payload = { subject: registeredUser._id };
                    let token = jwt.sign(payload, 'secretKey');
                    res.status(200).send({ token });
                }
            })
        })
    }
})


module.exports = router;

