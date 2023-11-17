// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLeft2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLeft2Icon(props: IconLeft2IconProps) {
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
          "M12.25 13.5a.75.75 0 010 1.5h-4.5a.75.75 0 010-1.5h4.5zm2-4.25a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5h8.5zm2-4.25a.75.75 0 010 1.5H3.75a.75.75 0 010-1.5h12.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconLeft2Icon;
/* prettier-ignore-end */
