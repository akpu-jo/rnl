import React from "react";
import Logo from "./Logo";
import LinkItems from "./LinkItems";
import HomeIcon from "../icons/HomeIcon";
import ProfileIcon from "../icons/ProfileIcon";
import { ArticleIcon, BarsIcon, BellIcon, SearchIcon } from "../icons/Icons";

// import { HomeIcon } from "@heroicons/react/24/outline";

const LeftSideBar = () => {
  return (
    <section className=" leftsidebar">
      <div className=" space-y-12">
        <nav className=" pl-5">
          <Logo textColor={""} logoSrc={""} showText={true} />
        </nav>
        <div className=" space-y-5">
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
          <LinkItems
            label={"Profile"}
            icon={<ProfileIcon />}
            route={"/"}
            active={false}
          />
        </div>
      </div>
      <div>
        <LinkItems
          label={"More"}
          icon={<BarsIcon />}
          route={"/"}
          active={false}
        />
      </div>
    </section>
  );
};

export default LeftSideBar;
