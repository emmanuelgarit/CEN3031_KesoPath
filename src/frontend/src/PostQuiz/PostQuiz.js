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
      <Typography align="center" variant="h2">
        Post Quiz Results
      </Typography>
      <Typography align="center" variant="h5">
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
