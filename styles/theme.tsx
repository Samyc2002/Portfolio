import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

theme = responsiveFontSizes(theme);

export default theme;