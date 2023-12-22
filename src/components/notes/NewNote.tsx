"use client";
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";
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

const NewNote = () => {
  const { newNoteTogle, setNewNoteTogle } = useAppStates();
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const modalSize = "2xl";
  const modalPosition = isMobile ? "top" : "top";
  const extraClass = "hover:bg-slate-500/10 rounded-lg p-1";

  const [note, setNote] = useState<string>("");

  const { mutate: createNote } = useMutation({
    mutationFn: async () => {
      console.log("data");
      const payload: NewNotePayload = {
        note,
      };
      const { data } = await axios.post(`${api}/posts`, payload);
      return data;
    },
  });

  const noteForm = () => {
    return (
      <div className=" flex gap-4">
        <UserAvatar radius={"lg"} src={""} />
        <TextareaAutosize
          className=" bg-l50-d400 w-full flex-1 focus:outline-none"
          minRows={6}
          maxRows={10}
          maxLength={750}
          placeholder="Start a note..."
          autoFocus
          value={note}
          onChange={(e) => setNote(e.target.value)}
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
      isOpen={newNoteTogle}
      className="bg-l50-d400 ring-zinc-800 dark:ring-1 "
      onClose={() => setNewNoteTogle(false)}
    >
      <ModalContent>
        <ModalHeader className=" -mb-3 flex justify-start text-lg font-medium tracking-wide ">
          New Note
        </ModalHeader>
        <ModalBody>
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
              extraClass="bg-tradewind-900/80 rounded-md text-white font-medium px-4 pt-1 "
              label="Post"
            />
          </footer>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewNote;
