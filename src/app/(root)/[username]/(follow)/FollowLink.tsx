"use client";

import { FollowType } from "@/types";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const FollowLink = ({ followType }: { followType: FollowType }) => {
  const pathname = usePathname();
  const params = useParams();
  const isActive = pathname === `/${params.username}/${followType}`;
  return (
    <Link
      className={`${
        isActive && " border-b-4"
      } flex-1 whitespace-nowrap rounded-sm border-b px-3 py-1.5 text-center font-medium capitalize transition-all  hover:bg-slate-300/20  `}
      href={`/${params.username}/${followType}`}
      replace={true}
    >
      {followType}
    </Link>
  );
};

export default FollowLink;
