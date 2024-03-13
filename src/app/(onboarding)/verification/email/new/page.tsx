"use client";

import Logo from "@/components/shared/navs/Logo";
import { useAuth } from "@/contexts/AuthContext";
// import { auth } from "@/lib/auth/firebase/init";
// import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
// import { verifyEmail } from "@/lib/auth/clientAuth";
import Image from "next/image";
import Link from "next/link";
// import React, { useEffect } from "react";

const VerifyEmailRequest = () => {
  const { sessionUser } = useAuth();

  // useEffect(() => {
  //   const verifyEmail = onAuthStateChanged(auth, (session) => {
  //     console.log(session);
  //     if (session !== null) {
  //       sendEmailVerification(session).catch((error) => console.log(error));
  //     }
  //   });

  //   return () => verifyEmail();
  // }, []);

  return (
    <div className="mx-auto max-w-xl ">
      <div className="my-8 flex justify-center ">
        <Link href={`/`} className="">
          <Logo />
        </Link>
      </div>
      <div className="bg-white-d700 text-cente mx-3 space-y-6 rounded-lg border p-8 dark:border-slate-600 dark:bg-slate-700/40">
        <Image
          alt="email sent picture"
          src={"/assets/emails/mailSent.svg"}
          height={100}
          width={100}
          className=""
        />
        <h2>Verification email sent!</h2>
        <section>
          <p className=" text-l7-d3 font-medium tracking-wide">
            We have sent a confirmation link to{" "}
            <span className=" font-bold">{sessionUser?.email}.</span> <br />{" "}
            Check your email and click the link to activate your account.
          </p>
        </section>

        <section className="pb-4">
          <h3 className=" text-lg font-semibold ">
            Didn&apos;t get a confirmation email?
          </h3>
          <p>
            Check your spam folder or click{" "}
            <span className=" text-tradewind-900 font-bold ">
              {" "}
              here to Resend Mail
            </span>{" "}
          </p>
        </section>
      </div>
    </div>
  );
};

export default VerifyEmailRequest;
