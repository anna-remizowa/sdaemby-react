import React, { FC } from 'react';
import { SvgData } from './svg.data';

export interface SVGItem {
  svg: SvgData;
  width: number;
  height: number;
  color: string;
}

export interface SVGItemProps {
  data: SVGItem;
}

export const SVG: FC<SVGItemProps> = (props) => {
  return (
    <svg
      width={props.data.width}
      height={props.data.height}
      viewBox={props.data.svg.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={props.data.svg.path} fill={props.data.color} />
    </svg>
  );
};
