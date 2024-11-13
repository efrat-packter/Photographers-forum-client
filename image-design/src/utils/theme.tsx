import { createTheme, Theme } from "@mui/material/styles";

// Define your theme options interface to ensure type safety
interface CustomThemeOptions {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    // Optionally define other palette options
  };
  typography: {
    fontFamily: string;
    // Optionally define other typography options
  };
  // Optionally define other theme options like spacing, breakpoints, etc.
}

// Define your actual theme object
const themeOptions: CustomThemeOptions = {
  palette: {
    primary: {
      main: '#c45', // Example primary color
    },
    secondary: {
      main: '#505050', // Example secondary color
    },
    // You can also define other palette options like error, warning, info, success
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Example font stack
    // You can customize typography options like fontSize, fontWeight, etc.
  },
  // Other theme options like spacing, breakpoints, overrides, etc.
};

// Create the theme using createTheme function
const theme: Theme = createTheme(themeOptions);

export default theme;
