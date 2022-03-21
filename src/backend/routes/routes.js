const express = require("express");
const router = express.Router();
const signUp = require('../models/SignUpModels');
const bcrypt = require('bcrypt');


router.post("/signup", async (req, res) => {

    const saltPassword = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, saltPassword);

    const newSignUp = new signUp({
        fullName: req.body.fullName,
        email: req.body.email,
        password: hashedPassword
    });
    newSignUp.save().then((data) => {
        res.json(data);
    })
    .catch(error => {
        res.json(error);
    })
})

module.exports = router