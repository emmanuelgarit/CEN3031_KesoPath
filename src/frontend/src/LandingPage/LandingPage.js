import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";

import UserContext from "../UserContext";

import axios from "axios";

const ContentContainer = styled(Box)(() => ({
  height: "100%",
  flexDirection: "row",
}));

const textContainerStyle = {
  height: "50vh",
  width: 300,
  marginLeft: "75px",
  display: "fixed",
};

export default function LandingPage(props) {
  let navigate = useNavigate();

  const { userData, setUserData } = React.useContext(UserContext);

  //basics for the landing page. Includes the title, a description, and a button that takes you to the quiz.
  return (
    <ContentContainer>
      <Box
        sx={{ backgroundColor: "primary.light", height: 350, marginTop: "0" }}
      >
        <Typography
          variant="h1"
          align="center"
          paddingTop="40px"
          color="#A1D700"
        >
          <b>KESO Path</b>
        </Typography>
        <Typography
          variant="h4"
          align="center"
          marginTop="20px"
          color="#EFF1F1"
        >
          An aptitude test for students
        </Typography>
        <Typography align="center" marginTop="38px">
          <Button
            variant="contained"
            size="large"
            align="center"
            color="secondary"
            onClick={() => {
              console.log(localStorage.getItem("user"));
              if (localStorage.getItem("user")) {
                navigate("/quiz");
              } else {
                navigate("/login");
              }
            }}
          >
            Take Quiz
          </Button>
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: "100px",
          marginLeft: "20%",
          marginRight: "20%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box style={textContainerStyle}>
          <Typography
            variant="h6"
            sx={{ paddingBottom: "20px", fontSize: 25, fontColor: "#6D6D6D" }}
          >
            Grades K-8
          </Typography>
          <Typography sx={{ fontSize: 18 }}>
            For students who seek to gain a better understanding of what careers
            align with their interests and personality. The Kesopath is an
            interactive quiz that gives you different situations and a set of
            possible responses that will determine which career you best align
            with.
          </Typography>
        </Box>
        <Box style={textContainerStyle}>
          <Typography
            variant="h6"
            sx={{ paddingBottom: "20px", fontSize: 25, fontColor: "#6D6D6D" }}
          >
            Career Paths
          </Typography>
          <Typography sx={{ fontSize: 18 }}>
            Algorithm that analyzes your score across 10+ different career paths
            that includes computer science, law, the arts, medicine/biology, and
            more!
          </Typography>
        </Box>
        <Box style={textContainerStyle}>
          <Typography
            variant="h6"
            sx={{ paddingBottom: "20px", fontSize: 25, fontColor: "#6D6D6D" }}
          >
            Results
          </Typography>
          <Typography sx={{ fontSize: 18 }}>
            The results of the quiz give you helpful information about your
            interests and career paths that can be downloaded. This information
            includes resources to learn more about your career path and where to
            take the next step.
          </Typography>
        </Box>
      </Box>
    </ContentContainer>
  );
}
