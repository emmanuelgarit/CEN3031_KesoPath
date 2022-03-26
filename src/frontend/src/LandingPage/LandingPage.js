import React from "react"
import Typography from '@mui/material/Typography';
import { Button, Box } from "@mui/material";
import Container from "@mui/material/Container"
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";

// button needs like onClick that will navigate to quiz page
// need folder for the quiz page and a quiz page
// set up a route for the quiz page

const ContentContainer = styled(Box)(() => ({
  height: "100%",
  flexDirection: "row",
}));

export default function LandingPage(props) {
  let navigate = useNavigate();
  //#B1ED01 neon yellow/green
  //better neon #A1D700
  // bright orange #FFA500
  // E89600
  //extra comment

  //basics for the landing page. Includes the title, a description, and a button that takes you to the quiz.
  return (
    <ContentContainer>
      <Box sx={{ backgroundColor: "primary.light", height: 350, marginTop: "0" }}>
        <Typography variant="h1" align='center' paddingTop="40px" color="#A1D700">
          <b>KESO Path</b>
        </Typography>
        <Typography variant="h4" align='center' marginTop="20px" color="#EFF1F1">
          An aptitude test for students
        </Typography>
        <Typography align='center' marginTop="40px">
          <Button variant="contained" size='large' align="center"
            onClick={() => {
              navigate("/quiz");
            }}>
            Take Quiz
          </Button>
        </Typography>
      </Box>

      <Box>
      </Box>

      <Box>

      </Box>



    </ContentContainer>
  );
}
