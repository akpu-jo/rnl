import Image from "next/image";
import React from "react";

const Logo = ({
  textColor,
  logoSrc,
  showText = true
}: {
  textColor?: string;
  logoSrc?: string;
  showText?: boolean
}) => {
  // const logoSrc = '';
  return (
    <div
      className={` ${textColor && textColor} flex items-center justify-start gap-2 text-4xl `}
    >
      <Image alt="rn-linked logo" src={logoSrc || "/logo.svg"} width={40} height={40} />
      {showText && <span className="">rnlinked.</span>}
    </div>
  );
};

export default Logo;
