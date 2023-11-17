// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector8Icon(props: Vector8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.409 0c-2.178 0-3.84 1.458-4.631 3.173V.498S9.787.204 9.51.204H.267C-.01.204 0 .498 0 .498V4.32c0 .32.453.32.453 0C.463 1.92 1.36.587 3.04.729c.24 0 .356.071.364.329v7.804c0 1.414-1.137 1.298-1.137 1.298H1.99c-.427 0-.435.427 0 .427h5.805c.426 0 .417-.427 0-.427H7.52s-1.138.116-1.138-1.298V1.058c.01-.258.125-.33.374-.33 1.653-.141 2.55 1.156 2.577 3.503 0 .08-.053.836-.053 1.138 0 2.427 2.045 5.378 5.147 5.378 3.093 0 5.146-2.951 5.146-5.378C19.547 2.95 17.503 0 14.41 0zm0 10.178c-1.271 0-1.911-.871-1.911-4.8 0-3.93.64-4.8 1.91-4.8 1.272 0 1.912.87 1.912 4.8 0 3.92-.64 4.8-1.911 4.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
