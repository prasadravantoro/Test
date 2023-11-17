// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DensityCompactIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DensityCompactIcon(props: DensityCompactIconProps) {
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
          "M2.75 4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zm0 5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zm0 2.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zm0 2.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zm0-7.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zm5-2.5a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5zm0 5a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5zm0 2.5a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5zm0 2.5a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5zm0-7.5a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DensityCompactIcon;
/* prettier-ignore-end */
