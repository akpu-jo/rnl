"use client";
import React from "react";

import { usePathname } from "next/navigation";
import SignUpOptions from "@/app/(onboarding)/authComponents/SignUpOptions";
import SignInOptions from "@/app/(onboarding)/authComponents/SignInOptions";

const AuthOptions = () => {
  const pathname = usePathname();
  const isSignup = pathname === "/sign-up";

  return <>{isSignup ? <SignUpOptions /> : <SignInOptions />}</>;
};

export default AuthOptions;
