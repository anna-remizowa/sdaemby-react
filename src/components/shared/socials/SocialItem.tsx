import React, { FC } from 'react';
import {
  FacebookSVG,
  InstagramSvg,
  TelegramSVG,
  ViberSVG,
  VkSVG,
  WhatsAppSVG,
} from 'components/shared/svg/components.svg';

/*fixme: что за тип должен быть вместо any?? ругается на JSX.Element и FC<SVGProps>*/
interface IComponentsSVG {
  [key: string]: any;
}

export const ComponentsSVG: IComponentsSVG = {
  VK: VkSVG,
  Facebook: FacebookSVG,
  Telegram: TelegramSVG,
  Viber: ViberSVG,
  WhatsApp: WhatsAppSVG,
  Instagram: InstagramSvg,
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
  return <CustomTag color={color} width={width} height={height} />;
};
