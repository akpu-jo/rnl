"use client";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider } from "next-themes";
import React from "react";
import { AuthProvider } from "./AuthContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <NextUIProvider>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </NextUIProvider>
    </AuthProvider>
  );
};
