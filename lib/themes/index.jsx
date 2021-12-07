import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import DefaultTheme from "./DefaultTheme";
import PinkTheme from "./PinkTheme";

export const themes = {
  default: DefaultTheme,
  pink: PinkTheme,
};

export const themeNames = Object.keys(themes);

const dinamicTheme = (theme) => {
  const validTheme = themeNames.includes(theme) ? theme : "default";
  const preTheme = createTheme(themes[theme]);
  const responsiveTheme = responsiveFontSizes(preTheme);
  return responsiveTheme;
};

export default dinamicTheme;
