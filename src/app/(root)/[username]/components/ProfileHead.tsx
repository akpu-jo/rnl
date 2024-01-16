"use client";
import { User } from "@/types";
import UserAvatar from "@/components/shared/UserAvatar";
import React from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

interface ProfileUserProps {
  profileUser: User;
}

const ProfileHead = ({ profileUser }: ProfileUserProps) => {
  const { sessionUser } = useAuth();
  const isSessionUser = sessionUser && sessionUser._id === profileUser._id;

  return (
    <>
      <div className=" mx-2 my-8 flex items-start justify-between gap-5">
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
        <div className=" flex-1 p-4">
          {!isSessionUser ? (
            <div className="flex items-center justify-start">
              {/* <button className=" bg-blac rounded-md border border-slate-200 px-5 py-1.5 text-lg font-medium">
                Follow
              </button> */}
              {/* <button
                // onClick={() => {
                //   user ? handleFollow() : setVisible(true);
                // }}
                className=" p-2 bg-slate-100 text-slate-600 font-medium rounded-md mr-5"
              >
                {isFollowing ? (
                  <span className="flex items-center">
                    <CheckIcon className=" w-5 h-5" />
                    Following
                  </span>
                ) : (
                  <span className=" flex items-center">
                    <PlusIcon className=" w-5 h-5" /> Follow
                  </span>
                )}
              </button> */}
            </div>
          ) : (
            <Link
              href={`/account/profile`}
              className=" bg-tradewind-100/10 rounded-md border border-slate-200 px-5 py-2 text-lg font-medium"
            >
              Edit profile
            </Link>
          )}
        </div>
      </div>
      {profileUser.bio && (
        <p className="my-1 whitespace-pre-line py-2 text-center text-gray-500">
          {profileUser.bio}
        </p>
      )}
    </>
  );
};

export default ProfileHead;
