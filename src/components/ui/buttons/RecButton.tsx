/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React, { MouseEventHandler } from "react";

interface RecButtonType {
  btnType?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  action?: MouseEventHandler<HTMLButtonElement> | undefined;
  label: string;
  icon?: React.ReactNode;
  bg?: string;
  textColor?: string;
}

const RecButton = ({
  btnType = 'button',
  disabled,
  action,
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
      className={` flex w-full items-center justify-center gap-5 text-lg sm:text-base ${bg} ${
        textColor || ""
      } border px-14 py-3 tracking-wide dark:border-slate-600 ${
        disabled && "cursor-not-allowed bg-opacity-50"
      }  my-[calc(0.3rem)] rounded-md outline-none `}
    >
      {icon}
      {label}
    </button>
  );
};

export default RecButton;
