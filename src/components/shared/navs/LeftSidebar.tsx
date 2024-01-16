"use client";
import React from "react";
import Logo from "./Logo";
import LinkItems from "./LinkItems";
import HomeIcon from "../icons/HomeIcon";
import ProfileIcon from "../icons/ProfileIcon";
import { ArticleIcon, BellIcon, SearchIcon } from "../icons/Icons";
import { useAuth } from "@/contexts/AuthContext";
import MoreNavOptions from "./MoreNavOptions";

// import { HomeIcon } from "@heroicons/react/24/outline";

const LeftSideBar = () => {
  const { sessionUser } = useAuth();
  const { username} = sessionUser !==null && sessionUser

  return (
    <section className=" leftsidebar">
      <div className=" space-y-12">
        <nav className=" pl-5">
          <Logo textColor={""} logoSrc={""} showText={true} />
        </nav>
        <div className=" space-y-5" suppressHydrationWarning>
          <LinkItems
            label={"Home"}
            icon={<HomeIcon />}
            route={"/"}
            active={false}
          />
          <LinkItems
            label={"Articles"}
            icon={<ArticleIcon />}
            route={`/articles`}
            active={false}
          />
          <LinkItems
            label={"Explore"}
            icon={<SearchIcon />}
            route={"/"}
            active={false}
          />
          <LinkItems
            label={"Notifications"}
            icon={<BellIcon />}
            route={"/"}
            active={false}
          />
          {sessionUser && (
            <LinkItems
              label={"Profile"}
              icon={<ProfileIcon />}
              route={`/${username}`}
              active={false}
            />
          )}
          {/* {sessionUser && (
            <LinkItems
              icon={<ComposeBtn />}
              active={false}
            />
          )} */}
        </div>
      </div>
      <div>
        <MoreNavOptions />
      </div>
    </section>
  );
};

export default LeftSideBar;
