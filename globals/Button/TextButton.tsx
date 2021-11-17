import React from 'react';

import styles from './styles.module.css';

interface Iprops {
  children: React.ReactNode;
  bg?: string;
  col?: string;
}
const TextButton = ({ children }: Iprops) => {
  return (
    <div>
      <div className={styles.textButtonRoot}>
        <span className={styles.buttonTextBold}>{children}</span>
      </div>
    </div>
  );
};

export default TextButton;
