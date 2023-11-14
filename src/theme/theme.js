import { createTheme } from "@mui/material";

export const theme = createTheme({
    spacing: [2, 4, 8, 16, 32, 64],
    typography: {
      fontFamily: '"Poppins", sans-serif'
    },
    palette: {
      primary: {
        main: '#1C3F53',
        light: '#396781',
      },
      secondary: {
        main: '#FFFFFF'
      },
      tertiary: {
        main: "#FFFFFF"
      },
      warning: {
        main: '#FF6347'
      },
      greys: {
        main: '#666666',
        dark: '#333333'
      }
    },
  })