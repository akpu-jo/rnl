"use server";

import { api } from "@/constants";
import axios from "axios";

interface FetchNoteArgs {
  page: number;
  limit: number;
  userId?: string;
}

export const fetchNotes = async ({ page, limit, userId }: FetchNoteArgs) => {
  const queryStr = userId
    ? `page=${page}&limit=${limit}&userId=${userId}`
    : `page=${page}&limit=${limit}`;
  try {
    const { data } = await axios.get(`${api}/notes?${queryStr}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchNoteById = async (noteId: string) => {
  const { data } = await axios.get(`${api}/notes/${noteId}`);
  return data;
};

interface LikeHandlerArgs {
    noteId: string
    userId: string
}

export const likeHandler = async ({noteId, userId}: LikeHandlerArgs) => {
    try {
        
        const { data } = await axios.post(`${api}/notes/like`, {
            userId,
            noteId,
          });
          return data
    } catch (error) {
        return error
    }
}

