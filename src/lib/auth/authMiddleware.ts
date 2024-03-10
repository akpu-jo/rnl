"use server";

// This file include all middleware authentication functions
// Firebase admin cannot be imported here as it will not work with Edge runtime

import { api } from "@/constants";
import { getSession } from "./sessionCookie";


export const isUserAuthenticated = async () => {
  const sessionCookie = await getSession();
  if (!sessionCookie) return false;

  try {
    const res = await fetch(`${api}/auth`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ session: sessionCookie }),
    })

    const data = await res.json()

    return data;
  } catch (error) {
    console.log('isUserAuthenticated==>', error);
    return false;
  }
};
