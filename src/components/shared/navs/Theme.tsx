"use client";

import { useTheme } from "next-themes";
// import { useTheme } from '@/context/ThemeContext'
import React, { useEffect, useState } from "react";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tabs, Tab } from "@nextui-org/tabs";
import { DesktopIcon, MoonIcon, SunIcon } from "../icons/Icons";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // const {mode, setMode} = useTheme

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div>
      <h3 className=" pb-2 text-2xl font-medium">Appearance</h3>
      <Tabs selectedKey={theme} size="lg" radius="sm" variant="bordered">
        <Tab
          key={"light"}
          title={
            <div
              className=" flex items-center gap-2 text-lg font-medium"
              onClick={() => setTheme("light")}
            >
              <SunIcon />
              <span>Light</span>
            </div>
          }
        />
        <Tab
          key={"dark"}
          title={
            <div
              className=" flex items-center gap-2 text-lg font-medium"
              onClick={() => setTheme("dark")}
            >
              <MoonIcon />
              <span>Dark</span>
            </div>
          }
        />
        <Tab
          key={"system"}
          title={
            <div
              className=" flex items-center gap-2 text-lg font-medium"
              onClick={() => setTheme("system")}
            >
              <DesktopIcon />
              <span>System</span>
            </div>
          }
        />
      </Tabs>
    </div>
  );
};

export default Theme;
