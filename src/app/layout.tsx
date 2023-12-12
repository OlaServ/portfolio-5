import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{height: "100%"}}>
      <body style={{ overflowX: "hidden" }}>{children}</body>
    </html>
  );
}
