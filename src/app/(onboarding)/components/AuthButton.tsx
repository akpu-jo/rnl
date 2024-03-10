"use client";

import { useAuth } from "@/contexts/AuthContext";
import { signout } from "@/lib/auth/clientAuth";
import { useRouter } from "next/navigation";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface AuthButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  label: string | ReactNode;
  authType: "sign-in" | "sign-up" | "signout";
  scroll?: boolean;
  forwardUrl?: string
}

const AuthButton = ({
  label,
  authType,
  scroll = false,
  forwardUrl,
  ...rest
}: AuthButtonProps) => {
  const { setAuthFlowStates, authFlowStates } = useAuth();
  const router = useRouter();

  const forwardQuery = forwardUrl ? `?forward=${forwardUrl}` : ''
  console.log(forwardUrl)

  const handleAuth = () => {
    if (authType !== "signout") {
      setAuthFlowStates({ ...authFlowStates, openAuthModal: true });
      router.push(`/${authType}${forwardQuery}`, { scroll });
    }
    if (authType === "signout"){
        signout()
        router.push('/welcome')
    }
  };

  return (
    <button {...rest} onClick={handleAuth}>
      {label}
    </button>
  );
};

export default AuthButton;
