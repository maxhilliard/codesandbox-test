import { createMuiTheme } from "@material-ui/core/styles";

const materialTheme = createMuiTheme({
  typography: {
    fontFamily: "Inter",
    subtitle1: {
      fontSize: "14px",
      margin: "0 0 24px 0"
    }
  },
  palette: {
    text: {
      secondary: "#616161"
    },
    secondary: {
      light: "#FFF",
      main: "#212121"
    },
    primary: {
      main: "#0029FF"
    }
  },
  overrides: {
    MuiFormLabel: {
      root: {
        marginBottom: "8px",
        fontSize: "14px",
        "&$focused": {
          color: "inherit"
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
        fontSize: "14px",
        "&$focused $notchedOutline": {
          borderColor: "inherit",
          borderWidth: "1px"
        }
      }
    },
    MuiFormControl: {
      root: {
        marginBottom: "24px"
      }
    },
    MuiButton: {
      root: {
        padding: "12px 24px",
        fontSize: "16px",
        borderRadius: 0
      }
    }
  }
});

export default materialTheme;
