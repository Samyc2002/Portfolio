import React from 'react';
import lottie from 'lottie-web';

const HomeSVG = () => {

    const container = React.useRef<any>(null);


    React.useEffect(() => {
        lottie.loadAnimation({
			container: container.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('../../assets/HomeSVG.json'),
		});
    }, []);

    return (
        <div className="max-width-9/10" ref={container} />
    )
}

export default HomeSVG;
