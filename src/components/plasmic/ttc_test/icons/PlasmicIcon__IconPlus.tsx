// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPlusIcon(props: IconPlusIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 27"}
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
          "M20.952 14.603h-6.349v6.35c0 .698-.571 1.27-1.27 1.27-.698 0-1.27-.572-1.27-1.27v-6.35H5.714c-.698 0-1.27-.571-1.27-1.27 0-.698.572-1.27 1.27-1.27h6.35V5.714c0-.698.57-1.27 1.27-1.27.698 0 1.27.572 1.27 1.27v6.35h6.348c.699 0 1.27.57 1.27 1.27 0 .698-.571 1.27-1.27 1.27z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPlusIcon;
/* prettier-ignore-end */
