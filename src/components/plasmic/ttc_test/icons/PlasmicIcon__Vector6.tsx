// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.389 9.698c-.276.213-.533.204-.693.07-.294-.248-.187-.95-.187-2.221 0-1.547-.996-2.258-2.8-2.463l.009-.142c1.138-.24 2.835-.809 2.862-2.426C9.598.71 7.473 0 5.927 0H.336c-.392 0-.4.498 0 .498h.177s.97-.062.97.995v7.174c0 1.369-1.032 1.28-1.032 1.28H.273c-.364 0-.364.462 0 .462H5.58c.338 0 .329-.462 0-.462h-.284c-.525 0-.907-.116-.907-1.28V5.44s-.009-.213.258-.213h.657c.774 0 1.094.4 1.094 1.11 0 .32-.027 1.76-.018 1.992-.018 1.813 1.182 2.222 2.382 2.258.8.017 1.316-.098 1.885-.463.346-.24.106-.604-.258-.426zM5.17 4.693h-.578s-.16 0-.16-.16V.73s-.035-.205.205-.205h.8c1.209 0 1.28.934 1.289 1.636V3.21c-.01 1.075-.623 1.484-1.556 1.484z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
