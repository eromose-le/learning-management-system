import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "@/configs/ThemeRegistry";
import PublicHeader from "@/common/PublicHeader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LMS - Software",
  description:
    "Streamline School Management and Elevate Learning Experiences with Our Innovative Platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className="grid grid-cols-12 gap-0 auto-rows-max">
          <PublicHeader />
          <main className="col-span-12 auto-rows-auto">{children}</main>
        </body>
      </ThemeRegistry>
    </html>
  );
}
