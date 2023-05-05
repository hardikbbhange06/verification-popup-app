import React from "react";
import "../App.css";
import {
  Grid,
  Paper,
  Box,
  Button,
  Typography,
  Link as Nv,
} from "@material-ui/core";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
// import TextField from '@mui/material/TextField';
// import TextField from '@mui/core/TextField';

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 410,
    margin: "60px auto",
  };
  const btnstyle = { marginTop: "28px ", backgroundColor: "rgb(25 195 28)" };

  const [user, setUser] = useState({
    otp: "",
  });
  const {} = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    //  submit logic
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Phone Verification</h2>
          {/* <h4 style={{color:"green"}}></h4> */}
          <hr />
          <Box className="b">
            <Typography variant="body2">
              Enter OTP Sent to your mobile number 89206-6XXXX
            </Typography>
          </Box>
        </Grid>
        <br />

        {/* <ValidatorForm  className="l" onSubmit={handleSubmit}> */}
        <ValidatorForm className="l" onSubmit={handleSubmit}>
          <TextValidator
            onChange={handleChange}
            inputProps={{ maxLength: 1 }}
            name="otp"
            size="small"
            type="text"
            // fullWidth
            sx={{ m: 1, width: "5ch" }}
            variant="standard"
            validators={["required"]}
            errorMessages={["OTP is required"]}
            value={user.fname}
          />

          {/* 5555 */}
          <TextValidator
            onChange={handleChange}
            inputProps={{ maxLength: 1 }}
            name="otp"
            size="small"
            type="text"
            // fullWidth
            sx={{ m: 1, width: "5ch" }}
            variant="standard"
            validators={["required"]}
            errorMessages={["OTP is required"]}
            value={user.fname}
          />
          <TextValidator
            onChange={handleChange}
            inputProps={{ maxLength: 1 }}
            name="otp"
            size="small"
            type="text"
            // fullWidth
            sx={{ m: 1, width: "5ch" }}
            variant="standard"
            validators={["required"]}
            errorMessages={["OTP is required"]}
            value={user.fname}
          />
          <TextValidator
            onChange={handleChange}
            inputProps={{ maxLength: 1 }}
            name="otp"
            size="small"
            type="text"
            // fullWidth
            sx={{ m: 1, width: "5ch" }}
            variant="standard"
            validators={["required"]}
            errorMessages={["OTP is required"]}
            value={user.fname}
          />
          <TextValidator
            onChange={handleChange}
            inputProps={{ maxLength: 1 }}
            name="otp"
            size="small"
            type="text"
            // fullWidth
            sx={{ m: 1, width: "5ch" }}
            variant="standard"
            validators={["required"]}
            errorMessages={["OTP is required"]}
            value={user.fname}
          />
          <TextValidator
            onChange={handleChange}
            inputProps={{ maxLength: 1 }}
            name="otp"
            size="small"
            type="text"
            // fullWidth
            sx={{ m: 1, width: "5ch" }}
            variant="standard"
            validators={["required"]}
            errorMessages={["OTP is required"]}
            value={user.fname}
          />

          <br />
          <div className="RR">
            <div className="R">
              <div className="li">
                <Box mt={3}>
                  <Typography>
                    <div className="c">
                      <a href="/">Change Number</a>
                    </div>
                    <div className="D">
                      <a href="/">Resend OTP</a>
                    </div>
                  </Typography>
                </Box>
              </div>
            </div>
            <div className="AA">
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                VERIFY
              </Button>
            </div>
          </div>
        </ValidatorForm>
        <Typography align="center">
          {/* <NavLink to="Signup">
                     <span style={{marginLeft:"5px"}}> Resend OTP </span>
                    </NavLink> */}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
