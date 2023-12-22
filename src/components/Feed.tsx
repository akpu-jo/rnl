import React from "react";
import NoteCard from "./notes/NoteCard";

const Feed = () => {
  const notes = [
    {
      _id: "1",
      text: "At RNLinked, we envision a world where nurses can enjoy a more balanced work and personal life, while being surrounded by a supportive community.",
      author: {
        name: "Joseph Akpu",
        username: "jxakpu",
        _id: "001",
      },
      likes: 291,
      image: [{}],
      replies: 4,
      views: 863,
      bookmarks: 6,
    },
    {
      _id: "2",
      text: "A Our goal is to empower nurses with the necessary tools and resources they need to build a strong knowledge-sharing and collaborative network among colleagues, access mentorship and support, and stay up-to-date on the latest nursing information and growth opportunities. In doing so, we aim to enhance patient care and healthcare services overall..",
      author: {
        name: "Ola Akpu",
        username: "midi",
        _id: "002",
      },
      likes: 291,
      image: [{}],
      replies: 4,
      views: 863,
      bookmarks: 17,
    },
  ];
  return (
    <div className=" mt-10 space-y-2 sm:space-y-3">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
};

export default Feed;
