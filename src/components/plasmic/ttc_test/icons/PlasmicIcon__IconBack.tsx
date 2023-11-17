// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconBackIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconBackIcon(props: IconBackIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
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
          "M17.64 9.436H6.17l5.011-5.011c.4-.4.4-1.058 0-1.458-.4-.4-1.047-.4-1.447 0L2.967 9.734c-.4.4-.4 1.047 0 1.447l6.767 6.767a1.022 1.022 0 101.448-1.448L6.17 11.49h11.47a1.03 1.03 0 001.027-1.027 1.03 1.03 0 00-1.027-1.027z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconBackIcon;
/* prettier-ignore-end */
