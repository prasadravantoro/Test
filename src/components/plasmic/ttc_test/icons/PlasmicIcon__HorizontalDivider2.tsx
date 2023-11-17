// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HorizontalDivider2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HorizontalDivider2Icon(props: HorizontalDivider2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1175 1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M1175 1H0V0h1175v1z"}
        fill={"currentColor"}
        fillOpacity={".1"}
      ></path>
    </svg>
  );
}

export default HorizontalDivider2Icon;
/* prettier-ignore-end */
