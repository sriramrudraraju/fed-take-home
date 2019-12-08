import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: {
      main: "#212121",
      light: '#484848',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff0000',
      light: '#ff6434',
      dark: '#a30000',
      contrastText: '#fff',
    }
  }
});