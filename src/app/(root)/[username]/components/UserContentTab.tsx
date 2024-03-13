"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchNotes } from "@/lib/actions/noteActions";
import NoteCard from "@/components/notes/NoteCard";
import UserList from "./UserList";
import { useAuth } from "@/contexts/AuthContext";

const UserContentTab = ({ userId }: { userId: string }) => {
  const { sessionUser } = useAuth();
  const isSessionUser = sessionUser && sessionUser._id === userId;
  const [userNotes, setUserNotes] = useState([]);

  useEffect(() => {
    const getUserNotes = async () => {
      const reqQuery = {
        userId,
        page: 1,
        limit: 3,
      };
      const result = await fetchNotes(reqQuery);
      result && setUserNotes(result.notes);
    };
    getUserNotes();
  }, [userId]);

  const contentTypes = ["notes", "articles", "library"];

  return (
    <Tabs defaultValue="notes" className="  ">
      <TabsList className=" w-full">
        {contentTypes.map((value) => (
          <TabsTrigger
            key={value}
            value={value}
            className={`${
              value === "library" && !isSessionUser && "hidden"
            } flex-1 border-b px-4 capitalize hover:bg-slate-300/20 `}
          >
            {value}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="notes" className=" mt-3 space-y-2 sm:space-y-3">
        {userNotes.length ? (
          userNotes.map((note: any) => <NoteCard note={note} key={note._id} />)
        ) : (
          <p className=" my-5 text-center">Your notes will show here.</p>
        )}
      </TabsContent>
      <TabsContent value="articles" className=" my-5 text-center">
        Your articles will show here.
      </TabsContent>
      {isSessionUser && (
        <TabsContent value="library" className="my-5">
          <UserList />
        </TabsContent>
      )}
    </Tabs>
  );
};

export default UserContentTab;
