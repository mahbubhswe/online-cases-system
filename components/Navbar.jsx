import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { useContext } from "react";
import Swal from "sweetalert2";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocalStorage } from "@rehooks/local-storage";
import { contextStore } from "../utils/Store";
import Option from "./Option";
export default function Navbar() {
  const [show, setShow] = useState(false);
  const [userInfo] = useLocalStorage("userInfo");
  const { dispatch } = useContext(contextStore);
  const router = useRouter();
  //logout
  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Want to logout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "USER_LOGOUT" });
        router.push("/login");
      }
    });
  };
  return (
    <>
      <AppBar position="sticky" color="secondary" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Typography flexGrow={1}>
            <IconButton
              sx={{
                color: "#FFFFFF",
                display: { xs: "none", sm: "block", md: "block" },
              }}
              onClick={() => router.push("/")}
            >
              <HomeIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "#FFFFFF",
                display: { xs: "block", sm: "block", md: "none" },
              }}
              onClick={() => setShow(true)}
            >
              <MenuIcon />
            </IconButton>
          </Typography>
          {userInfo ? (
            <IconButton onClick={logout}>
              <LogoutIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => router.push("/login")}>
              <LoginIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer open={show} onClose={() => setShow(false)}>
        <Stack sx={{ padding: "20px", width: "100vw" }} spacing={1}>
          <Button
            onClick={() => setShow(false)}
            type="button"
            sx={{
              width: "5px",
              marginLeft: "auto",
              color: "black",
              border: "1px dotted #ccc",
            }}
          >
            <CloseIcon></CloseIcon>
          </Button>
          <Option show={show} setShow={setShow} />
        </Stack>
      </Drawer>
    </>
  );
}
