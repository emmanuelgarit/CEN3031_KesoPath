import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import image from "./forest.gif";
import image2 from "./townImage.jpeg";
import image3 from "./cityImage.jpg";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import Checkbox from "@mui/material/Checkbox";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import questions from "./QuizData";
import axios from "axios";

import UserContext from "../UserContext";
import QuizStepper from "../QuizStepper";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function QuizComponent() {
  let navigate = useNavigate();

  const { userData, setUserData } = React.useContext(UserContext);

  const [currentSlide, setCurrentSlide] = useState(0);

  //state component for the varoious possible answers
  const [isOneChecked, setIsOneChecked] = React.useState(false);
  const [boxOne, setBoxOne] = React.useState(false);
  const [boxTwo, setBoxTwo] = React.useState(false);
  const [boxThree, setBoxThree] = React.useState(false);
  const [boxFour, setBoxFour] = React.useState(false);
  const [boxFive, setBoxFive] = React.useState(false);
  const [checkedNum, setCheckedNum] = React.useState(0);

  const checkBoxStyle = {
    marginRight: "5%",
    marginLeft: "5%",
  };

  //function for the list of buttons that contain the answers.

  function AnswerList(props) {
    return (
      <Container align="center">
        <Checkbox
          style={checkBoxStyle}
          {...label}
          icon={<RadioButtonUncheckedOutlinedIcon />}
          checkedIcon={<RadioButtonCheckedOutlinedIcon />}
          checked={boxOne}
          onChange={() => {
            setBoxOne(true);
            setBoxTwo(false);
            setBoxThree(false);
            setBoxFour(false);
            setBoxFive(false);
            setIsOneChecked(true);
            setCheckedNum(1);
          }}
        />
        <Checkbox
          style={checkBoxStyle}
          {...label}
          icon={<RadioButtonUncheckedOutlinedIcon />}
          checkedIcon={<RadioButtonCheckedOutlinedIcon />}
          checked={boxTwo}
          onChange={() => {
            setBoxOne(false);
            setBoxTwo(true);
            setBoxThree(false);
            setBoxFour(false);
            setBoxFive(false);
            setIsOneChecked(true);
            setCheckedNum(2);
          }}
        />
        <Checkbox
          style={checkBoxStyle}
          {...label}
          icon={<RadioButtonUncheckedOutlinedIcon />}
          checkedIcon={<RadioButtonCheckedOutlinedIcon />}
          checked={boxThree}
          onChange={() => {
            setBoxOne(false);
            setBoxTwo(false);
            setBoxThree(true);
            setBoxFour(false);
            setBoxFive(false);
            setIsOneChecked(true);
            setCheckedNum(3);
          }}
        />
        <Checkbox
          style={checkBoxStyle}
          {...label}
          icon={<RadioButtonUncheckedOutlinedIcon />}
          checkedIcon={<RadioButtonCheckedOutlinedIcon />}
          checked={boxFour}
          onChange={() => {
            setBoxOne(false);
            setBoxTwo(false);
            setBoxThree(false);
            setBoxFour(true);
            setBoxFive(false);
            setIsOneChecked(true);
            setCheckedNum(4);
          }}
        />
        <Checkbox
          style={checkBoxStyle}
          {...label}
          icon={<RadioButtonUncheckedOutlinedIcon />}
          checkedIcon={<RadioButtonCheckedOutlinedIcon />}
          checked={boxFive}
          onChange={() => {
            setBoxOne(false);
            setBoxTwo(false);
            setBoxThree(false);
            setBoxFour(false);
            setBoxFive(true);
            setIsOneChecked(true);
            setCheckedNum(5);
          }}
        />
      </Container>
    );
  }

  return (
    <Grid>
      <Paper
        sx={{
          height: "100%",
          width: "100%",
          alignContent: "center",
          margin: "50px auto",
        }}
        elevation="20"
      >
        {/* .map conditonally render the image etc. */}
        <Container align="center">
          <img
            src={questions[currentSlide].picture}
            alt="Nature Image"
            height="500"
            width="889"
            style={{}}
          ></img>
        </Container>
        <Typography
          variant="h5"
          align="center"
          sx={{ paddingTop: "2%", paddingBottom: "5%" }}
        >
          {questions[currentSlide].Question}
        </Typography>

        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "68%",
          }}
          s
        >
          <Typography>Strongly Disagree </Typography>
          <Typography sx={{ marginRight: "2%" }}>Strongly Agree</Typography>
        </Container>

        <AnswerList />

        <Container
          align="center"
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "1em",
            paddingTop: "1em",
          }}
        >
          {/* <div style={{ position: "flex", justifyContent: "space-between" }}> */}
          <Button
            startIcon={<ArrowBackIcon />}
            // align="center"
            // style={{border: "solid"}}
            variant="contained"
            size="large"
            onClick={() => {
              if (currentSlide != 0) {
                setCurrentSlide(currentSlide - 1);
              }
            }}
            disabled={currentSlide == 0 ? true : false}
          >
            Back
          </Button>

          <QuizStepper currentSlide={currentSlide} maxSlide={10} />

          <Button
            endIcon={<ArrowForwardIcon />}
            //align="center"
            variant="contained"
            size="large"
            onClick={() => {
              setCurrentSlide(currentSlide + 1);
              if (currentSlide == 9) {
                navigate("/postquiz");
              }

              //TODO: save the selection of the current quiz question to the database
              // api call to save checkedNum to the database
              console.log("currentSlide: ", currentSlide);
              const answer = {
                email: userData.email,
                currentSlide,
                answer: checkedNum,
              };
              axios
                .post("http://localhost:4000/api/sendanswer", answer)
                .then((res) => {
                  console.log(res);
                });

              // update variable here
              setBoxOne(false);
              setBoxTwo(false);
              setBoxThree(false);
              setBoxFour(false);
              setBoxFive(false);
              setIsOneChecked(false);
            }}
            disabled={isOneChecked ? false : true}
          >
            Next
          </Button>
          {/* </div> */}
        </Container>
      </Paper>
    </Grid>
  );
}
