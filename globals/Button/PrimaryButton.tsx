import React from 'react';

import styles from './styles.module.css';

interface Iprops {
  children: React.ReactNode;
  bg?: string;
  col?: string;
}

const PrimaryButton = ({ children }: Iprops) => {
  return (
    <div className={styles.primaryButtonRoot}>
      <span className={styles.buttonText}>{children}</span>
    </div>
  );
};

export default PrimaryButton;
