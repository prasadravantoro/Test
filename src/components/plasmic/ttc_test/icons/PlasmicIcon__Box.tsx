// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxIcon(props: BoxIconProps) {
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
          "M10.591 2.512a3.75 3.75 0 012.818 0l7.498 3.04A1.75 1.75 0 0122 7.174v9.652a1.75 1.75 0 01-1.093 1.622l-7.498 3.04a3.75 3.75 0 01-2.818 0l-7.498-3.04A1.75 1.75 0 012 16.826V7.175a1.75 1.75 0 011.093-1.622l7.498-3.04zm2.254 1.39a2.25 2.25 0 00-1.69 0l-1.914.776 7.527 2.927 2.669-1.03-6.592-2.673zm1.846 4.505L7.215 5.499 4.59 6.563l7.411 2.882 2.69-1.038zM3.5 16.827a.25.25 0 00.156.231l7.499 3.04c.031.013.063.025.095.036v-9.371L3.5 7.749v9.078zm9.345 3.271l7.499-3.04a.25.25 0 00.156-.232V7.772l-7.75 2.992v9.37c.032-.011.064-.023.095-.036z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BoxIcon;
/* prettier-ignore-end */
