"use client";

import { useAuth } from "@/contexts/AuthContext";
import React from "react";

const EmptyListState = ({
  username,
  name,
  listType,
}: {
  username: string;
  name: string;
  listType: "followers" | "following";
}) => {
  const { sessionUser } = useAuth();

  if (listType === "followers") {
    return (
      <>
        {username === sessionUser.username
          ? "You don't have any followers yet"
          : `${name.split(" ")[0]} is not followed by anyone`}
        ;
      </>
    );
  } else {
    return (
      <>
        {username === sessionUser.username
          ? "You are not following anyone yet"
          : `${name.split(" ")[0]} is not following anyone yet`}
      </>
    );
  }
};

export default EmptyListState;
