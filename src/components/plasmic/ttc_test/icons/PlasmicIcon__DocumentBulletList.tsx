// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DocumentBulletListIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DocumentBulletListIcon(props: DocumentBulletListIconProps) {
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
          "M12 8V2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V10h-6a2 2 0 01-2-2zm-5 4.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm0 3a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm0 3a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm3-6a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zm0 3a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zm0 3a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zM13.5 8V2.5l6 6H14a.5.5 0 01-.5-.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DocumentBulletListIcon;
/* prettier-ignore-end */
