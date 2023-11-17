// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChatHelpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChatHelpIcon(props: ChatHelpIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 01-4.644-1.142l-4.29 1.117a.85.85 0 01-1.037-1.036l1.116-4.289A9.959 9.959 0 012 12C2 6.477 6.477 2 12 2zm0 13.5a1 1 0 100 2 1 1 0 000-2zm0-8.75A2.75 2.75 0 009.25 9.5a.75.75 0 001.493.102l.014-.23a1.25 1.25 0 012.493.128c0 .539-.135.805-.645 1.332l-.304.31c-.754.784-1.051 1.347-1.051 2.358a.75.75 0 001.5 0c0-.539.135-.805.645-1.332l.304-.31c.754-.784 1.051-1.347 1.051-2.358A2.75 2.75 0 0012 6.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChatHelpIcon;
/* prettier-ignore-end */
