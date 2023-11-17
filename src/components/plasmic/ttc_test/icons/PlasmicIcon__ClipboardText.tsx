// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClipboardTextIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClipboardTextIcon(props: ClipboardTextIconProps) {
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
          "M13.75 3.5h-3.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5zm0-1.5c1.14 0 2.08.846 2.23 1.945l.013.135-.007-.08h1.764A2.25 2.25 0 0120 6.25v13.5A2.25 2.25 0 0117.75 22H6.25A2.25 2.25 0 014 19.75V6.25A2.25 2.25 0 016.25 4h1.764l-.008.08.015-.135A2.25 2.25 0 0110.25 2h3.5zM14 17H8a.75.75 0 000 1.5h6a.75.75 0 000-1.5zm-2-4H8a.75.75 0 000 1.5h4a.75.75 0 000-1.5zm4-4H8a.75.75 0 000 1.5h8A.75.75 0 0016 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClipboardTextIcon;
/* prettier-ignore-end */
