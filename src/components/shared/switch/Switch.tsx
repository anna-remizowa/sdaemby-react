import React, { FC } from 'react';

import styles from './Switch.module.scss';

interface SwitchProps {
  isOn: boolean;
  handleToggle: () => void;
  onColor?: string;
}

export const Switch: FC<SwitchProps> = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={styles.checkbox}
        id={`react-switch`}
        type="checkbox"
      />
      <label
        className={styles.label}
        htmlFor={`react-switch`}
        style={{ background: isOn ? onColor : '' }}
      >
        <span className={styles.button} />
      </label>
    </>
  );
};
