// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WrenchScrewdriverIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WrenchScrewdriverIcon(props: WrenchScrewdriverIconProps) {
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
          "M16.08 2.415A.75.75 0 0116.75 2h1.5a.75.75 0 01.67.415l1 2a.75.75 0 01-.019.707L19 6.7V12h1.25a.75.75 0 01.75.75v1.75h-7v-1.75a.75.75 0 01.75-.75H16V6.7l-.901-1.578a.75.75 0 01-.02-.707l1-2zM14 16v2.5a3.5 3.5 0 107 0V16h-7zM8.828 2.212a.75.75 0 01.698-.076 5.502 5.502 0 01.51 9.996v7.332a2.536 2.536 0 01-5.072 0v-7.332a5.502 5.502 0 01.51-9.996.75.75 0 011.026.697V6.5a1 1 0 102 0V2.833a.75.75 0 01.328-.62z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WrenchScrewdriverIcon;
/* prettier-ignore-end */
