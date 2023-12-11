"use client";

import { FlexProps, Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import ThemeProvider from "@/app/theme-provider";
import { Navigation } from "@/modules/navigation/navigation";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const RouteLayout = ({ children, ...rest }: FlexProps) => {
  const pathname = usePathname();
  if (pathname.includes("admin")) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider>
      <Flex
        minH="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className={manrope.className}
        background="secondary.blackSoft"
        {...rest}
      >
        <Navigation />
        {children}
      </Flex>
    </ThemeProvider>
  );
};

export default RouteLayout;
