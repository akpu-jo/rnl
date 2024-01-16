import NoteCard from "@/components/notes/NoteCard";
import LeftNavContent from "@/components/shared/navs/topnavs/LeftNavContent";
import TopBar from "@/components/shared/navs/topnavs/TopBar";
import { fetchNoteById } from "@/lib/actions/noteActions";
import React from "react";



const NotePage = async ({ params }: { params: { noteId: string } }) => {
  const { note, replies } = await fetchNoteById(params.noteId);
  return (
    <>
        <div className=" mx-auto max-w-2xl">
      <TopBar
        left={<LeftNavContent pageContext={`Note by ${note.author.name}`} />}
      />

        {note.parent !== undefined && (
          <>
            {
              <div className="mx-3 ml-8 border-l-4">
                {note.parent !== null ? (
                  <NoteCard note={note.parent} />
                ) : (
                  <div className=" -mx-3 mb-2 mt-16 rounded-lg bg-slate-400 shadow-sm ring-1 ring-slate-100 ">
                    {/* <EmptyStates message={message()} /> */}
                    his post has been deleted
                  </div>
                )}
              </div>
            }
          </>
        )}

        <NoteCard isParent={true} note={note} />

        {replies.length > 0 && (
          <div className="mx-3 ml-8 border-l-4">
            {replies.map((reply: any, i: React.Key | null | undefined) => (
              <NoteCard key={i} note={reply} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NotePage;
