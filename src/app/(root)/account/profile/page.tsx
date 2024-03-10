"use client";
import UserAvatar from "@/components/shared/UserAvatar";
import LeftNavContent from "@/components/shared/navs/topnavs/LeftNavContent";
import TopBar from "@/components/shared/navs/topnavs/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import { updateUserProfile } from "@/lib/actions/userActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProfileSettings = () => {
  const { sessionUser, setSessionUser } = useAuth();
  const router = useRouter();

  const [values, setValues] = useState({
    name: sessionUser ? sessionUser.name : '',
    username: sessionUser?  sessionUser.username : "",
    bio: sessionUser? sessionUser.bio : "",
  });
  const { username, name, bio } = values;

  const clsName =
    "ring-tradewind-100  w-full rounded-md bg-white p-3 text-lg border-1 hover:bg-gray-50 hover:ring-2 focus:bg-gray-50 focus:outline-none focus:ring-4 ";

  return (
    <div>
      <TopBar
        left={<LeftNavContent pageContext={"Edit Profile"} />}
        // right={<SaveButton />}
      />

      <form
        //   method="post"
        className=" mx-auto mt-5 max-w-xl space-y-7 "
      >
        <div className=" mb-6">
          <UserAvatar
            src={sessionUser && sessionUser.image}
            extraClass="w-24 h-24 rounded-[2rem] "
          />
        </div>
        <div>
          <label className="block py-0.5 text-sm font-semibold capitalize tracking-wide">
            Name
          </label>
          <input
            required
            aria-label="Enter the course name"
            type="text"
            name="username"
            className={clsName}
            value={name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block py-0.5 text-sm font-semibold capitalize tracking-wide">
            Username
          </label>
          <input
            required
            aria-label="Enter the course name"
            type="text"
            name="username"
            className={clsName}
            value={username}
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
        </div>
        <div>
          <label className="block py-0.5 text-sm font-semibold capitalize tracking-wide">
            Bio
          </label>
          <textarea
            aria-label="Enter your bio"
            name="bio"
            rows={3}
            className={clsName}
            value={bio}
            onChange={(e) => setValues({ ...values, bio: e.target.value })}
          />
        </div>
        <div className=" flex-ctr-end">
          <button
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              const data = await updateUserProfile(sessionUser.uid, values);
              console.log(data);
              if (data.user) {
                router.prefetch(`/${data.user.username}`);
                setSessionUser(data.user);
                router.replace(`/${data.user.username}`);
              }
            }}
            className=" bg-dark-50 rounded-lg px-8 py-1.5 tracking-wide text-white "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
