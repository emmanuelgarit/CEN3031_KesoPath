import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import LandingPage from "../LandingPage";
import Navbar from "../Navbar";
import Login from "../Login";
import Quiz from "../Quiz";
import Register from "../Register";
import { UserProvider } from "../UserContext";
import Theme from "../Theme";
import CssBaseline from "@mui/material/CssBaseline";
import PostQuiz from "../PostQuiz";
const AppContainer = styled(Box)(() => ({
  height: "100vh",
  width: `100%`,
}));

function App() {
  const [userData, setUserData] = React.useState({});
  const userValue = { userData, setUserData };

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <UserProvider value={userValue}>
        <AppContainer id="app-container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route path="/home" element={<LandingPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/postquiz" element={<PostQuiz />}></Route>
          </Routes>
        </AppContainer>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
