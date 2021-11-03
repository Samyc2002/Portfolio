import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Section from '../Section';

const Logo = () => {

    const router = useRouter();

    return (
        <Section type="center">
            <div className="inline-flex items-center" onClick={() => router.push('/')}><Image src="/Logo-Light.png" alt="logo" width={50} height={50}/> Samy.exe</div>
        </Section>
    )
}

export default Logo;
