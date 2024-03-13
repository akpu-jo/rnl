import React from "react";
import LinkItems from "./LinkItems";
import HomeIcon from "../icons/HomeIcon";
import { ArticleIcon, BellIcon, SearchIcon } from "../icons/Icons";
import FloatingComposeBtn from "./FloatingComposeBtn";

const MobileNav = () => {
  return (
    <div className="flex-ctr-ard fixed inset-x-0 bottom-0 z-50 h-16 border-t bg-white py-2 shadow-lg dark:border-slate-700  dark:bg-[#1c272f] sm:hidden">
      <LinkItems
        label={"Home"}
        icon={<HomeIcon />}
        route={"/"}
        active={false}
      />
      <LinkItems
        label={"Articles"}
        icon={<ArticleIcon />}
        route={"/"}
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
          <FloatingComposeBtn />
    </div>
  );
};

export default MobileNav;
