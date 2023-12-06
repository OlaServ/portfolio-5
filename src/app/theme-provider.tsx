"use client";

import { ChakraProvider, theme } from "@chakra-ui/react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
