"use client";

import { auth } from "@/lib/firebase/init";
import { useDisclosure } from "@nextui-org/modal";
import {
  AuthProvider as AuthProviderProp,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  const [authFlowStates, setAuthFlowStates] = useState({
    loading: false,
    error: false,
    inAuthFlow: false,
    isSignup: false,
    signinForm: false,
    signupForm: false,
    showOptions: true,
    showEmailOptIn: false,
    showVerifyEmail: false,
    openCatchUp: false,
    personalExpCatchUp: false,
    emailVerificationCatchUp: false,
  });
  //   const [error, setError] = useState(false);

  //   const [isSignup, setIsSignup] = useState(false);
  //   const [signinForm, setSigninForm] = useState(false);
  //   const [signupForm, setSignupForm] = useState(false);
  //   const [showOptions, setShowOptions] = useState(true);
  //   const [showEmailOptIn, setShowEmailOptIn] = useState(false);
  //   const [showVerifyEmail, setShowVerifyEmail] = useState(false);
  //   const [inAuthFlow, setInAuthFlow] = useState(false);

  // authmodal imports
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  //   const errorCodes = [
  //     "auth/wrong-password",
  //     "auth/user-not-found",
  //     "auth/email-already-in-use",
  //   ];

  // Auth functions
  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinWithProvider = (provider: AuthProviderProp) => {
    return signInWithPopup(auth, provider);
  };

  const signout = async () => {
    await signOut(auth);
  };

  const verifyEmail = () => {
    const { currentUser } = auth;
    sendEmailVerification(currentUser!);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signin,
        signup,
        signinWithProvider,
        signout,
        verifyEmail,
        isOpen,
        onOpen,
        onClose,
        onOpenChange,
        authFlowStates,
        setAuthFlowStates,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
