import { alpha } from "@mui/system";

export const ButtonTheme = ({ theme }) => {
  const isDarkMode = theme.palette.mode === "dark";

  return {
    styleOverrides: {
      root: {
        borderRadius: "12px",
        textTransform: "none",
        fontWeight: 600,
        padding: "10px 20px",
        transition: "all 0.3s ease",
      },
      containedPrimary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common?.white || "#FFFFFF",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
          boxShadow: "0px 6px 12px rgba(0,0,0,0.15)",
        },
      },
      containedSecondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common?.white || "#FFFFFF",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        "&:hover": {
          backgroundColor: theme.palette.secondary.dark,
          boxShadow: "0px 6px 12px rgba(0,0,0,0.15)",
        },
      },
      outlinedPrimary: {
        border: isDarkMode
          ? `2px solid ${theme.palette.common?.white || "#FFFFFF"}`
          : `2px solid ${theme.palette.primary.main}`,
        color: isDarkMode
          ? theme.palette.common?.white || "#FFFFFF"
          : theme.palette.primary.main,
        "&:hover": {
          border: `2px solid ${theme.palette.primary.dark}`,
          backgroundColor: isDarkMode
            ? alpha(theme.palette.common?.white || "#FFFFFF", 0.9)
            : alpha(theme.palette.primary.dark, 0.2),
          color: theme.palette.primary.dark,
        },
      },
      outlinedSecondary: {
        border: `2px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        "&:hover": {
          border: `2px solid ${theme.palette.secondary.dark}`,
          backgroundColor: alpha(theme.palette.secondary.dark, 0.2),
          color: theme.palette.secondary.dark,
        },
      },
      textPrimary: {
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            isDarkMode ? 0.15 : 0.1
          ),
        },
      },
      textSecondary: {
        color: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: alpha(
            theme.palette.secondary.main,
            isDarkMode ? 0.15 : 0.1
          ),
        },
      },
    },
  };
};
