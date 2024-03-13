"use client";
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { ProfileUserProps, User } from "@/types";
import { BackIcon, SettingsIcon } from "@/components/shared/icons/Icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import UserAvatar from "../../UserAvatar";
import Theme from "../Theme";
import AuthButton from "@/app/(onboarding)/components/AuthButton";
import TopBar from "./TopBar";
import { ChevronRight, LogOutIcon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ConfirmLogout = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className=" flex-ctr text-contessa-900  dark:bg-dark-400/40 w-full gap-2 rounded-lg bg-zinc-100  p-3">
        <span className=" bg-contessa-50 dark:bg-contessa-200/20 rounded-full p-1">
          <LogOutIcon />
        </span>{" "}
        Sign out
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Sign out</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to sign out?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="">
          <AlertDialogCancel className=" dark-border rounded-lg border p-2">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className=" dark:text-background dark:bg-foreground bg-foreground text-background rounded-lg p-2 ">
            <AuthButton label={"Continue"} authType={"signout"} />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const AppSettings = ({ profileUser }: ProfileUserProps) => {
  const { sessionUser }: { sessionUser: User } = useAuth();
  const isSessionUser = sessionUser && sessionUser._id === profileUser._id;

  if (!isSessionUser) return null;

  const SettingsHeader = () => {
    return (
      <div className=" flex-ctr mx-3 gap-6">
        <SheetClose>
          <BackIcon />
        </SheetClose>
        <li className=" text-xl font-medium tracking-tighter">Settings</li>
      </div>
    );
  };
  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <SettingsIcon />
      </SheetTrigger>
      <SheetContent className=" dark-border">
        <SheetHeader>
          <SheetTitle>
            <TopBar left={<SettingsHeader />} />
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className=" space-y-6 text-xl font-light">
          <Link
            href={"/account/profile"}
            className=" flex-ctr-btw dark:bg-dark-400/40 gap-4 rounded-lg bg-zinc-100 p-3 "
          >
            <div className=" flex-ctr gap-4">
              <UserAvatar radius="lg" src={sessionUser.image} />
              <div className=" leading-5 sm:py-4">
                <p className="  font-medium md:text-3xl">{profileUser.name}</p>
                <p className="text-base text-slate-500">Edit profile</p>
              </div>
            </div>
            <ChevronRight />
          </Link>

          <div className=" dark:bg-dark-400/40 space-y-3 rounded-lg bg-zinc-100 p-3">
            <div>
              <Theme />
            </div>
            <hr className=" dark:border-slate-600" />

            <p> Notifications</p>
            <hr className=" dark:border-slate-600" />

            <p> Privacy & Security</p>
          </div>

          <div className=" dark:bg-dark-400/40 flex flex-col  gap-3  rounded-lg bg-zinc-100 p-3 ">
            <Link href={``} className=" font-light sm:py-2.5  ">
              Help and Feedback
            </Link>
            <hr className=" dark:border-slate-600" />
            <Link href={``} className=" font-light sm:py-2.5  ">
              Privacy policy
            </Link>
            <hr className=" dark:border-slate-600" />

            <Link href={``}>Terms of service</Link>
          </div>

          <div>
            <ConfirmLogout />
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default AppSettings;
