// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconRight5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconRight5Icon(props: IconRight5IconProps) {
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
        d={
          "M8.293 4.293a1 1 0 000 1.414L14.586 12l-6.293 6.293a1 1 0 101.414 1.414l7-7a1 1 0 000-1.414l-7-7a1 1 0 00-1.414 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconRight5Icon;
/* prettier-ignore-end */
