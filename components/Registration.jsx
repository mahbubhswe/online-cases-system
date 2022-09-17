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
  const [mes, setMes] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  //signup
  const onSubmit = async (data) => {
    setMes("");
    try {
      setOpen(true);
      const apiRes = await axios.post(`/api/auth/registration`, data);
      setOpen(false);
      setMes(apiRes.data);
    } catch (error) {
      console.log(error.message);
    }
  };

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
          <Typography
            sx={{
              color:
                mes == "Account has been created successfully"
                  ? "green"
                  : "red",
            }}
            align="center"
          >
            {mes ? mes : null}
          </Typography>
          <TextField
              className="styleTextField"
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
              className="styleTextField"
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
              className="styleTextField"
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
              className="styleTextField"
            type="date"
            size="large"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            {...register("dob")}
            error={!!errors?.dob}
            helperText={errors?.dob ? errors.dob.message : null}
          />
          <TextField
              className="styleTextField"
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
              className="styleTextField"
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
              className="styleTextField"
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
