// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFavoriteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFavoriteIcon(props: IconFavoriteIconProps) {
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
          "M17.816 7.787l-4.524-.393-1.767-4.16c-.318-.757-1.402-.757-1.72 0L8.04 7.405l-4.515.383c-.823.065-1.16 1.093-.533 1.636l3.43 2.972-1.028 4.412c-.187.804.683 1.44 1.393 1.01l3.88-2.337 3.878 2.346c.71.43 1.58-.206 1.393-1.01l-1.028-4.42 3.43-2.973c.627-.543.3-1.57-.523-1.636zm-7.15 5.945L7.15 15.854l.934-4.001L4.982 9.16l4.094-.355 1.59-3.767 1.598 3.776 4.094.355-3.104 2.692.935 4.001-3.524-2.131z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconFavoriteIcon;
/* prettier-ignore-end */
