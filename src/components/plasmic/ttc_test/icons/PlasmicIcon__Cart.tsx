// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CartIcon(props: CartIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.27 3.51c0-.293.239-.53.532-.53h.396c.673 0 1.076.452 1.306.873a4.6 4.6 0 01.352.9.913.913 0 01.072-.003h8.852a.885.885 0 01.851 1.128l-1.294 4.54a1.948 1.948 0 01-1.873 1.414H7.25a1.948 1.948 0 01-1.878-1.433l-.539-1.962-.891-3.01-.002-.005c-.11-.402-.214-.778-.367-1.059-.15-.273-.269-.321-.375-.321h-.396a.531.531 0 01-.531-.532zm4.605 11.865a1.417 1.417 0 100-2.833 1.417 1.417 0 000 2.833zm4.958 0a1.417 1.417 0 100-2.833 1.417 1.417 0 000 2.833z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CartIcon;
/* prettier-ignore-end */
