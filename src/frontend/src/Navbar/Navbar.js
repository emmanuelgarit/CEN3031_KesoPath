import * as React from "react";
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom";
import LoginButton from "../LoginButton";

export default function Navbar() {
    let navigate = useNavigate();

    return (
        <AppBar position="sticky" sx={{ height: "4rem" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button
            onClick={() => {
              navigate("/home");
            }}
            variant="text"
            color="inherit"
          >
            Keso Path
          </Button>
        </Typography>
        <LoginButton />
      </Toolbar>
    </AppBar>
    );
}