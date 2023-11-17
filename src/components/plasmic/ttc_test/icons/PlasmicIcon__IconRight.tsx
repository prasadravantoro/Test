// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconRightIcon(props: IconRightIconProps) {
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
          "M7.733 4.207a.75.75 0 011.06.026l5.001 5.25a.75.75 0 010 1.035l-5 5.25a.75.75 0 11-1.087-1.034L12.216 10l-4.51-4.734a.75.75 0 01.027-1.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconRightIcon;
/* prettier-ignore-end */
