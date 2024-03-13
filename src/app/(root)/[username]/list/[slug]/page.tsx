import LeftNavContent from "@/components/shared/navs/topnavs/LeftNavContent";
import TopBar from "@/components/shared/navs/topnavs/TopBar";

import React from "react";
import BookmarkList from "../BookmarkList";
import { List } from "@/types";
import { fetchList } from "@/lib/actions/listActions";

const ListPage = async ({ params }: { params: { slug: string } }) => {
  const listName = decodeURIComponent(params.slug.split("-")[0]);
  const listId = params.slug.split("-")[1];

  const { list }: { list: List } = await fetchList(listId);
  console.log(params);

  return (
    <div className=" ">
      <TopBar
        left={<LeftNavContent pageContext={listName} />}
        // right={<AppSettings profileUser={user}  />}
      />
      <BookmarkList list={list} />
    </div>
  );
};

export default ListPage;
