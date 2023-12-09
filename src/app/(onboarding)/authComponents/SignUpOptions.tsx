'use client'
import {
  DoubleChevronLeftIcon,
  GoogleIcon,
  LockIcon,
  MailIcon,
  TwitterIcon,
  UserIcon,
} from "@/components/shared/icons/Icons";
import HorizontalRule from "@/components/ui/HorizontalRule";
import RecButton from "@/components/ui/buttons/RecButton";
import Input from "@/components/ui/inputs/Input";
import { useAuth } from "@/context/AuthContext";
import { google, twitter } from "@/lib/firebase/init";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUpOptions = () => {
  const { signinWithProvider } = useAuth();
  const router = useRouter();


  const [showOptions, setShowOptions] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const showSignupWithEmail = () => {
    setShowOptions(false);
    setShowForm(true);
  };

  const showSignupOptions = () => {
    setShowForm(false);
    setShowOptions(true);
  };

  const heading = 'Join RNLinked.'
  const options = () => {
    return (
      <>
        <div className=" mx-10 flex flex-col gap-2">
          <RecButton
            action={() => signinWithProvider(google)}
            label={`Sign up with Google`}
            icon={<GoogleIcon />}
            btnType={undefined}
            disabled={false}
            bg={""}
            textColor={"text-l7-d9"}
          />
          <RecButton
            action={() => signinWithProvider(twitter)}
            label={`Sign up with Twitter`}
            icon={<TwitterIcon />}
            btnType={undefined}
            disabled={false}
            bg={""}
            textColor={"text-l7-d9"}
          />
          <div className=" flex w-full items-center gap-2">
            <HorizontalRule className=" w-full border-slate-300/20" />
            <p>or</p>
            <HorizontalRule className=" w-full border-slate-300/20" />
          </div>
          <RecButton
            action={showSignupWithEmail}
            label={`Continue with Email`}
            icon={<MailIcon fill="currentColor" dec={""} />}
            btnType={undefined}
            disabled={false}
            bg={""}
            textColor={"text-l7-d9"}
          />
        </div>

        <div className="text-l7-d3 py-5 text-center tracking-wide">
          <span>Already have an account</span>
       
          <button
            onClick={() => router.replace("/sign-in", {scroll: false})}
            className=" text-lg font-semibold tracking-wide text-tradewind-600 sm:text-base"
          >
            Sign in
          </button>
        </div>
      </>
    );
  };

  const signupWithEmail = () => {
    return (
      <>
        <form
          action=""
          //   method="post"
          className="flex w-full max-w-xs flex-col gap-1  "
        >
          <Input
            type={"name"}
            placeholder={"Fullname"}
            icon={<UserIcon />}
            value={undefined}
            onChange={undefined}
          />
          <Input
            type={"email"}
            placeholder={"Email"}
            icon={
              <MailIcon
                fill={"currentColor"}
                size={0}
                height={""}
                width={""}
                dec={""}
              />
            }
            value={undefined}
            onChange={undefined}
          />
          <Input
            type={"password"}
            placeholder={"Password"}
            icon={<LockIcon />}
            value={undefined}
            onChange={undefined}
          />
          <RecButton
            btnType={undefined}
            disabled={false}
            action={undefined}
            label={"Next"}
            icon={undefined}
            bg={"bg-tradewind-900/70 font-semibold tracking-wider"}
            textColor={""}
          />
          <button
            onClick={showSignupOptions}
            className=" my-10 flex w-full items-center justify-center gap-2 text-sm tracking-wide text-tradewind-700"
          >
            <DoubleChevronLeftIcon />
            Back to sign up options
          </button>
        </form>
      </>
    );
  };

  return (
    <div className=" flex flex-col items-center gap-10">
      <h2 className="text-3xl font-semibold  ">{heading}</h2>
      {showOptions && options()}
      {showForm && signupWithEmail()}
    </div>
  );
};

export default SignUpOptions;
