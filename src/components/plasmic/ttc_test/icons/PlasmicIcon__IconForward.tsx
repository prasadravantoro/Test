// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconForwardIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconForwardIcon(props: IconForwardIconProps) {
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
          "M3.693 11.49h11.47l-5.011 5.01c-.4.4-.4 1.058 0 1.458.4.4 1.047.4 1.448 0l6.766-6.766c.4-.4.4-1.048 0-1.448L11.61 2.967a1.024 1.024 0 10-1.448 1.448l5 5.02H3.694a1.03 1.03 0 00-1.026 1.028 1.03 1.03 0 001.026 1.026z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconForwardIcon;
/* prettier-ignore-end */
