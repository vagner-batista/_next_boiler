import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material";
import { deepPurple, amber } from "@mui/material/colors";

const pretheme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
  },
});

const theme = responsiveFontSizes(pretheme);

export default theme;
