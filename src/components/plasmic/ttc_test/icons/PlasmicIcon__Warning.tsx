// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WarningIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WarningIcon(props: WarningIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.817 2.567L1.914 13.299A1.35 1.35 0 003.097 15.3h11.806a1.35 1.35 0 001.183-2L10.183 2.566a1.35 1.35 0 00-2.366 0zM9 6.075c.373 0 .675.302.675.675v3.6a.675.675 0 11-1.35 0v-3.6c0-.373.302-.675.675-.675zm.675 6.3a.675.675 0 11-1.35 0 .675.675 0 011.35 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WarningIcon;
/* prettier-ignore-end */
