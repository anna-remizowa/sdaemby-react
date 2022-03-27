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

/*todo: добавить дефолтные цвета для соц сетей*/
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
      <Icon backgroundColor={iconBackgroundColor} size={size} round={round}>
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
