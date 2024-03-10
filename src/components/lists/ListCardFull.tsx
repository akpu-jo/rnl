import { List } from "@/types";
import React from "react";
import { VerticalDotsIcon } from "../shared/icons/Icons";
import { LockIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const ListCardFull = ({ list }: { list: List }) => {
  const router = useRouter();
  const bookmarkCount = list.bookmarks.length;
  const listOwner = typeof list.owner === "object" && list.owner.username;

  return (
    <div
      // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
      className={` flex-btw "bg-white-d700 dark-border dark:bg-slate-700/40" cursor-pointer
  rounded-lg border p-5 hover:bg-opacity-60`}
      onClick={(e) =>
        router.push(`/${listOwner}/list/${list.name}-${list._id}`)
      }
    >
      <div className="">
        <div className=" flex-ctr gap-3">
          <h3 className="text-semibold text-2xl"> {list.name}</h3>
          {list.visibility === "private" && (
            <LockIcon className=" text-lz4-d5 h-5 w-5 sm:h-4 sm:w-4" />
          )}
        </div>
        <div className=" text-lz4-d5 mb-2 space-x-3 py-2 ">
          {bookmarkCount > 0 ? (
            <p>{`${bookmarkCount} ${
              bookmarkCount > 1 ? "bookmarks" : "bookmark"
            }`}</p>
          ) : (
            <p>No bookmarks</p>
          )}
        </div>
      </div>
      <VerticalDotsIcon className=" text-l5-d4 h-6 w-6 " />
    </div>
  );
};

export default ListCardFull;
