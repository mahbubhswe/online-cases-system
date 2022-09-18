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
import { useLocalStorage } from "@rehooks/local-storage";
export default function Option({ setShow }) {
  const [userInfo] = useLocalStorage("userInfo");
  const router = useRouter();
  return (
    <List dense={true}>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            router.push("/profile");
            setShow(false);
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
            router.push("/profile/update");
            setShow(false);
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
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            router.push("/verify-phone-number");
            setShow(false);
          }}
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
