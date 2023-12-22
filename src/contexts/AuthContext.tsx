"use client";

import { api } from "@/constants";
import { auth } from "@/lib/firebase/init";
import { useDisclosure } from "@nextui-org/modal";
import axios from "axios";
import { setCookie } from "cookies-next";
import {
  AuthProvider as AuthProviderProp,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState } from "react";

interface AuthContextValue {
  signinWithProvider: (provider: AuthProviderProp) => Promise<UserCredential>;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  user: object | null;
  signin: (email: string, password: string) => Promise<UserCredential>;
  signup: (email: string, password: string) => Promise<UserCredential>;
  signout: () => Promise<void>;
  verifyEmail: () => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: () => void;
  setAuthFlowStates: React.Dispatch<
    React.SetStateAction<{
      loading: boolean;
      error: boolean;
      inAuthFlow: boolean;
      isSignup: boolean;
      signinForm: boolean;
      signupForm: boolean;
      showOptions: boolean;
      showEmailOptIn: boolean;
      showVerifyEmail: boolean;
      openCatchUp: boolean;
      personalExpCatchUp: boolean;
      emailVerificationCatchUp: boolean;
    }>
  >;
  authFlowStates: {
    loading: boolean;
    error: boolean;
    inAuthFlow: boolean;
    isSignup: boolean;
    signinForm: boolean;
    signupForm: boolean;
    showOptions: boolean;
    showEmailOptIn: boolean;
    showVerifyEmail: boolean;
    openCatchUp: boolean;
    personalExpCatchUp: boolean;
    emailVerificationCatchUp: boolean;
  };
}

const AuthContext = createContext<AuthContextValue | undefined | any>(
  undefined
);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

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

  // authmodal imports
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const findAndSetUser = async (session: User, forwardRoute?: string) => {
    const { data } = await axios.get(`${api}/users/${session.uid}`);
    const { user } = data;

    if (!session.emailVerified) {
      await verifyEmail();
      setAuthFlowStates({ ...authFlowStates, showVerifyEmail: true });
    } else {
      setCookie("token", await session.getIdToken(true));

      setUser(user);
      console.log(forwardRoute);
      router.push(forwardRoute || "/");
    }
  };

  // Auth functions
  const signup = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    email: string,
    password: string,
    name: string
  ) => {
    event.preventDefault();
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        console.log(userCredential, "==================>");

        await axios.post(`${api}/users`, {
          name,
          uid: userCredential.user.uid,
          email,
          signinMethod: "email",
          emailVerified: userCredential.user.emailVerified,
        });
        const token = await userCredential.user.getIdToken(true);
        setCookie("token", token);
        await verifyEmail();
        setAuthFlowStates({ ...authFlowStates, showVerifyEmail: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage} testing first`);
        console.log(error);
      });
  };

  const signin = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    email: string,
    password: string
  ) => {
    event.preventDefault();
    return signInWithEmailAndPassword(auth, email, password)
      .then(async (session) => {
        await findAndSetUser(session.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage} testing first`);
      });
  };

  const signinWithProvider = (provider: AuthProviderProp) => {
    return signInWithPopup(auth, provider);
  };

  const signout = async () => {
    await signOut(auth);
  };

  const verifyEmail = () => {
    const { currentUser } = auth;
    sendEmailVerification(currentUser!).catch((error) => console.log(error));
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
