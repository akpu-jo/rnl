"use client";

import AuthButton from "@/app/(onboarding)/components/AuthButton";
import { VerticalDotsIcon } from "@/components/shared/icons/Icons";
import LeftNavContent from "@/components/shared/navs/topnavs/LeftNavContent";
import RightNavContent from "@/components/shared/navs/topnavs/RightNavContent";
import TopBar from "@/components/shared/navs/topnavs/TopBar";
import { usePathname } from "next/navigation";
import React from "react";

const NewArticleHeader = () => {
  const pathname = usePathname()
  const PageContext = () => {
    return (
      <div className={`  text-lz4-d5 text-lg font-light tracking-normal `}>
        {<span className="">saved.</span>}
      </div>
    );
  };

  const CreateAction = () => {
    return (
      <div className=" flex items-center justify-between">
        <AuthButton label={'Sign In'} authType={"sign-in"} forwardUrl={pathname} />
        <button className=" mr-3 flex items-center px-2 text-center">
          <VerticalDotsIcon className=" h-5 w-5" />
          <span className=" hidden tracking-wide sm:block ">options</span>
        </button>
        <button
          onClick={() => {
            // publish();
          }}
          className=" bg-dark-50 rounded-full px-3 py-1 tracking-wide text-white "
        >
          Publish
        </button>
      </div>
    );
  };

  return (
    <div className="bg-white-d400 border-b dark:border-slate-600">
      <div className=" mx-auto max-w-6xl">
        <TopBar
          left={<LeftNavContent pageContext={<PageContext />} />}
          right={<RightNavContent navContent={<CreateAction />} />}
        />
      </div>
    </div>
  );
};

export default NewArticleHeader;
