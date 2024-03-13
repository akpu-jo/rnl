import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { ShareIcon } from "../shared/icons/Icons";
import { toast } from "sonner";
import { Share2Icon } from "lucide-react";

const NoteShare = ({ copiedNoteLink }: { copiedNoteLink: string }) => {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${copiedNoteLink}`);
      toast("Link copied to clipboard");
    } catch (error) {
      toast("Error copying to clipboard!");
    }
  };
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Share2Icon />
        </PopoverTrigger>
        <PopoverContent
          className=" bg-white-d700 dark:bg-dark-400 border-2 dark:border-slate-800"
          align="center"
          sideOffset={7}
        >
          <div
            onClick={() => handleCopyToClipboard()}
            className="flex-ctr hover:bg-dark-50/5 dark:hover:bg-celery-50/5 -m-4 gap-2 whitespace-nowrap rounded-md p-3 px-8 text-xl font-light"
          >
            Copy link
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default NoteShare;
