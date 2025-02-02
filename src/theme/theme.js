import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // Light theme colors
            primary: {
              main: "#1976d2",
            },
            background: {
              default: "#ffffff",
              paper: "#f5f5f5",
            },
          }
        : {
            // Dark theme colors
            primary: {
              main: "#7551ff",
            },
            background: {
              default: "#111c44",
              paper: "#1d1d1d",
            },
          }),
    },
  });
