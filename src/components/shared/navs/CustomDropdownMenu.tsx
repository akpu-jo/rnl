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
import Theme from "./Theme";
import ButtonWithIcon from "@/components/ui/buttons/Button";

const CustomDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative rounded-r-lg bg-tradewind-500 p-2 hover:bg-tradewind-900/80 focus:outline-none dark:bg-tradewind-900 dark:hover:bg-tradewind-900/80">
        <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-l50-d400 absolute -right-4 top-3 px-2 dark:border-slate-600 ">
        <DropdownMenuLabel>
          <ButtonWithIcon
            icon={<CreateIcon />}
            label={"Note"}
            action={() => {}}
          />
        </DropdownMenuLabel>
        <DropdownMenuSeparator className=" bg-slate-200 dark:bg-slate-500" />
        <DropdownMenuLabel>
          <ButtonWithIcon
            icon={<ArticleIcon />}
            label={"Article"}
            action={() => {}}
          />
        </DropdownMenuLabel>
        <DropdownMenuLabel>
          <Theme />
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdownMenu;

