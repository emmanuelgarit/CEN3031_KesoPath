import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';





export default function Login() {
    const paperStyle={padding:20, height:'70vh', width:280, margin:"20px auto"};
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    let navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required('Required'),
        password: Yup.string().required('Required')
    })
    const onSubmit=(values, props) => {
        // TODO: make backend call, invalidate user, if credential is right, go back to home page, else show error message
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
            navigate("/home")
        }, 1500)
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Typography align="center" variant="h4" sx={{ padding: 2 }}>Sign in</Typography>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label="Username" name="username" placeholder="Enter Username" variant="standard" fullWidth required
                            helperText={<ErrorMessage name="username" />}
                            />
                            <Field as={TextField} label="Password" name="password" placeholder="Enter Password" variant="standard" type="password" fullWidth required
                            helperText={<ErrorMessage name="password" />}
                            />
                            <Field as={FormControlLabel} name="remember" control={<Checkbox/>} label="Remember me" />
                            <Button type="submit" color="primary" variant="contained" disabled={props.isSubmitting} fullWidth>{props.isSubmitting?"Loading...":"Sign in"}</Button>
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