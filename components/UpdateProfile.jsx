import {
  Button,
  Container,
  Stack,
  TextField,
  Backdrop,
  CircularProgress,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function UpdateProfile({ data }) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    id: data._id,
    name: data.name,
    email: data.email,
    phone: data.phone,
    dob: data.dob,
    address: data.address,
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      setOpen(true);
      const { data } = await axios.put(`/api/user/updateProfile`, user);
      setOpen(false);
      if (data == "Profile updated successfully") {
        Swal.fire({
          title: "Success",
          text: data,
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          title: "Failed to update",
          text: "Failed to update your account",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container sx={{ mt: "50px" }}>
      <Stack spacing={1} component="form" onSubmit={updateProfile}>
        <Typography
          variant="bold"
          component="h1"
          align="center"
          sx={{ color: "gray" }}
        >
          Update Profile
        </Typography>
        <TextField
            className="styleTextField"
          type="text"
          name="name"
          value={user.name}
          placeholder="Enter your name"
          size="large"
          variant="standard"
          required
          InputProps={{ disableUnderline: true }}
          onChange={handleInput}
        />
        <TextField
            className="styleTextField"
          type="email"
          name="email"
          value={user.email}
          placeholder="Enter your email"
          size="large"
          required
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onChange={handleInput}
        />
        <TextField
            className="styleTextField"
          type="tel"
          name="phone"
          value={user.phone}
          placeholder="Enter your phone"
          size="large"
          required
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onChange={handleInput}
        />
        <TextField
            className="styleTextField"
          type="text"
          name="dob"
          value={user.dob}
          placeholder="Enter your date of birth"
          size="large"
          required
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onChange={handleInput}
        />
        <TextField
            className="styleTextField"
          type="text"
          name="address"
          value={user.address}
          placeholder="Enter your address"
          size="large"
          required
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onChange={handleInput}
        />
        <Button type="submit" variant="contained" color="secondary">
          Update
        </Button>
      </Stack>
      <Backdrop open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}
