import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import FaxIcon from "@mui/icons-material/Fax";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function Index() {
  return (
    <Stack direction={{ xs: "column", sm: "column", md: "row" }} sx={{pt:"50px"}}>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "50%" },
          height: "450px",
          display: "grid",
          placeContent: "center",
        }}
      >
        <Paper
          sx={{
            background: "#F7F8F9",
            p: "20px",
            borderRadius: "16px",
            border: "1px solid #ccc",
            boxShadow: "0 1px 4px 0 rgb(0 0 0 / 50%)",
            "&:hover": {
              backgroundColor: "#D2E3FC",
            },
          }}
        >
          <Typography variant="bold" component="h1" align="center">
            <SupportAgentIcon
              sx={{ fontSize: "150px", color: "#FFCA28" }}
            ></SupportAgentIcon>
          </Typography>
          <Typography
            variant="bold"
            sx={{ color: "gray" }}
            component="h1"
            align="center"
          >
            Contact Us
          </Typography>
          <List dense={true}>
            <ListItem disablePadding>
              <ListItemButton component="a" href="tel:+880123456789">
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText>+880123456789</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="mailto:ogd.help@gmail.com">
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText>ogd.help@gmail.com</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FaxIcon />
                </ListItemIcon>
                <ListItemText>55-123-4567</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText>51/a Shukrabad, Dhanmondi, Dhaka</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          height: {xs:"100px",sm:"100px",md:"450px"},
          display: "grid",
          placeContent: "center",
        }}
      >
        <Typography variant="bold" component="h1" align="center">
          <Typewriter
            options={{
              strings: [
                "Welcome to online GD system",
                "Need any help? Contact us",
                "Now, It's easy to register DG",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
      </Box>
    </Stack>
  );
}
