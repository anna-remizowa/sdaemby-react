import React, { FC } from 'react';

import { Icon } from 'components/shared/icon/Icon';
import { SocialItem } from 'components/shared/socials/SocialItem';
import { COLORS } from 'model/enum/Colors';

interface SocialMediaProps {
  iconBackgroundColor?: string;
  iconColor?: string;
  href: string;
  round?: boolean;
  size?: number;
  tag: {
    value: string;
    width?: number;
    height?: number;
  };
}

const WIDTH_DEFAULT = 20;
const HEIGHT_DEFAULT = 20;

interface IconsSignature {
  [key: string]: string;
}

const ICONS_COLOR: IconsSignature = {
  Viber: COLORS.VIOLET,
  WhatsApp: COLORS.GREEN,
  Mail: COLORS.PURPLE,
};

/*fixme: SocialMedia очень похож на компонент Socials, нужно объединить в один*/
export const SocialMedia: FC<SocialMediaProps> = ({
  iconBackgroundColor,
  iconColor = COLORS.WHITE,
  href,
  round = true,
  size,
  tag,
}) => {
  return (
    <a href={href} target={'_blank'}>
      <Icon
        backgroundColor={
          iconBackgroundColor ? iconBackgroundColor : ICONS_COLOR[tag.value]
        }
        size={size}
        round={round}
      >
        <SocialItem
          color={iconColor}
          tag={tag.value}
          width={tag.width ? tag.width : WIDTH_DEFAULT}
          height={tag.height ? tag.height : HEIGHT_DEFAULT}
        />
      </Icon>
    </a>
  );
};
