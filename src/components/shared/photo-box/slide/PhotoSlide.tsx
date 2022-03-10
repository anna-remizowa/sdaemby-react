import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ILinkItems } from 'model/interfaces/ILinkItems';
import { Button } from 'components/shared/button/Button';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';
import { ArrowSVG } from 'components/shared/svg/components.svg';
import { COLORS } from 'model/enum/Colors';

import styles from './PhotoSlide.module.scss';

export const PhotoSlide: FC<ILinkItems> = ({
  img,
  label,
  title,
  items,
  href,
}) => {
  return (
    <div className={styles.slide} style={{ backgroundImage: `url(${img})` }}>
      <div className={styles.opacity} />
      <div className={styles.wrapper}>
        {label ? <p className={styles.label}>{label}</p> : ''}
        {title ? <p className={styles.title}>{title}</p> : ''}

        {items ? (
          <div className={styles.items}>
            {items.map((item) => (
              <Link to={`/${item.href}`} key={item.id}>
                <Button types={[ButtonStyleType.SMALL, ButtonStyleType.PURPLE]}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        ) : (
          ''
        )}

        {href ? (
          <Link className={styles.link} to={`/${href}`}>
            <ArrowSVG color={COLORS.WHITE} width={10} height={15} />
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
