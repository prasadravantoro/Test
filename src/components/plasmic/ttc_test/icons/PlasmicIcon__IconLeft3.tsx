// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLeft3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLeft3Icon(props: IconLeft3IconProps) {
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
          "M21.247 4.504a.75.75 0 00-.743.648l-.007.102v13.499a.75.75 0 001.493.101l.007-.101v-13.5a.75.75 0 00-.75-.75zM8.787 6.387l-.083-.094a1 1 0 00-1.32-.083l-.094.083-4.997 4.998a1 1 0 00-.083 1.32l.083.093 4.996 5.004a1 1 0 001.499-1.32l-.083-.094L5.416 13h12.581a1 1 0 00.993-.883l.007-.117a1 1 0 00-.883-.993L17.997 11H5.413l3.291-3.293a1 1 0 00.083-1.32l-.083-.094.083.094z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconLeft3Icon;
/* prettier-ignore-end */
