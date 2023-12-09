import React from "react";
import { Avatar } from "@nextui-org/avatar";
import { formatTime } from "@/constants/timeFormat";
import {
  BookmarkIcon,
  ChatBubbleIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
  VerticalDotsIcon,
} from "../icons/Icons";
import ButtonWithIcon from "@/components/ui/buttons/Button";

const NoteCard = ({ note }: { note: any }) => {
  return (
    <div className=" bg-white-d700 space-y-4 rounded-lg p-8 dark:bg-slate-700/40">
      <section className=" flex-ctr-btw gap-3">
        <div className=" flex-ctr gap-3">
          <Avatar
            radius="lg"
            showFallback
            src="https://images.unsplash.com/broken"
          />
          <div>
            <span className=" flex-ctr gap-2">
              <h3 className=" font-semibold">{note.author.name}</h3>
              {/* <p className=" px-1 text-xl text-gray-400">|</p> */}
              <p className=" text-l5-d4">@{note.author.username}</p>
            </span>
            <p className="text-lz4-d5">{formatTime(new Date())}</p>
          </div>
        </div>
        <VerticalDotsIcon className=" text-l5-d4 h-6 w-6 " />
      </section>
      <section className="">{note.text}</section>
      <section className="flex-ctr-ard gap-3  text-slate-500">
        <span className=" flex-ctr ">
          <ButtonWithIcon
          label=" 1milion"
            icon={<HeartIcon />}
            extraClass=" hover:bg-slate-500/10 rounded-lg"
          />
          {note.likes}
        </span>
        <span className=" flex-ctr">
          <ButtonWithIcon
            icon={<ChatBubbleIcon />}
            extraClass=" hover:bg-slate-500/10 rounded-lg"
          />
          {note.replies}
        </span>
        <span className=" flex-ctr">
          <ButtonWithIcon
            icon={<EyeIcon />}
            extraClass=" hover:bg-slate-500/10 rounded-lg"
          />
          {note.views}
        </span>
        <span className=" flex-ctr">
          <ButtonWithIcon
            icon={<BookmarkIcon />}
            extraClass=" hover:bg-slate-500/10 rounded-lg"
          />
          {note.bookmarks}
        </span>
        <span className=" flex-ctr">
          <ButtonWithIcon
            icon={<ShareIcon />}
            extraClass=" hover:bg-slate-500/10 rounded-lg"
          />
        </span>
      </section>
    </div>
  );
};

export default NoteCard;
