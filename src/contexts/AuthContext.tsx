"use client";

import { api } from "@/constants";
import { auth } from "@/lib/firebase/init";
import axios from "axios";
import { deleteCookie, setCookie } from "cookies-next";
import {
  AuthProvider as AuthProviderProp,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextValue {
  signinWithProvider: (provider: AuthProviderProp) => Promise<UserCredential>;
  setSessionUser: React.Dispatch<React.SetStateAction<null>>;
  sessionUser: object | null;
  signin: (email: string, password: string) => Promise<UserCredential>;
  signup: (email: string, password: string) => Promise<UserCredential>;
  signout: () => Promise<void>;
  verifyEmail: () => void;
  setAuthFlowStates: React.Dispatch<
    React.SetStateAction<{
      loading: boolean;
      error: boolean;
      inAuthFlow: boolean;
      isSignup: boolean;
      signinForm: boolean;
      signupForm: boolean;
      openAuthModal: boolean;
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
    openAuthModal: boolean;
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

  const [sessionUser, setSessionUser] = useState(null);

  const [authFlowStates, setAuthFlowStates] = useState({
    loading: false,
    error: false,
    inAuthFlow: false,
    isSignup: false,
    signinForm: false,
    signupForm: false,
    openAuthModal: true,
    showEmailOptIn: false,
    showVerifyEmail: false,
    openCatchUp: false,
    personalExpCatchUp: false,
    emailVerificationCatchUp: false,
  });

  const findAndSetUser = useCallback(
    async (session: User, dbUser?: object) => {
      let userData;

      const url =
        window.location.hostname === "localhost"
          ? `${api}/users/${session.uid}`
          : `http://${window.location.hostname}:8000/api/v1/users/${session.uid}`;
      try {
        if (!dbUser) {
          const { data } = await axios.get(url);
          userData = data.user;
        }

        if (!session.emailVerified) {
          verifyEmail();
          setAuthFlowStates({ ...authFlowStates, showVerifyEmail: true });
        } else {
          setCookie("token", await session.getIdToken(true));

          setSessionUser(dbUser || userData);
          setAuthFlowStates({ ...authFlowStates, openAuthModal: false });
          console.log("go here", authFlowStates.openAuthModal);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [authFlowStates]
  );

  useEffect(() => {
    console.log(window.location.hostname);
  }, []);

  useEffect(() => {
    setAuthFlowStates({ ...authFlowStates, loading: true });
    if (authFlowStates.inAuthFlow) return;
    const unsubscribe = onAuthStateChanged(auth, async (session) => {
      if (session) {
        await findAndSetUser(session);
      } else {
        setSessionUser(null);
      }
      setAuthFlowStates({ ...authFlowStates, loading: false });
    });

    return () => unsubscribe();
  }, []);

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
    password: string,
    forwardRoute?: string
  ) => {
    event.preventDefault();
    console.log("ForwardRoute", forwardRoute);
    return signInWithEmailAndPassword(auth, email, password)
      .then(async (session) => {
        await findAndSetUser(session.user);
        router.replace(forwardRoute || "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage} testing first`);
      });
  };

  const signinWithProvider = (
    provider: AuthProviderProp,
    forwardRoute: string
  ) => {
    setAuthFlowStates({ ...authFlowStates, loading: true });

    return signInWithPopup(auth, provider)
      .then(async (session) => {
        const userInfo = getAdditionalUserInfo(session);
        const isNewUser = userInfo?.isNewUser;

        if (!isNewUser) {
          await findAndSetUser(session.user);
          router.replace(forwardRoute || "/");
        } else {
          setAuthFlowStates({ ...authFlowStates, loading: false });

          const payload = {
            name: session.user.displayName,
            email: session.user.email,
            uid: session.user.uid,
            image: session.user.photoURL,
            signinMethod: session.providerId,
            emailVerified: session.user.emailVerified,
          };
          const {
            data: { user },
          } = await axios.post(`${api}/users`, payload);
          await findAndSetUser(session.user, user);
          router.replace(forwardRoute || "/");
        }
      })
      .catch((error) => {
        console.log(error);
        // setLoading(false);
      })
      .finally(() =>
        setAuthFlowStates({
          ...authFlowStates,
          loading: false,
          openAuthModal: false,
        })
      );
  };

  const signout = async () => {
    await signOut(auth);
    setSessionUser(null);
    deleteCookie("token");
    router.push("/welcome");
  };

  const verifyEmail = () => {
    const { currentUser } = auth;
    sendEmailVerification(currentUser!).catch((error) => console.log(error));
  };

  return (
    <AuthContext.Provider
      value={{
        sessionUser,
        setSessionUser,
        signin,
        signup,
        signinWithProvider,
        signout,
        verifyEmail,
        authFlowStates,
        setAuthFlowStates,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
