import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import UserContext from "../UserContext";

export default function PostQuiz(props) {
  let navigate = useNavigate();
  const ContentContainer = styled(Box)(() => ({
    height: "100%",
    flexDirection: "row",
  }));

  return (
    <ContentContainer>
      <Typography>Post Quiz Results</Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          navigate("/home");
        }}
      >
        Return to Home
      </Button>
    </ContentContainer>
  );
}
