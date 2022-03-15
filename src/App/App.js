import React from "react";
import { styled } from '@mui/material/styles'
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage"

const AppContainer = styled(Box)(() => ({
  height: "100vh",
  width: `100%`,
}));

function App() {
  return (
    <AppContainer id="app-container">
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<LandingPage />}></Route>
      </Routes>
    </AppContainer>
  );
}

export default App;
