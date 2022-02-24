import React, { FC } from 'react';

import { SvgData } from './svg.data';

export interface SVGProps {
  svg: SvgData;
  width: number;
  height: number;
  color?: string;
  children?: React.ReactNode;
}

export const SVG: FC<SVGProps> = ({ svg, width, height, children }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={svg.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};
