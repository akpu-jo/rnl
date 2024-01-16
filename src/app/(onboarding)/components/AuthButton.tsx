"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface AuthButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  label: string | ReactNode;
  authType: "sign-in" | "sign-up" | "signout";
  scroll?: boolean;
}

const AuthButton = ({
  label,
  authType,
  scroll = false,
  ...rest
}: AuthButtonProps) => {
  const { setAuthFlowStates, authFlowStates, signout } = useAuth();
  const router = useRouter();

  const handleAuth = () => {
    if (authType !== "signout") {
      setAuthFlowStates({ ...authFlowStates, openAuthModal: true });
      router.push(`/${authType}`, { scroll });
    }
    if (authType === "signout"){
        signout()
    }
  };

  return (
    <button {...rest} onClick={handleAuth}>
      {label}
    </button>
  );
};

export default AuthButton;
