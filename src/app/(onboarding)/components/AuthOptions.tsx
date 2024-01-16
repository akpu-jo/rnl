"use client";
import React from "react";

import { usePathname } from "next/navigation";
import SignUpOptions from "@/app/(onboarding)/components/SignUpOptions";
import SignInOptions from "@/app/(onboarding)/components/SignInOptions";

const AuthOptions = () => {
  const pathname = usePathname();
  const isSignup = pathname === "/sign-up";

  return <>{isSignup ? <SignUpOptions /> : <SignInOptions />}</>;
};

export default AuthOptions;
