"use server";

import { api } from "@/constants";
import axios from "axios";

export const fetchUser = async (username: string) => {
  try {
    const { data } = await axios.get(`${api}/users/username/${username}`);
    return data;
  } catch (error) {
    return error;
  }
};

interface valuesProps {
  name: string;
  username: string;
  bio: string;
}
export const updateUserProfile = async (uid: string, values: valuesProps) => {
  try {
    if (!uid) return "user Id not provided!";
    const { data } = await axios.patch(`${api}/users/${uid}`, {
      values,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchFollowers = async (username: string) => {
  try {
    const { data } = await axios.get(
      `${api}/users/followers?username=${username}`
    );
    return data;
  } catch (error) {
    return null;
  }
};

export const fetchFollowing = async (username: string) => {
  try {
    const { data } = await axios.get(
      `${api}/users/following?username=${username}`,
    );
    return data;
  } catch (error) {
    return null;
  }
};

export const follow = async (sessionUserId: string, profileUserId: string) => {
    try {
        const { data } = await axios.post(`${api}/users/follow?id=${profileUserId}`, {
            sessionUserId,
          });
        return data
    } catch (error) {
        return null
    }
}