import React from "react";
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import image from "./forest.gif"
import image2 from "./townImage.jpeg"
import image3 from "./cityImage.jpg"
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//answer button (either A, B, C, or D)



//main component for quiz display. will include all images, buttons, and questions/answers. will update when a new answer is clicked, or will
//revert to a previous state if a back button is clicked.
export default function QuizComponent() {
    let navigate = useNavigate();
    // documentation for hooks/state variables: https://reactjs.org/docs/hooks-intro.html
    // documentation for useState: https://reactjs.org/docs/hooks-reference.html#usestate
    // documentation for useEffect: https://reactjs.org/docs/hooks-reference.html#useeffect
    // documentation for conditional rendering: https://reactjs.org/docs/conditional-rendering.html

    // state variable aka a hook
    const [stateVariable, setStateVariable] = useState(""); // useState is its default value on render

    // useEffect will run code if the the state variable changes
    useEffect(() => {
        if (stateVariable !== null) {
            // do something
        }
    }, [stateVariable]);

    // can also run code when the component mounts (on render)
    useEffect(() => {
        // do something
    }, []);
    
    // helper functions can also go here 
    function helperFunction() {
        // do something
    }
    // different syntax same thing
    const helperFunction2 = () => {
        // do something
    }
    // example of updating state variable in a helper function
    function updateStateVariable() {
        const someValue = "hello";
        setStateVariable(someValue);
        // now stateVariable = "hello"
    }

    var images = { 0: image, 1: image2, 2: image3 }
    var Questions = { 0: "how are you?", 1: "how is everything?", 2: "is this a question?" }
    var As = { 0: "well", 1: "okay", 2: "yes" }
    var Bs = { 0: "not well", 1: "not ok", 2: "no" }
    var Cs = { 0: "good", 1: "decent", 2: "possibly" }
    var Ds = { 0: "not good", 1: "not decent", 2: "perhaps" }

    const [currentSlide, setCurrentSlide] = useState(0);

    function Answer(props) {

        return (
            <Button
                variant="contained"
                size='large'
                onClick={() => {
                    setCurrentSlide(currentSlide + 1);
                    if (currentSlide == 2) {
                        navigate("/home");
                    }
                }}
            >
                {props.name}
            </Button>
        );
    }




    return (
        <Container>
            <Paper sx={{ height: "75%", width: "75%" }} elevation="1">
                {/* .map conditonally render the image etc. */}
                <img src={images[currentSlide]} alt="Nature Image" height={500} width={828}></img>
                <div></div>

                <Button
                    variant="contained"
                    size="large"
                    onClick={() => {
                        if (currentSlide != 0) {
                            setCurrentSlide(currentSlide - 1);
                        }
                    }}>
                    Back

                </Button>

                <div>{Questions[currentSlide]}</div>
                <Answer name="A" imageSet={image}></Answer>
                <div>{As[currentSlide]}</div>
                <Answer name="B" imageSet={image2}></Answer>
                <div>{Bs[currentSlide]}</div>
                <Answer name="C" imageSet={image3}></Answer>
                <div>{Cs[currentSlide]}</div>
                <Answer name="D" imageSet={image}></Answer>
                <div>{Ds[currentSlide]}</div>

            </Paper>
        </Container>


    )
}