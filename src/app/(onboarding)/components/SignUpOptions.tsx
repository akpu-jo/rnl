"use client";
import {
  DoubleChevronLeftIcon,
  GoogleIcon,
  LockIcon,
  MailIcon,
  TwitterIcon,
  UserIcon,
} from "@/components/shared/icons/Icons";
import RecButton from "@/components/ui/buttons/RecButton";
import Input from "@/components/ui/inputs/Input";
import { google, twitter } from "@/lib/auth/firebase/init";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

import { AuthProvider as AuthProviderProp } from "firebase/auth";
import { signinWithProvider, signup } from "@/lib/auth/clientAuth";
import { useAuth } from "@/contexts/AuthContext";
import { defaultForwardUrl } from "@/routes";

const SignUpOptions = () => {
  const { setSessionUser, setAuthFlowStates, authFlowStates } = useAuth();
  const router = useRouter();

  const queryParams = useSearchParams();
  const forwardRoute = queryParams.get("forward") || defaultForwardUrl;

  const [showOptions, setShowOptions] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = userData;

  const handleAuthWithProvider = async (provider: AuthProviderProp) => {
    const user = await signinWithProvider(provider);
    console.log(user);
    setSessionUser(user);
    setAuthFlowStates({ ...authFlowStates, openAuthModal: false });
    router.push(forwardRoute);
  };

  const handleSignupWithEmail = async (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    signup(e, email, password, name);
    setAuthFlowStates({ ...authFlowStates, openAuthModal: false });
    router.push(forwardRoute);
  };

  const showSignupWithEmail = () => {
    setShowOptions(false);
    setShowForm(true);
  };

  const showSignupOptions = () => {
    setShowForm(false);
    setShowOptions(true);
  };

  const heading = "Join RNLinked.";
  const options = () => {
    return (
      <>
        <div className="space-y-3 md:mx-10">
          <RecButton
            action={() => handleAuthWithProvider(google)}
            label={`Sign up with Google`}
            icon={<GoogleIcon />}
            btnType={undefined}
            disabled={false}
            bg={""}
            // textColor={"text-l7-d9"}
          />
          <RecButton
            action={() => handleAuthWithProvider(twitter)}
            label={`Sign up with Twitter`}
            icon={<TwitterIcon />}
            btnType={undefined}
            disabled={false}
            bg={""}
            // textColor={"text-l7-d9"}
          />
          <div className="flex w-full items-center gap-2">
            <hr className=" flex-1 dark:border-slate-600" />
            <p className="">or</p>
            <hr className=" flex-1 dark:border-slate-600" />
          </div>
          <RecButton
            action={showSignupWithEmail}
            label={`Continue with Email`}
            icon={<MailIcon fill="currentColor" dec={""} />}
            btnType={undefined}
            disabled={false}
            bg={""}
            // textColor={"text-l7-d9"}
          />
        </div>

        <div className="text-l7-d3 py-5 text-center tracking-wide">
          <span>Already have an account </span>

          <button
            onClick={() => router.replace("/sign-in", { scroll: false })}
            className=" text-tradewind-600 text-lg font-semibold tracking-wide sm:text-base"
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
          //   method="post"
          className="flex w-full max-w-xs flex-col gap-1  "
        >
          <Input
            type={"name"}
            placeholder={"Fullname"}
            icon={<UserIcon />}
            value={name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <Input
            type={"email"}
            placeholder={"Email"}
            icon={<MailIcon fill={"currentColor"} />}
            value={email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <Input
            type={"password"}
            placeholder={"Password"}
            icon={<LockIcon />}
            value={password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <RecButton
            btnType={"submit"}
            action={(e) => handleSignupWithEmail(e)}
            label={"Next"}
            bg={"bg-tradewind-900/80 font-semibold tracking-wider"}
          />
          <button
            onClick={showSignupOptions}
            className=" text-tradewind-700 my-10 flex w-full items-center justify-center gap-2 text-sm tracking-wide"
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
