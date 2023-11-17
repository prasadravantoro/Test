// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChatIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChatIcon(props: ChatIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10 2a8 8 0 11-3.613 15.14l-.121-.065-3.645.91a.5.5 0 01-.62-.441v-.082l.014-.083.91-3.644-.063-.12a7.95 7.95 0 01-.83-2.887l-.025-.382L2 10a8 8 0 018-8zm.5 9h-3l-.09.008a.5.5 0 000 .984L7.5 12h3l.09-.008a.5.5 0 000-.984L10.5 11zm2-3h-5l-.09.008a.5.5 0 000 .984L7.5 9h5l.09-.008a.5.5 0 000-.984L12.5 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChatIcon;
/* prettier-ignore-end */
