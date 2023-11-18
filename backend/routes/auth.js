const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require('../models/Users');
const { body, validationResult } = require("express-validator");

// Create a user
router.post("/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be atleast 6 characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    //If there are errors, return bad request and the errors
    const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({errors: error.array()});
  }
  //check whether the email id already exists.
  try{
      let user = await User.findOne({email: req.body.email});
      if(user){
          return res.status(400).json({error: "User with email id already exists"})
      }

      const salt = await bcrypt.genSalt(10);
      securePass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePass,
      })
      res.json(user)
  }
   catch(error) {
    console.error(error.message);
    res.status(500).send("some error occured, try again")
  }
  }
);

module.exports = router