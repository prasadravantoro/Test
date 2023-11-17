// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HomeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HomeIcon(props: HomeIconProps) {
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
          "M10.55 2.533a2.25 2.25 0 012.9 0l6.75 5.695c.508.427.8 1.056.8 1.72v9.802a1.75 1.75 0 01-1.75 1.75h-3a1.75 1.75 0 01-1.75-1.75v-5a.75.75 0 00-.75-.75h-3.5a.75.75 0 00-.75.75v5a1.75 1.75 0 01-1.75 1.75h-3A1.75 1.75 0 013 19.75V9.947c0-.663.292-1.292.8-1.72l6.75-5.694z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HomeIcon;
/* prettier-ignore-end */
