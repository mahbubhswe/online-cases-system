import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

export default function Option() {
  return (
    <List dense={true}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText>My cases</ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
}
