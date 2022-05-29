import React, { FC } from 'react';
import {
  FacebookShareButton,
  TelegramShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
} from 'react-share';

import {
  FacebookV2SVG,
  TelegramSVG,
  ViberSVG,
  VkSVG,
  WhatsAppSVG,
} from 'components/shared/svg/components.svg';
import { Icon } from 'components/shared/icon/Icon';

import styles from './ShareWith.module.scss';

interface SocialInclude {
  isInclude?: boolean;
  width?: number;
  height?: number;
}

interface ShareWithProps {
  title?: string;
  iconBackgroundColor: string;
  iconColor: string;
  url: string;
  round: boolean;
  size?: number;
  shares: {
    VK?: SocialInclude;
    Facebook?: SocialInclude;
    Whatsapp?: SocialInclude;
    Telegram?: SocialInclude;
    Viber?: SocialInclude;
  };
}

const WIDTH_DEFAULT = 20;
const HEIGHT_DEFAULT = 20;

export const ShareWith: FC<ShareWithProps> = ({
  title,
  iconBackgroundColor,
  iconColor,
  url,
  round,
  size,
  shares,
}) => {
  const props = {
    backgroundColor: iconBackgroundColor,
    round: round,
    size: size,
  };
  return (
    <div className={styles.socials}>
      {title && <p className={styles.text}>{title}</p>}

      {shares.VK && shares.VK.isInclude && (
        <VKShareButton url={url}>
          <Icon {...props}>
            <VkSVG
              color={iconColor}
              width={shares.VK.width ? shares.VK.width : WIDTH_DEFAULT}
              height={shares.VK.height ? shares.VK.height : HEIGHT_DEFAULT}
            />
          </Icon>
        </VKShareButton>
      )}

      {shares.Facebook && shares.Facebook.isInclude && (
        <FacebookShareButton url={url}>
          <Icon {...props}>
            <FacebookV2SVG
              color={iconColor}
              width={
                shares.Facebook.width ? shares.Facebook.width : WIDTH_DEFAULT
              }
              height={
                shares.Facebook.height ? shares.Facebook.height : HEIGHT_DEFAULT
              }
            />
          </Icon>
        </FacebookShareButton>
      )}

      {shares.Viber && shares.Viber.isInclude && (
        <ViberShareButton url={url}>
          <Icon {...props}>
            <ViberSVG
              color={iconColor}
              width={shares.Viber.width ? shares.Viber.width : WIDTH_DEFAULT}
              height={
                shares.Viber.height ? shares.Viber.height : HEIGHT_DEFAULT
              }
            />
          </Icon>
        </ViberShareButton>
      )}

      {shares.Telegram && shares.Telegram.isInclude && (
        <TelegramShareButton url={url}>
          <Icon {...props}>
            <TelegramSVG
              color={iconColor}
              width={
                shares.Telegram.width ? shares.Telegram.width : WIDTH_DEFAULT
              }
              height={
                shares.Telegram.height ? shares.Telegram.height : HEIGHT_DEFAULT
              }
            />
          </Icon>
        </TelegramShareButton>
      )}

      {shares.Whatsapp && shares.Whatsapp.isInclude && (
        <WhatsappShareButton url={url}>
          <Icon {...props}>
            <WhatsAppSVG
              color={iconColor}
              width={
                shares.Whatsapp.width ? shares.Whatsapp.width : WIDTH_DEFAULT
              }
              height={
                shares.Whatsapp.height ? shares.Whatsapp.height : HEIGHT_DEFAULT
              }
            />
          </Icon>
        </WhatsappShareButton>
      )}
    </div>
  );
};
