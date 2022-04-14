import { createTheme } from "@mui/material";

export default createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        track: {
          backgroundColor: "#FF0000",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          textTransform: "none",
          borderRadius: 50,
        },
      },
    },
  },

  palette: {
    white: {
      main: "#ffffff",
    },
    secondary: {
      main: "#7E7EF1",
    },
    disabled: {
      main: "#D3D3D3",
    },
    standardText: {
      main: "#2d2d2d",
    },
  },
});
