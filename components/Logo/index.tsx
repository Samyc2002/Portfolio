import React from 'react';
import Image from 'next/image';

import { Center } from '../Section';

const Logo = () => {
    return (
        <Center>
            <Image src="/Logo-Light.png" alt="logo" width={50} height={50}/> Samy.exe
        </Center>
    )
}

export default Logo;
