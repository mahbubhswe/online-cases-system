import { Box, Stack } from "@mui/material";
import Head from "next/head";
import React from "react";
import Option from "./Option";

export default function ProfileLayout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle ? pageTitle : "Wellcome to our system"}</title>
      </Head>
      <main>
        <Stack direction="row">
          <Box sx={{ width: "250px", height: "100vh" }}>
            <Option />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              background: "#FFFFFF",
            }}
          >
            {children}
          </Box>
        </Stack>
      </main>
    </>
  );
}
