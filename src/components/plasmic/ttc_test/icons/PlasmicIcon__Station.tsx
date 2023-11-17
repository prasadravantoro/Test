// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StationIcon(props: StationIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.947 1.276a.5.5 0 01-.223.671l-2 1a.5.5 0 11-.447-.894l2-1a.5.5 0 01.67.224zM4 3a1 1 0 00-1 1v1a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1H4zm0 8V7h6v4a1 1 0 01-1 1H5a1 1 0 01-1-1zm1 2a1 1 0 001 1h2a1 1 0 001-1H5zm11-8.5a.5.5 0 01-.5.5h-3a.5.5 0 010-1h3a.5.5 0 01.5.5zm-3.276 1.553a.5.5 0 10-.447.894l2 1a.5.5 0 10.447-.894l-2-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StationIcon;
/* prettier-ignore-end */
