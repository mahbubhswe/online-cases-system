import { Router } from "@mui/icons-material";
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
import useLocalStorage from "@rehooks/local-storage";
import React, { useState } from "react";
import { useUserAuth } from "../utils/useAuthContext";
export default function VerifyPhone() {
  const [otp, setOtp] = useState();
  const [activeStep, setActiveStep] = useState(0);
  const [isVerify, setIsVerify] = useState();
  const [confirmOtp, setConfirmOtp] = useState();
  const [otpError, setOtpError] = useState();
  const [phone, setPhone] = useState();
  const [userInfo] = useLocalStorage("userInfo");
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
      Router.push("/profile");
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
                  type="tel"
                  size="large"
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  placeholder="Enter phone number"
                  value={userInfo ? userInfo.phone : null}
                  onChange={(e) => setPhone(e.target.value)}
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
        <Typography color="secondary" align="center">
          {isVerify ? isVerify : null}
        </Typography>
      </Paper>
    </Container>
  );
}
