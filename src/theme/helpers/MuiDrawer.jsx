import { alpha } from "@mui/system";

export const DrawerTheme = ({ theme }) => {
  return {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: theme.palette.primary.dark, // ✅ Keep MUI's `paper` background
          color: theme.palette.text.primary,
          borderRight: `1px solid ${theme.palette.divider}`,
          width: 280,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: alpha(theme.palette.common.white, 0.1),
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: alpha("#FFFFFF", 0.9),
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: alpha("#FFFFFF", 0.9),
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          margin: "4px 8px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "12px",
          padding: "12px 16px",
          "&:hover": {
            backgroundColor: alpha(theme.palette.secondary.main, 0.2),
          },
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.contrastText,
          minWidth: "40px",
          display: "flex",
          justifyContent: "center",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 500,
          color: theme.palette.primary.contrastText,
        },
      },
    },
  };
};
