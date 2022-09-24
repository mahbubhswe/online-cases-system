import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import NoteIcon from "@mui/icons-material/Note";
import { useRouter } from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocalStorage } from "@rehooks/local-storage";
import Swal from "sweetalert2";
export default function Option({ setShow }) {
  const [userInfo] = useLocalStorage("userInfo");
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
    <List dense={true}>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            setShow(false);
            router.push("/profile");
          }}
        >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            setShow(false);
            router.push("/profile/update");
          }}
        >
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText>Update profile</ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <NoteIcon />
          </ListItemIcon>
          <ListItemText>GD List</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <NoteAddIcon />
          </ListItemIcon>
          <ListItemText>New GD</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding onClick={logout}>
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => router.push("/verify-phone-number")}
          disabled={userInfo ? (userInfo.isVerified ? true : false) : null}
        >
          <ListItemIcon sx={{ color: "red" }}>
            <VerifiedUserIcon />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: userInfo ? (userInfo.isVerified ? "green" : "red") : null,
            }}
          >
            Verify your phone
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
}
