"use client";
import { useAuth } from "@/contexts/AuthContext";
import { User } from "@/types";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import UserAvatar from "../shared/UserAvatar";
import { follow } from "@/lib/actions/userActions";

const UserCard = ({
  user,
  showBio = false,
  clipBio = false,
}: {
  user: User;
  showBio?: boolean;
  clipBio?: boolean;
}) => {
  const { sessionUser } = useAuth();

  const [isFollowing, setIsFollowing] = useState(
    sessionUser && sessionUser.following.includes(user._id)
  );

  const handleFollow = async () => {
    const data = await follow(sessionUser._id, user._id);
    setIsFollowing(data.followers.includes(sessionUser._id));
  };

  useEffect(() => {
    setIsFollowing(sessionUser && sessionUser.following.includes(user._id));
  }, [sessionUser, user._id]);

  return (
    <div className=" bg-white-d400 mx-3 my-1 w-full rounded-lg p-2 hover:bg-slate-500/5 hover:dark:bg-slate-700/10 md:my-2">
      <div className="flex-ctr-btw gap-10 ">
        <Link href={`/${user.username}`} className=" flex-ctr">
          {user !== undefined && <UserAvatar src={user.image} />}
          <div className=" ml-3">
            <p className=" text-md font-medium capitalize">{user.name}</p>
            <p className=" text-sm font-semibold text-gray-400">
              @{user.username}
            </p>
          </div>
        </Link>
        {sessionUser && sessionUser._id !== user._id && (
          <button
            onClick={handleFollow}
            className=" dark-border flex-ctr gap-2 rounded-md border border-slate-200 px-3 py-2 text-lg font-medium"
          >
            Follow{isFollowing && "ing"}
          </button>
        )}
      </div>
      {showBio && (
        <p
          className={`py-1 pt-2 ${
            clipBio && "clip-txt-2"
          }  overflow-hidden text-ellipsis`}
        >
          {user.bio}
        </p>
      )}
    </div>
  );
};

export default UserCard;
