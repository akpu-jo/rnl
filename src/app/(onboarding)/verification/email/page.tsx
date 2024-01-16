"use client";
import React, { useEffect } from "react";

// import { Loading } from "@nextui-org/react";
import axios from "axios";
import { applyActionCode, checkActionCode } from "firebase/auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import RecButton from "@/components/ui/buttons/RecButton";
import Logo from "@/components/shared/navs/Logo";
import { useMutation } from "@tanstack/react-query";
import { auth } from "@/lib/firebase/init";
import { api } from "@/constants";
import LoadingState from "@/components/ui/LoadingState";

const VerifyEmail = () => {
  const { setSessionUser } = useAuth();

  const router = useRouter();
  const queryParams = useSearchParams();

  const query = {
    oobCode: queryParams.get("oobCode"),
    mode: queryParams.get("mode"),
  };


  const {
    mutate: verifyUser,
    isPending,
    isError,
    // isSuccess,
  } = useMutation({
    mutationFn: async () => {
        console.log(isPending, query)
      if (!query.mode) {
        throw new Error("Validation query is not defined")
      };

      const actionCodeInfo = await checkActionCode(auth, query.oobCode!);

      applyActionCode(auth, query.oobCode!)
        .then(async () => {
          console.log("verified", actionCodeInfo);

          const email = actionCodeInfo.data.email;
          const meta = {
            filter: { email },
            reqBody: { emailVerified: true },
          };
          const { data } = await axios.patch(`${api}/users`, meta);
          console.log(data.user);
          setSessionUser(data.user);
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  useEffect(() => {
    verifyUser();
  }, [queryParams, verifyUser]);

  const pushToLogin = () => {
    router.push("/sign-in");
  };

  return (
    <div className=" mx-auto flex max-w-md flex-col items-center justify-center">
      <Link href={`/`} className=" mb-20 p-8 ">
        <Logo  />
      </Link>
      {isPending ? (<LoadingState size="lg" />) : (
        <>
          {isError && (
            <div className=" bg-white-d400 ring-w1-d8 rounded-sm p-10 text-center shadow-2xl ">
              <h2 className=" py-2 text-2xl font-medium tracking-wide">
                Something went wrong
              </h2>
              <p className=" py-2 tracking-normal ">
                We are having trouble verifying your email{" "}
              </p>
              <span>
                <Link
                  className="visited:text-contessa-400 underline"
                  href={"mailto:support@rnlinked.com"}
                >
                  Contact us
                </Link>
              </span>{" "}
              <RecButton
                label={"Go to login"}
                bg={"bg-tradewind-900/80 rounded-md font-semibold mt-12"}
                textColor={"text-white"}
                action={pushToLogin}
              />
            </div>
          )}
        </>
      ) }
    </div>
  );
};

export default VerifyEmail;
