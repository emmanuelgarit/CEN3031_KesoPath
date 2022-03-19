import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import { green, blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom";
import Link from '@mui/material/Link';

export default function Register() {
    const paperStyle={padding:20, height:'70vh', width:280, margin:"20px auto"};
    const avatarStyle={backgroundColor:blue[500]};
    let navigate = useNavigate();
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Typography align="center" variant="h4" sx={{ padding: 2 }}>Register</Typography>
                <TextField label="Username" placeholder="Enter Username" variant="standard" fullWidth required/>
                <TextField label="Password" placeholder="Enter Password" variant="standard" type="password" fullWidth required/>
                <Button type="submit" color="primary" variant="contained" sx={{ marginTop: 2 }} fullWidth>Sign Up</Button>
            </Paper>
        </Grid>
    );
     
}
