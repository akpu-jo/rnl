import LeftNavContent from "@/components/shared/navs/topnavs/LeftNavContent";
import TopBar from "@/components/shared/navs/topnavs/TopBar";
import React from "react";
import FollowLink from "./FollowLink";

export default function FollowLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { username: string };
}) {
  const userNameFormat = () => {
    return (
      <>
        <span className="text-lz4-d5 font-light">@</span> <span>{params.username}</span>
      </>
    );
  };

  return (
    <div className="bg-white-d400">
      <TopBar
        left={<LeftNavContent pageContext={userNameFormat()} />}
        right={""}
      />
      <div className=" mx-auto max-w-xl">
        <nav className="flex h-10">
          <FollowLink followType={"followers"} />
          <FollowLink followType={"following"} />
        </nav>
        {children}
      </div>
    </div>
  );
}
