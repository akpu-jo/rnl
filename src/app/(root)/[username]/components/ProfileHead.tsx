"use client";
import { FollowType, User } from "@/types";
import UserAvatar from "@/components/shared/UserAvatar";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { follow } from "@/lib/actions/userActions";
import { CheckIcon, PlusIcon } from "lucide-react";

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
      <div className=" mx-2 my-4 flex items-start justify-between gap-5">
        <figure className=" flex items-start gap-6">
          <UserAvatar
            src={profileUser.image}
            extraClass="w-24 h-24 rounded-[2rem]"
          />

          <figcaption className="py-4">
            <div className=" leading-3">
              <p className=" text-2xl font-medium md:text-3xl">
                {profileUser.name}
              </p>
              <p className=" text-lg text-slate-500">@{profileUser.username}</p>
            </div>
          </figcaption>
        </figure>
        <div className=" p-4">
          {!isSessionUser ? (
            <div className="flex-ctr">
              <button
                onClick={handleFollow}
                className=" dark-border flex-ctr gap-2 rounded-md border border-slate-200 px-3 py-2 text-lg font-medium"
              >
                {isFollowing ? (
                  <CheckIcon className=" h-4 w-4" />
                ) : (
                  <PlusIcon className=" h-4 w-4" />
                )}
                Follow{isFollowing && "ing"}
              </button>
            </div>
          ) : (
            <Link
              href={`/account/profile`}
              className="dark-border rounded-md border border-slate-200 px-3 py-2.5 text-lg font-medium"
            >
              Edit profile
            </Link>
          )}
        </div>
      </div>
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
