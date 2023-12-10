import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

export const ChakraTheme = extendTheme({
  global: {
    html: {
      fontFamily: "museo-sans",
    },
  },
  colors,
  fonts: {
    heading: "museo-sans",
    body: "museo-sans",
  },
  breakpoints: {
    base: "0px",
    md: "1024px",
    lg: "2732px",
    xl: "3800px",
  },
  components: {},
});
