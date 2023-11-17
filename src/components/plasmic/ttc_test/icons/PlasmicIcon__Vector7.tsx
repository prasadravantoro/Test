// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.138 0C2.044 0 0 2.951 0 5.378c0 2.426 2.044 5.378 5.138 5.378 3.093 0 5.146-2.952 5.146-5.378C10.284 2.95 8.232 0 5.138 0zm0 10.178c-1.271 0-1.911-.871-1.911-4.8 0-3.93.64-4.8 1.91-4.8 1.272 0 1.912.87 1.912 4.8 0 3.92-.64 4.8-1.911 4.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
