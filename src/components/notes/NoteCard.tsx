"use client";
import React, { useEffect, useState } from "react";
import { formatDate } from "@/constants/timeFormat";
import {
  BookmarkIcon,
  ChatBubbleIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
  VerticalDotsIcon,
} from "../shared/icons/Icons";
import ButtonWithIcon from "@/components/ui/buttons/Button";
import UserAvatar from "../shared/UserAvatar";
import { useRouter } from "next/navigation";
import HorizontalRule from "../ui/HorizontalRule";
import { useAuth } from "@/contexts/AuthContext";
import { likeHandler } from "@/lib/actions/noteActions";

const NoteCard = ({
  note,
  isParent = false,
  isReply,
}: {
  note: any;
  isParent?: boolean;
  isReply?: boolean;
}) => {
  const router = useRouter();
  const {sessionUser} = useAuth()

  const [liked, setLiked] = useState(note.likes.includes(sessionUser && sessionUser._id));
  const [animateLike, setAnimateLike] = useState(false);
  const [noteLikes, setNoteLikes] = useState(note.likes);

  const handleLike = async (id: string) => {

    const payload = {
      userId: sessionUser._id,
      noteId: note._id

    }
    const result = await likeHandler(payload)

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
  }

  return (
    <div
      // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
      className={` ${
        isParent ? "" : "bg-white-d700 border dark:border-slate-600 dark:bg-slate-700/40"
      }  space-y-4 rounded-lg p-2 py-6 hover:bg-opacity-60 md:p-8`}
      onClick={(e) => router.push(`/${note.author.username}/n/${note._id}`)}
    >
      <section className=" flex-ctr-btw gap-3">
        <div className=" flex-ctr gap-3">
          <UserAvatar
            radius={"lg"}
            src={note.author.image}
            clickAction={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              e.stopPropagation();
              router.push(`/${note.author.username}`);
            }}
          />
          <div>
            <span className=" flex-ctr cursor-pointer gap-2" onClick={pushToProfile}>
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
        <span className={`" flex-ctr ${liked && 'text-pink-500'}`}onClick={
          (e)=> {e.stopPropagation()
            setAnimateLike(true)
            handleLike(note._id)
        }}>
          <ButtonWithIcon
            icon={<HeartIcon liked={liked} animateLike={animateLike} />}
            extraClass={` btn-icon `}
          />
          {!isParent && noteLikes.length > 0 && noteLikes.length}
        </span>
        <span className=" flex-ctr">
          <ButtonWithIcon
            icon={<ChatBubbleIcon />}
            extraClass=" btn-icon"
          />
          {note.replies}
        </span>
        <span className=" flex-ctr">
          <ButtonWithIcon
            icon={<EyeIcon />}
            extraClass="btn-icon"
          />
          {note.views}
        </span>
        <span className=" flex-ctr">
          <ButtonWithIcon
            icon={<BookmarkIcon />}
            extraClass="btn-icon"
          />
          {note.bookmarks}
        </span>
        <span className=" flex-ctr">
          <ButtonWithIcon
            icon={<ShareIcon />}
            extraClass="btn-icon"
          />
        </span>
      </section>
      {isParent && <HorizontalRule />}
    </div>
  );
};

export default NoteCard;
