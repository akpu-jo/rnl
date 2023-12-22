import "./globals.css";
import type { Metadata } from "next";
import React from "react";

// import { Inter } from 'next/font/google'
import fontFile from "next/font/local";
// import { ThemeProvider } from "@/context/ThemeContext";
import { Providers } from "@/contexts/providers";

const trap = fontFile({
  src: [
    {
      path: "../constants/fonts/Trap-Light.otf",
      weight: "300",
    },
    {
      path: "../constants/fonts/Trap-Regular.otf",
      weight: "400",
    },
    {
      path: "../constants/fonts/Trap-Medium.otf",
      weight: "500",
    },
    {
      path: "../constants/fonts/Trap-SemiBold.otf",
      weight: "600",
    },
    {
      path: "../constants/fonts/Trap-Bold.otf",
      weight: "700",
    },
    {
      path: "../constants/fonts/Trap-ExtraBold.otf",
      weight: "800",
    },
    {
      path: "../constants/fonts/Trap-Black.otf",
      weight: "900",
    },
  ],
  variable: "--font-trap",
});

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "rn-linked",
  description: "Online community for nurses",
};

export default async function RootLayout({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={trap.variable}>
        <Providers>
          {auth}
          {children}
        </Providers>
      </body>
    </html>
  );
}
