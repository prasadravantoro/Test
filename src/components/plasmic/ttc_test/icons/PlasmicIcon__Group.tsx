// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M6.645 10.55a1.507 1.507 0 100-3.014 1.507 1.507 0 000 3.014z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.645 5.024a4.03 4.03 0 00-3.272 1.685.67.67 0 001.09.779 2.688 2.688 0 012.182-1.125c.863 0 1.679.42 2.182 1.124a.67.67 0 001.09-.778 4.03 4.03 0 00-3.272-1.685z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.645 2.512c-1.85 0-3.621.79-4.859 2.167a.67.67 0 00.997.895 5.2 5.2 0 013.862-1.723 5.2 5.2 0 013.862 1.723.67.67 0 00.997-.895 6.542 6.542 0 00-4.86-2.167z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M13.098 2.709A8.975 8.975 0 006.645 0 8.975 8.975 0 00.192 2.709a.67.67 0 00.956.938A7.646 7.646 0 016.645 1.34a7.65 7.65 0 015.497 2.307.67.67 0 10.956-.938z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
