import React, { HTMLAttributes } from "react";

interface HorizontalRuleProps
  extends HTMLAttributes<HTMLHRElement> {
}


const HorizontalRule = ({...props} : HorizontalRuleProps) => {
  return <hr className=" border dark:border-slate-600"/>;
};

export default HorizontalRule;
