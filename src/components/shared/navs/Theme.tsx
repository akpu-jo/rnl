"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { DesktopIcon, MoonIcon, SunIcon } from "../icons/Icons";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  
  const modes = [
    {
      mode: "light",
      icon: <SunIcon />,
    },
    {
      mode: "dark",
      icon: <MoonIcon />,
    },
    {
      mode: "system",
      icon: <DesktopIcon />,
    },
  ];
  return (
    <>
      <h3 className=" px-2 pb-2 text-xl font-light">Appearance</h3>
      <div suppressHydrationWarning className="  flex items-center justify-start gap-[1px] ">
        {modes.map((m) => (
          <button
            key={m.mode}
            className={` flex flex-nowrap items-center gap-1 capitalize ${
              theme === m.mode
                ? " bg-tradewind-500"
                : "dark:bg-dark-400/40 bg-zinc-100 "
            } flex-1 p-2 first:rounded-l-lg last:rounded-r-lg`}
            onClick={() => setTheme(m.mode)}
          >
            {m.icon}
            {m.mode}
          </button>
        ))}
      </div>
    </>
  );
};

export default Theme;
