// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.248 0C.894 0 0 1.291 0 2.353c0 1.061.894 2.353 2.248 2.353 1.353 0 2.251-1.292 2.251-2.353C4.5 1.29 3.601 0 2.248 0zm0 4.453c-.556 0-.836-.381-.836-2.1 0-1.72.28-2.1.836-2.1.556 0 .836.38.836 2.1 0 1.715-.28 2.1-.836 2.1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
