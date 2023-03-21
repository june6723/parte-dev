import React, { HTMLAttributes } from "react";
import { IconProps } from "../../../icons/src";

export type IconButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary" | "minimal" | "error";
  Icon: React.ReactElement<IconProps>;
  size?: number;
  disabled?: boolean;
};
