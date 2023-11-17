// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconHomeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconHomeIcon(props: IconHomeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
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
          "M10.667 2.677a.86.86 0 00-.696.215L2.948 9.247a.862.862 0 001.156 1.278l.528-.478v7.286c0 .737.597 1.334 1.333 1.334h9.362c.736 0 1.333-.597 1.333-1.334V10.01l.569.515a.862.862 0 001.156-1.278l-7.022-6.355a.86.86 0 00-.696-.215zM6.35 8.492v8.448h8.592V8.455l-4.275-3.87L6.35 8.493z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconHomeIcon;
/* prettier-ignore-end */
