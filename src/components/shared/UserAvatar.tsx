import { Avatar } from "@nextui-org/avatar";
import React from "react";

interface AvatarRadiusType {
  radius: "none" | "sm" | "md" | "lg" | "full" | undefined;
  src: string;
}

const UserAvatar = ({ radius, src }: AvatarRadiusType) => {
  return <Avatar radius={radius} showFallback src={src} />;
};

export default UserAvatar;
