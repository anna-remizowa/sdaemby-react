import React, { FC } from 'react';
import { SVG_DATA_SET } from '../svg/svg.data';
import { SVG } from '../svg/svg';
import { SocialsType } from '../../../app.constants';

interface IconProps {
  type: SocialsType;
  backgroundColor?: string;
  color?: string;
  size?: number;
  round?: boolean | string;
  iconWidth?: number;
  iconHeight?: number;
}

export const Icon: FC<IconProps> = ({
  type,
  backgroundColor,
  color,
  size,
  round,
  iconWidth,
  iconHeight,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: size ? `${size}px` : '34px',
        height: size ? `${size}px` : '34px',
        backgroundColor: backgroundColor ? backgroundColor : 'black',
        borderRadius: round ? '19px' : 'none',
      }}
    >
      <SVG
        viewBox={SVG_DATA_SET[type.valueOf()].viewBox}
        width={iconWidth ? iconWidth : 15}
        height={iconHeight ? iconHeight : 15}
      >
        <path
          d={SVG_DATA_SET[type.valueOf()].path}
          fill={color ? color : 'white'}
        />
      </SVG>
    </div>
  );
};
