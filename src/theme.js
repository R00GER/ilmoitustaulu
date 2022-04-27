import { createTheme } from "@mui/material";

const themeDefaults = {
  typography: {
    fontFamily: "Open Sans",
    body1: {},
    h3: {
      fontSize: "1.5rem",
      fontWeight: "700",
    },
  },
};

const themeOverrideDefaults = {
  MuiListItemButton: {
    styleOverrides: {
      root: {
        "&.Mui-selected": {
          backgroundColor: "transparent",
        },
      },
    },
  },
};

const COLOR_MEDIUM_DARK = "#2d2d30";
const COLOR_PRIMARY_MAIN = "#007acc";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0c0c0c",
    },
    primary: {
      main: COLOR_PRIMARY_MAIN,
    },
    secondary: {
      main: "#fff",
      bg: COLOR_MEDIUM_DARK,
    },
  },
  typography: {
    secondary: {
      color: "#a2a2a2",
    },
    body1: {
      ...themeDefaults.typography.body1,
      color: "#f2f2f2",
    },
    h3: {
      ...themeDefaults.typography.h3,
      color: "#f2f2f2",
    },
  },
  components: {
    ...themeOverrideDefaults,
    // MuiToolbar: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "#121212",
    //     },
    //   },
    // },
    // MuiIconButton: {
    //   styleOverrides: {
    //     root: {
    //       padding: "18px",
    //     },
    //   },
    // },
    // MuiSvgIcon: {
    //   styleOverrides: {
    //     "&.Mui-selected": {
    //       fill: "var(--color-primary-main)",
    //     },
    //   },
    // },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f2f2f2",
    },
    secondary: {
      main: "#fff",
      bg: COLOR_MEDIUM_DARK,
    },
    ...themeDefaults,
  },
  typography: {
    body1: {
      ...themeDefaults.typography.body1,
      color: "#2d2d2d",
    },
    h3: {
      ...themeDefaults.typography.h3,
      color: "#2d2d2d",
    },
  },
  components: {
    ...themeOverrideDefaults,
    // MuiToolbar: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "#fff",
    //     },
    //   },
    // },
    // MuiIconButton: {
    //   styleOverrides: {
    //     root: {
    //       padding: "18px",
    //     },
    //   },
    // },
  },
});
