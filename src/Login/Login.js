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
import { Formik, Field, Form} from 'formik';





export default function Login() {
    const paperStyle={padding:20, height:'70vh', width:280, margin:"20px auto"};
    const avatarStyle={backgroundColor:blue[500]};
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    let navigate = useNavigate();
    const onSubmit=(values, props) => {
        console.log(values)
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Typography align="center" variant="h4" sx={{ padding: 2 }}>Sign in</Typography>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label="Username" name="username" placeholder="Enter Username" variant="standard" fullWidth required/>
                            <Field as={TextField} label="Password" name="password" placeholder="Enter Password" variant="standard" type="password" fullWidth required/>
                            <Field as={FormControlLabel} name="remember" control={<Checkbox/>} label="Remember me" />
                            <Button type="submit" color="primary" variant="contained" fullWidth>Sign in</Button>
                        </Form>
                    )}
                </Formik>
                <Typography align="center" sx={{ paddingTop: 5, paddingBottom: 1 }}>Don't have an account?</Typography>
                <Button variant="contained" onClick={
                    () => {
                        navigate("/register");
                    }
                } fullWidth>Register</Button>
            </Paper>
        </Grid>
    );
}

/*
<TextField label="Username" placeholder="Enter Username" variant="standard" fullWidth required/>
                <TextField label="Password" placeholder="Enter Password" variant="standard" type="password" fullWidth required/>
                <FormControlLabel control={<Checkbox/>} label="Remember me" />
                <Button type="submit" color="primary" variant="contained" fullWidth>Sign in</Button> 
*/