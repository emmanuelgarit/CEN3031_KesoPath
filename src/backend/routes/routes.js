const express = require("express");
const router = express.Router();
const signUp = require('../models/SignUpModels');
const bcrypt = require('bcrypt');


router.post("/signup", async (req, res) => {

    const { fullName, email, password } = req.body;

    // try catch block to handle errors
    try {
        const existingUser = await signUp.findOne({ email });

        if (existingUser) {
            console.log("user already exists");
            return res.status(400).send({ error: "User already exists" });
        }

        const saltPassword = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, saltPassword);

        const newSignUp = await signUp.create({
            fullName: fullName,
            email: email,
            password: hashedPassword
        });

        res.status(200).send({ newSignUp });

        /*newSignUp.save().then((data) => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        }) */
    } catch (error) {
        res.status(500).send({ message: "something went wrong" });
    }
    
})

router.get("/signin", async (req, res) => {

})

module.exports = router