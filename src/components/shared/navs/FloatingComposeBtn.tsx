"use client";
import React, { useState } from "react";

import Link from "next/link";

import Overlay from "@/components/ui/Overlay";
import { ArticleIcon, CreateIcon, PlusIcon } from "../icons/Icons";
import { useAppStates } from "@/contexts/AppStates";

const FloatingComposeBtn = () => {
  const { setNewNoteTogle, newNoteTogle } = useAppStates();

  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <Overlay isOpen={showOverlay} setIsOpen={setShowOverlay} />
      <div className="  z-5 fixed bottom-16 right-4 sm:right-16 2xl:right-44 ">
        <div
          onClick={() => {
            setShowOverlay(!showOverlay);
          }}
          className="mb-3 flex flex-col items-end justify-end gap-4 text-2xl "
        >
          {showOverlay && (
            <Link href={`/new/article`} className=" flex-ctr gap-3">
              Article
              <span className=" bg-white-d700 mx-2 rounded-full p-2 shadow-xl ring-1 ring-slate-400">
                <ArticleIcon />
              </span>
            </Link>
          )}
          <div className=" flex-ctr gap-3">
            {showOverlay && <p className="">Note</p>}
            <span
              onClick={() => {
                setShowOverlay(false);
                showOverlay && setNewNoteTogle({ ...newNoteTogle, open: true });
              }}
              className=" bg-tradewind-900 dark:bg-tradewind-900 inline-block rounded-full p-4 text-white shadow-xl outline-none"
            >
              {showOverlay ? <CreateIcon /> : <PlusIcon />}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingComposeBtn;
