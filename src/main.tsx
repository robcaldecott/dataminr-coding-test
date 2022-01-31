import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { App } from "./App";
import { schema } from "./schema";
import { theme } from "./theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App schema={schema} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
