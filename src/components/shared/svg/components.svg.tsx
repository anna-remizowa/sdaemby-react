import { FC } from 'react';

interface SVGProps {
  color: string;
}

export const NotFoundSVG: FC<SVGProps> = ({ color }) => {
  return (
    <>
      <g opacity="0.3" filter="url(#filter0_d_552_2303)">
        <path
          d="M30 201.328H128.868V237.481H170.507V201.328H196.053V166.481H170.507V31.8119H115.994L30 167.083V201.328ZM129.672 166.481H73.8518V164.874L128.063 79.2122H129.672V166.481Z"
          fill={color}
        />
        <path
          d="M305.834 242C357.631 242 388.911 202.634 389.011 134.847C389.112 67.5629 357.43 29 305.834 29C254.137 29 222.757 67.4625 222.656 134.847C222.455 202.433 253.936 241.9 305.834 242ZM305.834 205.948C282.198 205.948 266.91 182.248 267.011 134.847C267.111 88.1499 282.299 64.6507 305.834 64.6507C329.268 64.6507 344.556 88.1499 344.556 134.847C344.657 182.248 329.369 205.948 305.834 205.948Z"
          fill={color}
        />
        <path
          d="M416.947 201.328H515.814V237.481H557.453V201.328H583V166.481H557.453V31.8119H502.94L416.947 167.083V201.328ZM516.619 166.481H460.798V164.874L515.01 79.2122H516.619V166.481Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_552_2303"
          x="0"
          y="0"
          width="613"
          height="273"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="15" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_552_2303"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_552_2303"
            result="shape"
          />
        </filter>
      </defs>
    </>
  );
};

interface SVGProps {
  color: string;
}

export const SearchSVG: FC<SVGProps> = ({ color }) => {
  return (
    <path
      d="M16.8676 15.2581L13.5441 11.9344C13.3941 11.7844 13.1907 11.7011 12.9774 11.7011H12.434C13.3541 10.5243 13.9008 9.04417 13.9008 7.43401C13.9008 3.60364 10.7973 0.5 6.96711 0.5C3.13693 0.5 0.0334473 3.60364 0.0334473 7.43401C0.0334473 11.2644 3.13693 14.368 6.96711 14.368C8.57718 14.368 10.0573 13.8213 11.234 12.9012V13.4446C11.234 13.658 11.3173 13.8613 11.4673 14.0113L14.7908 17.335C15.1042 17.6483 15.6108 17.6483 15.9209 17.335L16.8642 16.3916C17.1776 16.0782 17.1776 15.5715 16.8676 15.2581ZM6.96711 11.7011C4.61033 11.7011 2.70024 9.79424 2.70024 7.43401C2.70024 5.07711 4.607 3.16693 6.96711 3.16693C9.32388 3.16693 11.234 5.07378 11.234 7.43401C11.234 9.79091 9.32722 11.7011 6.96711 11.7011Z"
      fill={color}
    />
  );
};
