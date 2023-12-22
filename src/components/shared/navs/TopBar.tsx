"use client";

/* eslint-disable tailwindcss/migration-from-tailwind-2 */

import { BellIcon, CreateIcon } from "../icons/Icons";
import { Divider } from "@nextui-org/divider";

import CustomDropdownMenu from "./CustomDropdownMenu";
import { useAppStates } from "@/contexts/AppStates";
import { useAuth } from "@/contexts/AuthContext";

const TopBar = () => {
  const { setNewNoteTogle } = useAppStates();

  const {user} = useAuth()

  return (
    <nav className=" flex items-center justify-end">
      <pre>{JSON.stringify(user, null, 4)}</pre>
      <ul className=" flex items-center justify-end gap-3">
        <li className=" bg-white80-d700 rounded-lg p-2">
          <BellIcon />
        </li>
        <li
          onClick={() => setNewNoteTogle(true)}
          className=" inline-flex text-lg font-medium tracking-wide  "
        >
          <div className="bg-tradewind-500 hover:bg-tradewind-800/80 dark:bg-tradewind-900 dark:hover:bg-tradewind-900/80 flex items-center gap-2 rounded-l-lg p-2">
            <CreateIcon />
            <p>New note</p>
          </div>
          <Divider orientation="vertical" className="" />
          {/* <div className="  bg-tradewind-500  relative h-full ">
          </div> */}
          <span className=" inline-flex">
            <CustomDropdownMenu />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default TopBar;
