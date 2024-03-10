"use client";

import { ArticleIcon, ChevronDownIcon, CreateIcon } from "../icons/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import ButtonWithIcon from "@/components/ui/buttons/Button";
import { useAppStates } from "@/contexts/AppStates";
import { useRouter } from "next/navigation";

const CustomDropdownMenu = () => {
  const { setNewNoteTogle, newNoteTogle } = useAppStates();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-tradewind-500 hover:bg-tradewind-900/80 dark:bg-tradewind-900 dark:hover:bg-tradewind-900/80 relative rounded-r-lg p-2 focus:outline-none">
        <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-l50-d400 absolute -right-5 -top-0.5 px-2 dark:border-slate-600 ">
        <DropdownMenuLabel
          onClick={() => setNewNoteTogle({ ...newNoteTogle, open: true })}
          className=" cursor-pointer"
        >
          <ButtonWithIcon icon={<CreateIcon />} label={"Note"} />
        </DropdownMenuLabel>
        <DropdownMenuSeparator className=" bg-slate-200 dark:bg-slate-500" />
        <DropdownMenuLabel
          className=" cursor-pointer"
          onClick={() => router.push("/new/article")}
        >
          <ButtonWithIcon icon={<ArticleIcon />} label={"Article"} />
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdownMenu;
