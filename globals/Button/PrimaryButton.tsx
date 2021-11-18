import React from 'react';

import styles from './styles.module.css';

interface Iprops {
  children: React.ReactNode;
  bg?: string;
  col?: string;
  rounded?: boolean;
}

const PrimaryButton = ({ children, rounded }: Iprops) => {
  return (
    <div className={styles.primaryButtonRoot} style={{ borderRadius: rounded?'5rem':'0.3rem' }}>
      <span className={styles.buttonText}>{children}</span>
    </div>
  );
};

export default PrimaryButton;
