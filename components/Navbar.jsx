import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from '@mui/icons-material/Home';
import { useState } from "react";
import { useRouter } from "next/router";
export default function Navbar() {
    const [userInfo, setUserInfo] = useState(true);
    const router=useRouter()
  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar>
        <Typography flexGrow={1}> <IconButton onClick={()=>router.push("/")}>
            <HomeIcon />
          </IconButton></Typography>
        {userInfo ? (
          <IconButton onClick={()=>router.push("/login")}>
            <LogoutIcon />
          </IconButton>
        ) : (
          <IconButton onClick={()=>router.push("/login")}>
            <LoginIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
