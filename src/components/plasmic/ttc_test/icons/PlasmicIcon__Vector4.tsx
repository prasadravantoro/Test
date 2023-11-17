// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.304 0c-.953 0-1.68.638-2.026 1.388V.218S4.282.089 4.16.089H.117C-.003.09 0 .218 0 .218V1.89c0 .14.198.14.198 0C.202.84.595.257 1.33.319c.105 0 .156.031.16.144v3.414c0 .619-.498.568-.498.568h-.12c-.188 0-.191.187 0 .187H3.41c.186 0 .182-.187 0-.187h-.12s-.498.05-.498-.568V.463c.004-.113.055-.144.164-.144.723-.062 1.116.505 1.127 1.532 0 .035-.023.366-.023.498 0 1.062.894 2.353 2.252 2.353 1.353 0 2.251-1.291 2.251-2.353C8.552 1.29 7.657 0 6.303 0zm0 4.453c-.556 0-.836-.381-.836-2.1 0-1.72.28-2.1.836-2.1.556 0 .836.38.836 2.1 0 1.715-.28 2.1-.836 2.1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
