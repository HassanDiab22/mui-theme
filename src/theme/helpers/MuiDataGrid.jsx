export const DataGridTheme = ({ theme }) => {
  return {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.paper,
          border: "none",
          borderRadius: "12px",
        },
        columnHeaders: {
          backgroundColor: theme.palette.background.default,
          fontWeight: 600,
          color: theme.palette.text.primary,
          borderBottom: "none",
        },
        row: {
          //   "&:nth-of-type(even)": {
          //     backgroundColor: theme.palette.background.default,
          //   },
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  };
};
