// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxDismissIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxDismissIcon(props: BoxDismissIconProps) {
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
          "M10.591 2.512a3.75 3.75 0 012.818 0l7.498 3.04A1.75 1.75 0 0122 7.174v5.636a6.518 6.518 0 00-1.5-1.078v-3.96l-7.75 2.992v2.299a6.492 6.492 0 00-1.5 2.644v-4.944L3.5 7.749v9.078a.25.25 0 00.156.231l7.499 3.04c.031.013.063.025.095.036v-.841a6.5 6.5 0 001.307 2.428 3.75 3.75 0 01-1.966-.233l-7.498-3.04A1.75 1.75 0 012 16.826V7.175a1.75 1.75 0 011.093-1.622l7.498-3.04zm2.254 1.39a2.25 2.25 0 00-1.69 0l-1.914.776 7.527 2.927 2.669-1.03-6.592-2.673zm1.846 4.505L7.215 5.499 4.59 6.563l7.411 2.882 2.69-1.038zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.146-2.354a.5.5 0 00-.708.708l1.647 1.646-1.647 1.646a.5.5 0 00.708.708l1.646-1.647 1.646 1.647a.5.5 0 00.708-.708L18.207 17.5l1.647-1.646a.5.5 0 00-.708-.708L17.5 16.793l-1.646-1.647z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BoxDismissIcon;
/* prettier-ignore-end */
