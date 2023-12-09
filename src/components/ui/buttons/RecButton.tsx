/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React from "react";
interface RecButtonType {
  btnType: "button" | "submit" | "reset" | undefined;
  disabled: boolean;
  action: any;
  label: string;
  icon: React.ReactNode;
  bg: string;
  textColor: string;
}

const RecButton = ({
  btnType,
  disabled,
  action = (f: any) => f,
  label,
  icon,
  bg,
  //   border,
  textColor,
}: RecButtonType) => {
  return (
    <button
      type={btnType}
      disabled={disabled}
      onClick={action}
      className={` flex w-full items-center justify-center gap-5 text-lg sm:text-base ${
        bg
          ? `${bg} active:bg-opacity-90`
          : " bg-slate-50 active:bg-slate-100/90"
      } dark:bg-slate-200  ${
        textColor || "text-slate-700"
      } px-14 py-2 tracking-wide ring-1 ${
        disabled && "cursor-not-allowed bg-opacity-50"
      } my-[calc(0.3rem)] rounded-sm outline-none ring-slate-200  `}
    >
      {icon}
      {label}
    </button>
  );
};

export default RecButton;
