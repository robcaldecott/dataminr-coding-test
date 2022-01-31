import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: "0.5rem",
        },
      },
    },
  },
});

export { theme };
