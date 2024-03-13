// Use this file to manage: [create, get, edit, delete] session cookies

"use server";

import { cookies } from "next/headers";

export async function getSession() {
  try {
    return cookies().get("session")?.value;
  } catch (error) {
    return undefined;
  }
}

export const setSessionCookie = (sessionCookie: string, expiresIn: any) => {
  cookies().set("session", sessionCookie, {
    maxAge: expiresIn,
    httpOnly: true,
    secure: true,
  });
};

export const deleteSessionCookie = () => {
  const sessionCookie = cookies().get("session")?.value;

  if (!sessionCookie) return;

  cookies().delete("session");

  return sessionCookie

};
