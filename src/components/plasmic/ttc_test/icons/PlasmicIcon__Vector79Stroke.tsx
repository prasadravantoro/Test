// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector79StrokeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector79StrokeIcon(props: Vector79StrokeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 38"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M0 38V0h1v38H0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector79StrokeIcon;
/* prettier-ignore-end */
