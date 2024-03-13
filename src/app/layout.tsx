import "./globals.css";
import type { Metadata } from "next";
import React from "react";

import fontFile from "next/font/local";
import { Providers } from "@/contexts/providers";
import { getCurrentUser } from "@/lib/auth/serverAuth";
import { Toaster } from "@/components/ui/sonner";
import { fetchLists } from "@/lib/actions/listActions";
import { List, User } from "@/types";

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
  title: {
    template: "%s | rn-linked",
    default: "rn-linked",
  },
  description: "Online community for nurses",
  openGraph: {
    title: "RN-Linked",
    description: "Online community of nurses",
    url: "http://localhost:3000/",
    siteName: "RN-Linked",
    // images: [
    //   {
    //     url: 'http://localhost:3000/assets/nrs-f.jpg', // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'http://localhost:3000/assets/nrs-f.jpg', // Must be an absolute URL
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    images: "/assets/nrs-f.jpg",
  },
  twitter: {
    card: "summary_large_image",
    images: "/assets/nrs-f.jpg",
  },
};

export default async function RootLayout({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {


  const fetchUserData = () => {
    let sessionUser: User;
    let lists: List[];
    return getCurrentUser().then(async (res) => {
      if (res) {
        const _list = await fetchLists(res.sessionUser._id);
        sessionUser = res.sessionUser;
        lists = _list.lists;
      }
      return { lists, sessionUser };
    });
  };

  const { lists, sessionUser } = await fetchUserData();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={trap.variable} suppressHydrationWarning>
        <Providers currentUser={sessionUser} lists={lists}>
          {auth}
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
