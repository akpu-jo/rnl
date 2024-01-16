import NewNote from "@/components/notes/NewNote";
import LeftSideBar from "@/components/shared/navs/LeftSidebar";
import MobileNav from "@/components/shared/navs/MobileNav";
// import RightSidebar from "@/components/shared/navs/RightSidebar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white-d400">
      <main className=" relative mx-auto  flex max-w-7xl flex-row px-2 sm:px-5 ">
        <LeftSideBar />
        <section className="main-container  ">
          {children}
        </section>
        {/* <RightSidebar /> */}
      </main>
      <NewNote />
      <MobileNav />
    </div>
  );
}
