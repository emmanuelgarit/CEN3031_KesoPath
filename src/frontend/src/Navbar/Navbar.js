import * as React from "react";
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    let navigate = useNavigate();
    const [buttonText, setButtonText] = React.useState("Login");
    return (
        <AppBar position="sticky" sx={{ height: "4rem" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button
            onClick={() => {
              navigate("/home");
            }}
            variant="contained"
          >
            Keso Path
          </Button>
        </Typography>
        <Button variant="contained" startIcon={<AccountCircleIcon />} onClick={
            () => {
                navigate("/login");
            }
        }> {buttonText} </Button>
      </Toolbar>
    </AppBar>
    );
}