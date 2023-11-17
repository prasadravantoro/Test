// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLeftIcon(props: IconLeftIconProps) {
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
          "M12.268 15.793a.75.75 0 01-1.06-.026l-5.002-5.25a.75.75 0 010-1.035l5.001-5.25a.75.75 0 111.086 1.034L7.785 10l4.508 4.733a.75.75 0 01-.025 1.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconLeftIcon;
/* prettier-ignore-end */
