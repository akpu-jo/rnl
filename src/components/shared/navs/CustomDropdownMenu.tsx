'use client'

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

  const { setNewNoteTogle } = useAppStates();
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-tradewind-500 hover:bg-tradewind-900/80 dark:bg-tradewind-900 dark:hover:bg-tradewind-900/80 relative rounded-r-lg p-2 focus:outline-none">
        <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-l50-d400 absolute -right-5 -top-0.5 px-2 dark:border-slate-600 ">
        <DropdownMenuLabel>
          <ButtonWithIcon
            icon={<CreateIcon />}
            label={"Note"}
            action={() => setNewNoteTogle(true)}
          />

        </DropdownMenuLabel>
        <DropdownMenuSeparator className=" bg-slate-200 dark:bg-slate-500" />
        <DropdownMenuLabel>
          <ButtonWithIcon
            icon={<ArticleIcon />}
            label={"Article"}
            action={() => router.push('/new/article')}
          />
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdownMenu;
