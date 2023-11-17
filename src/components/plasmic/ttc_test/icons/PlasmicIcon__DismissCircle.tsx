// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DismissCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DismissCircleIcon(props: DismissCircleIconProps) {
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
          "M10 2a8 8 0 110 16 8 8 0 010-16zM7.81 7.114a.5.5 0 00-.638.058l-.058.069a.5.5 0 00.058.638L9.292 10l-2.12 2.121-.058.07a.5.5 0 00.058.637l.069.058a.5.5 0 00.638-.058L10 10.708l2.121 2.12.07.058a.5.5 0 00.637-.058l.058-.069a.5.5 0 00-.058-.638L10.708 10l2.12-2.121.058-.07a.5.5 0 00-.058-.637l-.069-.058a.5.5 0 00-.638.058L10 9.292l-2.121-2.12-.07-.058z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DismissCircleIcon;
/* prettier-ignore-end */
