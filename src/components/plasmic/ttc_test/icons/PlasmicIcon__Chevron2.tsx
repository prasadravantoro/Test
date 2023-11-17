// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Chevron2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Chevron2Icon(props: Chevron2IconProps) {
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
          "M4.207 12.267a.75.75 0 01.026-1.06l5.25-5.001a.75.75 0 011.035 0l5.25 5a.75.75 0 01-1.034 1.087L10 7.784l-4.734 4.509a.75.75 0 01-1.06-.026z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Chevron2Icon;
/* prettier-ignore-end */
