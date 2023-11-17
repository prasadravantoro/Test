// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector79Stroke2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector79Stroke2Icon(props: Vector79Stroke2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M0 28V0h1v28H0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector79Stroke2Icon;
/* prettier-ignore-end */
