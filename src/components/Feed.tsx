import React from "react";
import NoteCard from "./notes/NoteCard";
import { fetchNotes } from "@/lib/actions/noteActions";
import JsonData from "./shared/JsonData";

const Feed = async () => {
  const reqQuery = {
    page: 1,
    limit: 4,
  };

  const result = await fetchNotes(reqQuery);
  const { notes, success } = result;

  return (
    <div className=" space-y-3 sm:mt-4">
      {!success && <JsonData data={result.response.data} />}
      {notes &&
        notes.map((note: { _id: React.Key | null | undefined }) => (
          <NoteCard key={note._id} note={note} />
        ))}
    </div>
  );
};

export default Feed;
