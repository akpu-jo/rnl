import React from "react";

const HorizontalRule = ({className} : {className: string}) => {
  return <hr className={` border border-slate-300 ${className} `} />;
};

export default HorizontalRule;
