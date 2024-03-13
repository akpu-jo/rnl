"use client";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider } from "next-themes";
import React from "react";
import { AuthProvider } from "./AuthContext";
import { AppStateProvider } from "./AppStates";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { List, User } from "@/types";

// Create a client
const queryClient = new QueryClient();

export const Providers = ({
  children,
  currentUser,
  lists,
}: {
  children: React.ReactNode;
  currentUser: User | null | undefined;
  lists: List[] | [];
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider currentUser={currentUser}>
        <AppStateProvider userLists={lists}>
          <NextUIProvider>
            <ThemeProvider attribute="class">{children}</ThemeProvider>
          </NextUIProvider>
        </AppStateProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
