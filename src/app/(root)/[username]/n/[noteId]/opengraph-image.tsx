import { api } from "@/constants";
import { ImageResponse } from "next/og";

export const runtime = "edge";

interface NoteProps {
  params: { noteId: string; username: string };
}

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: NoteProps) {

  const data = await fetch(`${api}/notes/${params.noteId}`).then((res) =>
    res.json()
  );

  const { note } = data;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {note.body}
      </div>
    ),
    {
      ...size,
    }
  );
}
