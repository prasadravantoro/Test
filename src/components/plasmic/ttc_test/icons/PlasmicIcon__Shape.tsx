// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShapeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShapeIcon(props: ShapeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.646.146a.5.5 0 01.708 0c.261.262 1.408 1.45 2.493 3.003C8.917 4.68 10 6.665 10 8.5c0 1.78-.577 3.165-1.516 4.105C7.549 13.542 6.291 14 5 14s-2.549-.458-3.484-1.395C.577 11.665 0 10.281 0 8.5c0-1.835 1.083-3.82 2.153-5.35A24.329 24.329 0 014.646.145z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShapeIcon;
/* prettier-ignore-end */
