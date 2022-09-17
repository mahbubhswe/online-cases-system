"use strict";
import {
  Button,
  Container,
  Paper,
  Stack,
  Step,
  StepContent,
  StepLabel,
  TextField,
  Typography,
  Stepper,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useUserAuth } from "../utils/useAuthContext";
export default function VerifyPhone({ phone, email }) {
  const [otp, setOtp] = useState();
  const [activeStep, setActiveStep] = useState(0);
  const [confirmOtp, setConfirmOtp] = useState();
  const [otpError, setOtpError] = useState();
  const { setUpRecaptcha } = useUserAuth();
  //send code
  const sendVerificationCode = async () => {
    try {
      const res = await setUpRecaptcha(phone);
      setConfirmOtp(res);
      setActiveStep(1);
    } catch (error) {
      setOtpError(error.message);
    }
  };

  //verify otp
  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      await confirmOtp.confirm(otp);
      const { data } = await axios.put(`/api/user/verifyPhone?email=${email}`);
      if (data == "Sorry, account not found!") {
        Swal.fire({
          title: "Failed to verify",
          text: "Failed to verify your account",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          title: "Success",
          text: "Verification successfully completed.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      setOtpError(error.message);
    }
  };

  return (
    <Container sx={{ mt: "50px" }}>
      <Paper
        variant="none"
        sx={{
          width: { xs: "100%", sm: "90%", md: "50%" },
          marginX: "auto",
          p: "20px",
        }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step>
            <StepLabel>Send code</StepLabel>
            <StepContent>
              <Stack spacing={1}>
                <Typography align="center" color="error">
                  {otpError ? otpError : null}
                </Typography>
                <Typography id="recaptcha-container"></Typography>
                <TextField
                    className="styleTextField"
                  type="tel"
                  size="large"
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  placeholder="Enter phone number"
                  value={phone}
                />
                <Button
                  color="secondary"
                  variant="contained"
                  type="button"
                  onClick={sendVerificationCode}
                >
                  Send code
                </Button>
              </Stack>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Verify code</StepLabel>
            <StepContent>
              <Stack spacing={1} component="form" onSubmit={verifyOtp}>
                <Typography align="center" color="error">
                  {otpError ? otpError : null}
                </Typography>
                <TextField
                    className="styleTextField"
                  type="number"
                  size="large"
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  placeholder="Type verification code"
                  required
                  helperText="Check your phone for OTP"
                  onChange={(e) => setOtp(e.target.value)}
                />
                <Button
                  disabled={otp ? false : true}
                  color="secondary"
                  variant="contained"
                  type="submit"
                >
                  Verify
                </Button>
              </Stack>
            </StepContent>
          </Step>
        </Stepper>
      </Paper>
    </Container>
  );
}
