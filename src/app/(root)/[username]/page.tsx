import { fetchUser } from "@/lib/actions/userActions";
import React from "react";
import ProfileHead from "./components/ProfileHead";
import UserContentTab from "./components/UserContentTab";
import TopBar from "@/components/shared/navs/topnavs/TopBar";
import LeftNavContent from "@/components/shared/navs/topnavs/LeftNavContent";
import AppSettings from "@/components/shared/navs/topnavs/AppSettings";

const UserProfilePage = async ({
  params,
}: {
  params: { username: string };
}) => {
  const { user } = await fetchUser(params.username);
  console.log(params);

  return (
    <>
      <TopBar
        left={<LeftNavContent pageContext={user.name} />}
        right={<AppSettings profileUser={user} />}
      />
      <div className=" mx-auto max-w-xl">
        <ProfileHead profileUser={user} />
        <UserContentTab userId={user._id} />
      </div>
    </>
  );
};

export default UserProfilePage;
