"use client";
import React from "react";
import { SettingsIcon } from "../../icons/Icons";
import { useAuth } from "@/contexts/AuthContext";
import { ProfileUserProps } from "@/types";

const AppSettings = ({profileUser}: ProfileUserProps) => {
  const { sessionUser } = useAuth();
  const isSessionUser = sessionUser && sessionUser._id === profileUser._id;


  if (!isSessionUser) return null;
  return (
    <div>
      <SettingsIcon />
    </div>
  );
};

export default AppSettings;
