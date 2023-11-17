// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconRight3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconRight3Icon(props: IconRight3IconProps) {
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
          "M4.5 13h11a.5.5 0 00.416-.777L13.101 8l2.815-4.223A.5.5 0 0015.5 3H4a.5.5 0 00-.5.5v14a.5.5 0 001 0V13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconRight3Icon;
/* prettier-ignore-end */
