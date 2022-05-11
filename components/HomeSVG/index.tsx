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
			animationData: require('../../public/HomeSVG.json'),
		});

		return () => {
			container.current = null;
		}
	}, []);
    
  return (
    <div ref={container} />
  )
}

export default HomeSVG;