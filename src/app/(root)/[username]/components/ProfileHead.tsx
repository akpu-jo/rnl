"use client";
import { FollowType, User } from "@/types";
import UserAvatar from "@/components/shared/UserAvatar";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { follow } from "@/lib/actions/userActions";
import { CheckIcon, PlusIcon } from "lucide-react";
import ButtonWithIcon from "@/components/ui/buttons/Button";
import NoteShare from "@/components/notes/NoteShare";

interface ProfileUserProps {
  profileUser: User;
}

const ProfileHead = ({ profileUser }: ProfileUserProps) => {
  const { sessionUser } = useAuth();
  const isSessionUser = sessionUser && sessionUser._id === profileUser._id;

  const [isFollowing, setIsFollowing] = useState(
    profileUser.followers.includes(isSessionUser && isSessionUser._id)
  );
  const [followers, setFollowers] = useState(profileUser.followers);
  // const [showMediaModal, setShowMediaModal] = useState(false);

  const handleFollow = async () => {
    const data = await follow(sessionUser._id, profileUser._id);
    setFollowers(data.followers);
    setIsFollowing(data.followers.includes(sessionUser._id));
  };

  const followCountJsx = (followType: FollowType, count: number) => {
    return (
      <Link
        href={`/${profileUser.username}/${followType}`}
        className=" rounded-sm capitalize hover:underline"
      >
        <span className=" font-medium ">{count}</span> {followType}
      </Link>
    );
  };

  useEffect(() => {
    setIsFollowing(
      profileUser.followers.includes(sessionUser && sessionUser._id)
    );
  }, [profileUser.followers, sessionUser]);

  return (
    <>
      <section className=" mx-3 my-4 flex w-full items-center justify-center gap-5">
        <UserAvatar
          src={profileUser.image}
          extraClass=" w-20 h-20 rounded-[2rem]"
        />
        <div className=" flex-btw w-full flex-1 flex-col sm:flex-row">
          <div className=" leading-3 sm:py-4">
            <p className=" text-2xl font-medium md:text-3xl">
              {profileUser.name}
            </p>
            <p className=" text-slate-500 sm:text-lg">
              @{profileUser.username}
            </p>
          </div>
          <div className=" mt-3 sm:p-4">
            {!isSessionUser ? (
              <div className="flex-ctr gap-2">
                <button
                  onClick={handleFollow}
                  className=" dark-border flex-ctr gap-2 rounded-md border border-slate-200 px-3 py-1 text-lg font-medium sm:py-2"
                >
                  {isFollowing ? (
                    <CheckIcon className=" h-4 w-4" />
                  ) : (
                    <PlusIcon className=" h-4 w-4" />
                  )}
                  Follow{isFollowing && "ing"}
                </button>
                <span className=" flex-ctr rounded-full border p-1 dark:border-slate-600">
                  <ButtonWithIcon
                    // label="Share"
                    icon={
                      <NoteShare
                        copiedNoteLink={`https://rnlinked.com/${profileUser.username}`}
                      />
                    }
                    extraClass="btn-icon"
                  />
                </span>
              </div>
            ) : (
              <div className=" flex-ctr gap-2">
                <Link
                  href={`/account/profile`}
                  className="dark-border rounded-lg border border-slate-200 px-3 py-2 text-lg font-medium sm:py-2.5"
                >
                  Edit profile
                </Link>
                <span className=" flex-ctr rounded-full border p-1 dark:border-slate-600">
                  <ButtonWithIcon
                    // label="Share"
                    icon={
                      <NoteShare
                        copiedNoteLink={`https://rnlinked.com/${profileUser.username}`}
                      />
                    }
                    extraClass="btn-icon"
                  />
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
      {profileUser.bio && (
        <p className="whitespace-pre-line p-3">{profileUser.bio}</p>
      )}
      <div className=" text-lz4-d5 mb-2 space-x-3 px-3 py-2 ">
        {followCountJsx("followers", followers.length)}
        {followCountJsx("following", profileUser.following.length)}
      </div>
    </>
  );
};

export default ProfileHead;
