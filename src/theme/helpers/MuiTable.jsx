export const TableTheme = ({ theme }) => {
  return {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.paper,
          borderRadius: "12px",
          padding: "16px",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          border: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "none",
        },
        head: {
          fontWeight: 600,
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          // "&:nth-of-type(even)": {
          //   backgroundColor: theme.palette.background.default,
          // },
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  };
};
