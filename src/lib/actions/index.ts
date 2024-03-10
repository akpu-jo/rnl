"use server";

import { api } from "@/constants";
interface Next {
  tags?: string[];
  revalidate?: number;
}

type RequestCache =
  | "default"
  | "force-cache"
  | "no-cache"
  | "no-store"
  | "only-if-cached"
  | "reload";

interface FetchConfig {
  method?: "GET" | "POST" | "PUT" | "PATCH";
  body?: object;
  next?: Next;
  cache?: RequestCache;
}
export const letsFetch = async (path: string, config?: FetchConfig) => {
  const res = await fetch(`${api}${path}`, {
    method: config ? config.method : "GET",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    ...(config?.body && { body: JSON.stringify(config.body) }),
    next: { tags: config?.next?.tags, revalidate: config?.next?.revalidate },
    cache: config?.cache,
  });

  const data = await res.json();
  //  console.log(data, 'data @letsFetch :17')
  return { data, res };
};
