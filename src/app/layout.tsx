import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RouteLayout } from "@/layouts/route-layout";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RouteLayout>{children}</RouteLayout>
      </body>
    </html>
  );
}
