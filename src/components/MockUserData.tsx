"use client";
import { useAuth } from "@/contexts/AuthContext";
import React from "react";
import LoadingState from "./ui/LoadingState";

const MockUserData = () => {
  const {
    sessionUser,
    authFlowStates: { loading },
  } = useAuth();

  return (
    <div className=" max-w-lg overflow-hidden">
      {loading ? (
        <LoadingState />
      ) : (
        <>{sessionUser && <pre>{JSON.stringify(sessionUser, null, 1)}</pre>}</>
      )}
    </div>
  );
};

export default MockUserData;
