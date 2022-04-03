import React, { FC } from 'react';
import {
  FacebookShareButton,
  TelegramShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
} from 'react-share';

import { Icon } from '../icon/Icon';
import { SocialsType } from '../../../app.constants';

import styles from './Socials.module.scss';

interface SocialsProps {
  title: string;
  iconBackgroundColor: string;
  iconColor: string;
  url: string;
}

export const Socials: FC<SocialsProps> = ({
  title,
  iconBackgroundColor,
  iconColor,
  url,
}) => {
  return (
    <div className={styles.socials}>
      <p className={styles.text}>{title}</p>

      <VKShareButton url={url}>
        <Icon
          type={SocialsType.VK}
          backgroundColor={iconBackgroundColor}
          color={iconColor}
          round={true}
          iconWidth={17}
          iconHeight={9}
        />
      </VKShareButton>
      <FacebookShareButton url={url}>
        <Icon
          type={SocialsType.FACEBOOK}
          backgroundColor={iconBackgroundColor}
          color={iconColor}
          round={true}
          iconWidth={8}
          iconHeight={17}
        />
      </FacebookShareButton>
      <ViberShareButton url={url}>
        <Icon
          type={SocialsType.VIBER}
          backgroundColor={iconBackgroundColor}
          color={iconColor}
          round={true}
          iconWidth={16}
          iconHeight={18}
        />
      </ViberShareButton>
      <TelegramShareButton url={url}>
        <Icon
          type={SocialsType.TELEGRAM}
          backgroundColor={iconBackgroundColor}
          color={iconColor}
          round={true}
          iconWidth={16}
          iconHeight={14}
        />
      </TelegramShareButton>
      <WhatsappShareButton url={url}>
        <Icon
          type={SocialsType.WHATSAPP}
          backgroundColor={iconBackgroundColor}
          color={iconColor}
          round={true}
          iconWidth={17}
          iconHeight={16}
        />
      </WhatsappShareButton>
    </div>
  );
};
