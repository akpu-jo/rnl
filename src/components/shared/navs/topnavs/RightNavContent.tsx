"use client";

import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import UserAvatar from "../../UserAvatar";
import { BellIcon } from "../../icons/Icons";
import React, { ReactNode } from "react";

interface RightNavProps {
  showUser?: boolean
  navContent?: string | ReactNode
  showNotificationBtn?: boolean
}

const RightNavContent = ({showUser, navContent, showNotificationBtn}: RightNavProps) => {
  const { sessionUser } = useAuth();
  return (
    <div className=" flex-ctr mx-3 gap-3">
      {showNotificationBtn && <li className=" hover:bg-white80-d700 hidden rounded-lg p-1.5 sm:block">
        <BellIcon />
      </li>}
      {showUser && sessionUser && (
        <Link className="sm:hidden" href={`/${sessionUser.username}`}>
          <UserAvatar src={sessionUser.image} radius="full" size="sm" />
        </Link>
      )}
      {navContent}
    </div>
  );
};

export default RightNavContent;
