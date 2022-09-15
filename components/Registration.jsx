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
import Image from "next/image";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import { useForm } from "react-hook-form";
import { validationSchema } from "../utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
export default function Login() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  //signup
  const onSubmit = (data) => console.log(data);

  return (
    <Container
      maxWidth="sm"
      sx={{ my: "10px", backgroundColor: "#FFFFFF", borderRadius: "6px" }}
    >
      <Paper sx={{ p: "25px" }} variant="none">
        <Stack spacing={1} component="form" onSubmit={handleSubmit(onSubmit)}>
          <Typography align="center">
            <Image
              src="/logo.png"
              alt="logo logo"
              width={200}
              height={200}
              quality={100}
            />
          </Typography>
          <Typography
            variant="bold"
            component="h1"
            align="center"
            sx={{ color: "gray" }}
          >
            Create a account
          </Typography>

          <TextField
            type="text"
            placeholder="Enter your name"
            size="large"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            {...register("name")}
            error={!!errors?.name}
            helperText={errors?.name ? errors.name.message : null}
          />
          <TextField
            type="email"
            placeholder="Enter email adress"
            size="large"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            {...register("email")}
            error={!!errors?.email}
            helperText={errors?.email ? errors.email.message : null}
          />
          <TextField
            type="text"
            placeholder="Enter phone number"
            size="large"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            {...register("phone")}
            error={!!errors?.phone}
            helperText={errors?.phone ? errors.phone.message : null}
          />
          <TextField
            type="date"
            size="large"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            {...register("dob")}
            error={!!errors?.dob}
            helperText={errors?.dob ? errors.dob.message : null}
          />
          <TextField
            type="text"
            placeholder="Enter address"
            size="large"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            {...register("address")}
            error={!!errors?.address}
            helperText={errors?.address ? errors.address.message : null}
          />
          <TextField
            type="password"
            placeholder="Enter password"
            size="large"
            variant="standard"
            InputProps={{
              endAdornment: <VisibilityIcon />,
              disableUnderline: true,
            }}
            {...register("password")}
            error={!!errors?.password}
            helperText={errors?.password ? errors.password.message : null}
          />
          <TextField
            type="password"
            placeholder="Re-enter password"
            size="large"
            variant="standard"
            InputProps={{
              endAdornment: <VisibilityIcon />,
              disableUnderline: true,
            }}
            {...register("confirmPassword")}
            error={!!errors?.confirmPassword}
            helperText={
              errors?.confirmPassword ? errors.confirmPassword.message : null
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
