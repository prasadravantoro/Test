// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Cart2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Cart2Icon(props: Cart2IconProps) {
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
          "M2.5 4.25a.75.75 0 01.75-.75h.558c.95 0 1.52.639 1.845 1.233.217.396.374.855.497 1.271A1.29 1.29 0 016.25 6h12.498c.83 0 1.43.794 1.202 1.593l-1.828 6.409a2.75 2.75 0 01-2.644 1.996H9.53a2.75 2.75 0 01-2.652-2.022l-.76-2.772-1.26-4.248-.001-.008c-.156-.567-.302-1.098-.52-1.494C4.128 5.069 3.96 5 3.809 5H3.25a.75.75 0 01-.75-.75zM9 21a2 2 0 100-4 2 2 0 000 4zm7 0a2 2 0 100-4 2 2 0 000 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Cart2Icon;
/* prettier-ignore-end */
