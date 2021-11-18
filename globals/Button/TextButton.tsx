import React from 'react';

import styles from './styles.module.css';

interface Iprops {
  children: React.ReactNode;
  bg?: string;
  col?: string;
  rounded?: boolean;
}
const TextButton = ({ children, rounded }: Iprops) => {
  return (
    <div>
      <div className={styles.textButtonRoot} style={{ borderRadius: rounded?'5rem':'0.3rem' }}>
        <span className={styles.buttonTextBold}>{children}</span>
      </div>
    </div>
  );
};

export default TextButton;
