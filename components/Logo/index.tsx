import React from 'react';
import Image from 'next/image';

import Section from '../Section';

const Logo = () => {
    return (
        <Section type="center">
            <div className="inline-flex items-center"><Image src="/Logo-Light.png" alt="logo" width={50} height={50}/> Samy.exe</div>
        </Section>
    )
}

export default Logo;
