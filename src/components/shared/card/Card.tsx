import { FC } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { ICard } from 'model/interfaces/ICard';
import { Button } from 'components/shared/button/Button';
import { ButtonStyleType } from 'model/enum/ButtonStyleType';
import { ArrowSVG } from 'components/shared/svg/components.svg';
import { COLORS } from 'model/enum/Colors';
import { SVGType } from 'model/enum/SVGType';

import styles from './Card.module.scss';

export const Card: FC<ICard> = ({
  header,
  svg,
  content,
  button,
  href,
  isArrow = false,
  isHighlight = false,
}) => {
  return (
    <div className={clsx(styles.card, { [styles.highlight]: isHighlight })}>
      {isHighlight && <div className={styles.highlightBackground} />}
      <div className={styles.wrapper}>
        <div className={styles.box}>
          {svg && (
            <div className={styles.round}>
              <div
                className={clsx(
                  { [styles.people]: svg === SVGType.PEOPLE },
                  { [styles.ads]: svg === SVGType.ADS }
                )}
              />
            </div>
          )}
          <h3 className={styles.header}>{header}</h3>
        </div>
        {content.map((text, index) => (
          <p
            key={index}
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
        <Link to={href}>
          <Button
            types={[
              isHighlight ? ButtonStyleType.HIGHLIGHT : ButtonStyleType.YELLOW,
            ]}
          >
            {button}
            {isArrow && (
              <ArrowSVG
                height={12}
                width={10}
                color={isHighlight ? COLORS.WHITE : COLORS.BLACK}
              />
            )}
          </Button>
        </Link>
      </div>
    </div>
  );
};
