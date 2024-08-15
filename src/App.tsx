import React from "react";
import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageInProgress from "./pages/PageInProgress/PageInProgress";
import { ScanResultsPage } from "./pages/ScanResultsPage/ScanResultsPage";
import { Menu } from "./components";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      secondary: {
        main: "#36454F",
      },
    },
  });

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Menu />
        <Box>
          <Toolbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ScanResultsPage />} />
              <Route path="*" element={<PageInProgress />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
