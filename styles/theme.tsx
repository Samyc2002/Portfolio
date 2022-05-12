import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a1929',
      paper: '#0a1929',
    }
  },
});

theme = responsiveFontSizes(theme);

export default theme;