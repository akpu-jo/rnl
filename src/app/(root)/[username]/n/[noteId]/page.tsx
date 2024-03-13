import NoteCard from "@/components/notes/NoteCard";
import LeftNavContent from "@/components/shared/navs/topnavs/LeftNavContent";
import TopBar from "@/components/shared/navs/topnavs/TopBar";
import { api } from "@/constants";
import { fetchNoteById } from "@/lib/actions/noteActions";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import { headers } from "next/headers";
import UserAvatar from "@/components/shared/UserAvatar";
import Link from "next/link";

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
  const headersList = headers();

  const headersListEntries = JSON.stringify(headersList.get("referer"));

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
                  <div className=" flex gap-0.5">
                    <div className=" flex flex-col items-center pt-2">
                      <Link href={`/${note.parent.author.username}`}>
                        <UserAvatar
                          radius={"lg"}
                          src={note.parent.author.image}
                        />
                      </Link>

                      <div className=" relativ dark-border grow rounded-full border-r" />
                    </div>

                    <span className=" flex-1 pb-6">
                      <NoteCard hideAvatar={true} note={note.parent} />
                    </span>
                  </div>
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
          <div className="mx-3 my-6 space-y-2">
            {replies.map((reply: any, i: React.Key | null | undefined) => (
              <div key={i} className=" flex gap-0.5">
                <div className=" flex flex-col items-center pt-2">
                  <Link href={`/${reply.author.username}`}>
                    <UserAvatar radius={"lg"} src={reply.author.image} />
                  </Link>

                  {/* <div className=" relativ dark-border grow rounded-full border-r" /> */}
                </div>

                <span className=" flex-1 pb-6">
                  <NoteCard hideAvatar={true} note={reply} />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NotePage;
