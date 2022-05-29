import React, { FC } from 'react';
import clsx from 'clsx';

import { IOwner } from 'model/interfaces/IOwner';
import { SocialMedia } from 'components/shared/social-media/SocialMedia';

import styles from './PopUpOwner.module.scss';

interface PopUpProps {
  owner: IOwner;
  isShow: boolean;
}

export const PopUpOwner: FC<PopUpProps> = ({ owner, isShow }) => {
  return (
    <div className={clsx(styles.popUp, isShow && styles.show)}>
      <div className={styles.wrapper}>
        <div className={styles.imgBox}>
          <img src={owner.photo} alt="Owner Photo" className={styles.img} />
        </div>
        <p className={styles.textType}>{owner.type}</p>
        <p className={styles.textBase}>{owner.name}</p>
        <p className={styles.textBase}>{owner.phone}</p>
        <a href={`mailto:${owner.email}`} className={styles.textEmail}>
          {owner.email}
        </a>
        <div className={styles.socials}>
          {owner.links.map((link, index) => (
            <SocialMedia
              key={index}
              tag={{ value: link.type }}
              href={link.href}
              size={36}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
