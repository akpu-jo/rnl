import React from "react";
import Link from "next/link";

const LinkItems = ({
  label,
  icon,
  route = "#",
  active = false,
  extraClass,
}: {
  label: string;
  icon: React.ReactNode;
  route: string;
  active: boolean;
  extraClass?: string;
}) => {
  return (
    <Link
      href={route}
      className={` ${extraClass} hover:bg-dark-50/10 dark:hover:bg-celery-50/10 flex w-fit items-center justify-start gap-3 rounded p-2 px-5 text-2xl font-light  `}
    >
      <>{icon}</>
      <p className={`hidden tracking-wide xl:block ${active && "font-medium"}`}>
        {label}
      </p>
    </Link>
  );
};

export default LinkItems;
