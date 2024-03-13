"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import LinkItems from "./LinkItems";
import HomeIcon from "../icons/HomeIcon";
import ProfileIcon from "../icons/ProfileIcon";
import { ArticleIcon, BellIcon, SearchIcon } from "../icons/Icons";
import { useAuth } from "@/contexts/AuthContext";
import MoreNavOptions from "./MoreNavOptions";
// import JsonData from "../JsonData";


const LeftSideBar = () => {
  const [mounted, setMounted] = useState(false);
  const { sessionUser } = useAuth();
  const { username} = sessionUser !==null && sessionUser

  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  return (
    <section className=" leftsidebar" suppressHydrationWarning>
      <div className=" space-y-12">
        <nav className=" pl-5">
          <Logo textColor={""} logoSrc={""} showText={true} />
        </nav>
        <div className=" space-y-5" >
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
        {/* <JsonData data={sessionUser} /> */}
        <MoreNavOptions />
      </div>
    </section>
  );
};

export default LeftSideBar;
