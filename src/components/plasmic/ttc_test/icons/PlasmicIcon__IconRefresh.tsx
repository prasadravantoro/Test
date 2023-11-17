// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconRefreshIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconRefreshIcon(props: IconRefreshIconProps) {
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
          "M18.664 8.442V3.739a.44.44 0 00-.756-.31L16.326 5.01a8.008 8.008 0 00-6.409-2.312c-3.724.338-6.79 3.334-7.2 7.058a8 8 0 0015.885 1.902.893.893 0 00-.89-.995.875.875 0 00-.87.764 6.236 6.236 0 01-6.267 5.458c-3.298-.044-6.08-2.827-6.133-6.133-.054-3.467 2.764-6.311 6.222-6.311a6.24 6.24 0 014.4 1.822l-1.858 1.858a.445.445 0 00.311.764h4.702a.44.44 0 00.445-.444z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconRefreshIcon;
/* prettier-ignore-end */
