// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconRight2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconRight2Icon(props: IconRight2IconProps) {
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
          "M12.45 16.002a2.501 2.501 0 01-4.9 0h4.9zM9.998 2c3.149 0 5.744 2.335 5.984 5.355l.014.223.004.224-.001 3.606.954 2.587.025.085.016.086.005.089c0 .315-.196.59-.522.707l-.113.033-.115.01H3.751a.75.75 0 01-.259-.047c-.287-.105-.476-.372-.482-.716l.004-.117.034-.13.951-2.584L4 7.793l.004-.225C4.127 4.451 6.771 2 9.998 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconRight2Icon;
/* prettier-ignore-end */
