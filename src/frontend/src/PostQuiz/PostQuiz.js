import React from "react";
import { useEffect, useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import UserContext from "../UserContext";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { Button, Box, Container, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

import careers from "../data/careers";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Trades from "../data/content/Trades";

export default function PostQuiz(props) {
  let navigate = useNavigate();
  const ContentContainer = styled(Box)(() => ({
    height: "100%",
    flexDirection: "row",
  }));

  const { userData, setUserData } = React.useContext(UserContext);
  const [careerResults, setCareerResults] = useState([]);

  // Call on render
  useEffect(() => {
    // If we have a list of careers, generate a result
    if (careers) {
      // Generate a result
      let careerResults = getCareerPath().then((careerResults) => {
        if (careerResults) {
          console.log("career resultss: ", careerResults);
          careerResults = careerResults.sort((a, b) => {
            return b.weight - a.weight;
          });
          // Set the result, and set the list of results to render
          setCareerResults(careerResults);
        }
      });
    }
  }, []);

  function getCareerPath() {
    return new Promise((resolve, reject) => {
      const userObject = JSON.parse(localStorage.getItem("user"));
      const fullName = userObject.fullName;
      const userEmail = userObject.email;
      let answerList = [];

      const email = {
        email: userEmail,
      };
      axios.post("http://localhost:4000/api/getanswers", email).then((res) => {
        console.log("res.data: ", res.data.answers);
        answerList = res.data.answers;
        console.log("answerList: ", answerList);
        resolve(generateCareerResult(answerList));
      });
    });
  }

  function generateWeight(a, b, c, d, e, index, answerList) {
    let value = answerList[index];
    switch (value) {
      case 1:
        return a;
      case 2:
        return b;
      case 3:
        return c;
      case 4:
        return d;
      case 5:
        return e;
      default:
        return 0;
    }
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
    let Technology = 0;

    //assignment of weights
    //question 0 (Trade)
    Trade = Trade + generateWeight(-2, -1, 0, 1, 2, 0, answerList);
    //question 1 (Math)
    Mathematics = Mathematics + generateWeight(0, 0, 2, 0, 0, 1, answerList);
    //question 2
    Science = Science + generateWeight(2, 0, 0, 0, 0, 2, answerList);
    //question 3
    SocialStudies = SocialStudies + generateWeight(-2, 1, 0, 1, 2, 3, answerList);
    //question 4
    Arts = Arts + generateWeight(2, 0, 0, 0, 0, 4, answerList);
    //question 5
    Technology = Technology + generateWeight(2, 0, 0, 0, 0, 5, answerList);
    //question 6
    Trade = Trade + generateWeight(0,0,0,0,0, 6, answerList);
    //question 7
    if (answerList[7] == 1) {
      Mathematics = Mathematics + generateWeight(2, 0, 0, 0, 0, 7, answerList);
    }
    else {
      Arts = Arts + generateWeight(0, 2, 0, 0, 0, 7, answerList);
    }
    //question 8
    Science = Science + generateWeight(0,2,0,0,0, 8, answerList);
    //question 9
    if (answerList[9] == 1) {
      Mathematics = Mathematics + generateWeight(2,0,0,0,0,9, answerList);
    }
    else if (answerList[9] == 2) {
      SocialStudies = SocialStudies + generateWeight(0,2,0,0,0,9, answerList);
    }
    else if (answerList[9] == 3) {
      Technology = Technology +  generateWeight(0,0,2,0,0,9, answerList);
    }
    else if (answerList[9] == 4) {
      Science = Science + generateWeight(0,0,0,2,0,9, answerList);
    }
    //question 10
    Arts = Arts +  generateWeight(-2,1,0,1,2, 10, answerList);
    //question 11
    Technology = Technology + generateWeight(-2,1,0,1,2, 11, answerList);
    //question 12
    Trade = Trade +  generateWeight(2,1,0,-1,-2, 12, answerList);
    //question 13
    Mathematics = Mathematics + generateWeight(-2,1,0,1,2, 13, answerList);
    //question 14
    Science = Science + generateWeight(0,0,2,0,0, 14, answerList);
    //question 15
    if (answerList[15] == 1) {
      Mathematics = Mathematics + generateWeight(2,0,0,0,0, 15, answerList);
    }
    else {
      SocialStudies = SocialStudies + generateWeight(0,2,0,0,0, 15, answerList);
    }
    //question 16 
    Arts = Arts + generateWeight(2,0,0,0,0, 16, answerList);
    //question 17
    Technology = Technology + generateWeight(2,-1,0,0,0, 17, answerList);
    //question 18
    Trade = Trade + generateWeight(-2,1,0,1,2, 18, answerList);
    //question 19
    Mathematics = Mathematics + generateWeight(-2,1,0,1,2, 19, answerList);
    //question 20
    Science = Science + generateWeight(-2,1,0,1,2, 20, answerList);
    //question 21
    SocialStudies = SocialStudies + generateWeight(-2,1,0,1,2, 21, answerList);
    //question 22
    Arts = Arts + generateWeight(0,2,0,0,0, 22, answerList);
    //question 23
    Technology = Technology + generateWeight(2,0,0,0,0, 23, answerList);
    //question 24
    Trade = Trade + generateWeight(2,-2,0,0,0, 24, answerList);
    //question 25
    Science = Science + generateWeight(2,0,0,0,0, 25, answerList);
    //question 26
    SocialStudies = SocialStudies + generateWeight(-2, -1,2,-1,0, 26, answerList);
    //question 27
    Arts = Arts + generateWeight(2,0,0,0,0, 27, answerList);
    //question 28
    Technology = Technology + generateWeight(2,0,0,0,0, 28, answerList);
    //question 29
    Trade = Trade + generateWeight(-2,1,2,-1,0, 29, answerList);
    //question 30
    SocialStudies = SocialStudies + generateWeight(2,0,0,0,0,30,answerList);
  
    


    console.log("SocialStudies: ", SocialStudies);
    console.log("Arts: ", Arts);
    console.log("Science: ", Science);
    console.log("Trade: ", Trade);
    console.log("Mathematics: ", Mathematics);

    let results = [
      { ...careers[0], weight: SocialStudies },
      { ...careers[1], weight: Arts },
      { ...careers[2], weight: Science },
      { ...careers[3], weight: Trade },
      { ...careers[4], weight: Mathematics },
      { ...careers[5], weight: Technology },
    ];

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
    return results;
  }

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <ContentContainer>
      <Typography align="center" variant="h2" sx={{ paddingTop: ".7em" }}>
        Post Quiz Results
      </Typography>
      <Typography align="center" variant="h5" sx={{ paddingTop: ".3em" }}>
        Your results in order...
      </Typography>
      <Divider sx={{ paddingTop: "1em" }} />
      <Container>
        {careerResults &&
          careerResults.map((career, index) => (
            <Accordion
              expanded={expanded === career}
              onChange={handleChange(career)}
              key={index}
              sx={{ disableGutters: true, elevation: 0 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${careers.name}-content`}
                id={`${careers.name}-header`}
              >
                <Typography variant="h5">
                  {`${index + 1} - ${career.name}`}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  id="markdown"
                  children={career.info}
                />
              </AccordionDetails>
            </Accordion>
          ))}
      </Container>
      <Divider />
      <Typography align="center" sx={{ paddingTop: "5em" }}>
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
