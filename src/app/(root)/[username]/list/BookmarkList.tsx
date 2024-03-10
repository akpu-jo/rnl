"use client";
import NoteCard from "@/components/notes/NoteCard";
import UserAvatar from "@/components/shared/UserAvatar";
import { List } from "@/types";
import React from "react";

const BookmarkList = ({ list }: { list: List }) => {
  const listOwner =
    typeof list.owner === "object"
      ? {
          id: list.owner._id,
          image: list.owner.image,
          name: list.owner.name,
        }
      : undefined;

  return (
    <div className=" mx-auto max-w-2xl space-y-10">
      <section className=" flex-ctr mt-8 gap-5">
        <UserAvatar src={listOwner!.image} />
        <h3 className=" font-semibold hover:underline">{listOwner!.name}</h3>
      </section>
      {/* <JsonData data={list} /> */}
      <section className=" space-y-4">
        {list.bookmarks.map((item) => {
          const contentId =
            typeof item.contentId === "object" ? item.contentId._id : undefined;
          return <NoteCard key={contentId} note={item.contentId} />;
        })}
      </section>
    </div>
  );
};

export default BookmarkList;
