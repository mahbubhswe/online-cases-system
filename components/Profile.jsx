import { Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
export default function Profile({ data }) {
  return (
    <Container sx={{mt:"50px"}}>
      <Paper sx={{p:"20px"}}>
        <Stack spacing={3}>
          <Typography sx={{color:"gray"}} variant="bold" component="h1">Profile Information</Typography>
          <Typography>Name: {data.name }</Typography>
          <Typography>Phone: {data.phone }</Typography>
          <Typography>E-mail: {data.email }</Typography>
          <Typography>Date of Birth: {data.dob}</Typography>
          <Typography>Address: {data.address }</Typography>
          <Typography>Joined: {moment(data.createdAt).format("MM-DD-YY") }</Typography>
        </Stack>
      </Paper>
    </Container>
  );
}
