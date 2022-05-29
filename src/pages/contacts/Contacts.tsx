import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { Container } from 'layouts/container/Container';
import { API_URL, REST_API } from 'app.constants';
import { IContacts } from 'model/interfaces/IContacts';
import { ContactsForm } from './form/ContactsForm';
import { ContactsContent } from './content/ContactsContent';
import { SocialType } from 'model/enum/SocialType';
import { COLORS } from 'model/enum/Colors';
import { SocialMedia } from 'components/shared/social-media/SocialMedia';
import { ISocialsSVG } from 'model/interfaces/ISocialsSVG';

import styles from './Contacts.module.scss';

const socials: ISocialsSVG[] = [
  {
    tag: SocialType.INSTAGRAM,
    width: 20,
    height: 20,
    href: 'https://www.instagram.com/',
  },
  {
    tag: SocialType.VK,
    width: 20,
    height: 12,
    href: 'https://vk.com/',
  },
  {
    tag: SocialType.FACEBOOK,
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
        <Container className={styles.wrapper}>
          <ContactsContent />
          <ContactsForm />
          <div className={styles.socials}>
            {socials.map((social, index) => {
              return (
                <SocialMedia
                  key={index}
                  tag={{
                    value: social.tag,
                    width: social.width,
                    height: social.height,
                  }}
                  href={social.href}
                  iconColor={COLORS.WHITE}
                  iconBackgroundColor={COLORS.GRAY_OPACITY}
                  size={45}
                  borderRadius={25}
                />
              );
            })}
          </div>
        </Container>
      </div>
    </ContactsContext.Provider>
  );
};
