"use client";
import React from "react";

import { usePathname } from "next/navigation";
import SignUpOptions from "@/app/(onboarding)/authComponents/SignUpOptions";
import SignInOptions from "@/app/(onboarding)/authComponents/SignInOptions";

const AuthOptions = () => {
  const pathname = usePathname();
  const isSignup = pathname === "/sign-up";

  // const heading = !isSignup
  //   ? "Welcome back."
  //   : showEmailOptIn
  //     ? "Your Personal Experience."
  //     : showVerifyEmail
  //       ? "Verify Your Email"
  //       : "Join RNlinked.";

  return <>{isSignup ? <SignUpOptions /> : <SignInOptions />}</>;
};

export default AuthOptions;
