import React, { MouseEventHandler, ReactNode } from "react";

interface ExtraClass {
  icon?: ReactNode;
  label?: string | ReactNode;
  action?: MouseEventHandler<HTMLButtonElement> | undefined;
  extraClass? : string
}

const ButtonWithIcon = ({
  icon,
  label,
  action,
  extraClass
}: ExtraClass) => {
  return (
    <button onClick={action} className={` ${extraClass} flex items-center justify-between gap-3  text-lg font-normal tracking-wide`}>
      <>{icon}</>
      {label}
    </button>
  );
};

export default ButtonWithIcon; 
