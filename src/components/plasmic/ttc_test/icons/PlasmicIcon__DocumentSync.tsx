// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DocumentSyncIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DocumentSyncIcon(props: DocumentSyncIconProps) {
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
          "M12 2v6a2 2 0 002 2h6v10a2 2 0 01-2 2h-6.81A6.5 6.5 0 004 11.498V4a2 2 0 012-2h6zm1.5.5V8a.5.5 0 00.5.5h5.5l-6-6zM1 17.5a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zM9.5 14a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h1a2.496 2.496 0 00-2-1c-.833 0-1.572.407-2.027 1.036a.5.5 0 11-.81-.586A3.496 3.496 0 016.5 14c.98 0 1.865.403 2.5 1.05v-.55a.5.5 0 01.5-.5zM4 19.95v.55a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5h2a.5.5 0 010 1h-1c.456.608 1.183 1 2 1 .766 0 1.452-.344 1.911-.888a.5.5 0 01.764.645A3.493 3.493 0 016.5 21 3.49 3.49 0 014 19.95z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DocumentSyncIcon;
/* prettier-ignore-end */
