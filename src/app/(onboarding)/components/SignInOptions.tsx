"use client";
import {
  DoubleChevronLeftIcon,
  GoogleIcon,
  LockIcon,
  MailIcon,
  TwitterIcon,
} from "@/components/shared/icons/Icons";
import RecButton from "@/components/ui/buttons/RecButton";
import Input from "@/components/ui/inputs/Input";
import { useAuth } from "@/contexts/AuthContext";
import { google, twitter } from "@/lib/auth/firebase/init";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { signin, signinWithProvider } from "@/lib/auth/clientAuth";

import { AuthProvider as AuthProviderProp } from "firebase/auth";
import { defaultForwardUrl } from "@/routes";

const SignInOptions = () => {
  const { setSessionUser, setAuthFlowStates, authFlowStates } = useAuth();

  const router = useRouter();
  const queryParams = useSearchParams();

  const forwardRoute = queryParams.get("forward") || defaultForwardUrl;

  const [showOptions, setShowOptions] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;

  const handleAuthWithProvider = async (provider: AuthProviderProp) => {
    const user = await signinWithProvider(provider);
    console.log(user);
    setSessionUser(user);
    setAuthFlowStates({ ...authFlowStates, openAuthModal: false });
    router.push(forwardRoute);
  };

  const handleSigninWithEmail = async (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    signin(e, email, password);
    setAuthFlowStates({ ...authFlowStates, openAuthModal: false });
    router.push(forwardRoute);
  };

  const showSigninWithEmail = () => {
    setShowOptions(false);
    setShowForm(true);
  };

  const showSigninOptions = () => {
    setShowForm(false);
    setShowOptions(true);
  };

  const heading = "Welcome back.";
  const options = () => {
    return (
      <>
        <div className=" space-y-3 md:mx-10">
          <RecButton
            action={() => handleAuthWithProvider(google)}
            label={`Sign in with Google`}
            icon={<GoogleIcon />}
            btnType={undefined}
            disabled={false}
            bg={""}
            // textColor={"text-l7-d9"}
          />
          <RecButton
            action={() => handleAuthWithProvider(twitter)}
            label={`Sign in with Twitter`}
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
            action={showSigninWithEmail}
            label={`Continue with Email`}
            icon={<MailIcon fill="currentColor" />}
            btnType={undefined}
            disabled={false}
            bg={""}
            // textColor={"text-l7-d9"}
          />
        </div>

        <div className="text-l7-d3 py-5 text-center tracking-wide">
          <span>Don&apos;t have an account?</span>
          <button
            onClick={() => router.replace("/sign-up", { scroll: false })}
            className=" text-tradewind-600 text-lg font-semibold tracking-wide sm:text-base"
          >
            Sign up
          </button>
        </div>
      </>
    );
  };
  const signinWithEmail = () => {
    console.log(forwardRoute);
    return (
      <form action="" className=" mx-8 w-full max-w-sm ">
        <div className=" flex flex-col  gap-2 pb-3">
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
        </div>
        <RecButton
          btnType={"submit"}
          action={(e) => handleSigninWithEmail(e)}
          label={"Sign In"}
          bg={"bg-tradewind-900/80 font-semibold tracking-wider"}
        />
        <button
          onClick={() => showSigninOptions()}
          className=" text-tradewind-900 my-10 flex w-full items-center justify-center gap-2 text-sm tracking-wide"
        >
          <DoubleChevronLeftIcon />
          Back to sign in options
        </button>
      </form>
    );
  };
  return (
    <div className=" flex flex-col items-center gap-10">
      <h2 className="text-3xl font-semibold  ">{heading}</h2>
      {showOptions && options()}
      {showForm && signinWithEmail()}
    </div>
  );
};

export default SignInOptions;
