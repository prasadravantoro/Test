// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DocumentArrowDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DocumentArrowDownIcon(props: DocumentArrowDownIconProps) {
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
          "M6 2a2 2 0 00-2 2v5.207a5.48 5.48 0 011-.185V4a1 1 0 011-1h4v3.5A1.5 1.5 0 0011.5 8H15v8a1 1 0 01-1 1h-3.6a5.507 5.507 0 01-.657 1H14a2 2 0 002-2V7.414a1.5 1.5 0 00-.44-1.06l-3.914-3.915A1.5 1.5 0 0010.586 2H6zm8.793 5H11.5a.5.5 0 01-.5-.5V3.207L14.793 7zM5.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-2.354-4.146a.5.5 0 01.708-.708L5 15.293V12.5a.5.5 0 011 0v2.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.351.146h-.006a.5.5 0 01-.348-.144l-.003-.003-2-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DocumentArrowDownIcon;
/* prettier-ignore-end */
