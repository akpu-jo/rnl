"use client";

import React, { ReactNode } from "react";
import { BackIcon } from "../../icons/Icons";
import { useRouter } from "next/navigation";
import Logo from "../Logo";

const LeftNavContent = ({
  pageContext,
  backButton = true,
  showLogoText,
  logo = false,
}: {
  pageContext?: string | ReactNode;
  backButton?: boolean;
  showLogoText?: boolean;
  logo?: boolean;
}) => {
  const router = useRouter();

  return (
    <div className=" flex-ctr mx-3 gap-6">
      {backButton && (
        <button onClick={() => router.back()}>
          <BackIcon />
        </button>
      )}
      {logo && <Logo showText={showLogoText || false} />}

      <li className=" text-2xl font-medium tracking-tighter">{pageContext}</li>
    </div>
  );
};

export default LeftNavContent;
