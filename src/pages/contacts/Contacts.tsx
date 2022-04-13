import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { Container } from 'layouts/container/Container';
import { API_URL, REST_API } from 'app.constants';
import { IContacts } from 'model/interfaces/IContacts';
import { ContactsForm } from './form/ContactsForm';
import { Socials, SocialsSVG } from 'components/shared/socials/Socials';
import { ContactsContent } from './content/ContactsContent';
import { SocialType } from 'model/enum/SocialType';
import { SocialStyleType } from 'model/enum/SocialStyleType';
import { COLORS } from 'model/enum/Colors';

import styles from './Contacts.module.scss';

const socials: SocialsSVG[] = [
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
            <Socials
              socials={socials}
              types={[SocialStyleType.CIRCLE, SocialStyleType.VERTICAL]}
              iconColor={COLORS.WHITE}
            />
          </div>
        </Container>
      </div>
    </ContactsContext.Provider>
  );
};
