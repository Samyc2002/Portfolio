import React from 'react';

import styles from './styles.module.css';

interface Iprops {
  children: React.ReactNode;
  bg?: string;
  col?: string;
}
const SecondaryButton = ({ children }: Iprops) => {
  return (
    <div>
      <div className={styles.secondaryButtonRoot}>
        <span className={styles.buttonTextColored}>{children}</span>
      </div>
    </div>
  );
};

export default SecondaryButton;
