import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';

import {
  API_URL,
  COLORS,
  REST_API,
  ShareWithType,
  SocialType,
} from 'app.constants';
import { IContacts } from 'model/IContacts';
import { ContactsForm } from './form/ContactsForm';
import { Socials, SocialsSVG } from 'components/shared/socials/Socials';
import { ContactsContent } from './content/ContactsContent';

import styles from './Contacts.module.scss';

const socials: SocialsSVG[] = [
  {
    tag: ShareWithType.INSTAGRAM,
    width: 20,
    height: 20,
    href: 'https://www.instagram.com/',
  },
  {
    tag: ShareWithType.VK,
    width: 20,
    height: 12,
    href: 'https://vk.com/',
  },
  {
    tag: ShareWithType.FACEBOOK,
    width: 20,
    height: 20,
    href: 'https://ru-ru.facebook.com/',
  },
];

export const ContactsContext = React.createContext<IContacts>({});

export const Contacts: FC = () => {
  const [appContacts, setAppContacts] = useState<IContacts>({});

  useEffect(() => {
    axios.get<IContacts>(API_URL + REST_API.contacts).then((resp) => {
      setAppContacts(resp.data);
    });
  }, []);

  return (
    <ContactsContext.Provider value={appContacts}>
      <div className={styles.contacts}>
        <div className={clsx('wrapper', styles.wrapper)}>
          <ContactsContent />
          <ContactsForm />
          <div className={styles.socials}>
            <Socials
              socials={socials}
              types={[SocialType.PURPLE, SocialType.VERTICAL]}
              iconColor={COLORS.WHITE}
            />
          </div>
        </div>
      </div>
    </ContactsContext.Provider>
  );
};
