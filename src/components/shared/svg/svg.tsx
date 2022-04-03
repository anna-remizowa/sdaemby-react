import React, { FC } from 'react';

export interface SVGProps {
  viewBox: string;
  width: number;
  height: number;
  children?: React.ReactNode;
}

export const SVG: FC<SVGProps> = ({ viewBox, width, height, children }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};
