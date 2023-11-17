// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Divider2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Divider2Icon(props: Divider2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 64"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M0 64V0h1v64H0z"}
        fill={"currentColor"}
        fillOpacity={".1"}
      ></path>
    </svg>
  );
}

export default Divider2Icon;
/* prettier-ignore-end */
