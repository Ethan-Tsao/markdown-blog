// theme.ts

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      "html, body": {
        bg: props.colorMode === "dark" ? "#073642" : "#eee8d5",
        color: "gray.100",
      },
    }),
  },
  fonts: {
    heading: "Caveat",
  },
  colors: {
    solarizedDark: {
      800: "#052830",
      700: "#062E39",
      600: "#073642",
      500: "#0C5E72",
      400: "#1187A4",
      300: "16AFD5",
    },
    solarizedLight: {
      800: "#CDBC84",
      700: "#DDD1AC",
      600: "#eee8d5",
      500: "#EFEAD9",
      400: "F2EDDE",
    },
  },
});

export default theme;
