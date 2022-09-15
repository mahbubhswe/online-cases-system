import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
export default function Login() {
  const [open, setOpen] = useState(false);
  const [loginCredentials, setLoginCredential] = useState({
    email: "",
    password: "",
  });
  //login
  const hubmitHandler = async (e) => {
    e.preventDefault();
    e.target.reset();
    setOpen(true);
    // const { data } = await axios.post();
    setOpen(false);
  };
  return (
    <Container
      maxWidth="sm"
      sx={{ mt: "50px", backgroundColor: "#FFFFFF", borderRadius: "6px" }}
    >
      <Paper sx={{ p: "25px" }} variant="none">
        <Stack spacing={1} component="form" onSubmit={hubmitHandler}>
          <Typography
            variant="bold"
            component="h1"
            align="center"
            sx={{ color: "gray" }}
          >
            Login
          </Typography>
          <TextField
            className="styleTextField"
            type="email"
            placeholder="Enter email adress"
            required
            size="small"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            onChange={(e) =>
              setLoginCredential({
                ...loginCredentials,
                email: e.target.value,
              })
            }
          />
          <TextField
            className="styleTextField"
            type="password"
            placeholder="Enter password"
            required
            size="small"
            variant="standard"
            InputProps={{
              endAdornment: <VisibilityIcon />,
              disableUnderline: true,
            }}
            onChange={(e) =>
              setLoginCredential({
                ...loginCredentials,
                password: e.target.value,
              })
            }
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Stack>
      </Paper>
      <Backdrop open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}
