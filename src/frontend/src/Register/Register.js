import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import UserContext from "../UserContext";

export default function Register() {
  // maybe conditional rendering makes more sense than a blank typography but this works for now
  const [submitErrorMessage, setSubmitErrorMessage] = React.useState("");
  const { userData, setUserData } = React.useContext(UserContext);

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  let navigate = useNavigate();
  const initialValues = {
    fullName: "",
    username: "",
    password: "",
  };
  const onSubmit = (values, props) => {
    setSubmitErrorMessage("");
    const registered = {
      fullName: values.fullName,
      email: values.username,
      password: values.password,
    };
    axios
      .post("http://localhost:4000/api/signup", registered)
      .then((res) => {
        setUserData({
          fullName: res.data.newSignUp.fullName,
          email: res.data.newSignUp.email,
        });
        localStorage.setItem("user", JSON.stringify(res.data.newSignUp));
        setTimeout(() => {
          props.resetForm();
          props.setSubmitting(false);
          navigate("/home");
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          setSubmitErrorMessage("Account already exists");
        }
        props.setSubmitting(false);
      });
  };
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("please enter your full name"),
    username: Yup.string()
      .email("please enter valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Typography align="center" variant="h4" sx={{ padding: 2 }}>
          Register
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                label="Name"
                name="fullName"
                placeholder="Enter your full name"
                variant="standard"
                fullWidth
                required
                helperText={<ErrorMessage name="fullName" />}
              />
              <Field
                as={TextField}
                label="Username"
                name="username"
                placeholder="Enter a valid email"
                variant="standard"
                fullWidth
                required
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                label="Password"
                name="password"
                placeholder="Enter Password"
                variant="standard"
                type="password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={props.isSubmitting}
                sx={{ marginTop: 2 }}
                fullWidth
              >
                {props.isSubmitting ? "Registering..." : "Sign up"}
              </Button>
              <Typography
                align="center"
                variant="subtitle2"
                sx={{ padding: 2 }}
              >
                {submitErrorMessage}
              </Typography>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}
