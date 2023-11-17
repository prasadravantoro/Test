// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxCheckmarkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxCheckmarkIcon(props: BoxCheckmarkIconProps) {
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
          "M13.409 2.512a3.75 3.75 0 00-2.818 0l-2.19.888 9.592 3.73 3.374-1.303a1.747 1.747 0 00-.46-.275l-7.498-3.04zM22 7.19l-9.25 3.574v2.3A6.482 6.482 0 0117.5 11c1.747 0 3.332.689 4.5 1.81V7.19zm-10.75 3.574v4.945A6.503 6.503 0 0011 17.5c0 .621.087 1.222.25 1.79v2.397a3.756 3.756 0 01-.659-.199l-7.498-3.04A1.75 1.75 0 012 16.826V7.19l9.25 3.574zM2.633 5.827L12 9.446l3.917-1.514-9.543-3.71-3.281 1.33c-.17.069-.324.162-.46.275zM17.5 23a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm2.646-7.854a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708l1.646 1.647 3.646-3.647z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BoxCheckmarkIcon;
/* prettier-ignore-end */
