// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group625843IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group625843Icon(props: Group625843IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.595 0a.585.585 0 100 1.17.586.586 0 00.595-.587A.587.587 0 00.595 0zm0 1.073a.474.474 0 01-.478-.49c0-.28.21-.486.478-.486.264 0 .47.21.47.486 0 .284-.206.49-.47.49z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M.688.626C.789.614.863.564.863.439.863.307.785.25.626.25H.373v.676h.101V.634h.117L.77.925h.116L.688.626zM.47.544v-.21h.14c.07 0 .148.02.148.101 0 .105-.078.11-.163.11H.47z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group625843Icon;
/* prettier-ignore-end */
