"use client";

import { FlexProps, Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProvider from "@/app/theme-provider";
import { Navigation } from "@/modules/navigation/navigation";

export const RouteLayout = ({ children, ...rest }: FlexProps) => {
  const pathname = usePathname();
  const queryClient = new QueryClient();

  if (pathname.includes("admin")) {
    return <>{children}</>;
  }

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default RouteLayout;
