"use client";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import React, { useState } from "react";
// import { BookmarkIcon } from "../shared/icons/Icons";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "react-responsive";
import { BookmarkIcon, PlusIcon } from "lucide-react";
import { useAppStates } from "@/contexts/AppStates";
import { addBookmark, createList, fetchLists } from "@/lib/actions/listActions";
import { toast } from "sonner";
import { List, User } from "@/types";
import { useAuth } from "@/contexts/AuthContext";

const ListCard = ({ noteId }: { noteId: string }) => {
  const { lists, setLists } = useAppStates();
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const [open, setOpen] = useState(false);
  const [showListForm, setShowListForm] = useState<boolean>(false);
  const { sessionUser }: { sessionUser: User } = useAuth();

  // const [bookmark, setBookmark] = useState<Bookmark | null>(null);

  const BookmarkLists = () => {
    const CreateListForm = () => {
      const [formValue, setFormValue] = useState({
        name: "",
        pending: false,
      });

      const { name, pending } = formValue;
      const handleCreateList = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        name: string
      ) => {
        e.preventDefault();
        const data = await createList(name, sessionUser._id);
        const { success, list, message } = data;
        if (success) {
          setLists((lists) => [...lists, ...[list]]);
          toast.success(message);
          setShowListForm(false);
        } else {
          toast.error(message);
        }
      };

      return (
        <form suppressHydrationWarning className=" mx-4 space-y-6 p-2 py-4 text-xl font-light ">
          {!isMobile && <h2 className=" text-xl">Create new list</h2>}
          <input
            required
            name="name"
            type="text"
            value={name}
            onChange={(e) =>
              setFormValue({ ...formValue, name: e.target.value })
            }
            placeholder="List name"
            className=" w-full border-b focus:border-b-2 focus:outline-none"
          />
          <div className=" flex-ctr-end gap-4 ">
            <button
              onClick={() => setShowListForm(false)}
              type="button"
              className=" rounded-full border px-4 py-1 font-medium dark:border-slate-600"
            >
              Cancel
            </button>
            <button
              aria-disabled={pending}
              disabled={pending}
              onClick={(e) => handleCreateList(e, name)}
              type="submit"
              className={` ${
                pending
                  ? "bg-tradewind-900/50 cursor-not-allowed"
                  : "bg-tradewind-900"
              } rounded-full border px-4 py-1 font-medium text-white dark:border-slate-600`}
            >
              Create
            </button>
          </div>
        </form>
      );
    };

    const ListsForm = () => {
      const handleBookmark = async (listId: string) => {
        addBookmark(noteId, "Note", listId);
        const data = await fetchLists(sessionUser._id);
        console.log(data);
        if (data.success) {
          setLists(data.lists);
        }
      };

      const ListTogle = ({ list }: { list: List }) => {
        const checkBookmark = list.bookmarks.find(
          (bookmark) => bookmark.contentId === noteId
        );
        const isSaved = checkBookmark !== undefined;
        // console.log(list.bookmarks[0].contentId, checkBookmark, noteId);

        return (
          <div
            key={list._id}
            className={` ${
              isMobile
                ? "active:bg-dark-50/5 p-2.5 px-6 "
                : "hover:bg-dark-50/5 dark:hover:bg-celery-50/5 p-2 px-4 "
            } `}
          >
            <label className="  flex-ctr-btw gap-2 ">
              <span className="checkbox bounce flex gap-2 ">
                <input
                  type={"checkbox"}
                  checked={isSaved}
                  onChange={() => handleBookmark(list._id)}
                />
                <svg viewBox="0 0 21 21">
                  <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                </svg>
                <p>{list.name}</p>
              </span>
              {/* {list.visibility === "private" && (
                      <LockIcon className="h-5 w-5 sm:h-4 sm:w-4" />
                    )} */}
            </label>
          </div>
        );
      };

      return (
        <>
          <form
            className={` whitespace-nowrap rounded-md ${
              !isMobile && " pr-12"
            }  py-3 text-xl font-light`}
          >
            {/* <JsonData data={lists} /> */}
            {lists &&
              lists.length > 0 &&
              lists.map((list) => <ListTogle list={list} key={list._id} />)}
          </form>
          <div
            className={`  hover:bg-dark-50/5 dark:hover:bg-celery-50/5 -mx-4 -mb-4 mt-3 gap-2 ${
              isMobile && "hidden"
            } whitespace-nowrap rounded-md border-t p-3 px-8 text-xl font-light `}
          >
            <button onClick={() => setShowListForm(true)}>
              Create new list
            </button>
          </div>
        </>
      );
    };

    return (
      <div className="">
        {showListForm ? <CreateListForm /> : <ListsForm />}
      </div>
    );
  };

  const ListCardDropDown = () => {
    return (
      <>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger>
            <ListTrigger />
          </PopoverTrigger>
          <PopoverContent
            className=" bg-white-d700 dark:bg-dark-400 border-2 dark:border-slate-800"
            align="center"
            sideOffset={7}
          >
            {" "}
            <BookmarkLists />{" "}
          </PopoverContent>
        </Popover>
      </>
    );
  };

  const ListCardDrawer = () => {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <ListTrigger />
        </DrawerTrigger>
        <DrawerContent className="">
          <DrawerHeader className="-my-4 flex items-center justify-between px-6 text-lg">
            {showListForm ? (
              <h2 className=" text-xl">Create new list</h2>
            ) : (
              <button
                onClick={() => {
                  setShowListForm(true);
                }}
                className=" text-tradewind-900 inline-flex font-semibold "
              >
                <PlusIcon />
                Create new list
              </button>
            )}
            {!showListForm && (
              <DrawerClose>
                <button className=" inline-flex rounded-full border px-3 py-1 dark:border-slate-600">
                  Done
                </button>
              </DrawerClose>
            )}
          </DrawerHeader>
          <BookmarkLists />
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    );
  };

  const ListTrigger = () => {
    const bookmarks = lists.map((list) => {
      return list.bookmarks.map((bookmark) => bookmark.contentId);
    });

    const isBookmarked = bookmarks.flat().includes(noteId);
    return <BookmarkIcon fill={` ${isBookmarked ? "currentColor" : "none"}`} />;
  };

  if (isMobile) return <ListCardDrawer />;

  return <ListCardDropDown />;
};

export default ListCard;
