"use client";

import { ChakraProvider, theme } from "@chakra-ui/react";
import { ChakraTheme } from "@/theme/chakra-theme";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChakraProvider theme={ChakraTheme}>{children}</ChakraProvider>;
}
