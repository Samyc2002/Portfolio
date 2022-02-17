import React from 'react';

import styles from './styles.module.css';

interface IProps {
  children?: React.ReactNode;
  caption?: string;
  animate?: boolean;
}

const Card = ({ children, caption, animate }: IProps) => {
  return (
    <>
      <div className={styles.cardRoot}>
        <div className={styles.children}>{children}</div>
        <div className={styles.content}>
          <h2 className={styles.caption}>{caption}</h2>
        </div>
      </div>
    </>
  );
};

export default Card;
