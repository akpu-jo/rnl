"use client";

import { useEffect } from "react";

const Overlay = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const toggleScroll = () => {
    document.querySelector("body")!.classList.toggle("noscroll", false);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    isOpen && body!.classList.add("noscroll");
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="z-4 dark:bg-dark-500/80 fixed inset-0 h-full w-full bg-neutral-50/90 "
      onClick={() => {
        setIsOpen(false);
        toggleScroll();
      }}
    />
  );
};

export default Overlay;
