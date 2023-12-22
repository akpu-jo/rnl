import Link from "next/link";
import React from "react";

const ListLink = ({ link, text }: { link: string; text: string }) => {
  return (
    <li className=" hover:font-bold hover:text-contessa-700">
      {" "}
      <Link href={link}>{text}</Link>{" "}
    </li>
  );
};

export default ListLink;
