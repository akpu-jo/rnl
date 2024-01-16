"use client";

import { ReactNode } from "react";

interface NavContentType {
  right?: string | ReactNode;
  left?: string | ReactNode;
}

const TopBar = ({ left, right }: NavContentType) => {
  return (
    <nav className=" bg-white-d400 sticky right-0 top-0 z-50 flex w-full items-center justify-between py-4 dark:border-slate-500 sm:p-5 ">
      <ul className="">{left}</ul>
      <ul className=" flex items-center justify-end gap-3">{right}</ul>
    </nav>
  );
};

export default TopBar;
