"use server";

import { SessionCookieOptions } from "firebase-admin/auth";
import { auth } from "./firebase/admin";
import { getSession, setSessionCookie } from "./sessionCookie";
import { api } from "@/constants";
import { RedirectType, redirect as nextRedirect } from "next/navigation";


// This file include all server authentication functions

export async function createSessionToken(
  idToken: string,
  sessionCookieOptions: SessionCookieOptions
) {
  return auth.createSessionCookie(idToken, sessionCookieOptions);
}

export const setSessionToken = async (idToken: string) => {
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

  const sessionCookie = await createSessionToken(idToken, { expiresIn });

  setSessionCookie(sessionCookie, expiresIn);
};

export async function revokeAllSessions(session?: string) {
  if (!session) return;
  const decodedIdToken = await auth.verifySessionCookie(session);

  return await auth.revokeRefreshTokens(decodedIdToken.sub);
}

export const redirect = (url: string, type?: RedirectType | undefined) => {
  nextRedirect(url, type)
}



export async function getCurrentUser() {
  const session = await getSession();

  if (!session) return null;

  let data;
  try {
    const res = await fetch(`${api}/auth`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        session,
      },
    });

    data = await res.json();
  } catch (error) {
    console.log("getCurrentUser==>", error);
    data = null;
  }

  return data
}
