import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import "./reset.css";
import "./styles.css";

import { createTheme, ThemeProvider } from "@mui/material/styles"
import { lime } from "@mui/material/colors"

const root = createRoot(document.querySelector("#root"));
const theme = createTheme({
  palette: {
    primary: { 
      main: lime[900],
    },    
    secondary: {
      main: lime[700],
    },    
  },    
});   

root.render(
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>

);
