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
import Cookies from "js-cookie";
import React, { useState, useContext } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import NextLink from "next/link";
import { contextStore } from "../utils/Store";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Login() {
  const [open, setOpen] = useState(false);
  const [mes, setMess] = useState();
  const router = useRouter();
  const { dispatch } = useContext(contextStore);
  const [loginCredentials, setLoginCredential] = useState({
    phone: "",
    password: "",
  });
  //login
  const hubmitHandler = async (e) => {
    e.preventDefault();
    e.target.reset();
    setOpen(true);
    const { data } = await axios.post(
      `/api/auth/login?phone=${loginCredentials.phone}&password=${loginCredentials.password}`
    );
    setOpen(false);
    const phone = `+88${loginCredentials.phone}`;
    if (phone.localeCompare(data.phone) === 0) {
      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("token", data.token);
      router.push("/profile");
    } else {
      setMess(data);
    }
  };
  return (
    <Container
      maxWidth="xs"
      sx={{ mt: "50px", backgroundColor: "#FFFFFF", borderRadius: "6px" }}
    >
      <Paper sx={{ p: "25px" }} variant="none">
        <Typography align="center">
          <Image
            src="/logo.png"
            alt="logo logo"
            width={200}
            height={200}
            quality={100}
          />
        </Typography>
        <Stack spacing={1} component="form" onSubmit={hubmitHandler}>
          <Typography
            variant="bold"
            component="h1"
            align="center"
            sx={{ color: "gray" }}
          >
            Login
          </Typography>
          <Typography color="error" align="center">
            {mes ? mes : null}
          </Typography>
          <TextField
            type="tel"
            placeholder="Enter phone number"
            required
            size="large"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            onChange={(e) =>
              setLoginCredential({
                ...loginCredentials,
                phone: e.target.value,
              })
            }
          />
          <TextField
            type="password"
            placeholder="Enter password"
            required
            size="large"
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
          <Typography>
            <NextLink href="/password-reset" passHress>
              <a>Forgot password?</a>
            </NextLink>
          </Typography>
          <Typography>
            <NextLink href="/registration" passHress>
              <a style={{ color: "green" }}> Register now</a>
            </NextLink>
          </Typography>
        </Stack>
      </Paper>
      <Backdrop open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}
