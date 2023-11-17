// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconRight4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconRight4Icon(props: IconRight4IconProps) {
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
          "M15.103 7.304a.75.75 0 01-1.133.976L10 4.31 6.03 8.28l-.084.073A.75.75 0 014.97 7.22l4.5-4.5.084-.073a.75.75 0 01.976.073l4.5 4.5.073.084zM4.897 12.696a.75.75 0 011.133-.976L10 15.69l3.97-3.97.084-.073a.75.75 0 01.976 1.133l-4.5 4.5-.084.073a.75.75 0 01-.976-.073l-4.5-4.5-.073-.084z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconRight4Icon;
/* prettier-ignore-end */
