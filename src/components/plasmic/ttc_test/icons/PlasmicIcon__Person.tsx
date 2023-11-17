// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PersonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PersonIcon(props: PersonIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.754 14a2.249 2.249 0 012.25 2.249v.918a2.75 2.75 0 01-.514 1.6C17.946 20.928 15.42 22 12 22c-3.421 0-5.944-1.072-7.486-3.236a2.75 2.75 0 01-.51-1.596v-.92a2.249 2.249 0 012.248-2.25h11.502zM12 2.005a5 5 0 110 10 5 5 0 010-10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PersonIcon;
/* prettier-ignore-end */
