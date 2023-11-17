// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfoIcon(props: InfoIconProps) {
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
          "M18 10a8 8 0 10-16 0 8 8 0 0016 0zM9.508 8.91a.5.5 0 01.984 0L10.5 9v4.502l-.008.09a.5.5 0 01-.984 0l-.008-.09V9l.008-.09zM9.25 6.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InfoIcon;
/* prettier-ignore-end */
