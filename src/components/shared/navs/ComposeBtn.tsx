"use client";
import { useAppStates } from "@/contexts/AppStates";
import React from "react";
import { CreateIcon } from "../icons/Icons";
import { Divider } from "@nextui-org/divider";
import CustomDropdownMenu from "./CustomDropdownMenu";

const ComposeBtn = () => {
  const { setNewNoteTogle, newNoteTogle } = useAppStates();

  return (
    <li className=" hidden text-lg font-medium tracking-wide sm:inline-flex ">
      <div
        onClick={() => setNewNoteTogle({ ...newNoteTogle, open: true })}
        className="bg-tradewind-500 hover:bg-tradewind-800/80 dark:bg-tradewind-900 dark:hover:bg-tradewind-900/80 flex items-center gap-2 rounded-l-lg px-3 py-1.5"
      >
        <CreateIcon />
        <p>Write</p>
      </div>
      <Divider orientation="vertical" className="" />

      <span className=" inline-flex">
        <CustomDropdownMenu />
      </span>
    </li>
  );
};

export default ComposeBtn;
