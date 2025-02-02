import { alpha } from "@mui/system";

export const InputTheme = ({ theme }) => {
  const isDarkMode = theme.palette.mode === "dark";

  return {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        "& .MuiOutlinedInput-root": {
          backgroundColor: isDarkMode
            ? alpha(theme.palette.primary.light, 0.07)
            : theme.palette.background.paper,
          borderRadius: "8px",
          "& fieldset": {
            borderColor: isDarkMode
              ? theme.palette.primary.light
              : theme.palette.secondary.light,
          },
          "&:hover fieldset": {
            borderColor: theme.palette.primary.main,
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.dark,
            borderWidth: "2px",
          },
          "&.Mui-error fieldset": {
            borderColor: theme.palette.error.main,
          },
        },
        "& .MuiInputLabel-root": {
          color: isDarkMode
            ? theme.palette.secondary.light
            : theme.palette.secondary.dark,
          fontWeight: 500,
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: isDarkMode
            ? theme.palette.common.white || "#fff"
            : theme.palette.primary.main,
          fontWeight: 600,
        },
        "& .MuiFormHelperText-root": {
          color: theme.palette.text.secondary,
        },
        "& .Mui-error + .MuiFormHelperText-root": {
          color: theme.palette.error.main,
        },
      },
      input: {
        color: isDarkMode
          ? theme.palette.text.primary
          : theme.palette.text.secondary,
      },
      paper: {
        backgroundColor: isDarkMode
          ? theme.palette.background.default
          : theme.palette.background.paper,
        color: isDarkMode
          ? theme.palette.text.primary
          : theme.palette.text.secondary,
      },
    },
  };
};
