require("../data/dataBase");// data from the dataBase.js
const express = require("express");
const router = express.Router();
const userModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const salt = 10;

router.get("/", (req, res) => {
    userModel.find({}, (err, documents) => {
        err ? res.status(500).send("error") : res.status(200).send(documents);
      });
});

router.post("/login", async(req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send("All Fields are required!");
    return;
  }

  userModel.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      res.status(500).send("ERROR");
      return;
    }
    if (!user) {
      res.status(400).send("LOGIN FAILED!");
      return;
    } else {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        //   if (err) {
        //     res.status(500).send("ERROR");
        //     return;
        //   }
          if(req.body.password != user.password){
              res.status(400).send("Login Failed");
              return;
          }
        if (result) {
          let payload = { subject: user._id };
          let token = jwt.sign(payload, "secretKey");
          res.status(200).send({ token: token });
        } else {
          res.status(400).send("LOGIN FAILED!");
          return;
        }
      });
    }
  });
});

router.post("/register", async (req, res) => {
  if (!req.body.email || req.body.password.length < 8) {
    res.status(400).send("Check your input");
    return;
  }
  if (!req.body.email.includes("@")) {
    res.status(400).send("Email not valid");
    return;
  }
  let userData = req.body;
  if (userData.email && userData.password) {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      let user = new userModel({ ...userData, password: hash });
      user.save((err, registeredUser) => {
        if (err) {
          res.status(500).send("error:" + err);
        } else {
          let payload = { subject: registeredUser._id };
          let token = jwt.sign(payload, "secretKey");
          res.status(200).send({ message: "success", token: token });
        }
      });
    });
  }
});
module.exports = router;

// router.post('/addnew', async(req, res) => {
//     if(!req.body.email || req.body.password || !req.body.firstName || !req.body.lastName){
//         res.status(400).send('All fields are required!')
//         return;
//     }
//     if(!req.body.email.includes('@')){
//         res.status(400).send('Email not valid')
//         return;
//     }
//     let user1 = await (await userModel.findOne({email:req.body.email})).execPopulate();
//     console.log(user1);
//     if(!user1){
//         console.log('Hi');
//         const extraHash = "%jhvh$jhgc#d#ljhv^vhv%%hgc^sdx#f"; //not obligatory, defined by me
// let user = new userModel({...userData, password:hash});
// user.save((err, registerUser) => {
//     if(err) {
//         console.log(err)
//     } else {
//         let payload = {subject: registeredUser._id};
//         let token = jwt.sign(patload, 'secretKey');
//         res.status(200).send({token});
//     }
//     res.status(500).send("")
//     }
// } else {
//     let
// }
//     }
// })
