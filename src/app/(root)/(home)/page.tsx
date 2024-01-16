import AuthButton from "@/app/(onboarding)/components/AuthButton";
import Feed from "@/components/Feed";
import ComposeBtn from "@/components/shared/navs/ComposeBtn";
import RightNavContent from "@/components/shared/navs/topnavs/RightNavContent";
import TopBar from "@/components/shared/navs/topnavs/TopBar";
import Link from "next/link";
// import MockUserData from "@/components/auth/MockUserData";

export default function Home() {
  const Title = () => {
    return (
      <Link
        className=" text-4xl font-medium tracking-tighter sm:hidden"
        href={"/"}
      >
        rnlinked.
      </Link>
    );
  };
  return (
    <>
      <TopBar left={<Title />} right={<RightNavContent navContent={<ComposeBtn />} showNotificationBtn={true} showUser={true} />} />
      <div className=" mx-auto max-w-2xl ">
        <Feed />
        <AuthButton label={"Sign Out"} authType={"signout"} />
        <AuthButton label={"Login"} authType={"sign-in"} />
        {/* <MockUserData /> */}
      </div>
    </>
  );
}
