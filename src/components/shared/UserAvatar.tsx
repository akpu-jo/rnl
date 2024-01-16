import { Avatar } from "@nextui-org/avatar";
import React from "react";

interface AvatarRadiusType {
  radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
  src: string;
  clickAction?: any;
  size?: "sm" | "md" | "lg" | undefined;
  extraClass?: string | undefined 
}

const UserAvatar = ({ radius, src, clickAction, size, extraClass }: AvatarRadiusType) => {
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
