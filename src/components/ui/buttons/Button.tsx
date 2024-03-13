import React, { MouseEventHandler, ReactNode } from "react";

interface ExtraClass {
  icon?: ReactNode;
  label?: string | ReactNode;
  action?: MouseEventHandler<HTMLButtonElement> | undefined;
  extraClass?: string;
  disabled?: boolean;
}

const ButtonWithIcon = ({
  icon,
  label,
  action,
  extraClass,
  disabled,
}: ExtraClass) => {
  return (
    <button
      disabled={disabled}
      onClick={action}
      className={` ${extraClass} flex items-center justify-between gap-3 ${
        disabled && "cursor-not-allowed"
      }  text-lg font-normal tracking-wide`}
    >
      <>{icon}</>
      {label}
    </button>
  );
};

export default ButtonWithIcon;
