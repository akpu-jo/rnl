import NoteCard from "@/components/notes/NoteCard";
import LeftNavContent from "@/components/shared/navs/topnavs/LeftNavContent";
import TopBar from "@/components/shared/navs/topnavs/TopBar";
import { api } from "@/constants";
import { fetchNoteById } from "@/lib/actions/noteActions";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import { headers } from "next/headers"



interface NoteProps {
  params: { noteId: string; username: string };
}

export const generateMetadata = async (
  { params }: NoteProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const response = await fetch(`${api}/notes/${params.noteId}`);
  const data = await response.json();

  const { note } = data;

  return {
    title: `Note by @${params.username}`,
    description: note.body,
    openGraph: {
      description: note.body,
      // images: [note.author.image], // Must be an absolute URL
    },
    twitter: {
      card: "summary_large_image",
      title: `Note by @${params.username} | RNlinked`,
      description: note.body,
      // images: [note.author.image], // Must be an absolute URL
      // images: ["/assets/nrs-f.jpg"],
    },
  };
};

const NotePage = async ({ params }: NoteProps) => {
   const headersList = headers()

 const headersListEntries = JSON.stringify(headersList.get('referer'))

  console.log(headersListEntries);

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
              <div className="mx-3 ">
                {note.parent !== null ? (
                  <NoteCard note={note.parent} />
                ) : (
                  <div className=" mb-2 mt-16 rounded-lg bg-slate-400 shadow-sm ring-1 ring-slate-100 ">
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
          <div className="mx-3 space-y-2">
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
