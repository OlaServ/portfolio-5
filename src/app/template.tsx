"use client";

import { FlexProps, Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import ThemeProvider from "@/app/theme-provider";
import { Navigation } from "@/modules/navigation/navigation";

export const RouteLayout = ({ children, ...rest }: FlexProps) => {
  const pathname = usePathname();
  if (pathname.includes("admin")) {
    return <>{children}</>;
  }

  return (
      <ThemeProvider>
        <Flex
          overflow="hidden"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          {...rest}
        >
          <Navigation />
          {children}
        </Flex>
      </ThemeProvider>
  );
};

export default RouteLayout;
