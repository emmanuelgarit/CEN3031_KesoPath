import React from "react"
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom";

// button needs like onClick that will navigate to quiz page
// need folder for the quiz page and a quiz page
// set up a route for the quiz page

export default function LandingPage() {
  let navigate = useNavigate();

  //basics for the landing page. Includes the title, a description, and a button that takes you to the quiz.
  return (
    <div>

    <Typography variant="title" color="inherit" noWrap>
      &nbsp;
    </Typography>

    <Typography variant="h2" align = 'center' >
      Team KESO's Skills and Interests Quiz
    </Typography>

    <Typography variant="h1" color="inherit" noWrap>
    &nbsp;
    </Typography>

    <Typography variant="body1" align = 'center'>
      *Placeholder description text*
    </Typography>

    <Typography variant="h1" color="inherit" noWrap>
    &nbsp;
    </Typography>

    <Typography align = 'center'>
      <Button variant="contained" size = 'large'
        onClick={() => {
        navigate("/quiz");
    }}> 

        Take Quiz 
      </Button>
    </Typography>
   

    </div>

    
    // text describing the project
    
    // button that links to the quiz
  );
}
