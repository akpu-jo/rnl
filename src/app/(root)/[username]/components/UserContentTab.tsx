"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchNotes } from "@/lib/actions/noteActions";
import NoteCard from "@/components/notes/NoteCard";

const UserContentTab = ({ userId }: { userId: string }) => {
  const [userNotes, setUserNotes] = useState([]);

  useEffect(() => {
    const getUserNotes = async () => {
      console.log(userId);
      const reqQuery = {
        userId,
        page: 1,
        limit: 3,
      };
      const result = await fetchNotes(reqQuery);
      setUserNotes(result.notes);
    };
    return () => {
      getUserNotes();
    };
  }, [userId]);

  const contentTypes = ["notes", "articles", "bookmarks"];

  return (
    <Tabs defaultValue="notes" className="  ">
      <TabsList className=" w-full">
        {contentTypes.map((value) => (
          <TabsTrigger
            key={value}
            value={value}
            className=" flex-1 border-b px-4 capitalize hover:bg-slate-300/20 "
          >
            {value}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="notes" className=" mt-3  space-y-2 sm:space-y-3">
        {/* Your notes will show here. */}
        {userNotes.length &&
          userNotes.map((note: any) => <NoteCard note={note} key={note._id} />)}
      </TabsContent>
      <TabsContent value="articles" className=" text-center">
        Your articles will show here.
      </TabsContent>
      <TabsContent value="bookmarks" className=" text-center">
        Your bookmarked items will show here.
      </TabsContent>
    </Tabs>
  );
};

export default UserContentTab;
