// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronIcon(props: ChevronIconProps) {
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
          "M15.793 7.733a.75.75 0 01-.026 1.06l-5.25 5.001a.75.75 0 01-1.035 0l-5.25-5a.75.75 0 011.034-1.087L10 12.216l4.734-4.51a.75.75 0 011.06.027z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronIcon;
/* prettier-ignore-end */
