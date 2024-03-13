import { Avatar } from "@nextui-org/avatar";
import React from "react";



interface UserAvatarProps {
  radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
  src: string;
  clickAction?: any;
  size?: "sm" | "md" | "lg" | undefined;
  extraClass?: string | undefined 
}
/**
 * An extension of NextUi avatar component
 * Props: radius, src, clickAction for Onclick events, size, extraclass
 * @type {UserAvatarProps}
 */

const UserAvatar = ({ radius, src, clickAction, size, extraClass }: UserAvatarProps) => {
  return (
    <Avatar
      radius={radius}
      showFallback
      src={src}
      onClick={clickAction}
      className={`cursor-pointe ${extraClass}`}
      size={size}
    />
  );
};

export default UserAvatar;
