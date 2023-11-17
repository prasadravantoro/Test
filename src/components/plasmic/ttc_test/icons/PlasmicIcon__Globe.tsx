// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GlobeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GlobeIcon(props: GlobeIconProps) {
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
          "M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.998 12 1.998zM14.939 16.5H9.06c.652 2.414 1.786 4.002 2.939 4.002s2.287-1.588 2.939-4.002zm-7.43 0H4.785a8.532 8.532 0 004.094 3.411c-.522-.82-.953-1.846-1.27-3.015l-.102-.395zm11.705 0h-2.722c-.324 1.335-.792 2.5-1.373 3.411a8.529 8.529 0 003.91-3.127l.185-.283zM7.094 10H3.735l-.005.017a8.524 8.524 0 00-.233 1.984c0 1.056.193 2.067.545 3h3.173a20.301 20.301 0 01-.218-3c0-.684.033-1.354.095-2.001zm8.303 0H8.603a18.968 18.968 0 00.135 5h6.524a18.972 18.972 0 00.135-5zm4.868-.001h-3.358a20.848 20.848 0 01-.123 5.002h3.173a8.482 8.482 0 00.545-3c0-.69-.082-1.36-.237-2.002zM8.88 4.089l-.023.01A8.531 8.531 0 004.25 8.5h3.048c.314-1.752.86-3.278 1.583-4.41zM12 3.5l-.116.005C10.62 3.62 9.396 5.622 8.83 8.5h6.342c-.566-2.87-1.783-4.869-3.045-4.995L12 3.5zm3.12.59l.107.175c.67 1.112 1.177 2.572 1.475 4.237h3.048a8.534 8.534 0 00-4.339-4.29l-.291-.121z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GlobeIcon;
/* prettier-ignore-end */
