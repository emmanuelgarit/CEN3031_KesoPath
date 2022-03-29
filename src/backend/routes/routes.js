const express = require("express");
const router = express.Router();
const signUp = require("../models/SignUpModels");
const bcrypt = require("bcrypt");

/*
Can refactor code later and have a controllers folder but it doesn't seem necessary now

*/

router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  // try catch block to handle errors
  try {
    const existingUser = await signUp.findOne({ email });

    if (existingUser) {
      console.log("user already exists");
      // cant get this error message to display from front end but the status code is right so I check for that
      return res.status(400).send({ error: "User already exists" });
    }

    const saltPassword = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltPassword);

    const newSignUp = await signUp.create({
      fullName: fullName,
      email: email,
      password: hashedPassword,
    });

    res.status(200).send({ newSignUp });
  } catch (error) {
    res.status(500).send({ message: "something went wrong" });
  }
});

router.post("/signin", async (req, res) => {
  // might need to use jwt for authentication but not sure if it's necessary for now
  const { email, password } = req.body;

  try {
    const user = await signUp.findOne({ email });

    if (!user) {
      console.log("user does not exist");
      return res.status(404).send({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("incorrect password");
      return res.status(400).send({ message: "Incorrect password" });
    }

    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send({ message: "something went wrong" });
  }
});

router.post("/sendanswer", async (req, res) => {
  const { email, currentSlide, answer } = req.body;

  let assignment = "push";

  let answerLength;

  try {
    const user = await signUp.findOne({ email });
    answerLength = user.answers.length;
    if (currentSlide < answerLength) {
      assignment = "update";
    }
  } catch (error) {
    console.log(error);
  }
  if (assignment === "update") {
    try {
      const updatedUser = await signUp.findOneAndUpdate(
        { email },
        { $set: { [`answers.${currentSlide}`]: answer } }
      );
      res.status(200).send({ message: "success" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "something went wrong" });
    }
  } else {
    try {
      const updatedUser = await signUp.findOneAndUpdate(
        { email },
        { $push: { answers: answer } }
      );
      res.status(200).send({ message: "success" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "something went wrong" });
    }
  }
});

router.post("/getanswers", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await signUp.findOne({ email });
    res.send({ answers: user.answers });
  } catch (error) {
    res.status(500).send({ message: "something went wrong" });
  }
});

module.exports = router;
