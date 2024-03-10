"use server";

import { revalidateTag } from "next/cache";
import { letsFetch } from ".";
// import { revalidateTag } from "next/cache";
import { toast } from "sonner";

export const createList = async (name: string, owner: string) => {
  try {
    const { data } = await letsFetch(`/lists`, {
      method: "POST",
      body: {
        name,
        owner,
      },
    });
    // revalidateTag("list");
    const { success, list } = data;

    if (data.success) {
      return {
        success,
        list,
      };
    } else {
      return {
        success,
        message: "Failed to create list!",
      };
    }
  } catch (error) {
    toast.error("Failed to create list!");
    return {
      success: false,
      message: "Failed to create list!",
    };
  }
};

export const fetchLists = async (sessionUserId: string) => {
  try {
    const { data } = await letsFetch(`/lists?userId=${sessionUserId}`, {
      next: { tags: ["list"] },
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchList = async (listId: string) => {
  try {
    const { data } = await letsFetch(`/lists/${listId}`, {
      next: { tags: ["list"] },
    });
    return data;
  } catch (error) {
    return error;
  }
};
export const addBookmark = async (
  contentId: string,
  contentType: "Note" | "Article" | "Capsule",
  listId: string
) => {
  try {
    const { data } = await letsFetch(`/lists/bookmarks`, {
      method: "PATCH",
      body: {
        contentId,
        contentType,
        listId,
      },
      next: { tags: ["bookmarks"] },
    });
    revalidateTag("list");
    return data;
  } catch (error) {
    return error;
  }
};

export const createBookmark = async (
  contentType: "Note" | "Article" | "Capsule",
  contentId: string,
  owner: string
) => {
  try {
    const { data } = await letsFetch(`/lists/bookmarks`, {
      method: "POST",
      body: {
        contentType,
        contentId,
        owner,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};
