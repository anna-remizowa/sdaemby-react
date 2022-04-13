import React, { FC, useContext } from 'react';
import clsx from 'clsx';

import { Icon } from 'components/shared/icon/Icon';
import {
  EmailSVG,
  LocationSVG,
  PhoneSVG,
  TimeSVG,
} from 'components/shared/svg/components.svg';
import { ContactsContext } from 'pages/contacts/Contacts';
import { COLORS } from 'model/enum/Colors';
import { SocialMedia } from 'components/shared/social-media/SocialMedia';

import styles from './ContactsContent.module.scss';

const SOCIAL_MEDIA = [
  { type: 'Viber', href: 'https://www.viber.com/ru/' },
  { type: 'Telegram', href: 'https://www.viber.com/ru/' },
  { type: 'WhatsApp', href: 'https://www.whatsapp.com/?lang=ru' },
];

export const ContactsContent: FC = () => {
  const dataContacts = useContext(ContactsContext);
  return (
    <div className={styles.content}>
      <h1 className={styles.header}>{dataContacts.header}</h1>
      <p className={styles.contentText}>{dataContacts.content}</p>

      <div className={styles.infoBox}>
        <div className={styles.infoBoxWrapper}>
          <Icon backgroundColor={COLORS.GRAY_OPACITY} round={true} size={30}>
            <LocationSVG color={COLORS.WHITE} width={12} height={15} />
          </Icon>
          <p className={styles.baseText}>{dataContacts.location}</p>
        </div>
        <div className={styles.infoBoxWrapper}>
          <Icon backgroundColor={COLORS.GRAY_OPACITY} round={true} size={30}>
            <PhoneSVG color={COLORS.WHITE} width={12} height={15} />
          </Icon>
          <p className={styles.baseText}>{dataContacts.contact}</p>
          {SOCIAL_MEDIA.map((link, index) => (
            <SocialMedia
              key={index}
              iconBackgroundColor={COLORS.GRAY_OPACITY}
              tag={{ value: link.type, width: 17, height: 17 }}
              href={link.href}
              size={30}
            />
          ))}
        </div>
        <div className={styles.infoBoxWrapper}>
          <Icon backgroundColor={COLORS.GRAY_OPACITY} round={true} size={30}>
            <EmailSVG color={COLORS.WHITE} width={15} height={12} />
          </Icon>
          <a href={`mailto:${dataContacts.email}`} className={styles.baseText}>
            {dataContacts.email}
          </a>
        </div>
        <div className={styles.infoBoxWrapper}>
          <Icon backgroundColor={COLORS.GRAY_OPACITY} round={true} size={30}>
            <TimeSVG color={COLORS.WHITE} width={15} height={15} />
          </Icon>
          <p className={styles.baseText}>{dataContacts.time}</p>
        </div>
      </div>

      {dataContacts.ownerInfo?.map((info, index) => {
        return (
          <p className={styles.smallText} key={index}>
            {info}
          </p>
        );
      })}

      <div className={styles.commentBox}>
        <p className={clsx(styles.contentText, styles.maskIcon)}>
          {dataContacts.comment}
        </p>
      </div>
    </div>
  );
};
