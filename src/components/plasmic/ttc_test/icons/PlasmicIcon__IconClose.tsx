// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCloseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCloseIcon(props: IconCloseIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M16.778 7.23a.755.755 0 00-1.07 0L12 10.93 8.291 7.223a.755.755 0 10-1.07 1.07L10.932 12l-3.71 3.709a.755.755 0 101.07 1.07L12 13.068l3.709 3.71a.755.755 0 101.07-1.07L13.068 12l3.71-3.709a.76.76 0 000-1.062z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconCloseIcon;
/* prettier-ignore-end */
