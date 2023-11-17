// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group625844IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group625844Icon(props: Group625844IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.36 0C.622 0 0 .569 0 1.333c0 .774.622 1.343 1.36 1.343.729 0 1.36-.56 1.36-1.343C2.72.57 2.089 0 1.36 0zm0 2.453c-.613 0-1.093-.47-1.093-1.12 0-.64.48-1.11 1.093-1.11.604 0 1.076.48 1.076 1.11 0 .65-.472 1.12-1.076 1.12z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M1.573 1.431c.23-.027.4-.142.4-.427 0-.302-.178-.435-.543-.435H.853v1.547h.23v-.667h.267l.41.667h.266l-.453-.685zm-.498-.187v-.48h.32c.16 0 .338.045.338.232 0 .24-.178.248-.374.248h-.284z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group625844Icon;
/* prettier-ignore-end */
