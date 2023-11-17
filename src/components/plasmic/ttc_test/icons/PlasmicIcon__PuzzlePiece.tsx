// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PuzzlePieceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PuzzlePieceIcon(props: PuzzlePieceIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9 1a2 2 0 00-2 2H5.5A1.5 1.5 0 004 4.5V6a2 2 0 000 4v1.5A1.5 1.5 0 005.5 13H7a2 2 0 004 0h1.5a1.5 1.5 0 001.5-1.5V9h-1a1 1 0 110-2h1V4.5A1.5 1.5 0 0012.5 3H11a2 2 0 00-2-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PuzzlePieceIcon;
/* prettier-ignore-end */
