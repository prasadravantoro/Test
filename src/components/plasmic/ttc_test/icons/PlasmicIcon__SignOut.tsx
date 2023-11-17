// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SignOutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SignOutIcon(props: SignOutIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11 3.5a.5.5 0 00-.576-.494l-7 1.07A.5.5 0 003 4.57v10.86a.5.5 0 00.424.494l7 1.071a.5.5 0 00.576-.494V10h5.172l-.997.874a.5.5 0 00.658.752l1.996-1.75a.5.5 0 000-.752l-1.996-1.75a.499.499 0 10-.658.752l.997.874H11V3.5zm-2.5 7.75a.75.75 0 110-1.5.75.75 0 010 1.5zm4 4.75H12v-5h1v4.5a.5.5 0 01-.5.5zM12 8V4h.5a.5.5 0 01.5.5V8h-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SignOutIcon;
/* prettier-ignore-end */
