// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarErrorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarErrorIcon(props: CalendarErrorIconProps) {
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
          "M21 12.022V8.5H3v9.25A3.25 3.25 0 006.25 21h5.772A6.5 6.5 0 0121 12.022zm0-5.772A3.25 3.25 0 0017.75 3H6.25A3.25 3.25 0 003 6.25V7h18v-.75zm2 11.25a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-6-3a.5.5 0 011 0v4a.5.5 0 01-1 0v-4zm1.125 6a.625.625 0 11-1.25 0 .625.625 0 011.25 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CalendarErrorIcon;
/* prettier-ignore-end */
