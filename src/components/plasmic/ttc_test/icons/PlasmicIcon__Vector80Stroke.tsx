// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector80StrokeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector80StrokeIcon(props: Vector80StrokeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M0 40V0h1v40H0z"}
        fill={"currentColor"}
        fillOpacity={".05"}
      ></path>
    </svg>
  );
}

export default Vector80StrokeIcon;
/* prettier-ignore-end */
