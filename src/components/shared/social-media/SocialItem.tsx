import React, { FC } from 'react';
import {
  EmailSVG,
  FacebookSVG,
  InstagramSvg,
  SVGProps,
  TelegramSVG,
  ViberSVG,
  VkSVG,
  WhatsAppSVG,
} from 'components/shared/svg/components.svg';

interface IComponentsSVG {
  [key: string]: FC<SVGProps>;
}

export const ComponentsSVG: IComponentsSVG = {
  VK: VkSVG,
  Facebook: FacebookSVG,
  Telegram: TelegramSVG,
  Viber: ViberSVG,
  WhatsApp: WhatsAppSVG,
  Instagram: InstagramSvg,
  Mail: EmailSVG,
};

interface SocialItemProps {
  tag: string;
  color: string;
  width: number;
  height: number;
}

export const SocialItem: FC<SocialItemProps> = ({
  tag,
  color,
  width,
  height,
}) => {
  const CustomTag = ComponentsSVG[tag];
  if (!CustomTag) {
    return <></>;
  }
  return <CustomTag color={color} width={width} height={height} />;
};
