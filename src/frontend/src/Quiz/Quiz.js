import * as React from "react"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container"
import image from "./natureImage.jpeg"
import QuizComponent from "./QuizComponent"



export default function Quiz() {
    return (
        <Container>
            <QuizComponent/>
        </Container>
    );
}