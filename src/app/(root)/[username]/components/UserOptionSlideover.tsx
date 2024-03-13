import { SettingsIcon } from "@/components/shared/icons/Icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { SettingsIcon } from "lucide-react";

import React from "react";

const UserOptionSlideover = () => {
  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <SettingsIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
        </SheetHeader>
        <SheetDescription>
          <div>Edit Prifle</div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default UserOptionSlideover;
