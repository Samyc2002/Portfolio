import React from 'react';
import lottie from 'lottie-web';

import styles from './style.module.css';

const HomeSVG = () => {

    const container = React.useRef<any>(null);
    
    React.useEffect(() => {
        lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('../../public/HomeSVG.json')
        });
    }, []);

    return <div className={styles.homeSVGRoot} ref={container} />;
}

export default HomeSVG;
