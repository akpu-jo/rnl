import React from "react";

const ButtonWithIcon = ({
  icon,
  label,
  action,
  extraClass
}: {
  icon?: React.ReactNode;
  label?: string;
  action?: Function;
  extraClass? : string
}) => {
  return (
    <button className={` ${extraClass} flex items-center justify-between gap-3 p-2 text-lg font-normal tracking-wide`}>
      <>{icon}</>
      {label}
    </button>
  );
};

export default ButtonWithIcon;
