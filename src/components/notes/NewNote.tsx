"use client";
import React, { useState } from "react";
import { Modal, ModalContent, ModalBody } from "@nextui-org/modal";
import { useAppStates } from "@/contexts/AppStates";
import { useMediaQuery } from "react-responsive";
import TextareaAutosize from "react-textarea-autosize";
import UserAvatar from "../shared/UserAvatar";
import ButtonWithIcon from "../ui/buttons/Button";
import { AddImageIcon, SmileyIcon } from "../shared/icons/Icons";
import { useMutation } from "@tanstack/react-query";
// import data from '@emoji-mart/data'
// import Picker from '@emoji-mart/react'
import axios from "axios";
import { NewNotePayload } from "@/lib/validators/note";
import { api } from "@/constants";
import { useAuth } from "@/contexts/AuthContext";
import { ReplyIcon } from "lucide-react";

const NewNote = () => {
  const { sessionUser } = useAuth();
  const { newNoteTogle, setNewNoteTogle } = useAppStates();
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const modalSize = "2xl";
  const modalPosition = isMobile ? "top" : "top";
  const extraClass = "hover:bg-slate-500/10 rounded-lg p-1";

  const [body, setBody] = useState<string>("");

  const { mutate: createNote } = useMutation({
    mutationFn: async () => {
      console.log("data");
      const payload: NewNotePayload = {
        body,
        author: sessionUser._id,
        parent:
          newNoteTogle.isReply && typeof newNoteTogle.note === "object"
            ? newNoteTogle.note?._id
            : undefined,
      };

      const { data } = await axios.post(`${api}/notes`, payload);
      console.log(data);
      return data;
    },
  });

  const InReply = () => {
    return (
      <>
        {newNoteTogle.isReply && (
          <p className=" flex items-center pb-2 text-base tracking-normal text-slate-500">
            <ReplyIcon className=" mr-1 h-5 w-5" />

            <span>
              In reply to{" "}
              {typeof newNoteTogle.note?.author === "object" &&
                newNoteTogle.note.author.name}
            </span>
          </p>
        )}
      </>
    );
  };
  const noteForm = () => {
    return (
      <div className=" flex gap-4">
        <UserAvatar radius={"lg"} src={sessionUser && sessionUser.image} />
        <TextareaAutosize
          className=" bg-l50-d400 w-full flex-1 focus:outline-none"
          minRows={6}
          maxRows={10}
          maxLength={750}
          placeholder="Start a note..."
          autoFocus
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
    );
  };

  return (
    <Modal
      radius="sm"
      size={modalSize}
      placement={modalPosition}
      scrollBehavior="inside"
      isOpen={newNoteTogle.open}
      className="bg-l50-d400 py-6 ring-zinc-800  dark:ring-1"
      onClose={() =>
        setNewNoteTogle({ open: false, note: null, isReply: false })
      }
    >
      <ModalContent>
        <ModalBody>
          <InReply />
          {noteForm()}

          <footer className="flex-ctr-btw">
            <div className="flex-ctr gap-2">
              <ButtonWithIcon
                extraClass=" hover:bg-slate-500/10 rounded-lg p-1"
                icon={<AddImageIcon />}
              />
              <ButtonWithIcon icon={<SmileyIcon />} extraClass={extraClass} />
            </div>
            {/* <Picker data={data} onEmojiSelect={console.log} /> */}
            <ButtonWithIcon
              action={() => createNote()}
              extraClass="bg-tradewind-900 rounded-md text-white font-medium px-4 pt-1 "
              label="Post"
            />
          </footer>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewNote;
