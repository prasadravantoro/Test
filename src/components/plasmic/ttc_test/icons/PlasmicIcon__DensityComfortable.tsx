// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DensityComfortableIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DensityComfortableIcon(props: DensityComfortableIconProps) {
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
          "M2.75 4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zm0 5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zm0 5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zm5-10a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H7.75zm0 5a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H7.75zm0 5a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H7.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DensityComfortableIcon;
/* prettier-ignore-end */
