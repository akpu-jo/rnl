"use client";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider } from "next-themes";
import React from "react";
import { AuthProvider } from "./AuthContext";
import { AppStateProvider } from "./AppStates";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppStateProvider>
          <NextUIProvider>
            <ThemeProvider attribute="class">{children}</ThemeProvider>
          </NextUIProvider>
        </AppStateProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
