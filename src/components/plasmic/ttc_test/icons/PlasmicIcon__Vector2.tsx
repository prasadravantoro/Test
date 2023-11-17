// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.545 4.243c-.12.093-.233.09-.303.03-.129-.108-.082-.415-.082-.971 0-.677-.435-.988-1.225-1.078l.004-.062c.498-.105 1.24-.354 1.252-1.061C4.2.31 3.27 0 2.593 0H.147c-.171 0-.175.218 0 .218h.078S.648.19.648.653v3.139c0 .599-.45.56-.45.56H.12c-.16 0-.16.202 0 .202h2.32c.148 0 .144-.202 0-.202h-.124c-.23 0-.397-.05-.397-.56V2.38s-.004-.093.113-.093h.288c.338 0 .478.175.478.486 0 .14-.012.77-.008.87-.008.794.517.973 1.042.989.35.007.576-.043.825-.203.152-.105.047-.264-.113-.186zm-2.283-2.19H2.01s-.07 0-.07-.07V.32s-.016-.09.089-.09h.35c.529 0 .56.409.564.716v.459c-.004.47-.272.65-.68.65z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
