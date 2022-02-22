import React from 'react';

import HomeSVG from '../HomeSVG';
import styles from './style.module.css';

const Header = () => {

    return (
        <div className={styles.root}>
            <div>
                <h2 className="text-reveal">
                    <span className={styles.highlight}>
                        Hey, there!
                    </span>
                    <span>
                        I am Samriddha Chattopadhyay
                    </span>
                </h2>
                <p className="text-reveal">
                    <span className={styles.bold}>👉 Competitive Coder</span>
                    <span className={styles.bold}>👉 MERN Stack Deveoper</span>
                    <span className={styles.bold}>👉 Open Source Contributor</span>
                    <span className={styles.bold}>👉 UI/UX Designer</span>
                </p>
            </div>
            <HomeSVG/>
        </div>
    )
}

export default Header;