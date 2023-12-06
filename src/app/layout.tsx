"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ThemeProvider from "./theme-provider";
import { Navbar } from "@/components/navbar/navbar";
import { QueryClientProvider, QueryClient } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body
        style={{
          maxHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
