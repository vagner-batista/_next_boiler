import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material";
import { amber, indigo } from "@mui/material/colors";

const pretheme = createTheme({
  palette: {
    primary: indigo,
    secondary: amber,
  },
});

const theme = responsiveFontSizes(pretheme);

export default theme;
