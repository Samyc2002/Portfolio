import React, { useState } from 'react';

import HomeSVG from '../HomeSVG';
import styles from './style.module.css';

const Header = () => {

    const [state, setState] = useState({ value: 0, previous: 0 });

    const values = [ 'Jan 01 1994', 'Aug 31 1996', 'May 02 2002', 'Mar 20 2006' ];

    return (
        <div className={styles.root}>
            <div>
                <h2 className="text-reveal">
                    <span>
                        Hey, there!
                    </span>
                    <span>
                        I am Samriddha Chattopadhyay
                    </span>
                </h2>
                <p className="text-reveal">
                    <span>👉 Competitive Coder</span>
                    <span>👉 MERN Stack Deveoper</span>
                    <span>👉 Open Source Contributor</span>
                    <span>👉 UI/UX Designer</span>
                </p>
            </div>
            <HomeSVG/>
        </div>
    )
}

export default Header;