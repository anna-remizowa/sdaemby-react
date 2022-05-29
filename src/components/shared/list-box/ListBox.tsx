import { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { ILink } from 'model/interfaces/ILink';
import { ArrowSVG } from 'components/shared/svg/components.svg';
import { COLORS } from 'model/enum/Colors';

import styles from './ListBox.module.scss';

interface ListBoxProps {
  className?: string;
  header: string;
  items: ILink[];
  linkAll?: {
    name: string;
    href: string;
  };
}

export const ListBox: FC<ListBoxProps> = ({
  className = '',
  header,
  items,
  linkAll,
}) => {
  return (
    <div className={clsx(styles.list, className)}>
      <h2 className={styles.header}>{header}</h2>
      <ul>
        {items.map((item) => (
          <li className={styles.item} key={item.id}>
            <Link className={styles.link} to={item.href}>
              {item.name}
            </Link>
            <p className={styles.text}>{item.label}</p>
          </li>
        ))}
      </ul>
      {linkAll && (
        <div className={styles.all}>
          <Link className={clsx(styles.link, styles.linkAll)} to={linkAll.href}>
            {linkAll.name}
            <ArrowSVG height={10} width={10} color={COLORS.PURPLE} />
          </Link>
        </div>
      )}
    </div>
  );
};
