import Image from "next/image";
import React from "react";

const EmailVerification = () => {
  return (
    <div className=" mx-10 flex max-w-xs flex-col items-center gap-5 text-center">
      <Image
        alt="email sent picture"
        src={"assets/emails/mailSent.svg"}
        height={100}
        width={100}
        className=""
      />
      <p className=" text-l7-d3 my-10 py-5 pb-2 text-center font-medium tracking-wide">
        Check your email and click the link to activate your account.
      </p>

      {/* TODO: set a timer for resending email */}
      {/* <RecButton
        text={"Resend Email"}
        bg={"bg-elm-900 font-semibold"}
        color={"text-slate-50"}
        action={verifyEmail}
      /> */}
    </div>
  );
};

export default EmailVerification;
