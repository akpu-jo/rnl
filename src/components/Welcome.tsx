import Link from "next/link";
import React from "react";
import Logo from "./shared/navs/Logo";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Youtube from "./shared/socials/Youtube";
import Insta from "./shared/socials/Insta";
import Linkedin from "./shared/socials/Linkedin";
import Facebook from "./shared/socials/Facebook";
import ListLink from "./shared/ListLink";
import X from "./shared/socials/X";

import HorizontalRule from "./ui/HorizontalRule";
import AuthButton from "@/app/(onboarding)/components/AuthButton";

const Welcome = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <main className=" font-trap mx-auto">
        <section className="from-celery-100/50 to-contessa-100/75 bg-gradient-to-br ">
          <header className=" sticky">
            <nav className=" mx-auto flex max-w-screen-2xl items-center justify-between px-10 py-5">
              <Link href={"/"}>
                <Logo textColor={""} logoSrc={"/logo.svg"} showText={true} />
              </Link>
              <ul className=" flex items-center justify-end gap-6">
                <AuthButton
                  label={"Sign In"}
                  authType={"sign-in"}
                  className="rounded-sm bg-slate-50 p-2 px-3 text-xl font-light tracking-wider ring-1 ring-slate-100"
                />
                <AuthButton
                  label={"Get started"}
                  authType={"sign-in"}
                  className=" bg-tradewind-900 ring-tradewind-400 rounded-sm p-2 px-5 text-xl font-light tracking-wide text-white ring-1"
                />
              </ul>
            </nav>
          </header>

          <div className=" mx-auto flex max-w-screen-2xl items-center justify-between gap-4 p-10 ">
            <div className=" basis-3/5">
              <p className=" bg-contessa-50/40 text-contessa-700 mb-6 inline-block rounded-full p-4 text-lg font-normal uppercase leading-3 tracking-wide shadow-sm">
                Online community for Nurses
              </p>
              <h1 className=" max-w-2xl pb-6 text-7xl font-bold text-slate-900 xl:tracking-wide  ">
                Connect, Learn and{" "}
                <span className=" text-tradewind-900">Grow</span> with{" "}
                <span className=" text-tradewind-900">RNlinked</span>{" "}
              </h1>
              <p className="max-w-md pb-8 font-light leading-relaxed tracking-wide text-slate-800 ">
                RNlinked is designed to connect you with colleagues and to
                opportunities.
              </p>
              <AuthButton
                label={"Get Started"}
                authType={"sign-up"}
                className=" bg-tradewind-900 ring-tradewind-400 rounded-sm p-3 px-14 text-xl font-light tracking-wide text-white ring-1 "
              />
            </div>
            <div className=" grid max-w-lg basis-2/5 grid-flow-col grid-cols-2 grid-rows-2 gap-4">
              <Image
                className="rounded-lg"
                src={"/assets/nrs-f.jpg"}
                width={500}
                height={500}
                content=""
                alt=""
              />
              <Image
                className="col-span-full w-full rounded-lg"
                src={"/assets/nurse-grp.png"}
                width={500}
                height={500}
                content="cover"
                alt=""
              />
              <Image
                className="rounded-lg"
                src={"/assets/male-nurse.jpeg"}
                width={500}
                height={500}
                content="cover"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="  py-20 ">
          <div className=" mx-auto max-w-screen-xl">
            <p className=" bg-contessa-50/40 text-contessa-700 mx-14 mb-8 inline-block rounded-full p-4 text-lg capitalize leading-3 tracking-wide shadow-sm">
              WHY RNLINKED?
            </p>
            <figure className=" bg-dark-100/10 mx-14 flex items-start justify-between gap-10 rounded-lg p-8 ">
              <Image
                className=" basis-1/5 rounded-lg"
                alt=""
                width={300}
                height={300}
                content="cover"
                src={"/assets/nrs-grp-chat.jpeg"}
              />

              <figcaption className=" basis-2/3 space-y-8 leading-relaxed tracking-wide">
                <div className=" space-y-3">
                  <h3 className=" -mb-2 text-3xl font-medium leading-normal tracking-wide">
                    The Power of Shared Knowledge
                  </h3>
                  <p>
                    Unlock the collective intelligence of the nursing community.
                    Nurses of all levels can engage in shared learning
                    experiences and contribute practical knowledge, insights and
                    lessons.
                  </p>
                  <p>
                    RNlinked provides access to diverse perspectives and
                    promotes continuous learning that propels our community
                    forward.
                  </p>
                </div>
                <HorizontalRule className="" />
                <div>
                  <h3 className=" text-3xl font-medium leading-snug tracking-wide">
                    A Haven for Networking and Collaboration
                  </h3>
                  <p>
                    Build professional relationships, share experiences, and
                    work on projects beyond traditional boundaries.
                  </p>
                </div>
              </figcaption>
            </figure>
            <div className=" mx-14 flex items-center justify-between gap-8">
              <div className=" bg-contessa-200 relative my-8 flex basis-1/3  flex-col items-center self-stretch overflow-hidden rounded-lg p-1 ">
                <Image
                  className=" absolute left-40 top-5 h-auto w-full opacity-20 "
                  alt=""
                  width={500}
                  height={500}
                  src={"/logo.svg"}
                />
                <div className=" h-full space-y-4 rounded-lg bg-white/50 p-4">
                  <h3 className=" text-2xl font-medium leading-snug tracking-wide">
                    Mentorship that lights the way
                  </h3>
                  <p>
                    Navigate your nursing career with the guidance of
                    experienced mentors on RNlinked.{" "}
                  </p>
                </div>
              </div>
              <div className=" bg-tradewind-200 relative my-8 flex basis-1/3 flex-col items-center overflow-hidden rounded-lg p-1  ">
                <Image
                  className=" absolute -left-32 bottom-14 z-10 h-auto w-full opacity-20 "
                  alt=""
                  width={500}
                  height={500}
                  src={"/logo.svg"}
                />
                <div className=" space-y-4 rounded-lg bg-white/50 p-4 ">
                  <h3 className=" z-20 text-2xl font-medium leading-snug tracking-wide">
                    Personalized learning experience
                  </h3>
                  <p>
                    Discover a curated selection of educational resources,
                    courses, and materials to enhance your skills and knowledge.
                  </p>
                </div>
              </div>
              <div className=" bg-celery-300 relative my-8  flex basis-1/3 flex-col self-stretch overflow-hidden rounded-lg p-1 ">
                <Image
                  className=" absolute left-0 top-0 h-auto w-full opacity-20"
                  alt=""
                  width={500}
                  height={500}
                  src={"/logo.svg"}
                />

                <div className=" flex h-full items-start justify-start rounded-lg bg-white/50  ">
                  <div className=" flex h-full flex-1 flex-col justify-center space-y-6 p-3">
                    <h3 className=" text-2xl font-medium leading-snug tracking-wide  ">
                      Endless opportunities
                    </h3>
                    <p className=" text-slate-950">
                      Discover job opportunities, learn best practices, and
                      collaborate on research projects with your network.
                    </p>
                  </div>
                  <AuthButton
                    label={
                      <ArrowUpRightIcon className=" h-10 w-10 rounded-full border border-slate-900 p-2" />
                    }
                    authType={"sign-up"}
                    className="z-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" bg-contessa-500 py-60 text-slate-50 ">
          <div className=" mx-auto flex max-w-screen-2xl items-center gap-16 px-10">
            <div className=" basis-3/5 space-y-4 text-lg font-light leading-relaxed tracking-wide">
              <h2 className=" text-5xl font-bold leading-relaxed tracking-wide">
                Our Commitment
              </h2>
              <p>
                At RNLinked, we envision a world where nurses can enjoy a more
                balanced work and personal life, while being surrounded by a
                supportive community.
              </p>
              <p>
                Our goal is to empower nurses with the necessary tools and
                resources they need to build a strong knowledge-sharing and
                collaborative network among colleagues, access mentorship and
                support, and stay up-to-date on the latest nursing information
                and growth opportunities. In doing so, we aim to enhance patient
                care and healthcare services overall.
              </p>
            </div>
            <Image
              className=" w-full basis-2/5"
              alt=""
              width={500}
              height={500}
              src={"/assets/agency-nrs.jpeg"}
            />
          </div>
        </section>

        <section className=" flex items-center justify-center gap-16 py-20">
          <Image
            className=""
            alt=""
            width={300}
            height={300}
            src={"/assets/mseinnovation.jpg"}
          />
          <Image
            className=""
            alt=""
            width={300}
            height={300}
            src={"/assets/first5ien.svg"}
          />
        </section>

        <section className="py-12 pb-36 text-center ">
          <h2 className=" text-4xl font-semibold leading-relaxed text-slate-900">
            We are on a community-building mission
          </h2>
          <p className=" flex items-center justify-center gap-1 pb-10 text-xl font-light text-slate-500">
            We&apos;re on a mission to provide nurses around the world with a
            community that feels like{" "}
            <span className=" text-tradewind-600 font-bold tracking-wider underline underline-offset-4">
              HOME
            </span>
          </p>
          <Link
            scroll={false}
            href={"/sign-up"}
            className=" bg-tradewind-900 ring-tradewind-400 rounded-sm p-3 px-12 text-xl font-light tracking-wide text-white ring-1 "
          >
            Get started for free
          </Link>
        </section>

        <footer className=" bg-dark-400 text-slate-200">
          <div className=" mx-auto  max-w-screen-2xl space-y-10 px-10 py-14 pb-28 ">
            <div className=" flex items-start justify-between pb-16">
              <div className=" space-y-4 font-medium">
                <Logo
                  textColor={`text-celery-50`}
                  logoSrc={"/logo-white.svg"}
                />
                <p>Online community for nurses</p>
              </div>

              <ul className=" space-y-2 font-medium ">
                <ListLink link={"#"} text={"Our Story"} />
                <ListLink link={"#"} text={"Community"} />
                <ListLink link={"#"} text={"Careers"} />
                <ListLink link={"#"} text={"Login"} />
              </ul>
              <ul className="  space-y-2 font-medium">
                <ListLink link={"#"} text={"Privacy Policy"} />
                <ListLink link={"#"} text={"Terms of service"} />
                <ListLink link={"#"} text={"Cookie Policy"} />
              </ul>
              <div className=" basis-1/2 ">
                <h3 className=" pb-2 text-3xl font-medium">Get in touch</h3>
                <p className="text-slate-400 ">
                  Do you have any questions? or Would you like to make a
                  suggestion or recommendations? We&apos;d be happy to connect
                  at{" "}
                  <Link
                    className=" hover:text-contessa-700 font-semibold underline underline-offset-4"
                    target="blank"
                    href={"mailto:info@rnlinked.com"}
                  >
                    info@rnlinked.com
                  </Link>{" "}
                </p>
              </div>
            </div>
            <hr className=" border border-slate-500" />
            <div className=" flex items-center justify-center gap-24">
              <div className=" flex items-center gap-4 text-white">
                <X />
                {/* <Twitter /> */}
                <Insta />
                <Facebook />
                <Youtube />
                <Linkedin />
              </div>
              <p>Ⓒ RNLinked {year} | All rights reserved</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Welcome;
