"use client";
import ListCardFull from "@/components/lists/ListCardFull";
import { useAppStates } from "@/contexts/AppStates";
import React from "react";

const UserList = () => {
  const { lists } = useAppStates();
  return (
    <>
      {lists.length > 0 ? (
        <div className="space-y-4">
          {lists.map((list) => (
            <ListCardFull list={list} key={list._id} />
          ))}
        </div>
      ) : (
        <div className=" text-center">
          {" "}
          Your bookmarked items will show here.
        </div>
      )}
    </>
  );
};

export default UserList;
