// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurveLIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurveLIcon(props: CurveLIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M0 10.667C1.846 9.412 6.154 8.784 8 0v10.667H0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CurveLIcon;
/* prettier-ignore-end */
