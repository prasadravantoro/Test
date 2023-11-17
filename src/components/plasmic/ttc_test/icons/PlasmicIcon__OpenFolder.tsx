// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OpenFolderIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OpenFolderIcon(props: OpenFolderIconProps) {
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
          "M3 6.25A3.25 3.25 0 016.25 3H14a3.25 3.25 0 013.25 3.25v2a.75.75 0 01-1.5 0v-2A1.75 1.75 0 0014 4.5H6.25A1.75 1.75 0 004.5 6.25v7.5c0 .966.784 1.75 1.75 1.75h4a.75.75 0 010 1.5h-4A3.25 3.25 0 013 13.75v-7.5zm5 2.5A.75.75 0 018.75 8h4.5a.75.75 0 010 1.5h-2.69l5.22 5.22a.75.75 0 11-1.06 1.06L9.5 10.56v2.69a.75.75 0 01-1.5 0v-4.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OpenFolderIcon;
/* prettier-ignore-end */
