import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Logout } from "@mui/icons-material";
import React from "react";

export const Menu = () => (
  <AppBar component="nav">
    <Toolbar sx={{ padding: "10px 0" }}>
      <Box
        component="img"
        sx={{
          height: 50,
          width: 150,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        aria-hidden={true}
        alt="Evinced Logo"
        src="https://res.cloudinary.com/evinced-inc/image/upload/v1654687394/Evinced_logo_dark_dce7354133.svg"
      />
      <Typography
        variant="subtitle1"
        component="h1"
        sx={{ flexGrow: 1, marginLeft: 4 }}
      >
        Production Monitoring DEV
      </Typography>
      <Box>
        <Button color="secondary" variant="text">
          <Logout />
          Logout
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);
