// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VerticalDividerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VerticalDividerIcon(props: VerticalDividerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 39"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M0 39V0h1v39H0z"}
        fill={"currentColor"}
        fillOpacity={".05"}
      ></path>
    </svg>
  );
}

export default VerticalDividerIcon;
/* prettier-ignore-end */
