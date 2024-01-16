"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";

interface AppContextType {
  newNoteTogle: boolean;
  setNewNoteTogle: (newNoteTogle: boolean) => void;
  navContent: {
    right: string | ReactNode;
    left: string | ReactNode;
    center: string | ReactNode;
  };
  setNavContent: React.Dispatch<
    React.SetStateAction<{
      right: string | ReactNode;
      left: string | ReactNode;
      center: string | ReactNode;
    }>
  >;
}

const AppStateContext = createContext<AppContextType | undefined>(undefined);

export const AppStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [newNoteTogle, setNewNoteTogle] = useState(false);
  const [navContent, setNavContent] = useState({
    right: <></>,
    left: <></>,
    center: <></>,
  });

  return (
    <AppStateContext.Provider
      value={{
        newNoteTogle,
        setNewNoteTogle,
        navContent,
        setNavContent: setNavContent as React.Dispatch<
          React.SetStateAction<{
            right: string | ReactNode;
            left: string | ReactNode;
            center: string | ReactNode;
          }>
        >,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppStates = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("UseTheme must be used within a ThemeProvider");
  }

  return context;
};
