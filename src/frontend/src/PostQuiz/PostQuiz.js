import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import axios from "axios";
import UserContext from "../UserContext";
import { useEffect, useState, useRef } from "react";

export default function PostQuiz(props) {
  let navigate = useNavigate();
  const ContentContainer = styled(Box)(() => ({
    height: "100%",
    flexDirection: "row",
  }));

  const { userData, setUserData } = React.useContext(UserContext);
  const [result, setResult] = useState("Click to Generate...");

  useEffect(() => {
    getCareerPath();
  }, []);

  async function getCareerPath() {
    const userObject = JSON.parse(localStorage.getItem("user"));
    const fullName = userObject.fullName;
    const userEmail = userObject.email;
    let answerList = [];

    const email = {
      email: userEmail,
    };
    await axios
      .post("http://localhost:4000/api/getanswers", email)
      .then((res) => {
        console.log("res.data: ", res.data.answers);
        answerList = res.data.answers;
        console.log("answerList: ", answerList);
      });
    return generateCareerResult(answerList);
  }

  //Algorithm for career generation
  function generateCareerResult(answerList) {
    //we are assuming getCareerPath has already been called.
    console.log("Current state of array: ", answerList);
    //variables which store question weights
    let SocialStudies = 0;
    let Arts = 0;
    let Science = 0;
    let Trade = 0;
    let Mathematics = 0;

    //assignment of weights

    //question 1 weighting (math)
    Mathematics = Mathematics + (answerList[0] - 3);
    //question 2 weighting (science)
    Science = Science + (answerList[1] - 3);
    //question 3 weighting (social studies)
    SocialStudies = SocialStudies + (answerList[2] - 3);
    //question 4 weighting (trade)
    Trade = Trade + (answerList[3] - 3);
    //question 5 weighting (arts)
    Arts = Arts + (answerList[4] - 3);
    //question 6 weighting (math)
    Mathematics = answerList[5] - 3;
    //question 7 weighting (science)
    Science = Science + (answerList[6] - 3);
    //question 8 weighting (social studies)
    SocialStudies = SocialStudies + (answerList[7] - 3);
    //question 9 weighting (trade)
    Trade = Trade + (answerList[8] - 3);
    //question 10 weighting (arts)
    Arts = Arts + (answerList[9] - 3);

    //sets the result based on the weights.

    let currenthighest = -100;
    let index = 2;
    let values = [SocialStudies, Arts, Science, Trade, Mathematics];
    for (var i = 0; i < values.length; i++) {
      if (values[i] >= currenthighest) {
        currenthighest = values[i];
        index = i;
      }
    }

    switch (index) {
      case 0:
        setResult("Social Studies");
        break;
      case 1:
        setResult("Arts");
        break;
      case 2:
        setResult("Science");
        break;
      case 3:
        setResult("Trades");
        break;
      case 4:
        setResult("Mathematics");
        break;
      default:
        setResult("Failed");
        break;
    }
  }

  return (
    <ContentContainer>
      <Typography align="center" variant="h1">
        Post Quiz Results
      </Typography>
      <Typography align="center" variant="h2">
        your result was: {result}
      </Typography>
      <Typography align="center">
        <Button
          align="center"
          variant="contained"
          size="large"
          onClick={() => {
            navigate("/home");
          }}
        >
          Return to Home
        </Button>
      </Typography>
    </ContentContainer>
  );
}
