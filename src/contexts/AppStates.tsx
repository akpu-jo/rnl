"use client";

import React, { createContext, useContext, useState } from "react";

interface AppContextType {
    newNoteTogle: boolean;
    setNewNoteTogle: (newNoteTogle: boolean) => void;
}

const AppStateContext = createContext<AppContextType | undefined>(undefined);

export const AppStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [newNoteTogle, setNewNoteTogle] = useState(false);


  return (
    <AppStateContext.Provider value={{ newNoteTogle, setNewNoteTogle }}>
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
