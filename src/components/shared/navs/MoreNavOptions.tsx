import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BarsIcon, SettingsIcon } from "../icons/Icons";
import Theme from "./Theme";

const MoreNavOptions = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <button
            className={` hover:bg-dark-50/10 dark:hover:bg-celery-50/10 flex w-fit items-center justify-start gap-3 rounded p-2 px-5 text-2xl font-light  `}
          >
            <BarsIcon />
            <p className={`hidden tracking-wide xl:block `}>More</p>
          </button>
        </PopoverTrigger>
        <PopoverContent
          className=" bg-white-d700 dark:border-slate-600"
          align="start"
          sideOffset={3}
        >
          <button className="flex-ctr hover:bg-dark-50/5 dark:hover:bg-celery-50/5 mb-2 w-full gap-2 p-2 text-2xl font-light">
            <SettingsIcon />
            Setting
          </button>
          <Theme />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default MoreNavOptions;
