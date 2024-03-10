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
      <section className="from-celery-100/50 to-contessa-100/75 overflow-hidden bg-gradient-to-br ">
        <div className=" mx-auto max-w-screen-2xl ">
          <header className=" sticky inset-x-0 top-0">
            <nav className=" flex  items-center justify-between p-5 md:px-10">
              <Link href={"/"} className=" h-8 w-8 md:h-16 md:w-16">
                <Logo
                  textColor={"text-black"}
                  logoSrc={"/logo.svg"}
                  showText={true}
                />
              </Link>
              <ul className=" flex items-center justify-end gap-3 md:gap-6">
                <AuthButton
                  label={"Sign In"}
                  authType={"sign-in"}
                  className=" rounded-full border bg-slate-50 p-1 px-4 font-medium text-black ring-1 ring-slate-100 md:text-xl md:font-normal md:tracking-wide"
                />
                <AuthButton
                  label={"Join"}
                  authType={"sign-up"}
                  className=" bg-tradewind-900 ring-tradewind-400 rounded-full p-0.5 px-4 font-medium text-white ring-1 md:px-5 md:text-xl md:tracking-wide"
                />
              </ul>
            </nav>
          </header>

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:p-10 ">
            <div className=" text-center md:basis-3/5 md:text-left">
              <p className=" bg-contessa-50/40 text-contessa-700 my-6 inline-block rounded-full p-2 text-sm font-normal uppercase leading-3 shadow-sm md:p-4 md:text-lg md:tracking-wide">
                Online community for Nurses
              </p>
              <h1 className=" max-w-2xl pb-6 text-5xl font-bold text-slate-900 sm:text-7xl xl:tracking-wide  ">
                <span className=" w-fit whitespace-nowrap">
                  Connect, Learn{" "}
                </span>{" "}
                <br /> and <span className=" text-tradewind-900">Grow</span>{" "}
                with <span className=" text-tradewind-900">RNlinked</span>{" "}
              </h1>
              <p className="mx-auto max-w-md pb-8 leading-relaxed tracking-wide text-slate-800 md:mx-0 ">
                RNlinked is designed to connect you with colleagues and to
                opportunities.
              </p>
              <AuthButton
                label={"Get Started"}
                authType={"sign-up"}
                className=" bg-tradewind-900 ring-tradewind-400 rounded-full p-3 px-14 text-xl font-light tracking-wide text-white ring-1 "
              />
            </div>
            <div className=" grid max-w-lg grid-cols-2 gap-4 p-4 py-6 pb-20 sm:grid-flow-col sm:grid-rows-2 sm:pb-5 md:basis-2/5 ">
              <Image
                className="rounded-lg"
                src={"/assets/nrs-f.jpg"}
                width={500}
                height={500}
                content=""
                alt=""
              />
              <Image
                className="col-span-full hidden w-full rounded-lg sm:block"
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
        </div>
      </section>
      <section className=" py-12 sm:py-20 ">
        <div className=" mx-auto max-w-screen-xl">
          <p className=" bg-contessa-50/40 text-contessa-700 mx-4 mb-5 inline-block rounded-full p-2.5 text-sm uppercase leading-3 tracking-wide shadow-sm md:mx-14 md:mb-8 md:p-4 md:text-lg">
            WHY RNLINKED?
          </p>
          <figure className=" bg-dark-100/10 mx-5 flex items-start justify-between rounded-lg p-5 md:mx-14 md:gap-6 md:p-8 ">
            <Image
              className=" hidden rounded-lg md:block md:basis-1/5"
              alt=""
              width={300}
              height={300}
              content="cover"
              src={"/assets/nrs-grp-chat.jpeg"}
            />

            <figcaption className="  space-y-8 leading-relaxed tracking-wide sm:basis-2/3 ">
              <div className=" space-y-3">
                <h3 className=" -mb-2 text-3xl font-medium leading-normal tracking-wide">
                  The Power of Shared Knowledge
                </h3>
                <p>
                  Unlock the collective intelligence of the nursing community.
                  Nurses of all levels can engage in shared learning experiences
                  and contribute practical knowledge, insights and lessons.
                </p>
                <p className=" hidden sm:block">
                  RNlinked provides access to diverse perspectives and promotes
                  continuous learning that propels our community forward.
                </p>
              </div>
              <HorizontalRule className="" />
              <div>
                <h3 className=" text-3xl font-medium leading-snug tracking-wide">
                  A Haven for Networking and Collaboration
                </h3>
                <p>
                  Build professional relationships, share experiences, and work
                  on projects beyond traditional boundaries.
                </p>
              </div>
            </figcaption>
          </figure>
          <div className=" mx-5 flex flex-col items-center justify-between sm:mx-14 sm:flex-row sm:gap-8">
            <div className=" bg-contessa-200 relative my-4 flex basis-1/3 flex-col  items-center self-stretch overflow-hidden rounded-lg p-1 sm:my-8 ">
              <Image
                className=" absolute left-40 top-5 h-auto w-full opacity-20 "
                alt=""
                width={500}
                height={500}
                src={"/logo.svg"}
              />
              <div className=" h-full space-y-4 rounded-lg bg-white/50 p-4">
                <h3 className=" text-xl font-bold leading-tight tracking-wide">
                  Mentorship that lights the way
                </h3>
                <p>
                  Navigate your nursing career with the guidance of experienced
                  mentors on RNlinked.{" "}
                </p>
              </div>
            </div>
            <div className=" bg-tradewind-200 relative flex basis-1/3 flex-col items-center overflow-hidden rounded-lg p-1 sm:my-8  ">
              <Image
                className=" absolute -left-32 bottom-14 z-10 h-auto w-full opacity-20 "
                alt=""
                width={500}
                height={500}
                src={"/logo.svg"}
              />
              <div className=" space-y-4 rounded-lg bg-white/50 p-4 ">
                <h3 className=" z-20 text-xl font-bold leading-tight tracking-wide">
                  Personalized learning experience
                </h3>
                <p>
                  Discover a curated selection of educational resources,
                  courses, and materials to enhance your skills and knowledge.
                </p>
              </div>
            </div>
            <div className=" bg-celery-300 relative my-4 flex  basis-1/3 flex-col self-stretch overflow-hidden rounded-lg p-1 sm:my-8 ">
              <Image
                className=" absolute left-0 top-0 h-auto w-full opacity-20"
                alt=""
                width={500}
                height={500}
                src={"/logo.svg"}
              />

              <div className=" flex h-full items-start justify-start rounded-lg bg-white/50  ">
                <div className=" flex h-full flex-1 flex-col space-y-6 p-3">
                  <h3 className=" text-xl font-bold leading-tight tracking-wide  ">
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
      <section className=" bg-contessa-900 py-20 text-slate-50 md:py-60 ">
        <div className=" mx-auto flex max-w-screen-2xl flex-col-reverse items-center gap-16 px-5 md:flex-row md:px-10">
          <div className=" basis-3/5 space-y-4 text-lg leading-relaxed tracking-wide ">
            <h2 className=" text-4xl font-bold tracking-wide sm:text-5xl sm:leading-relaxed">
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
              support, and stay up-to-date on the latest nursing information and
              growth opportunities. In doing so, we aim to enhance patient care
              and healthcare services overall.
            </p>
          </div>
          <Image
            className=" w-full rounded-lg"
            alt=""
            width={500}
            height={500}
            src={"/assets/agency-nrs.jpeg"}
          />
        </div>
      </section>

      <section className=" flex justify-center overflow-scroll py-20">
        <div className=" flex items-center gap-12 px-10">
          <Image
            className=""
            alt=""
            width={300}
            height={300}
            src={"/assets/mseinnovation.jpg"}
          />
          <Image
            className=" pr-10"
            alt=""
            width={300}
            height={300}
            src={"/assets/first5ien.svg"}
          />
        </div>
      </section>

      <section className="px-5 py-12 pb-36 text-center ">
        <h2 className=" py-5 text-3xl font-bold text-slate-900 sm:leading-relaxed">
          We are on a community-building mission
        </h2>
        <p className=" pb-10 text-lg font-light text-slate-500">
          We&apos;re on a mission to provide nurses around the world with a
          community that feels like{" "}
          <span className=" text-tradewind-600 font-bold tracking-wider underline underline-offset-4">
            HOME
          </span>
        </p>
        <Link
          scroll={false}
          href={"/sign-up"}
          className=" bg-tradewind-900 ring-tradewind-400 rounded-full p-3 px-12 text-xl font-semibold tracking-wide text-white ring-1 sm:font-medium "
        >
          Get started for free
        </Link>
      </section>

      <footer className=" bg-dark-400 text-slate-200">
        <div className=" mx-auto  max-w-screen-2xl space-y-10 px-10 py-14 pb-28 ">
          <div className=" flex flex-col items-start justify-between gap-6 pb-16 md:flex-row">
            <div className=" flex gap-5 space-y-4 font-medium sm:block">
              <Logo
                textColor={`text-celery-50`}
                logoSrc={"/logo-white.svg"}
                showText={true}
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
                suggestion or recommendations? We&apos;d be happy to connect at{" "}
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
          <div className=" flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-24">
            <div className=" flex items-center gap-4 text-white">
              <X />
              <Insta />
              <Facebook />
              <Youtube />
              <Linkedin />
            </div>
            <p>Ⓒ RNLinked {year} | All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Welcome;
