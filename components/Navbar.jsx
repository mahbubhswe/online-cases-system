import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { useContext } from "react";
import Swal from "sweetalert2";
import {useLocalStorage} from "@rehooks/local-storage";
import { contextStore } from "../utils/Store";
export default function Navbar() {
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
    <AppBar position="sticky" color="secondary">
      <Toolbar>
        <Typography flexGrow={1}>
          <IconButton onClick={() => router.push("/")}>
            <HomeIcon />
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
  );
}
