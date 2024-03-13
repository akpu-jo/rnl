// Functions defined here are used for client side auth with Firebase
// Firebase-admin will not work in this file

import { api } from "@/constants";
import axios from "axios";
import {
  AuthProvider as AuthProviderProp,
  User,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React from "react";
import { auth } from "./firebase/init";
import { redirect, revokeAllSessions, setSessionToken } from "./serverAuth";
import { deleteSessionCookie } from "./sessionCookie";

const findAndSetUser = async (firebaseUser: User, dbUser?: object) => {
  const url =
    window.location.hostname === "localhost"
      ? `${api}/users/${firebaseUser.uid}`
      : `http://${window.location.hostname}:8000/api/v1/users/${firebaseUser.uid}`;

  try {
    let userData;
    if (!dbUser) {
      const { data } = await axios.get(url);
      userData = data.user;
    }

    if (!firebaseUser.emailVerified) {
      redirect(`/verification/email/new`);
      // verifyEmail();
    } else {
      const token = await firebaseUser.getIdToken(true);
      await setSessionToken(token);

      //   setAuthFlowStates({ ...authFlowStates, openAuthModal: false });
      return dbUser || userData;
    }
  } catch (error) {
    console.log("FindAndSetUser==>", error);
  }
};

export const signup = (
  event:
    | React.ChangeEvent<HTMLTextAreaElement>
    | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  email: string,
  password: string,
  name: string
) => {
  event.preventDefault();
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      await axios.post(`${api}/users`, {
        name,
        uid: userCredential.user.uid,
        email,
        signinMethod: "email",
        emailVerified: userCredential.user.emailVerified,
      });
      const token = await userCredential.user.getIdToken(true);
      await setSessionToken(token);
      redirect(`/verification/email/new`);
      // await verifyEmail();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`${errorCode}: ${errorMessage} testing first`);
      console.log(error);
    });
};

export const signin = (
  event:
    | React.ChangeEvent<HTMLTextAreaElement>
    | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  email: string,
  password: string,
) => {
  event.preventDefault();
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (session) => {
      const sessionUser = await findAndSetUser(session.user);
      return sessionUser;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`${errorCode}: ${errorMessage} testing first`);
    });
};

export const signinWithProvider = (
  provider: AuthProviderProp,
  forwardUrl?: string
) => {
  //   setAuthFlowStates({ ...authFlowStates, loading: true });
  return signInWithPopup(auth, provider)
    .then(async (userCredential) => {
      const userInfo = getAdditionalUserInfo(userCredential);
      const isNewUser = userInfo?.isNewUser;

      if (!isNewUser) {
        const sessionUser = await findAndSetUser(userCredential.user);
        return sessionUser;
        // router.replace(forwardRoute || "/");
      } else {
        // setAuthFlowStates({ ...authFlowStates, loading: false });

        const payload = {
          name: userCredential.user.displayName,
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          image: userCredential.user.photoURL,
          signinMethod: userCredential.providerId,
          emailVerified: userCredential.user.emailVerified,
        };
        const {
          data: { user },
        } = await axios.post(`${api}/users`, payload);
        const sessionUser = await findAndSetUser(userCredential.user, user);
        return sessionUser;
      }
    })
    .catch((error) => {
      console.log("signwithprovider==>", error); // setLoading(false);
    })
    .finally(
      () => {}
      //   setAuthFlowStates({
      //     ...authFlowStates,
      //     loading: false,
      //     openAuthModal: false,
      //   })
    );
};

export const verifyEmail = async () => {
  const { currentUser } = auth;
  sendEmailVerification(currentUser!).catch((error) => console.log(error));
};

export const signout = async () => {
  await signOut(auth);

  const deletedSession = await deleteSessionCookie();
  await revokeAllSessions(deletedSession);
  redirect("/welcome");

  // setSessionUser(null);
  // router.push("/welcome");
};
