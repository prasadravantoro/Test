// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSecureIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSecureIcon(props: IconSecureIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12 5.333h-.667V4a3.335 3.335 0 00-6.666 0v1.333H4c-.733 0-1.333.6-1.333 1.334v6.666c0 .734.6 1.334 1.333 1.334h8c.733 0 1.333-.6 1.333-1.334V6.667c0-.734-.6-1.334-1.333-1.334zm-6 0V4c0-1.107.893-2 2-2s2 .893 2 2v1.333H6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSecureIcon;
/* prettier-ignore-end */
