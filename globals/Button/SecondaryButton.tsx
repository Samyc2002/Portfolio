import React from 'react';

import styles from './styles.module.css';

interface Iprops {
  children: React.ReactNode;
  bg?: string;
  col?: string;
  rounded?: boolean;
}
const SecondaryButton = ({ children, rounded }: Iprops) => {
  return (
    <div>
      <div className={styles.secondaryButtonRoot} style={{ borderRadius: rounded?'5rem':'0.3rem' }}>
        <span className={styles.buttonTextColored}>{children}</span>
      </div>
    </div>
  );
};

export default SecondaryButton;
