"use client";

import { List, Note } from "@/types";
import React, { createContext, useContext, useState } from "react";

interface AppContextType {
  lists: List[] | [];
  setLists: React.Dispatch<React.SetStateAction<List[] | []>>;
  newNoteTogle: {
    open: boolean;
    isReply?: boolean;
    note?: Note | null;
  };
  setNewNoteTogle: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      isReply?: boolean;
      note?: Note | null;
    }>
  >;
}

const AppStateContext = createContext<AppContextType | undefined>(undefined);

export const AppStateProvider = ({
  children,
  userLists,
}: {
  children: React.ReactNode;
  userLists: List[] | [];
}) => {
  const [newNoteTogle, setNewNoteTogle] = useState({
    open: false,
    isReply: false,
    note: null,
  });
  const [lists, setLists] = useState(userLists || []);

  return (
    <AppStateContext.Provider
      value={{
        lists,
        setLists,
        newNoteTogle,
        setNewNoteTogle: setNewNoteTogle as React.Dispatch<
          React.SetStateAction<{
            open: boolean;
            isReply?: boolean;
            note?: Note | null;
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
