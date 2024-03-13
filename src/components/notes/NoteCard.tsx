"use client";
import React, { useEffect, useState } from "react";
import { formatDate } from "@/constants/timeFormat";
import {
  ChatBubbleIcon,
  HeartIcon,
  VerticalDotsIcon,
} from "../shared/icons/Icons";
import ButtonWithIcon from "@/components/ui/buttons/Button";
import UserAvatar from "../shared/UserAvatar";
import { useRouter } from "next/navigation";
import HorizontalRule from "../ui/HorizontalRule";
import { useAuth } from "@/contexts/AuthContext";
import { likeHandler } from "@/lib/actions/noteActions";
import { useAppStates } from "@/contexts/AppStates";
import NoteShare from "./NoteShare";
import ListCard from "../lists/ListCard";

const NoteCard = ({
  note,
  isParent = false,
  isReply,
  hideAvatar = false,
}: {
  note: any;
  isParent?: boolean;
  isReply?: boolean;
  hideAvatar?: boolean;
}) => {
  const router = useRouter();
  const { sessionUser } = useAuth();
  const { setNewNoteTogle, newNoteTogle } = useAppStates();

  const [liked, setLiked] = useState(
    note.likes.includes(sessionUser && sessionUser._id)
  );
  const [animateLike, setAnimateLike] = useState(false);
  const [noteLikes, setNoteLikes] = useState(note.likes);

  const handleLike = async (id: string) => {
    const payload = {
      userId: sessionUser._id,
      noteId: note._id,
    };
    const result = await likeHandler(payload);

    console.log(result);
    setNoteLikes(result.likes);
    setAnimateLike(!result.isliked);
    setLiked(result.likes.includes(sessionUser && sessionUser._id));
  };

  useEffect(() => {
    setLiked(note.likes.includes(sessionUser && sessionUser._id));
  }, [note.likes, sessionUser]);

  const pushToProfile = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    router.push(`/${note.author.username}`);
  };

  const [sharingLink, setSharingLink] = useState("");
  useEffect(() => {
    setSharingLink(
      `${window?.location.origin}/${note.author.username}/n/${note._id}`
    );
  }, [note._id, note.author.username]);

  return (
    <div
      // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
      className={` ${
        isParent
          ? ""
          : " bg-white-d700 dark-border border py-6 dark:bg-slate-700/40"
      }  space-y-4 rounded-lg px-3  hover:bg-opacity-60 md:p-8`}
      onClick={(e) => router.push(`/${note.author.username}/n/${note._id}`)}
    >
      <section className=" flex-ctr-btw gap-3">
        <div className=" flex-ctr gap-3">
          {!hideAvatar && (
            <UserAvatar
              radius={"lg"}
              src={note.author.image}
              clickAction={(
                e: React.MouseEvent<HTMLDivElement, MouseEvent>
              ) => {
                e.stopPropagation();
                router.push(`/${note.author.username}`);
              }}
            />
          )}
          <div>
            <span
              className=" flex-ctr cursor-pointer gap-2"
              onClick={pushToProfile}
            >
              <h3 className=" font-semibold hover:underline">
                {note.author.name}
              </h3>
              {/* <p className=" px-1 text-xl text-gray-400">|</p> */}
              <p className=" text-l5-d4">@{note.author.username}</p>
            </span>
            <p className="text-lz4-d5">{formatDate(note.createdAt)}</p>
          </div>
        </div>
        <VerticalDotsIcon className=" text-l5-d4 h-6 w-6 " />
      </section>
      <section
        className={`${
          isParent && "text-xl leading-relaxed sm:text-lg sm:leading-loose"
        }`}
      >
        {note.body}
      </section>

      {isParent && (
        <div className=" mt-3 border-y py-3 uppercase dark:border-slate-500">
          <span
            // onClick={() => showLikes("likes")}
            className={` ml-1 tracking-wide text-slate-500  hover:underline`}
          >
            {/* {postLikes.length} Like{postLikes.length > 1 ? "s" : ""} */}
            likes
          </span>

          <span
            className={`text-lz4-d ml-5 tracking-wide text-slate-500 hover:underline`}
          >
            {/* {(post.replies !== undefined && post.replies.length) || ""} Repl */}
            replies
            {/* {post.replies.length > 1 ? "ies" : "y"} */}
          </span>
        </div>
      )}

      <section className="flex-ctr-ard gap-3  text-slate-500">
        <span
          className=" flex-ctr"
          onClick={(e) => {
            e.stopPropagation();
            setNewNoteTogle({
              ...newNoteTogle,
              open: true,
              isReply: true,
              note,
            });
          }}
        >
          <ButtonWithIcon icon={<ChatBubbleIcon />} extraClass=" btn-icon" />
          {note.children.length > 0 && note.children.length}
        </span>
        <span
          className={`" flex-ctr ${liked && "text-pink-500"}`}
          onClick={(e) => {
            e.stopPropagation();
            setAnimateLike(true);
            handleLike(note._id);
          }}
        >
          <ButtonWithIcon
            icon={<HeartIcon liked={liked} animateLike={animateLike} />}
            extraClass={` btn-icon `}
          />
          {!isParent && noteLikes.length > 0 && noteLikes.length}
        </span>

        {/* <span className=" flex-ctr" onClick={(e) => e.stopPropagation()}>
          <ButtonWithIcon icon={<EyeIcon />} extraClass="btn-icon" />
          {note.views}
        </span> */}
        <span
          className=" flex-ctr"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ButtonWithIcon
            icon={<ListCard noteId={note._id} />}
            extraClass="btn-icon"
          />
          {note.bookmarks}
        </span>

        <span
          className=" flex-ctr"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ButtonWithIcon
            icon={<NoteShare copiedNoteLink={sharingLink} />}
            extraClass="btn-icon"
          />

          {/* <NoteShare /> */}
        </span>
      </section>
      {isParent && <HorizontalRule />}
    </div>
  );
};

export default NoteCard;
