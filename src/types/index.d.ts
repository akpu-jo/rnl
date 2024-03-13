import {
  AuthProvider as AuthProviderProp,
  UserCredential,
} from "firebase/auth";
import React from "react";

export interface User {
  name: string;
  username: string;
  email: string;
  _id: string;
  image: string;
  uid: string;
  emailVerified: string;
  createdAt: string;
  bio: string;
  followers: [string] | [User];
  following: [string] | [User];
}

export interface ProfileUserProps {
  profileUser: User;
}

export interface AuthContextValue {
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
    openCatchUp: boolean;
    personalExpCatchUp: boolean;
    emailVerificationCatchUp: boolean;
  };
}

export type APIResponse<T = object> =
  | { success: true; data: T }
  | { success: false; error: string };

export interface Note {
  _id: string;
  body: string;
  author: string | User;
  likes: [string | User];
  image: [{}];
  parent: string | Note;
  isReply: boolean;
  children: [string | Note];
  views?: Number;
}

export interface Bookmark {
  contentType: "Note" | "Article" | "Capsule";
  contentId: string | Note;
}

export type FollowType = "followers" | "following";

export interface List {
  name: string;
  _id: string;
  visibility: "private" | "public";
  owner: string | User;
  bookmarks: Bookmark[];
}
