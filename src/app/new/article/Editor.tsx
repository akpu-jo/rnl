"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import  EditorLink from '@tiptap/extension-link'
import TextareaAutosize from "react-textarea-autosize";

import React from "react";
import EditorToolbar from "./EditorToolbar";
import { AddImageIcon } from "@/components/shared/icons/Icons";
import LoadingState from "@/components/ui/LoadingState";

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit.configure({
        heading: {
            levels: [1,2]
        }
    }), EditorLink.configure({
        protocols: ['ftp', 'mailto']
    })],
    content: "<p>Hello World! 🌎️</p>",
  });

  const uploading = false;
  return (
    <div className=" pb-28">
      <EditorToolbar editor={editor} />

      <div className=" flex-ctr my-5 ">
        <div className="bg-dark-50/5 inline-block rounded-full border-slate-400 p-2 px-3">
          {uploading ? (
            <div>
              <LoadingState size="sm" />
            </div>
          ) : (
            <label className="flex cursor-pointer items-center justify-center">
              <input
                className="h-0 w-0 opacity-0"
                type="file"
                //   onChange={uploadImage}
                accept="image/*"
              />
              <span
                title="Upload featured Image"
                className="cursor-pointer pr-2 text-xl "
              >
                <AddImageIcon />
              </span>
              Add cover photo
            </label>
          )}
        </div>
      </div>
      <TextareaAutosize
        className="  bg-white-d400 w-full text-4xl font-bold leading-normal focus:outline-none "
        maxRows={5}
        maxLength={150}
        placeholder="Title"
        autoFocus
        // value={title}
        onChange={(e) => {
          //   setTitle(e.target.value);
          //   localStorage.setItem("title", JSON.stringify(e.target.value));
        }}
      />
      <EditorContent editor={editor} className=" focus:outline-none" />
    </div>
  );
};

export default Editor;
