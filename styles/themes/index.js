import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import default_theme from './theme';
import secondary_theme from './theme1';

export const themeNames = {
  default: default_theme,
  alternative: secondary_theme,
};

export const themeNamesList = Object.keys(themeNames);

const useTheme = (theme) => {
  const valid_theme = Object.keys(themeNames).includes(theme)
    ? theme
    : 'default';
  const pretheme = createTheme(themeNames[valid_theme]);
  const responsiveTheme = responsiveFontSizes(pretheme);
  return responsiveTheme;
};

export default useTheme;
