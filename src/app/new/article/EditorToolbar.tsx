import { Editor } from "@tiptap/react";
import React from "react";
import {
  Bold,
  Heading1,
  Heading2,
  Image as Img,
  Italic,
  Link,
  List,
  ListOrdered,
  Redo2,
  Strikethrough,
  Undo2,
} from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

interface EditorProps {
  editor: Editor | null;
}

// const toolbar = [
//   {
//     value: "heading1",
//     ariaLabel: "Toggle heading-one",
//     icon: <Heading1 className="h-4 w-4" />,
//   },
//   {
//     value: "heading2",
//     ariaLabel: "Toggle heading-two",
//     icon: <Heading2 className="h-4 w-4" />,
//   },
//   {
//     value: "bold",
//     ariaLabel: "Toggle bold",
//     icon: <Bold className="h-4 w-4" />,
//   },
//   {
//     value: "italic",
//     ariaLabel: "Toggle italic",
//     icon: <Italic className="h-4 w-4" />,
//   },
//   {
//     value: "underline",
//     ariaLabel: "Toggle underline",
//     icon: <Underline className="h-4 w-4" />,
//   },
//   {
//     value: "list",
//     ariaLabel: "Toggle unordered list",
//     icon: <List className="h-4 w-4" />,
//   },
//   {
//     value: "orderedList",
//     ariaLabel: "Toggle ordered-list",
//     icon: <ListOrdered className="h-4 w-4" />,
//   },
//   {
//     value: "quote",
//     ariaLabel: "Toggle quote",
//     icon: <Quote className="h-4 w-4" />,
//   },
//   {
//     value: "link",
//     ariaLabel: "Toggle link",
//     icon: <Link className="h-4 w-4" />,
//   },
//   {
//     value: "image",
//     ariaLabel: "add image",
//     icon: <Img className="h-4 w-4" />,
//   },
// ];
const EditorToolbar = ({ editor }: EditorProps) => {
  if (!editor) return null;

  return (
    <div className=" bg-white-d400 fixed inset-x-0 bottom-0 z-50 border-t p-5 py-2 dark:border-slate-600 sm:sticky sm:top-0 sm:border-b sm:border-t-0 ">
      <div className=" flex justify-center gap-1.5 ">
        <button
          onClick={() => editor.chain().focus().undo().run()}
          className={` mr-0.5  disabled:cursor-not-allowed disabled:text-slate-300 disabled:dark:text-slate-500`}
          disabled={!editor.can().undo()}
        >
          <Undo2 strokeWidth={1.5} />
        </button>
        <button
          className={` disabled:cursor-not-allowed disabled:text-slate-300 disabled:dark:text-slate-500`}
          disabled={!editor.can().redo()}
          onClick={() => editor.chain().focus().redo().run()}
        >
          <Redo2 strokeWidth={1.5} />
        </button>
        <div className=" mx-1 border-r dark:border-slate-600" />

        <Toggle
          pressed={editor.isActive("heading", { level: 1 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className=" data-[state=on]:bg-dark-50/20 min"
          aria-label="Toggle Heading-one"
        >
          <Heading1 className="h-4 w-4" />
        </Toggle>
        <Toggle
          pressed={editor.isActive("heading", { level: 2 })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className=" data-[state=on]:bg-dark-50/20 font-medium"
          aria-label="Toggle Heading-two"
        >
          <Heading2 className="h-4 w-4" />
        </Toggle>

        <div className=" mx-1 border-r dark:border-slate-600" />
        <Toggle
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
          className=" data-[state=on]:bg-dark-50/20"
          aria-label="Toggle bold"
        >
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          className=" data-[state=on]:bg-dark-50/20 min"
          aria-label="Toggle italic"
        >
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle
          pressed={editor.isActive("strike")}
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
          className=" data-[state=on]:bg-dark-50/20 min"
          aria-label="Toggle italic"
        >
          <Strikethrough className="h-4 w-4" />
        </Toggle>

        <div className=" mx-1 border-r dark:border-slate-600" />

        <Toggle
          pressed={editor.isActive("bulletList")}
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          className=" data-[state=on]:bg-dark-50/20 min"
          aria-label="Toggle unordered-list"
        >
          <List className="h-4 w-4" />
        </Toggle>
        <Toggle
          pressed={editor.isActive("orderedList")}
          onPressedChange={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
          className=" data-[state=on]:bg-dark-50/20 min"
          aria-label="Toggle ordered-list"
        >
          <ListOrdered className="h-4 w-4" />
        </Toggle>
        <div className=" mx-1 border-r dark:border-slate-600" />
        <Toggle
          pressed={editor.isActive("link")}
          onPressedChange={() =>
            editor.chain().focus().toggleLink({ href: "rnlinked.com" }).run()
          }
          className=" data-[state=on]:bg-dark-50/20"
          aria-label="add link"
        >
          <Link className="h-4 w-4" />
        </Toggle>
        <Toggle
          pressed={editor.isActive("orderedList")}
          onPressedChange={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
          className=" data-[state=on]:bg-dark-50/20"
          aria-label="Toggle ordered-list"
        >
          <Img className="h-4 w-4" />
        </Toggle>
      </div>
    </div>
  );
};

export default EditorToolbar;
